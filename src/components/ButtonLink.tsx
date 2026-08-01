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
  const classes = `inline-flex min-h-5 items-center justify-center rounded-full px-2 py-1 text-[6px] font-black uppercase tracking-[0.06em] transition duration-300 motion-reduce:transition-none sm:min-h-10 sm:px-5 sm:py-2 sm:text-[11px] ${variants[variant]} ${className}`;

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
