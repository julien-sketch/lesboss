import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark";
};

const variants = {
  primary:
    "bg-ink text-white hover:bg-punch hover:text-ink",
  secondary:
    "bg-paper text-ink ring-1 ring-ink hover:bg-ink hover:text-white",
  dark: "bg-punch text-ink hover:bg-white",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonLinkProps) {
  const classes = `inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-xs font-black uppercase tracking-[0.06em] transition duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-punch focus-visible:ring-offset-2 motion-reduce:transition-none ${variants[variant]} ${className}`;

  if (href.startsWith("/")) {
    return (
      <Link className={classes} href={href} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a className={classes} href={href} {...props}>
      {children}
    </a>
  );
}
