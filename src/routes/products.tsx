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
          "Explore Korvex, Maps Leads Finder e BOWIS: produtos digitais próprios da ORXU, apresentados com o seu estado de desenvolvimento actual.",
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
    src: "/images/products/korvex/inicio.jpg",
    alt: "Ecrã de entrada do Korvex com a apresentação da plataforma.",
    caption: "Entrada",
  },
  {
    src: "/images/products/korvex/dashboard.jpg",
    alt: "Painel de gestão do Korvex com métricas e estado da conta.",
    caption: "Painel de gestão",
  },
  {
    src: "/images/products/korvex/conexao.jpg",
    alt: "Ecrã de ligação do Korvex ao WhatsApp.",
    caption: "Ligação ao WhatsApp",
  },
  {
    src: "/images/products/korvex/fluxo.jpg",
    alt: "Configuração de automações e fluxos no Korvex.",
    caption: "Configuração de automações",
  },
] as const;

function ProductsPage() {
  return (
    <SiteShell>
      <main id="conteudo">
        <section className="page-frame page-intro-block">
          <span className="eyebrow">Portefólio próprio</span>
          <h1 className="page-title">
            Produtos em desenvolvimento, <em>para desafios concretos.</em>
          </h1>
          <p className="page-intro">
            A ORXU concebe, desenvolve, gere e comercializa os seus próprios produtos digitais. Cada
            projecto tem uma direcção específica e o estado abaixo indica com clareza o que está
            confirmado.
          </p>
        </section>

        <section className="page-frame section-block section-rule">
          <SectionHeading
            label="Produtos ORXU"
            title={<>Três projectos. Diferentes necessidades de negócio.</>}
            description="As descrições apresentam o foco e a direcção de cada produto, não uma lista de funcionalidades confirmadas em produção."
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
            title={<>Automação inteligente para conversas comerciais no WhatsApp.</>}
            description="Uma plataforma desenvolvida pela ORXU para centralizar conversas, organizar o atendimento e automatizar interacções comerciais através do WhatsApp."
          />
          <p className="product-shot-caption" style={{ marginBottom: "1.5rem" }}>
            Produto desenvolvido pela ORXU.
          </p>
          <div className="product-shots-grid">
            {korvexScreens.map((shot) => (
              <figure className="product-shot" key={shot.src}>
                <div className="product-shot-frame">
                  <img
                    src={shot.src}
                    alt={shot.alt}
                    width={1296}
                    height={610}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption className="product-shot-caption">{shot.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="page-frame section-block section-rule">
          <div className="split-story">
            <div>
              <span className="eyebrow">Transparência</span>
            </div>
            <div>
              <h2 className="story-heading">Direcção de produto não é promessa de disponibilidade.</h2>
              <p className="story-copy story-copy-spaced">
                Os produtos apresentados encontram-se em desenvolvimento. Os conceitos e as áreas
                de trabalho identificam a sua direcção conhecida; não significam que todas as
                funcionalidades estejam actualmente disponíveis ou prontas para produção.
              </p>
            </div>
          </div>
        </section>

        <section className="section-rule">
          <ContactCta heading="Pretende saber mais sobre os produtos da ORXU?" />
        </section>
      </main>
    </SiteShell>
  );
}
