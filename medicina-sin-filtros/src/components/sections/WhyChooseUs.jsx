import React from "react";
import BenefitHighlight from "../ui/BenefitHighlight";
import TestimonialsPlaceholder from "../ui/TestimonialsPlaceholder";

const reasons = [
  {
    number: "01",
    title: "Explicaciones claras",
    description:
      "Trabajamos los conceptos paso a paso para que puedas comprenderlos y relacionarlos.",
  },
  {
    number: "02",
    title: "Práctica orientada a exámenes",
    description:
      "Combinamos teoría, actividades y preguntas para acompañar tu preparación universitaria.",
  },
  {
    number: "03",
    title: "Acompañamiento académico",
    description:
      "Un espacio para consultar dudas y reforzar los temas que te resulten más difíciles.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why-section" id="nosotros" aria-labelledby="why-title">
      <div className="why-container">
        <header className="why-header">
          <span className="why-eyebrow">NUESTRA FORMA DE ENSEÑAR</span>
          <h2 id="why-title"><span>¿</span>Por qué elegirnos<span>?</span></h2>
          <p>
            Queremos que estudiar una carrera de salud sea una experiencia más
            clara, práctica y acompañada.
          </p>
        </header>

        <div className="why-benefits" aria-label="Nuestros diferenciales">
          {reasons.map((reason) => (
            <BenefitHighlight key={reason.number} {...reason} />
          ))}
        </div>

        <TestimonialsPlaceholder />
      </div>
    </section>
  );
}
