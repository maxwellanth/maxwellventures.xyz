import type { Metadata } from "next";

export const siteUrl = "https://www.maxwellventures.xyz";

export const defaultDescription =
  "A Pacific Northwest-influenced consulting studio for practical AI operations, websites, and digital systems.";

const ogImage = {
  url: "/social/og-image.png",
  width: 1200,
  height: 630,
  alt: "Maxwell Ventures",
};

export function pageMetadata({
  description,
  path,
  title,
}: {
  description: string;
  path: string;
  title: string;
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: "Maxwell Ventures",
      images: [ogImage],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
  };
}
