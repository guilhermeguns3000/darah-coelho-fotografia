import type { NextConfig } from "next";

// Painel Flora (analytics próprio) em FIRST-PARTY: serve o tracker e o coletor
// pelo próprio domínio via rewrite (resistente a CSP e a bloqueadores).
const FLORA = "https://flora-dashboard-dun.vercel.app";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/sm.js", destination: `${FLORA}/tracker.js` },
      { source: "/sm-e", destination: `${FLORA}/api/ingest` },
    ];
  },

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "picsum.photos" },
    ],
  },

  async redirects() {
    return [
      // Serviço de newborn removido (a Darah não faz) → /servicos
      {
        source: "/servicos/ensaio-newborn-goiania",
        destination: "/servicos",
        permanent: true,
      },
      {
        source: "/servicos/ensaio-newborn-goiania/:bairro*",
        destination: "/servicos",
        permanent: true,
      },
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
      {
        source: "/sobre/",
        destination: "/sobre",
        permanent: true,
      },
      {
        source: "/galeria/",
        destination: "/galeria",
        permanent: true,
      },
      {
        source: "/blog/",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
