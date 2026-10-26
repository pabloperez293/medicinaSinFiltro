
import React from "react";
import { FaBookMedical, FaGraduationCap, FaLaptopMedical } from "react-icons/fa6";

const benefits = [
  {
    icon: FaGraduationCap,
    title: "Preparación universitaria",
    description: "Contenidos para fortalecer tus conocimientos y preparar tus exámenes.",
  },
  {
    icon: FaLaptopMedical,
    title: "Clases dinámicas",
    description: "Modalidad online y presencial, con explicaciones claras y prácticas.",
  },
  {
    icon: FaBookMedical,
    title: "Material de estudio",
    description: "Recursos audiovisuales, actividades y preguntas tipo examen.",
  },
];

export default function CoursesIntro() {
  return (
    <section id="cursos" className="courses-section">
      <div className="courses-container">
        <div className="courses-visual" aria-hidden="true">
  <div className="courses-heart-target" />

  <div className="courses-visual-label">
    APRENDÉ · PRACTICÁ · APROBÁ
  </div>
</div>
        <div className="courses-content">
          <span className="courses-eyebrow">
            NUESTRA PROPUESTA EDUCATIVA
          </span>

          <h2>¿En qué consisten estos cursos?</h2>

          <p className="courses-description">
            Nuestros cursos están diseñados para estudiantes
            de carreras de la salud que buscan reforzar sus
            bases teóricas y prepararse para los exámenes
            universitarios.
          </p>

          <p className="courses-description">
            Combinamos explicaciones claras, clases
            teórico-prácticas y acompañamiento académico
            en materias como Biología Celular, Anatomía,
            Fisiología y Bioquímica.
          </p>
        </div>
      </div>

      <div className="courses-benefits">
        {benefits.map(({ icon: Icon, title, description }) => (
          <article className="benefit-card" key={title}>
            <div className="benefit-icon">
              <Icon aria-hidden="true" />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
