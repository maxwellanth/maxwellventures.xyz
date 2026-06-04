import type { Metadata } from "next";
import { Cinzel, Montserrat } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { defaultDescription, siteUrl } from "@/lib/metadata";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600"],
});

const montserrat = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Maxwell Ventures",
    template: "%s | Maxwell Ventures",
  },
  description: defaultDescription,
  applicationName: "Maxwell Ventures",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Maxwell Ventures",
    description: defaultDescription,
    url: "/",
    siteName: "Maxwell Ventures",
    images: [
      {
        url: "/social/og-image.png",
        width: 1200,
        height: 630,
        alt: "Maxwell Ventures",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maxwell Ventures",
    description: defaultDescription,
    images: ["/social/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
