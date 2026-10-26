
import React, { useState } from "react";
import CourseHeart from "../ui/CourseHeart";

const WHATSAPP_NUMBER = "5491128649996";


const COURSES = [
  {
    id: "anatomia",
    number: "01",
    name: "Anatomía Humana",
    detail: "Locomotor, Esplacnología y Neuroanatomía.",
    image: "/images/anatomia.jpg",
  },
  {
    id: "histologia",
    number: "02",
    name: "Embriología y Genética",
    detail: "Consultá por los temas, modalidades y horarios disponibles.",
    image: "/images/histologia.jpeg",
  },
  {
    id: "fisiologia",
    number: "03",
    name: "Fisiología y Bioquímica",
    detail: "Consultá por los temas, modalidades y horarios disponibles.",
    image: "/images/fisiologia.jpeg",
  },
  {
    id: "patologia",
    number: "04",
    name: "Patología y Semiología",
    detail: "Consultá por los temas, modalidades y horarios disponibles.",
    image: "/images/patologia.jpeg",
  },
];


function getWhatsAppUrl(course) {
  const message = `¡Hola! Quisiera información sobre el curso de ${course.name} de Medicina Sin Filtros. ¿Me pueden informar horarios, modalidad y precios?`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function CourseImage({ course }) {
  const [failed, setFailed] = useState(false);

  if (failed) return null;

  return (
    <div className="course-card__image-wrap">
      <img
        className="course-card__image"
        src={course.image}
        alt={`Ilustración de ${course.name}`}
        loading="lazy"
        onError={() => setFailed(true)}
      />
    </div>
  );
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
          <span className="course-catalog__eyebrow">
            TU PRÓXIMO PASO
          </span>

          <h2 id="course-catalog-title">
            Elegí tu <span>materia.</span>
          </h2>

          <p>
            Encontrá el acompañamiento que necesitás.
            Seleccioná una materia y consultanos por
            disponibilidad, modalidad y horarios.
          </p>
        </header>

        <div className="course-catalog__grid">
          {COURSES.map((course) => {
            const isOpen = activeId === course.id;
            const panelId = `course-panel-${course.id}`;

            return (
              <article
                key={course.id}
                className={`course-card ${
                  isOpen ? "course-card--open" : ""
                }`}
              >
                <button
                  type="button"
                  className="course-card__trigger"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() =>
                    setActiveId(isOpen ? null : course.id)
                  }
                >
                  <span className="course-card__number">
                    {course.number}
                  </span>

                  <span className="course-card__name">
                    {course.name}
                  </span>

                  <CourseHeart open={isOpen} />
                </button>

                <div
  id={panelId}
  className={`course-card__reveal ${
    isOpen ? "is-open" : ""
  }`}
  aria-hidden={!isOpen}
  {...(!isOpen ? { inert: "" } : {})}
>
                  <div className="course-card__panel">
                    <div className="course-card__content">
                      <CourseImage course={course} />

                      <div className="course-card__information">
                        <h3>{course.name}</h3>

                        <p>{course.detail}</p>

                        <a
                          href={getWhatsAppUrl(course)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="course-card__cta"
                        >
                          Consultar por WhatsApp
                          <span aria-hidden="true">↗</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <p className="course-catalog__note">
          ¿No encontrás tu materia?{" "}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              "¡Hola! Quisiera consultar por otras materias disponibles en Medicina Sin Filtros."
            )}`}
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
