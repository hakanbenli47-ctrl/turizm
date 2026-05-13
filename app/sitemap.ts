import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://sezenturizm.com";

  const routes = [
    "",
    "/hizmetler/dugun-gelin-arabasi",
    "/hizmetler/engelsiz-ulasim",
    "/hizmetler/kurumsal-transfer",
    "/hizmetler/misafir-davetli-transferi",
    "/hizmetler/organizasyon-filo-yonetimi",
    "/hizmetler/vip-transfer",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}