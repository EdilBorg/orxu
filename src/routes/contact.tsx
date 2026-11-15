import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Mail } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contacto — ORXU" },
      {
        name: "description",
        content:
          "Contacte a ORXU para discutir produtos, projectos, parcerias e soluções tecnológicas.",
      },
      { property: "og:title", content: "Contacto — ORXU" },
      {
        property: "og:description",
        content:
          "Entre em contacto com a ORXU por email ou prepare uma mensagem sobre o seu projecto.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function ContactPage() {
  return (
    <SiteShell>
      <main id="conteudo">
        <section className="page-frame page-intro-block">
          <span className="eyebrow">Contacto</span>
          <h1 className="page-title">
            Vamos falar sobre <em>o que pretende construir.</em>
          </h1>
          <p className="page-intro">
            Para discutir um projecto, produto, parceria ou necessidade tecnológica, envie-nos uma
            mensagem. Se preferir, contacte-nos directamente por email.
          </p>
        </section>

        <section className="page-frame contact-layout">
          <aside className="contact-details" aria-labelledby="contact-email-heading">
            <span className="eyebrow">Contacto directo</span>
            <h2 className="story-heading story-heading-spaced" id="contact-email-heading">
              Uma conversa começa com uma mensagem.
            </h2>
            <p>
              Diga-nos, de forma breve, o que está a planear e qual é o contexto. Responderemos pelo
              endereço de email indicado na sua mensagem.
            </p>
            <a className="contact-email" href="mailto:orxugroup@gmail.com">
              <Mail className="button-icon" aria-hidden="true" /> orxugroup@gmail.com
              <ArrowUpRight className="button-icon" aria-hidden="true" />
            </a>
          </aside>

          <div>
            <h2 className="service-title form-heading">Enviar uma mensagem</h2>
            <ContactForm />
          </div>
        </section>
      </main>
    </SiteShell>
  );
}