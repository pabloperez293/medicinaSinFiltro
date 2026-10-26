import React, { useEffect, useRef, useState } from "react";
import HeartIcon from "./HeartIcon";

// Cada tarjeta revela el mismo diseño de corazón al entrar en pantalla.
// No interfiere con FlyingHeart ni con el recorrido entre Hero y Cursos.
export default function BenefitHighlight({ number, title, description }) {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -20px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <article ref={cardRef} className={`why-benefit${visible ? " is-visible" : ""}`}>
      <div className="why-benefit-top">
        <span className="why-benefit-number" aria-hidden="true">{number}</span>
        <span className="why-benefit-heart" aria-hidden="true">
          <HeartIcon />
        </span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
