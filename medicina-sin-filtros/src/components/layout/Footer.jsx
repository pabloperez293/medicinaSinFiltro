
import React from "react";

const WHATSAPP_NUMBER = "5491128649996";

const WHATSAPP_URL =
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "¡Hola! Quisiera recibir información sobre los cursos de Medicina Sin Filtros."
  )}`;

const INSTAGRAM_URL =
  "https://www.instagram.com/medicinasinfiltros.clases.19/";

// Reemplazar cuando el cliente confirme su canal.
const YOUTUBE_URL = "https://www.youtube.com/@medicinasinfiltrosoficial6282";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8
        8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9
        L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8
        8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5
        a8.48 8.48 0 0 1 8 8v.5Z" />
      <path d="M8.5 8.5c.3-.3.7-.3 1 0l1 1.4c.2.3.2.6 0 .9l-.6.8
        a6.2 6.2 0 0 0 2.5 2.5l.8-.6c.3-.2.6-.2.9 0l1.4 1
        c.3.3.3.7 0 1-.6.7-1.4 1-2.2.8
        a9.4 9.4 0 0 1-5.6-5.6c-.2-.8.1-1.6.8-2.2Z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <rect x="2" y="5" width="20" height="14" rx="4" />
      <path d="m10 9 5 3-5 3V9Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <path d="m8 8-4 4 4 4" />
      <path d="m16 8 4 4-4 4" />
      <path d="m14 4-4 16" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__container">

        <div className="site-footer__top">
          <div className="site-footer__brand">
            <h2>
              MEDICINA <span>SIN FILTROS</span>
            </h2>
            <p>
              Acompañamos tu formación en ciencias de la salud
              con clases prácticas y dinámicas.
            </p>
          </div>

          <nav className="site-footer__navigation" aria-label="Enlaces del pie de página">
            <h3>Explorá</h3>
            <a href="#inicio">Inicio</a>
            <a href="#nuestras-clases">Nuestras clases</a>
            <a href="#catalogo">Materias</a>
          </nav>

          <div className="site-footer__social">
            <h3>Conectate con nosotros</h3>

            <div className="site-footer__social-icons">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="site-footer__social-link"
                aria-label="Instagram de Medicina Sin Filtros"
                title="Instagram"
              >
                <InstagramIcon />
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="site-footer__social-link"
                aria-label="WhatsApp de Medicina Sin Filtros"
                title="WhatsApp"
              >
                <WhatsAppIcon />
              </a>

              {YOUTUBE_URL ? (
                <a
                  href={YOUTUBE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="site-footer__social-link"
                  aria-label="YouTube de Medicina Sin Filtros"
                  title="YouTube"
                >
                  <YoutubeIcon />
                </a>
              ) : (
                <span
                  className="site-footer__social-link site-footer__social-link--disabled"
                  title="Canal de YouTube pendiente"
                  aria-label="YouTube próximamente"
                >
                  <YoutubeIcon />
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>© {new Date().getFullYear()} Medicina Sin Filtros. Todos los derechos reservados.</p>

          <div className="footer-developer">
            <span>Diseñado y desarrollado por</span>

            <a
              href="https://portafolioperezpablo.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-developer-link"
              aria-label="Visitar el portfolio de Pablo Pérez"
            >
              Pablo Pérez
              <CodeIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
