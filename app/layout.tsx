import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans"
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pebbs.app"),
  title: {
    default: "Pebbs.app",
    template: "%s | Pebbs.app"
  },
  description:
    "Pebbs.app presents projects, technical services, websites, apps, and research papers in a minimal, precise format.",
  openGraph: {
    title: "Pebbs.app",
    description:
      "Projects, technical services, apps, websites, and research papers from Pebbs.app.",
    url: "https://pebbs.app",
    siteName: "Pebbs.app",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Pebbs.app",
    description:
      "Projects, technical services, apps, websites, and research papers from Pebbs.app."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${ibmPlexMono.variable}`}>
      <body className="antialiased">
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
