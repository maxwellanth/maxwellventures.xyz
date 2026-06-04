import type { MetadataRoute } from "next";

const canonicalUrl = "https://www.maxwellventures.xyz";
const lastModified = new Date("2026-06-03T00:00:00-07:00");

const publicRoutes = [
  { path: "/", priority: 1 },
  { path: "/services", priority: 0.9 },
  { path: "/local-business-audit", priority: 0.9 },
  { path: "/about", priority: 0.7 },
  { path: "/team", priority: 0.7 },
  { path: "/contact", priority: 0.8 },
  { path: "/privacy", priority: 0.4 },
  { path: "/terms", priority: 0.4 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((route) => ({
    url: new URL(route.path, canonicalUrl).toString(),
    lastModified,
    changeFrequency: route.path === "/" ? "monthly" : "yearly",
    priority: route.priority,
  }));
}
