import React from 'react';
import { cn } from '@/lib/utils';
import {
	LucideIcon,
	PlusIcon,
} from 'lucide-react';

type ContactInfoProps = React.ComponentProps<'div'> & {
	icon: LucideIcon;
	label: string;
	value: string;
};

type ContactCardProps = React.ComponentProps<'div'> & {
	// Content props
	title?: string;
	description?: string;
	contactInfo?: ContactInfoProps[];
	formSectionClassName?: string;
};

export function ContactCard({
	title = 'Contact With Us',
	description = 'If you have any questions regarding our Services or need help, please fill out the form here. We do our best to respond within 1 business day.',
	contactInfo,
	className,
	formSectionClassName,
	children,
	...props
}: ContactCardProps) {
	return (
		<div
			className={cn(
				'bg-transparent border relative grid h-full w-full shadow md:grid-cols-2 lg:grid-cols-3',
				className,
			)}
			{...props}
		>
			<PlusIcon className="absolute -top-3 -left-3 h-6 w-6" />
			<PlusIcon className="absolute -top-3 -right-3 h-6 w-6" />
			<PlusIcon className="absolute -bottom-3 -left-3 h-6 w-6" />
			<PlusIcon className="absolute -right-3 -bottom-3 h-6 w-6" />
			<div className="flex flex-col justify-between lg:col-span-2 relative overflow-hidden">
				<div className="absolute inset-0 pointer-events-none">
					<div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]" />
					<div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/8 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite_2s]" />
					<div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-purple-400/6 rounded-full blur-3xl animate-[float_12s_ease-in-out_infinite_4s]" />
				</div>
				<style jsx>{`
					@keyframes float {
						0%, 100% { transform: translate(0, 0) scale(1); }
						25% { transform: translate(30px, -30px) scale(1.1); }
						50% { transform: translate(-20px, 20px) scale(0.9); }
						75% { transform: translate(20px, 30px) scale(1.05); }
					}
				`}</style>
				<div className="relative h-full space-y-4 px-4 py-8 md:p-8 z-10">
					<h1 id="contact-heading" className="text-3xl font-bold md:text-4xl lg:text-5xl">
						{title}
					</h1>
					<p className="text-muted-foreground max-w-xl text-sm md:text-base lg:text-lg">
						{description}
					</p>
					<div className="grid gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
						{contactInfo?.map((info, index) => (
							<ContactInfo key={index} {...info} />
						))}
					</div>
				</div>
			</div>
			<div
				className={cn(
					'bg-muted/40 flex h-full w-full items-center border-t p-5 md:col-span-1 md:border-t-0 md:border-l',
					formSectionClassName,
				)}
			>
				{children}
			</div>
		</div>
	);
}

function ContactInfo({
	icon: Icon,
	label,
	value,
	className,
	...props
}: ContactInfoProps) {
	return (
		<div className={cn('flex items-center gap-3 py-3', className)} {...props}>
			<div className="bg-zinc-950 rounded-lg p-3">
				<Icon className="h-5 w-5 text-purple-500" />
			</div>
			<div>
				<p className="font-medium">{label}</p>
				<p className="text-muted-foreground text-xs">{value}</p>
			</div>
		</div>
	);
}
