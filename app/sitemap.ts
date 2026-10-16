import type { MetadataRoute } from "next";
import { gallery } from "@/data/gallery";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://utuhisaniwins.org";
  const now = new Date();

  const routes = [
    "",
    "/about",
    "/work",
    "/impact",
    "/gallery",
    "/stories",
    "/team",
    "/contact",
    "/donate",
  ];

  return [...routes, ...gallery.map((item) => `/stories/${item.id}`)].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}