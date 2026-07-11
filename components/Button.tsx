import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

const variants = {
  primary:
    "bg-cares-navy text-white hover:bg-cares-teal shadow-sm hover:shadow-md",
  secondary:
    "bg-cares-gold text-cares-navy hover:bg-[#d4b56e]",
  outline:
    "border border-cares-navy/20 bg-white/70 text-cares-navy hover:border-cares-navy/40 hover:bg-white",
  ghost:
    "text-white border border-white/35 hover:border-white hover:bg-white/10",
} as const;

type ButtonProps = {
  variant?: keyof typeof variants;
  href?: string;
  children: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  variant = "primary",
  href,
  children,
  className = "",
  ...rest
}: ButtonProps) {
  const cls = `focus-ring inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
