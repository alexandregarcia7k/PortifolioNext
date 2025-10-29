import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { rateLimit } from '@/lib/rate-limit';
import { escapeHtml, validateLength } from '@/lib/sanitize';

interface NewsletterData {
  contact: string;
  website?: string;
}

interface ApiSuccessResponse {
  success: true;
  message: string;
}

interface ApiErrorResponse {
  success: false;
  error: string;
}

export async function POST(request: Request) {
  try {
    const body = await request.json() as NewsletterData;
    const { contact, website } = body;

    // Honeypot
    if (website) {
      return NextResponse.json<ApiErrorResponse>(
        { success: false, error: 'Requisição inválida' },
        { status: 400 }
      );
    }

    if (!rateLimit(contact, 3, 300000)) {
      return NextResponse.json<ApiErrorResponse>(
        { success: false, error: 'Muitas tentativas. Aguarde alguns minutos.' },
        { status: 429 }
      );
    }

    if (!contact || contact.trim().length < 5) {
      return NextResponse.json<ApiErrorResponse>(
        { success: false, error: 'Contato inválido' },
        { status: 400 }
      );
    }

    if (!validateLength(contact, 100)) {
      return NextResponse.json<ApiErrorResponse>(
        { success: false, error: 'Contato muito longo' },
        { status: 400 }
      );
    }

    const isEmail = contact.includes('@');
    const contactType = isEmail ? 'Email' : 'Telefone';

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json<ApiErrorResponse>(
        { success: false, error: 'Configuração inválida' },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: ['alexandregarcia7k@outlook.com'],
      replyTo: isEmail ? contact : undefined,
      subject: 'Nova inscrição na Newsletter',
      html: `
        <h2>Nova inscrição na Newsletter</h2>
        <p><strong>${contactType}:</strong> ${isEmail ? `<a href="mailto:${escapeHtml(contact)}">${escapeHtml(contact)}</a>` : escapeHtml(contact)}</p>
        <p>Data: ${new Date().toLocaleString('pt-BR')}</p>
      `,
    });

    if (error) {
      return NextResponse.json<ApiErrorResponse>(
        { success: false, error: error.message || 'Erro ao processar inscrição' },
        { status: 500 }
      );
    }

    return NextResponse.json<ApiSuccessResponse>(
      { success: true, message: 'Inscrição realizada com sucesso!' },
      { status: 200 }
    );
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
    return NextResponse.json<ApiErrorResponse>(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}
