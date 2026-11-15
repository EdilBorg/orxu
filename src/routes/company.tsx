import { createFileRoute } from "@tanstack/react-router";

import { ContactCta, SectionHeading, SiteShell } from "@/components/site-shell";
import { principles } from "@/lib/site-content";

export const Route = createFileRoute("/company")({
  component: CompanyPage,
  head: () => ({
    meta: [
      { title: "Empresa — ORXU" },
      {
        name: "description",
        content:
          "Conheça a ORXU: uma empresa independente que desenvolve produtos digitais próprios e tecnologia para empresas e organizações.",
      },
      { property: "og:title", content: "Empresa — ORXU" },
      {
        property: "og:description",
        content:
          "Uma empresa independente dedicada a produtos digitais e ao desenvolvimento de soluções tecnológicas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function CompanyPage() {
  return (
    <SiteShell>
      <main id="conteudo">
        <section className="page-frame page-intro-block">
          <span className="eyebrow">Empresa</span>
          <h1 className="page-title">
            Tecnologia pensada para <em>construir com propósito.</em>
          </h1>
          <p className="page-intro">
            A ORXU é uma empresa independente de tecnologia focada em criar produtos digitais,
            desenvolver software e gerir plataformas tecnológicas. Construímos as nossas próprias
            soluções e ajudamos outras organizações a transformar necessidades em ferramentas
            digitais.
          </p>
        </section>

        <section className="page-frame section-block section-rule">
          <div className="split-story">
            <div>
              <span className="eyebrow">Quem somos</span>
            </div>
            <div>
              <h2 className="story-heading">Duas frentes de trabalho, um compromisso com a tecnologia.</h2>
              <p className="story-copy story-copy-spaced">
                A nossa actividade combina a criação e gestão de produtos próprios com o
                desenvolvimento tecnológico para terceiros. São áreas complementares que nos
                permitem explorar ideias, resolver desafios e acompanhar soluções ao longo do seu
                percurso.
              </p>
              <p className="story-copy story-copy-spaced">
                O trabalho pode envolver um website, uma aplicação, um sistema ou uma plataforma
                digital. O ponto de partida é sempre compreender o contexto, as pessoas envolvidas e
                o resultado que se pretende alcançar.
              </p>
            </div>
          </div>
        </section>

        <section className="page-frame section-block section-rule">
          <SectionHeading
            label="Áreas de actuação"
            title={<>Produtos próprios e desenvolvimento à medida.</>}
            description="A ORXU é simultaneamente responsável pelos seus produtos digitais e parceira tecnológica para necessidades externas."
          />
          <div className="business-grid">
            <article className="business-item">
              <span className="index-label">01 / CRIAR E GERIR</span>
              <h3 className="business-title">Produtos digitais da ORXU</h3>
              <p className="business-copy">
                Identificamos oportunidades, concebemos soluções e trabalhamos no desenvolvimento,
                gestão e comercialização dos nossos produtos.
              </p>
            </article>
            <article className="business-item">
              <span className="index-label">02 / DESENVOLVER PARA OUTROS</span>
              <h3 className="business-title">Tecnologia para organizações</h3>
              <p className="business-copy">
                Desenvolvemos soluções digitais para pessoas, empresas e organizações e podemos
                apoiar a sua manutenção e evolução contínuas.
              </p>
            </article>
          </div>
        </section>

        <section className="page-frame section-block section-rule">
          <SectionHeading
            label="Princípios de trabalho"
            title={<>Uma forma de construir que valoriza o essencial.</>}
            description="Acreditamos que boas decisões tecnológicas começam por compreender as necessidades e terminam com soluções que podem ser cuidadas ao longo do tempo."
          />
          <div className="principles-grid">
            {principles.map((principle, index) => (
              <article className="principle-item" key={principle.title}>
                <span className="index-label">0{index + 1}</span>
                <h3 className="principle-title">{principle.title}</h3>
                <p className="principle-copy">{principle.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="page-frame section-block section-rule">
          <div className="split-story">
            <div>
              <span className="eyebrow">Visão de longo prazo</span>
            </div>
            <div>
              <h2 className="story-heading">Construir tecnologia que continue a fazer sentido amanhã.</h2>
              <p className="story-copy story-copy-spaced">
                Queremos desenvolver produtos e soluções que possam crescer com as necessidades de
                quem os utiliza. Isso implica atenção às decisões de concepção, ao desenvolvimento
                cuidadoso e à gestão que acompanha uma solução digital depois de criada.
              </p>
              <p className="story-copy story-copy-spaced">
                Acreditamos num percurso de evolução contínua, informado por necessidades reais e
                pela aprendizagem obtida em cada produto e projecto.
              </p>
            </div>
          </div>
        </section>

        <section className="section-rule">
          <ContactCta heading="Vamos conversar sobre o que está a construir?" />
        </section>
      </main>
    </SiteShell>
  );
}