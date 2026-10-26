
import HeartIcon from "../ui/HeartIcon";

export default function Hero() {
  return (
    <section
      className="hero"
      id="inicio"
      aria-labelledby="hero-title"
    >
      <div className="hero-copy">
        <span className="eyebrow">
          <span className="eyebrow-dot" />
          INSCRIPCIONES ABIERTAS · 2026
        </span>

        <h1 id="hero-title">
          MEDICINA
          <br />
          SIN FILTROS
        </h1>

        <p>
          POTENCIÁ TU CARRERA EN SALUD CON CLASES
          DINÁMICAS Y PRÁCTICAS
        </p>
      </div>

      <div className="hero-art">
        <HeartIcon />
      </div>
    </section>
  );
}
