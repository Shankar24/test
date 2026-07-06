import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

const variants = {
  primary: "bg-cares-teal text-white hover:bg-cares-blue",
  secondary: "bg-cares-gold text-cares-navy hover:bg-cares-cream",
  outline:
    "border-2 border-cares-teal text-cares-teal hover:bg-cares-teal hover:text-white",
  ghost: "text-white border-2 border-white/40 hover:border-white hover:bg-white/10",
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
  const cls = `focus-ring inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${className}`;

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
