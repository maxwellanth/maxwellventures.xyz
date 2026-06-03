import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "sm" | "md";

const variants: Record<ButtonVariant, string> = {
  primary:
    "border-warm-gold bg-warm-gold text-evergreen hover:border-pale-stone hover:bg-pale-stone",
  secondary:
    "border-warm-gold bg-transparent text-warm-gold hover:bg-warm-gold hover:text-evergreen",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-3 text-sm",
};

const base =
  "inline-flex min-h-11 items-center justify-center rounded-sm border font-semibold transition focus:outline-none focus:ring-4 focus:ring-warm-gold/35";

export function ButtonLink({
  children,
  className,
  href,
  size = "md",
  variant = "primary",
}: {
  children: ReactNode;
  className?: string;
  href: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
}) {
  return (
    <Link className={cn(base, variants[variant], sizes[size], className)} href={href}>
      {children}
    </Link>
  );
}

export function Button({
  className,
  variant = "primary",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
}) {
  return (
    <button
      className={cn(base, variants[variant], sizes.md, className)}
      {...props}
    />
  );
}
