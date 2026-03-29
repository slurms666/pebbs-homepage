import type { Metadata } from "next";
import { Baskervville, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/data/site";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans"
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono"
});

const baskervville = Baskervville({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pebbs.app"),
  title: {
    default: site.name,
    template: `%s | ${site.name}`
  },
  description: site.subheadline,
  openGraph: {
    title: site.name,
    description: site.subheadline,
    url: "https://pebbs.app",
    siteName: site.name,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.subheadline
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} ${baskervville.variable}`}
    >
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
