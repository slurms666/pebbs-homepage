import Link from "next/link";

type SurfaceCardProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
};

export function SurfaceCard({ children, className = "", href }: SurfaceCardProps) {
  const classes = `paper-panel hairline block overflow-hidden shadow-card transition duration-200 hover:border-ink/20 hover:bg-white ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <div className={classes}>{children}</div>;
}
