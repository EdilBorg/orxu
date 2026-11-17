import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { ContactCta, SectionHeading, SiteShell } from "@/components/site-shell";
import { products } from "@/lib/site-content";

export const Route = createFileRoute("/products")({
  component: ProductsPage,
  head: () => ({
    meta: [
      { title: "Produtos digitais — ORXU" },
      {
        name: "description",
        content:
          "Explore Korvex, Maps Leads Finder e BOWIS: produtos digitais próprios da ORXU.",
      },
      { property: "og:title", content: "Produtos digitais — ORXU" },
      {
        property: "og:description",
        content:
          "Conheça os produtos digitais próprios da ORXU e a direcção de cada projecto.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const korvexScreens = [
  {
    src: "/images/products/korvex/dashboard.jpg",
    alt: "Dashboard e gestão da plataforma Korvex.",
    caption: "Dashboard e gestão",
  },
  {
    src: "/images/products/korvex/conexao.jpg",
    alt: "Ligação e configuração do WhatsApp no Korvex.",
    caption: "Ligação ao WhatsApp",
  },
  {
    src: "/images/products/korvex/fluxo.jpg",
    alt: "Configuração de automações e fluxos no Korvex.",
    caption: "Automações e fluxos",
  },
] as const;

function ProductsPage() {
  return (
    <SiteShell>
      <main id="conteudo">
        <section className="page-frame page-intro-block">
          <span className="eyebrow">Portefólio próprio</span>
          <h1 className="page-title">
            Produtos próprios
          </h1>
          <p className="page-intro">
            A ORXU concebe, desenvolve e gere os seus próprios produtos digitais. Cada projecto tem
            uma direcção específica; o estado indica o ponto actual.
          </p>
        </section>

        <section className="page-frame section-block section-rule">
          <SectionHeading
            label="Catálogo"
            title={<>Três projectos. Diferentes necessidades de negócio.</>}
            description="As descrições apresentam o foco e a direcção de cada produto."
          />
          <div className="catalogue-list">
            {products.map((product) => (
              <article className="catalogue-item" key={product.id}>
                <div className="product-mark" aria-label={`Identidade tipográfica de ${product.name}`}>
                  <span className="product-mark-word" data-product={product.id}>
                    {product.name}
                  </span>
                </div>
                <p className="catalogue-category">{product.category}</p>
                <h2 className="catalogue-name">{product.name}</h2>
                <p className="catalogue-copy">{product.summary}</p>
                <ul className="direction-list" aria-label={`Direcção conhecida de ${product.name}`}>
                  {product.direction.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
                <div className="catalogue-bottom">
                  <div>
                    <span className="status-label">{product.status}</span>
                    <p className="project-scope">{product.statusDetail}</p>
                  </div>
                  {product.url ? (
                    <a
                      className="icon-link"
                      href={product.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Visitar ${product.name} — abre num novo separador`}
                    >
                      <ArrowUpRight aria-hidden="true" />
                    </a>
                  ) : (
                    <span className="project-scope">Website não confirmado</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="page-frame section-block section-rule" aria-labelledby="korvex-visual-title">
          <SectionHeading
            label="Korvex"
            title={<>Interface do Korvex</>}
            description="Alguns dos principais ecrãs da plataforma."
          />
          <div className="product-shots-grid">
            {korvexScreens.map((shot) => (
              <figure className="product-shot" key={shot.src}>
                <div className="product-shot-frame">
                  <img
                    src={shot.src}
                    alt={shot.alt}
                    width={1200}
                    height={565}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption className="product-shot-caption">{shot.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="section-rule">
          <ContactCta heading="Pretende saber mais sobre os produtos da ORXU?" />
        </section>
      </main>
    </SiteShell>
  );
}
