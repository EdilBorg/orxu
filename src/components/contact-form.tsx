import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { contactCategories, contactSchema, type ContactFormValues } from "@/lib/contact-schema";

const errorMessage = (error: { message?: string } | undefined) => error?.message;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

  const onSubmit = (values: ContactFormValues) => {
    const subject = `${values.category} — ${values.name}`;
    const body = [
      `Nome: ${values.name}`,
      `Email: ${values.email}`,
      `Assunto: ${values.category}`,
      "",
      values.message,
    ].join("\n");
    const mailto = `mailto:orxugroup@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.assign(mailto);
    reset();
  };

  return (
    <form className="contact-form" noValidate onSubmit={handleSubmit(onSubmit)}>
      <div className="form-row">
        <div className="form-field">
          <label className="form-label" htmlFor="contact-name">
            Nome
          </label>
          <input
            className="form-control"
            id="contact-name"
            autoComplete="name"
            maxLength={120}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            {...register("name")}
          />
          {errorMessage(errors.name) ? (
            <p className="form-error" id="contact-name-error" role="alert">
              {errors.name?.message}
            </p>
          ) : null}
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="contact-email">
            Email
          </label>
          <input
            className="form-control"
            id="contact-email"
            type="email"
            autoComplete="email"
            maxLength={254}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            {...register("email")}
          />
          {errorMessage(errors.email) ? (
            <p className="form-error" id="contact-email-error" role="alert">
              {errors.email?.message}
            </p>
          ) : null}
        </div>
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="contact-category">
          Assunto
        </label>
        <select
          className="form-control"
          id="contact-category"
          defaultValue=""
          aria-invalid={Boolean(errors.category)}
          aria-describedby={errors.category ? "contact-category-error" : undefined}
          {...register("category")}
        >
          <option value="" disabled>
            Seleccione um assunto
          </option>
          {contactCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errorMessage(errors.category) ? (
          <p className="form-error" id="contact-category-error" role="alert">
            {errors.category?.message}
          </p>
        ) : null}
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="contact-message">
          Mensagem
        </label>
        <textarea
          className="form-control"
          id="contact-message"
          maxLength={2000}
          placeholder="Conte-nos brevemente o que pretende desenvolver."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : "contact-message-limit"}
          {...register("message")}
        />
        {errorMessage(errors.message) ? (
          <p className="form-error" id="contact-message-error" role="alert">
            {errors.message?.message}
          </p>
        ) : (
          <p className="form-note" id="contact-message-limit">
            Até 2.000 caracteres.
          </p>
        )}
      </div>

      <button className="button-primary" type="submit">
        Preparar email <span aria-hidden="true">→</span>
      </button>
      <p className="form-note">
        O formulário prepara uma mensagem no seu programa de email. Reveja-a e envie para
        orxugroup@gmail.com; não é enviada automaticamente por este website.
      </p>
    </form>
  );
}