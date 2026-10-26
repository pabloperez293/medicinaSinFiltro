
import React, { useEffect, useRef, useState } from "react";
import { FaHeartPulse, FaXmark } from "react-icons/fa6";
import { navigation } from "../../data/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const touchStartX = useRef(null);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchMove = (event) => {
    if (touchStartX.current === null) return;

    const distance = touchStartX.current - event.touches[0].clientX;
    if (distance > 75) setIsOpen(false);
  };

  const handleTouchEnd = () => {
    touchStartX.current = null;
  };

  return (
    <>
      <header className="nav-shell">
        <a className="mobile-brand" href="#inicio">
          MEDICINA <span>SIN FILTROS</span>
        </a>

        <nav className="desktop-nav" aria-label="Navegación principal">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="nav-pill"
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="mobile-trigger"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaHeartPulse aria-hidden="true" />
        </button>
      </header>

      <div
        className={`drawer-overlay ${isOpen ? "visible" : ""}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

<aside
  id="mobile-menu"
  className={`mobile-drawer ${isOpen ? "opened" : ""}`}
  aria-hidden={!isOpen}
  {...(!isOpen ? { inert: "" } : {})}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="drawer-head">
          <span>MENÚ</span>
          <button
            type="button"
            aria-label="Cerrar menú"
            onClick={() => setIsOpen(false)}
          >
            <FaXmark />
          </button>
        </div>

        <nav aria-label="Navegación móvil">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}
