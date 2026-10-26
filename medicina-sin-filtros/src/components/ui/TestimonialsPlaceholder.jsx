import React from "react";

export default function TestimonialsPlaceholder() {
  return (
    <div className="why-testimonials" aria-labelledby="testimonials-title">
      <div className="why-testimonials-copy">
        <span className="why-eyebrow">VOCES DE NUESTRA COMUNIDAD</span>
        <h3 id="testimonials-title">Cada experiencia cuenta.</h3>
        <p>
          Estamos preparando un espacio para compartir experiencias reales de
          estudiantes de Medicina Sin Filtros.
        </p>
        <span className="why-testimonials-note">Próximamente: testimonios de estudiantes.</span>
      </div>
      <div className="why-testimonials-art" aria-hidden="true">
        <span className="why-chat why-chat-one">“ ”</span>
        <span className="why-chat why-chat-two">♥</span>
        <span className="why-chat why-chat-three">✦</span>
      </div>
    </div>
  );
}
