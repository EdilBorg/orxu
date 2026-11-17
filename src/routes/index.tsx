import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import systemsField from "@/assets/orxu-systems-field.jpg";
import { ContactCta, SectionHeading, SiteShell } from "@/components/site-shell";
import { products, services } from "@/lib/site-content";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "ORXU — Produtos digitais e soluções tecnológicas" },
      {
        name: "description",
        content:
          "A ORXU desenvolve produtos digitais próprios e cria websites, software, aplicações e plataformas para empresas e organizações.",
      },
      { property: "og:title", content: "ORXU — Produtos digitais e soluções tecnológicas" },
      {
        property: "og:description",
        content:
          "Produtos digitais próprios e soluções tecnológicas desenvolvidas para empresas e organizações.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <SiteShell>
      <main id="conteudo">
        <section className="page-frame hero-section" aria-labelledby="home-title">
          <div>
            <span className="eyebrow">Empresa independente de tecnologia</span>
            <h1 className="display-heading" id="home-title">
              Produtos digitais. <em>Soluções tecnológicas.</em>
            </h1>
            <p className="hero-copy">
              A ORXU desenvolve e gere os seus próprios produtos digitais e cria software, plataformas
              e soluções tecnológicas para empresas e organizações.
            </p>
            <div className="hero-actions">
              <a className="button-primary" href="#produtos">
                Explorar o nosso trabalho <ArrowRight className="button-icon" aria-hidden="true" />
              </a>
              <a className="button-secondary" href="/contact">
                Contactar a ORXU
              </a>
            </div>
          </div>
          <div className="hero-image-wrap" aria-label="Ilustração abstracta de sistemas digitais interligados">
            <img
              className="hero-image"
              src={systemsField}
              width={1600}
              height={1008}
              alt="Linhas técnicas azuis interligadas que representam sistemas digitais."
              fetchPriority="high"
            />
            <div className="hero-note">
              <strong>ORXU / TECNOLOGIA</strong>
              Produtos próprios + desenvolvimento
            </div>
          </div>
        </section>

        <section className="section-block section-rule" aria-labelledby="areas-title">
          <div className="page-frame">
            <SectionHeading
              label="O que fazemos"
              title={<>Duas áreas. Uma visão tecnológica.</>}
              description="Criamos produtos que são nossos e desenvolvemos tecnologia à medida para responder a necessidades concretas."
            />
            <div className="business-grid" id="areas">
              <article className="business-item">
                <span className="index-label">01 / PRODUTOS PRÓPRIOS</span>
                <h3 className="business-title">Produtos digitais</h3>
                <p className="business-copy">
                  Concebemos, desenvolvemos e gerimos software e plataformas digitais da ORXU, com
                  atenção à sua evolução e comercialização.
                </p>
              </article>
              <article className="business-item">
                <span className="index-label">02 / DESENVOLVIMENTO PARA CLIENTES</span>
                <h3 className="business-title">Soluções tecnológicas</h3>
                <p className="business-copy">
                  Criamos websites, aplicações, sistemas e plataformas digitais para pessoas,
                  empresas e organizações, com possibilidade de acompanhamento contínuo.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section-block" id="produtos" aria-labelledby="products-title">
          <div className="page-frame">
            <SectionHeading
              label="Portefólio próprio"
              title={<>Produtos digitais próprios</>}
              description="Cada produto tem uma direcção específica. O estado indica o ponto actual de cada projecto."
            />
            <div className="products-list">
              {products.map((product, index) => (
                <article className="product-row" key={product.id}>
                  <span className="product-index">0{index + 1}</span>
                  <div>
                    <h3 className="product-name">{product.name}</h3>
                    <span className="product-category">{product.category}</span>
                  </div>
                  <p className="product-copy">{product.summary}</p>
                  <span className="status-label">{product.status}</span>
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
                    <span className="icon-link" aria-label={`${product.name}: sem website público`}>
                      <span aria-hidden="true">—</span>
                    </span>
                  )}
                </article>
              ))}
            </div>
            <div className="hero-actions">
              <a className="button-secondary" href="/products">
                Conhecer os produtos <ArrowRight className="button-icon" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section className="section-block section-rule" aria-labelledby="korvex-feature-title">
          <div className="page-frame">
            <SectionHeading
              label="Korvex"
              title={<>Gestão e automação de conversas comerciais pelo WhatsApp.</>}
              description="Uma plataforma para gerir conversas, organizar o atendimento e configurar fluxos de automação através do WhatsApp."
            />
            <figure className="product-feature-shot">
              <div className="product-shot-frame product-shot-frame-large">
                <img
                  src="/images/products/korvex/inicio.png"
                  alt="Ecrã de entrada do Korvex."
                  width={1296}
                  height={610}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </figure>
          </div>
        </section>

        <section className="feature-band" aria-labelledby="feature-title">
          <div className="page-frame feature-inner">
            <div>
              <span className="eyebrow">Desenvolvimento para clientes</span>
              <h2 className="feature-heading" id="feature-title">
                Tecnologia ajustada ao que precisa de fazer.
              </h2>
              <p className="feature-copy">
                Do primeiro website a um sistema ou plataforma, cada projecto começa por compreender
                o contexto e definir uma solução adequada.
              </p>
              <div className="hero-actions">
                <a className="button-on-dark" href="/services">
                  Ver serviços <ArrowRight className="button-icon" aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="service-lines">
              {services.slice(0, 4).map((service, index) => (
                <article className="service-item" key={service.title}>
                  <span className="service-number">0{index + 1}</span>
                  <div>
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-copy">{service.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-block" aria-labelledby="company-title">
          <div className="page-frame split-story">
            <div>
              <span className="eyebrow">Sobre a ORXU</span>
            </div>
            <div>
              <h2 className="story-heading" id="company-title">
                Uma empresa independente, com espaço para construir e evoluir.
              </h2>
              <p className="story-copy" style={{ marginTop: "1rem" }}>
                A ORXU é uma empresa de tecnologia focada no desenvolvimento de produtos digitais,
                software e plataformas. Trabalhamos tanto nas soluções que criamos e gerimos como na
                tecnologia que desenvolvemos para outras organizações.
              </p>
              <div className="hero-actions">
                <a className="button-secondary" href="/company">
                  Conhecer a empresa <ArrowRight className="button-icon" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section-rule">
          <ContactCta heading="Tem uma ideia, um produto ou um desafio tecnológico?" />
        </section>
      </main>
    </SiteShell>
  );
}
