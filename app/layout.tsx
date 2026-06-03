import type { Metadata } from "next";
import { Cinzel, Montserrat } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
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
  metadataBase: new URL("https://maxwellventures.xyz"),
  title: {
    default: "Maxwell Ventures",
    template: "%s | Maxwell Ventures",
  },
  description:
    "Practical AI systems, websites, and digital operations for local businesses.",
  applicationName: "Maxwell Ventures",
  openGraph: {
    title: "Maxwell Ventures",
    description:
      "Practical AI systems, websites, and digital operations for local businesses.",
    url: "https://maxwellventures.xyz",
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
