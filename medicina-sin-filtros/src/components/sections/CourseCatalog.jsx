import React, { useState } from "react";
import CourseHeart from "../ui/CourseHeart";

const COURSES = [
  {
    id: "anatomia",
    name: "Anatomía Humana",
    number: "01",
    detail: "Locomotor, Esplacnología y Neuroanatomía.",
  },
  {
    id: "histologia",
    name: "Histología, Embriología y Genética",
    number: "02",
    detail: "Consultá por los temas, modalidades y horarios disponibles.",
  },
  {
    id: "fisiologia",
    name: "Fisiología y Bioquímica",
    number: "03",
    detail: "Consultá por los temas, modalidades y horarios disponibles.",
  },
  {
    id: "patologia",
    name: "Patología y Semiología",
    number: "04",
    detail: "Consultá por los temas, modalidades y horarios disponibles.",
  },
];

// Cambiá este número si la academia confirma otro WhatsApp de inscripciones.
const WHATSAPP_NUMBER = "5491128649996";

function getWhatsAppUrl(course) {
  const message = `¡Hola! Quisiera información sobre el curso de ${course.name} de Medicina Sin Filtros. ¿Me pueden informar horarios, modalidad y precios?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function CourseCatalog() {
  const [activeId, setActiveId] = useState(null);

  return (
    <section
      className="course-catalog"
      id="catalogo"
      aria-labelledby="course-catalog-title"
    >
      <div className="course-catalog__container">
        <header className="course-catalog__header">
          <span className="course-catalog__eyebrow">TU PRÓXIMO PASO</span>
          <h2 id="course-catalog-title">
            Elegí tu <span>materia.</span>
          </h2>
          <p>
            Encontrá el acompañamiento que necesitás. Seleccioná una materia y
            consultanos por disponibilidad, modalidad y horarios.
          </p>
        </header>

        <div className="course-catalog__grid">
          {COURSES.map((course) => {
            const isOpen = activeId === course.id;
            const panelId = `course-panel-${course.id}`;
            return (
              <article
                className={`course-card${isOpen ? " course-card--open" : ""}`}
                key={course.id}
              >
                <button
                  type="button"
                  className="course-card__trigger"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setActiveId(isOpen ? null : course.id)}
                >
                  <span className="course-card__number">{course.number}</span>
                  <span className="course-card__name">{course.name}</span>
                  <CourseHeart open={isOpen} />
                </button>
                <div
                  id={panelId}
                  className="course-card__panel"
                  hidden={!isOpen}
                >
                  <p>{course.detail}</p>
                  <a
                    href={getWhatsAppUrl(course)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="course-card__cta"
                  >
                    Consultar por WhatsApp <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
        <p className="course-catalog__note">
          ¿No encontrás tu materia?{" "}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("¡Hola! Quisiera consultar por otras materias disponibles en Medicina Sin Filtros.")}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Escribinos y consultanos.
          </a>
        </p>
      </div>
    </section>
  );
}
