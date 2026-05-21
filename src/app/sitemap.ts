import type { MetadataRoute } from "next";
import { getAllServiceSlugs } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://darahcoelhofotografia.com.br";
  const now = new Date();

  // Páginas principais — priority decrescente por importância
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: base,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    // Slug original do WordPress — mantida e otimizada
    {
      url: `${base}/book-fotografico-goiania`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${base}/servicos`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/galeria`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${base}/sobre`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${base}/contato`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  // Páginas de serviço — alta prioridade, são as que ranqueiam
  const servicePages: MetadataRoute.Sitemap = getAllServiceSlugs().map((slug) => ({
    url: `${base}/servicos/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // Posts do blog — prioridade menor, mas úteis para long-tail
  const blogSlugs = [
    "quanto-custa-ensaio-moda-goiania",
    "melhor-epoca-fotos-externas-goiania",
    "ensaio-gestante-quando-fazer",
    "o-que-e-fotografia-editorial",
    "como-escolher-fotografa-casamento-goiania",
    "looks-ensaio-fotografico",
  ];

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...blogPages];
}
