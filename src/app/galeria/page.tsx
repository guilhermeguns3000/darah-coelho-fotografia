import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Galeria de Fotografia em Goiânia | Darah Coelho Portfólio",
  description:
    "Portfólio e galeria de fotos da fotógrafa Darah Coelho em Goiânia. Book de moda, ensaio pessoal, casamento, gestante e eventos. Veja os trabalhos e agende sua sessão.",
  alternates: { canonical: "https://darahcoelhofotografia.com.br/galeria" },
  robots: { index: true, follow: true },
};

const BASE = "https://res.cloudinary.com/djjacet57/image/upload/f_auto,q_auto,w_800";

const galleryImages = [
  // — Moda Feminina —
  { src: `${BASE}/darah/moda%20feminina/sem-ti-tulo-01`,  alt: "Book de moda feminina Goiânia – Darah Coelho fotógrafa",  service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/sem-ti-tulo-022`, alt: "Ensaio editorial moda Goiânia",                            service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/img-40`,          alt: "Book moda feminina Goiânia",                               service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/sem-ti-tulo-067`, alt: "Fotografia fashion Goiânia",                               service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/sem-titulo-03`,   alt: "Book de moda feminina Goiânia",                            service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/sem-titulo-05`,   alt: "Ensaio de moda Goiânia – Darah Coelho",                    service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/sem-titulo-07`,   alt: "Book feminino fotógrafa Goiânia",                          service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/sem-titulo-08`,   alt: "Moda feminina Goiânia – fotógrafa Darah Coelho",           service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/sem-titulo-09`,   alt: "Book de moda Goiânia",                                     service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/sem-titulo-11`,   alt: "Ensaio fashion Goiânia – Darah Coelho",                    service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/sem-titulo-22`,   alt: "Book moda feminina Goiânia",                               service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/sem-titulo-31`,   alt: "Fotografia de moda Goiânia",                               service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/sem-titulo-33`,   alt: "Book feminino Goiânia – Darah Coelho fotógrafa",           service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/sem-titulo-35`,   alt: "Ensaio de moda feminina Goiânia",                          service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/sem-titulo-38`,   alt: "Book de moda Goiânia – fotógrafa Darah Coelho",            service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/sem-titulo-43`,   alt: "Moda feminina Goiânia",                                    service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/sem-titulo-006`,  alt: "Book de moda feminina Goiânia",                            service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/sem-titulo-012`,  alt: "Ensaio editorial moda Goiânia",                            service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/sem-titulo-013`,  alt: "Book moda feminina Goiânia",                               service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/sem-titulo-16`,   alt: "Fotografia fashion Goiânia",                               service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/sem-titulo-027`,  alt: "Book de moda Goiânia – Darah Coelho",                      service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/sem-titulo-028`,  alt: "Ensaio de moda feminina Goiânia",                          service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/sem-titulo-036`,  alt: "Book feminino Goiânia",                                    service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/sem-titulo-04`,   alt: "Moda feminina fotógrafa Goiânia",                          service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/sem-titulo-064`,  alt: "Book de moda Goiânia",                                     service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/sem-titulo-065-1`,alt: "Ensaio fashion fotógrafa Goiânia",                         service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/sem-titulo-069`,  alt: "Book moda feminina Goiânia",                               service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/sem-titulo-16`,   alt: "Fotografia de moda feminina Goiânia",                      service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/sem-titulo-30`,   alt: "Book de moda Goiânia – Darah Coelho fotógrafa",            service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/sem-titulo-05-1`, alt: "Moda feminina Goiânia",                                    service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/07622883-c2ec-4162-a6b7-5160a66526ca`, alt: "Book de moda Goiânia",                service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/0b36d026-e619-4b53-9d97-400c628fb705`, alt: "Ensaio de moda feminina Goiânia",     service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/2bdaa259-0e9e-47bf-a614-0f6503639ef4`, alt: "Book feminino Goiânia",               service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/5a0614c4-642a-4491-84f4-8e27fee15035`, alt: "Moda feminina fotógrafa Goiânia",     service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/5be64b9a-0bb2-45fc-acd3-d5fa392d3574`, alt: "Book de moda Goiânia",                service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/783610ec-e800-4a85-ae72-8046f53f12f8`, alt: "Ensaio fashion Goiânia",              service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/8e71ec4d-2844-4a7d-bcb1-8c1e813d91c5`, alt: "Book moda feminina Goiânia",          service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/9341f2be-b3ef-4eda-8f5b-4895cb43c339`, alt: "Fotografia fashion Goiânia",          service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/9e52071f-5cbe-4bb7-8588-96f3cf53a544`, alt: "Moda feminina Goiânia",               service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/caa00218-32d0-4517-99e1-393fd64c670e`, alt: "Book de moda feminina Goiânia",       service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/f8f9f22f-f54d-4084-baab-fc1b6b2b4703`, alt: "Ensaio moda Goiânia – Darah Coelho", service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/img-23`,          alt: "Book de moda feminina Goiânia",                            service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/img_0689`,        alt: "Book moda feminina Goiânia",                               service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/img_0690`,        alt: "Ensaio de moda Goiânia",                                   service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/img_0702`,        alt: "Book feminino fotógrafa Goiânia",                          service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/img_2504`,        alt: "Moda feminina Goiânia",                                    service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/img_5552`,        alt: "Book de moda Goiânia",                                     service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/img_5554`,        alt: "Fotografia fashion Goiânia",                               service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/img_5610`,        alt: "Book moda feminina Goiânia",                               service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/img_5622`,        alt: "Ensaio moda Goiânia",                                      service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/img_5673`,        alt: "Book de moda feminina Goiânia",                            service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/917beadc-45cf-4e05-b89d-080a99643e22`, alt: "Book de moda Goiânia",                service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/sem-titulo-30-1`, alt: "Ensaio de moda feminina Goiânia",                          service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/sem-titulo-32-1`, alt: "Book feminino Goiânia",                                    service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/sem-titulo-03-1`, alt: "Moda feminina Goiânia",                                    service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/sem-titulo-012-1`,alt: "Book de moda Goiânia",                                     service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/sem-titulo-013-1`,alt: "Ensaio fashion Goiânia",                                   service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/img-045`,         alt: "Book de moda feminina Goiânia",                            service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/img-071`,         alt: "Ensaio fashion Goiânia – Darah Coelho",                    service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/img-087`,         alt: "Book moda feminina Goiânia",                               service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/img-088`,         alt: "Fotografia de moda Goiânia",                               service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/img-091`,         alt: "Book feminino fotógrafa Goiânia",                          service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/img-095`,         alt: "Moda feminina Goiânia – Darah Coelho",                     service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/img-099`,         alt: "Book de moda Goiânia",                                     service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/img-167`,         alt: "Ensaio moda feminina Goiânia",                             service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/img-28`,          alt: "Book de moda Goiânia – Darah Coelho",                      service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/img-32`,          alt: "Fotografia fashion Goiânia",                               service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/sem-titulo-04-1`, alt: "Book de moda feminina Goiânia",                            service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/sem-titulo-044`,  alt: "Moda feminina Goiânia",                                    service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/sem-titulo-045`,  alt: "Book de moda Goiânia",                                     service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/sem-titulo-046`,  alt: "Ensaio fashion fotógrafa Goiânia",                         service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/sem-titulo-06`,   alt: "Book feminino Goiânia",                                    service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/sem-titulo-065`,  alt: "Moda feminina Goiânia – Darah Coelho",                     service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/sem-titulo-154`,  alt: "Book de moda feminina Goiânia",                            service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/sem-titulo-157`,  alt: "Ensaio de moda Goiânia",                                   service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/sem-titulo-17`,   alt: "Book moda feminina Goiânia",                               service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/sem-titulo-18`,   alt: "Fotografia fashion Goiânia",                               service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/sem-titulo-45`,   alt: "Book de moda Goiânia – Darah Coelho",                      service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/sem-titulo-46`,   alt: "Moda feminina fotógrafa Goiânia",                          service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/sem-titulo-47`,   alt: "Ensaio moda Goiânia",                                      service: "Moda",          slug: "book-de-moda-goiania" },
  { src: `${BASE}/darah/moda%20feminina/sem-titulo-54`,   alt: "Book de moda feminina Goiânia",                            service: "Moda",          slug: "book-de-moda-goiania" },

  // — Ensaio Pessoal —
  { src: `${BASE}/darah/ensaio%20pessoal/img-0725`,       alt: "Ensaio pessoal fotógrafa Goiânia",                         service: "Ensaio Pessoal", slug: "ensaio-pessoal-goiania" },
  { src: `${BASE}/darah/ensaio%20pessoal/img-0717`,       alt: "Book pessoal Goiânia – Darah Coelho",                      service: "Ensaio Pessoal", slug: "ensaio-pessoal-goiania" },
  { src: `${BASE}/darah/ensaio%20pessoal/img-0729`,       alt: "Ensaio feminino Goiânia",                                  service: "Ensaio Pessoal", slug: "ensaio-pessoal-goiania" },
  { src: `${BASE}/darah/ensaio%20pessoal/820956df-0ace-42b4-8364-b82174c921dd`, alt: "Ensaio pessoal fotógrafa Goiânia",   service: "Ensaio Pessoal", slug: "ensaio-pessoal-goiania" },
  { src: `${BASE}/darah/ensaio%20pessoal/cd8673bb-3f28-451a-924b-d1f34bb7ba91`, alt: "Book pessoal Goiânia",               service: "Ensaio Pessoal", slug: "ensaio-pessoal-goiania" },
  { src: `${BASE}/darah/ensaio%20pessoal/fe76bfce-909e-4a28-a3dc-bb5494ae02ce`, alt: "Ensaio feminino fotógrafa Goiânia",  service: "Ensaio Pessoal", slug: "ensaio-pessoal-goiania" },
  { src: `${BASE}/darah/ensaio%20pessoal/img_0686`,       alt: "Ensaio pessoal Goiânia – Darah Coelho",                    service: "Ensaio Pessoal", slug: "ensaio-pessoal-goiania" },
  { src: `${BASE}/darah/ensaio%20pessoal/img_0719`,       alt: "Book pessoal fotógrafa Goiânia",                           service: "Ensaio Pessoal", slug: "ensaio-pessoal-goiania" },
  { src: `${BASE}/darah/ensaio%20pessoal/img_0732`,       alt: "Ensaio feminino Goiânia",                                  service: "Ensaio Pessoal", slug: "ensaio-pessoal-goiania" },
  { src: `${BASE}/darah/ensaio%20pessoal/img_0795-1365x2048`, alt: "Ensaio pessoal fotógrafa Goiânia",                     service: "Ensaio Pessoal", slug: "ensaio-pessoal-goiania" },
  { src: `${BASE}/darah/ensaio%20pessoal/img_0808-1365x2048`, alt: "Book feminino Goiânia – Darah Coelho",                 service: "Ensaio Pessoal", slug: "ensaio-pessoal-goiania" },
  { src: `${BASE}/darah/ensaio%20pessoal/img_1673-1365x2048`, alt: "Ensaio pessoal Goiânia",                               service: "Ensaio Pessoal", slug: "ensaio-pessoal-goiania" },
  { src: `${BASE}/darah/boda2/capa-1`,                    alt: "Ensaio pessoal fotógrafa Goiânia",                         service: "Ensaio Pessoal", slug: "ensaio-pessoal-goiania" },
  { src: `${BASE}/darah/boda2/capa-2`,                    alt: "Book pessoal Goiânia",                                     service: "Ensaio Pessoal", slug: "ensaio-pessoal-goiania" },
  { src: `${BASE}/darah/boda2/capa-3`,                    alt: "Ensaio feminino Goiânia",                                  service: "Ensaio Pessoal", slug: "ensaio-pessoal-goiania" },

  // — Casamento —
  { src: `${BASE}/darah/casamento/img-0836`,              alt: "Fotografia casamento Goiânia – Darah Coelho",              service: "Casamento",     slug: "fotografia-casamento-goiania" },
  { src: `${BASE}/darah/casamento/img-0833`,              alt: "Fotógrafa casamento Goiânia",                              service: "Casamento",     slug: "fotografia-casamento-goiania" },
  { src: `${BASE}/darah/casamento/img-0844`,              alt: "Casamento fotógrafa Goiânia",                              service: "Casamento",     slug: "fotografia-casamento-goiania" },
  { src: `${BASE}/darah/casamento/img_0810`,              alt: "Fotografia de casamento Goiânia",                          service: "Casamento",     slug: "fotografia-casamento-goiania" },
  { src: `${BASE}/darah/casamento/img_0811`,              alt: "Fotógrafa de casamento Goiânia",                           service: "Casamento",     slug: "fotografia-casamento-goiania" },
  { src: `${BASE}/darah/casamento/img_0819`,              alt: "Casamento fotógrafa Darah Coelho Goiânia",                 service: "Casamento",     slug: "fotografia-casamento-goiania" },
  { src: `${BASE}/darah/casamento/img_0822`,              alt: "Fotografia casamento Goiânia",                             service: "Casamento",     slug: "fotografia-casamento-goiania" },
  { src: `${BASE}/darah/casamento/img_0829`,              alt: "Fotógrafa casamento Goiânia – Darah Coelho",               service: "Casamento",     slug: "fotografia-casamento-goiania" },
  { src: `${BASE}/darah/casamento/img_0830`,              alt: "Fotografia casamento Goiânia",                             service: "Casamento",     slug: "fotografia-casamento-goiania" },
  { src: `${BASE}/darah/casamento/img_0834`,              alt: "Casamento Goiânia – Darah Coelho fotógrafa",               service: "Casamento",     slug: "fotografia-casamento-goiania" },
  { src: `${BASE}/darah/casamento/img_0840`,              alt: "Fotografia de casamento Goiânia",                          service: "Casamento",     slug: "fotografia-casamento-goiania" },
  { src: `${BASE}/darah/casamento/img_0849`,              alt: "Fotógrafa casamento Goiânia",                              service: "Casamento",     slug: "fotografia-casamento-goiania" },
  { src: `${BASE}/darah/casamento/img_0850`,              alt: "Casamento fotógrafa Goiânia",                              service: "Casamento",     slug: "fotografia-casamento-goiania" },

  // — Gestante —
  { src: `${BASE}/darah/Gestante/cecfd24b-94e9-4c9c-a9ea-a0f98a0a1c61`, alt: "Ensaio gestante fotógrafa Goiânia",          service: "Gestante",      slug: "ensaio-gestante-goiania" },
  { src: `${BASE}/darah/Gestante/524ac503-32df-4e54-bbb1-a424ad42de67`, alt: "Fotografia gestante Goiânia",                service: "Gestante",      slug: "ensaio-gestante-goiania" },
  { src: `${BASE}/darah/Gestante/21d84965-a29b-4d7a-8cf0-2c9e066e027c`, alt: "Ensaio gestante Goiânia – Darah Coelho",     service: "Gestante",      slug: "ensaio-gestante-goiania" },
  { src: `${BASE}/darah/Gestante/77f73106-8ec3-435b-966e-de6cd7816eda`, alt: "Fotografia gestante Goiânia",                service: "Gestante",      slug: "ensaio-gestante-goiania" },
  { src: `${BASE}/darah/Gestante/f91bd0b4-60dd-4b73-ac88-9f7cb46166a5`, alt: "Ensaio gestante fotógrafa Darah Coelho",     service: "Gestante",      slug: "ensaio-gestante-goiania" },

  // — Eventos Corporativos —
  { src: `${BASE}/darah/eventos%20corporativos/0x7a9832`,  alt: "Fotografia eventos corporativos Goiânia",                service: "Eventos",       slug: "eventos-corporativos-goiania" },
  { src: `${BASE}/darah/eventos%20corporativos/0x7a0117`,  alt: "Cobertura fotográfica evento Goiânia",                   service: "Eventos",       slug: "eventos-corporativos-goiania" },
  { src: `${BASE}/darah/eventos%20corporativos/0x7a0297`,  alt: "Fotografia corporativa Goiânia",                         service: "Eventos",       slug: "eventos-corporativos-goiania" },
  { src: `${BASE}/darah/eventos%20corporativos/0x7a9837`,  alt: "Evento corporativo fotógrafa Goiânia",                   service: "Eventos",       slug: "eventos-corporativos-goiania" },
  { src: `${BASE}/darah/eventos%20corporativos/0x7a9839`,  alt: "Cobertura evento corporativo Goiânia",                   service: "Eventos",       slug: "eventos-corporativos-goiania" },
  { src: `${BASE}/darah/eventos%20corporativos/0x7a9842`,  alt: "Fotografia de evento Goiânia",                           service: "Eventos",       slug: "eventos-corporativos-goiania" },
  { src: `${BASE}/darah/eventos%20corporativos/0x7a9845`,  alt: "Evento corporativo Goiânia – Darah Coelho",              service: "Eventos",       slug: "eventos-corporativos-goiania" },
  { src: `${BASE}/darah/eventos%20corporativos/0x7a9918`,  alt: "Fotografia corporativa evento Goiânia",                  service: "Eventos",       slug: "eventos-corporativos-goiania" },
  { src: `${BASE}/darah/eventos%20corporativos/0x7a9919`,  alt: "Cobertura fotográfica Goiânia",                          service: "Eventos",       slug: "eventos-corporativos-goiania" },
  { src: `${BASE}/darah/eventos%20corporativos/0x7a9941`,  alt: "Evento corporativo fotógrafa Darah Coelho",              service: "Eventos",       slug: "eventos-corporativos-goiania" },
  { src: `${BASE}/darah/eventos%20corporativos/0x7a9946`,  alt: "Fotografia de evento Goiânia",                           service: "Eventos",       slug: "eventos-corporativos-goiania" },
  { src: `${BASE}/darah/eventos%20corporativos/0x7a9948`,  alt: "Cobertura evento Goiânia – Darah Coelho fotógrafa",      service: "Eventos",       slug: "eventos-corporativos-goiania" },

  // — Batismo —
  { src: `${BASE}/darah/batizado/img-6589`,               alt: "Fotografia batismo Goiânia – Darah Coelho",               service: "Batismo",       slug: "fotografia-batismo-goiania" },
  { src: `${BASE}/darah/batizado/img_6595`,               alt: "Batismo fotógrafa Goiânia",                               service: "Batismo",       slug: "fotografia-batismo-goiania" },
  { src: `${BASE}/darah/batizado/img_6612`,               alt: "Fotografia de batismo Goiânia",                           service: "Batismo",       slug: "fotografia-batismo-goiania" },

  // — Moda Masculina —
  { src: `${BASE}/darah/moda%20masculina/sem-ti-tulo-27`, alt: "Book de moda masculina Goiânia – Darah Coelho",           service: "Moda Masc.",    slug: "moda-masculina-goiania" },
  { src: `${BASE}/darah/moda%20masculina/sem-titulo-119`, alt: "Book masculino fotógrafa Goiânia",                        service: "Moda Masc.",    slug: "moda-masculina-goiania" },
  { src: `${BASE}/darah/moda%20masculina/sem-titulo-127`, alt: "Moda masculina Goiânia – Darah Coelho",                   service: "Moda Masc.",    slug: "moda-masculina-goiania" },
  { src: `${BASE}/darah/moda%20masculina/sem-titulo-130`, alt: "Book de moda masculina Goiânia",                          service: "Moda Masc.",    slug: "moda-masculina-goiania" },
  { src: `${BASE}/darah/moda%20masculina/sem-titulo-12`,  alt: "Book masculino fotógrafa Goiânia",                        service: "Moda Masc.",    slug: "moda-masculina-goiania" },
  { src: `${BASE}/darah/moda%20masculina/sem-titulo-14`,  alt: "Moda masculina Goiânia",                                  service: "Moda Masc.",    slug: "moda-masculina-goiania" },
  { src: `${BASE}/darah/moda%20masculina/sem-titulo-32`,  alt: "Book de moda masculina Goiânia – Darah Coelho",           service: "Moda Masc.",    slug: "moda-masculina-goiania" },

  // — Família —
  { src: `${BASE}/darah/familia/clicks-para-essa-fami_cc_81lia-que-tem-nosso-corac_cc_a7a_cc_83o-em-cheio-_f0_9f_92_9c_e2_9c_a8_f0_9f_93_b8-falem-se-esse-ensaio-na_cc_83o-ficou-p-1`, alt: "Ensaio de família Goiânia – Darah Coelho fotógrafa", service: "Família", slug: "ensaio-familia-goiania" },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ImageGallery",
      name: "Galeria de Fotografia em Goiânia – Darah Coelho",
      description: "Portfólio da fotógrafa Darah Coelho em Goiânia com trabalhos de book de moda, ensaio pessoal, casamento, gestante e eventos.",
      url: "https://darahcoelhofotografia.com.br/galeria",
      author: { "@type": "Person", name: "Darah Coelho", url: "https://darahcoelhofotografia.com.br/sobre" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: "https://darahcoelhofotografia.com.br" },
        { "@type": "ListItem", position: 2, name: "Galeria de Fotografia em Goiânia", item: "https://darahcoelhofotografia.com.br/galeria" },
      ],
    },
  ],
};

export default function GaleriaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className="pt-32 pb-16 max-w-7xl mx-auto px-6">
        <nav className="flex gap-2 text-xs text-neutral-500 tracking-widest uppercase mb-8">
          <Link href="/" className="hover:text-gold transition-colors">Início</Link>
          <span>/</span>
          <span className="text-gold">Galeria</span>
        </nav>
        <p className="text-gold text-xs tracking-widest uppercase mb-4">Portfólio</p>
        <h1 className="font-serif text-3xl md:text-5xl text-white mb-4">Galeria de Fotografia em Goiânia</h1>
        <p className="text-neutral-400 max-w-xl leading-relaxed">
          Uma seleção de trabalhos de book de moda, ensaio pessoal, fotografia de casamento, gestante
          e eventos corporativos, todos realizados em Goiânia e São Paulo pela fotógrafa Darah Coelho.
        </p>
      </section>

      {/* Filtros por serviço */}
      <section className="max-w-7xl mx-auto px-6 mb-8">
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none snap-x"
          style={{ WebkitOverflowScrolling: "touch" }}>
          <span className="shrink-0 px-4 py-2 bg-gold text-dark text-xs tracking-widest uppercase">Todos</span>
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/servicos/${s.slug}`}
              className="shrink-0 px-4 py-2 border border-dark-400 text-neutral-500 text-xs tracking-widest uppercase hover:border-gold hover:text-gold transition-all"
            >
              {s.shortTitle}
            </Link>
          ))}
        </div>
      </section>

      {/* Grid masonry-style */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-1 space-y-1">
          {galleryImages.map((img, i) => (
            <Link
              key={i}
              href={`/servicos/${img.slug}`}
              className="group block relative overflow-hidden break-inside-avoid"
            >
              <div className="relative w-full overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={i % 3 === 0 ? 1000 : 600}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading={i < 9 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/40 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                    {img.service}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
