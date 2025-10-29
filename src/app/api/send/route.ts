import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { rateLimit } from '@/lib/rate-limit';
import { escapeHtml, validateLength } from '@/lib/sanitize';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  website?: string;
}

interface ApiSuccessResponse {
  success: true;
  data: {
    id: string;
  };
}

interface ApiErrorResponse {
  success: false;
  error: string;
}

export async function POST(request: Request) {
  try {
    const body = await request.json() as ContactFormData;
    const { name, email, phone, subject, message, website } = body;

    if (website) {
      return NextResponse.json<ApiErrorResponse>(
        { success: false, error: 'Requisição inválida' },
        { status: 400 }
      );
    }

    if (!rateLimit(email, 5, 300000)) {
      return NextResponse.json<ApiErrorResponse>(
        { success: false, error: 'Muitas tentativas. Aguarde alguns minutos.' },
        { status: 429 }
      );
    }

    // Validação de tamanho
    if (!validateLength(name, 100) || !validateLength(email, 100) || 
        !validateLength(phone, 20) || !validateLength(subject, 100) || 
        !validateLength(message, 3000)) {
      return NextResponse.json<ApiErrorResponse>(
        { success: false, error: 'Dados muito longos' },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json<ApiErrorResponse>(
        { success: false, error: 'Configuração inválida' },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: ['alexandregarcia7k@outlook.com'],
      replyTo: email as string,
      subject: `Contato: ${subject}`,
      html: `
        <h2>Nova mensagem de contato</h2>
        <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
        <p><strong>Telefone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Assunto:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${escapeHtml(message)}</p>
      `,
    });

    if (error) {
      return NextResponse.json<ApiErrorResponse>(
        { success: false, error: error.message || 'Erro ao enviar email' },
        { status: 500 }
      );
    }

    return NextResponse.json<ApiSuccessResponse>(
      { success: true, data: { id: data?.id || '' } },
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
