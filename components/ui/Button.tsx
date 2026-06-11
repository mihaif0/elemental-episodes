import type { ReactNode } from "react";
import Link from "next/link";

type Variant = "primary" | "outline" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-none text-[0.72rem] font-medium uppercase tracking-[0.22em] transition-all duration-300 ease-[var(--ease-lux)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-silver disabled:opacity-50";

const sizes = {
  md: "h-11 px-7",
  lg: "h-13 px-9 py-4",
} as const;

const variants: Record<Variant, string> = {
  primary:
    "bg-platinum text-ink hover:bg-white hover:shadow-[0_0_30px_-8px_rgba(233,234,238,0.5)]",
  outline:
    "border border-line text-silver hover:border-fog hover:text-platinum hover:bg-line-soft",
  ghost: "text-steel hover:text-platinum",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: keyof typeof sizes;
  className?: string;
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  type = "button",
  ...rest
}: CommonProps &
  (
    | ({ href: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>)
    | ({ href?: undefined } & React.ButtonHTMLAttributes<HTMLButtonElement>)
  )) {
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={cls} {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    );
  }
  return (
    <button
      type={type as "button" | "submit" | "reset"}
      className={cls}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
