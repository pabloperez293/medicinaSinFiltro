import React, { useEffect, useRef, useState } from "react";

// Fotografías originales. Guardalas en public/images.
const photos = [
  { src: "/images/medicinaTeam2.jpeg", alt: "Estudiantes trabajando en una clase presencial alrededor de una mesa", label: "Clases presenciales" },
  { src: "/images/medicinaTeam1.jpeg", alt: "Estudiantes tomando apuntes durante un encuentro presencial", label: "Aprendizaje en grupo" },
  { src: "/images/medicinaTeam3.jpeg", alt: "Sala preparada con mesa, sillas y pizarra", label: "Nuestro espacio" },
  { src: "/images/medicinaTeam4.jpeg", alt: "Equipo preparado para transmitir clases online", label: "Clases online" },
  { src: "/images/medicinaTeam5.jpeg", alt: "Computadora mostrando una clase virtual de anatomía", label: "Anatomía online" },
];

export default function ClassGallery() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const touchX = useRef(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % photos.length);
    }, 4800);
    return () => window.clearInterval(timer);
  }, [paused, reducedMotion]);

  const move = (step) => setActive((current) => (current + step + photos.length) % photos.length);

  return (
    <section className="class-gallery" id="nuestras-clases" aria-labelledby="gallery-title">
      <div className="class-gallery__container">
        <header className="class-gallery__header">
          <span className="class-gallery__eyebrow">CONOCÉ MEDICINA SIN FILTROS</span>
          <h2 id="gallery-title">Así vivimos <span>nuestras clases.</span></h2>
          <p>Conocé nuestros encuentros presenciales, el espacio de estudio y las clases online.</p>
        </header>

        <div className="class-carousel" aria-roledescription="carrusel" aria-label="Galería de clases"
          onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)} onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
          }}
          onTouchStart={(event) => { touchX.current = event.touches[0].clientX; }}
          onTouchEnd={(event) => {
            if (touchX.current === null) return;
            const delta = event.changedTouches[0].clientX - touchX.current;
            if (Math.abs(delta) > 45) move(delta < 0 ? 1 : -1);
            touchX.current = null;
          }}
        >
          <div className="class-carousel__stage">
            {photos.map((photo, index) => {
              const relative = (index - active + photos.length) % photos.length;
              const offset = relative <= 2 ? relative : relative - photos.length;
              return (
                <figure key={photo.src} className={`class-carousel__slide ${offset === 0 ? "is-active" : ""}`}
                  style={{ "--offset": offset }} aria-hidden={offset !== 0}>
                  <img src={photo.src} alt={offset === 0 ? photo.alt : ""} loading={index === 0 ? "eager" : "lazy"} decoding="async" />
                  <figcaption>{photo.label}</figcaption>
                </figure>
              );
            })}
          </div>

          <div className="class-carousel__controls">
            <button className="class-carousel__arrow" type="button" onClick={() => move(-1)} aria-label="Foto anterior">‹</button>
            <div className="class-carousel__dots" aria-label="Seleccionar fotografía">
              {photos.map((photo, index) => (
                <button key={photo.src} type="button" className={`class-carousel__dot ${index === active ? "is-active" : ""}`}
                  onClick={() => setActive(index)} aria-label={`Mostrar ${photo.label}`} aria-current={index === active ? "true" : undefined} />
              ))}
            </div>
            <button className="class-carousel__arrow" type="button" onClick={() => move(1)} aria-label="Foto siguiente">›</button>
          </div>
          <p className="class-carousel__counter" aria-live="off">{active + 1} / {photos.length}</p>
        </div>
      </div>
    </section>
  );
}
