export function SiteFooter() {
  return (
    <footer className="border-t border-line/80 bg-white/70">
      <div className="section-shell flex flex-col gap-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Pebbs.app</p>
        <p>Minimal infrastructure. Simple content workflow. Static-friendly deployment.</p>
      </div>
    </footer>
  );
}
