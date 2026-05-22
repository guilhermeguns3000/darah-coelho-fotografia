import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "picsum.photos" },
    ],
  },

  async redirects() {
    return [
      // Posts genéricos em inglês do WordPress (template do tema, 2023) → /blog
      {
        source: "/nurturing-the-bond-between-humans-and-nature",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/into-the-wild-adventures-in-the-heart-of-nature",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/connecting-with-natures-tranquil-essence",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/a-journey-through-earths-natural-splendor",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/exploring-the-beauty-of-mother-nature",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/embracing-the-wonders-of-the-natural-world",
        destination: "/blog",
        permanent: true,
      },
      // Trailing slash — WordPress usa /slug/, Next.js usa /slug (sem barra)
      {
        source: "/book-fotografico-goiania/",
        destination: "/book-fotografico-goiania",
        permanent: true,
      },
      {
        source: "/contato/",
        destination: "/contato",
        permanent: true,
      },
      {
        source: "/servicos/",
        destination: "/servicos",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
