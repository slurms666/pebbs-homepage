import Link from "next/link";

type SurfaceCardProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
};

export function SurfaceCard({ children, className = "", href }: SurfaceCardProps) {
  const classes = `hairline block bg-white shadow-card transition hover:-translate-y-0.5 hover:shadow-lg ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <div className={classes}>{children}</div>;
}
