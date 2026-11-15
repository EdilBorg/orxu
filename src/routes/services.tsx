import { createFileRoute, Link } from "@tanstack/react-router";

import { ContactCta, SectionHeading, SiteShell } from "@/components/site-shell";
import { services } from "@/lib/site-content";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Serviços tecnológicos — ORXU" },
      {
        name: "description",
        content:
          "Desenvolvimento de websites, aplicações web, software, plataformas digitais e serviços de gestão e manutenção tecnológica.",
      },
      { property: "og:title", content: "Serviços tecnológicos — ORXU" },
      {
        property: "og:description",
        content:
          "Soluções digitais desenvolvidas pela ORXU para responder a necessidades concretas de empresas e organizações.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function ServicesPage() {
  return (
    <SiteShell>
      <main id="conteudo">
        <section className="page-frame page-intro-block">
          <span className="eyebrow">Serviços tecnológicos</span>
          <h1 className="page-title">
            Desenvolver a solução <em>adequada ao seu contexto.</em>
          </h1>
          <p className="page-intro">
            A ORXU desenvolve websites, aplicações, software, sistemas e plataformas para pessoas,
            empresas e organizações. O âmbito é definido em conversa, a partir da necessidade e do
            problema que a tecnologia deve ajudar a resolver.
          </p>
        </section>

        <section className="page-frame section-block section-rule">
          <SectionHeading
            label="Desenvolvimento para clientes"
            title={<>Soluções digitais que começam por ouvir.</>}
            description="Os serviços podem ser considerados em conjunto, conforme os requisitos e os objectivos de cada projecto."
          />
          <div className="service-detail-list">
            {services.map((service, index) => (
              <article className="service-detail" key={service.title}>
                <span className="service-number">0{index + 1}</span>
                <h2 className="service-title">{service.title}</h2>
                <div className="service-detail-body">
                  <p>
                    <strong>O que envolve</strong>
                    {service.description}
                  </p>
                  <p>
                    <strong>Que necessidade pode responder</strong>
                    {service.problem}
                  </p>
                  <p>
                    <strong>Para quem</strong>
                    {service.audience}
                  </p>
                  <p>
                    <strong>Como começar</strong>
                    {service.start}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="feature-band" aria-labelledby="service-process-title">
          <div className="page-frame feature-inner">
            <div>
              <span className="eyebrow">Primeira conversa</span>
              <h2 className="feature-heading" id="service-process-title">
                Comece pelo desafio, não pela solução.
              </h2>
            </div>
            <div>
              <p className="feature-copy">
                Conte-nos o que precisa de fazer, quem vai utilizar a solução e o que já existe. A
                partir daí, podemos conversar sobre o âmbito, as prioridades e os próximos passos
                possíveis.
              </p>
              <div className="hero-actions">
                <Link className="button-on-dark" to="/contact">
                  Discutir um projecto <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section-rule">
          <ContactCta
            heading="Está a considerar um website, sistema ou plataforma?"
            buttonLabel="Fale sobre o projecto"
          />
        </section>
      </main>
    </SiteShell>
  );
}