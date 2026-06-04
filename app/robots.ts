import type { MetadataRoute } from "next";

const canonicalUrl = "https://www.maxwellventures.xyz";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/studio-preview-9k4m2x", "/studio-preview-9k4m2x/"],
    },
    sitemap: `${canonicalUrl}/sitemap.xml`,
    host: canonicalUrl,
  };
}
