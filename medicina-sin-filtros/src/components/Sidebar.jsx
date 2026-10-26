import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { FiSun, FiMoon, FiBookmark, FiAward, FiHelpCircle, FiGrid } from 'react-icons/fi';
import { useSwipe } from '../hooks/useSwipe';

export default function Sidebar({ isOpen, setIsOpen, darkMode, setDarkMode }) {
  const swipeHandlers = useSwipe(() => setIsOpen(false));

  return (
    <>
      {/* Botón de Corazón Móvil - Solo visible en pantallas chicas */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Alternar menú"
        className="lg:hidden fixed top-4 left-4 z-50 p-3 bg-brandRed text-white rounded-full shadow-xl transition-transform active:scale-95"
      >
        <FaHeart className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'animate-pulse'}`} />
      </button>

      {/* Overlay Móvil */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/60 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* MENÚ LATERAL: Estructura fija en Escritorio igual a las imágenes */}
      <aside
        {...swipeHandlers}
        className={`fixed top-0 left-0 h-full w-80 bg-brandDark border-r border-brandMuted/30 p-8 z-40 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full justify-between">
          
          {/* Identidad de la Marca superior */}
          <div>
            <div className="flex items-center gap-3 mb-12">
              <FaHeart className="text-brandRed w-7 h-7" />
              <h2 className="text-xl font-black tracking-tighter text-white uppercase">
                Medicina <span className="text-brandRed font-light">SF</span>
              </h2>
            </div>
            
            {/* Secciones del Menú */}
            <nav className="space-y-3" aria-label="Menu principal">
              <a href="#cursos" className="flex items-center gap-3 p-3.5 rounded-xl font-bold bg-brandRed text-white transition-all shadow-md">
                <FiGrid className="w-5 h-5" />
                <span>Explorar Cursos</span>
              </a>
              <a href="#beneficios" className="flex items-center gap-3 p-3.5 rounded-xl font-medium text-brandMuted hover:text-white hover:bg-white/5 transition-all">
                <FiAward className="w-5 h-5" />
                <span>Beneficios IT</span>
              </a>
              <a href="#testimonios" className="flex items-center gap-3 p-3.5 rounded-xl font-medium text-brandMuted hover:text-white hover:bg-white/5 transition-all">
                <FiBookmark className="w-5 h-5" />
                <span>Reseñas Alumnos</span>
              </a>
              <a href="#faqs" className="flex items-center gap-3 p-3.5 rounded-xl font-medium text-brandMuted hover:text-white hover:bg-white/5 transition-all">
                <FiHelpCircle className="w-5 h-5" />
                <span>Preguntas Frecuentes</span>
              </a>
            </nav>
          </div>

          {/* Controlador Inferior */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center justify-center gap-2 p-3.5 w-full border border-brandMuted/40 text-white rounded-xl font-bold transition-colors hover:bg-white/5"
          >
            {darkMode ? <FiSun className="w-5 h-5 text-amber-400" /> : <FiMoon className="w-5 h-5 text-brandMuted" />}
            <span className="text-sm">Alternar Vista</span>
          </button>

        </div>
      </aside>
    </>
  );
}
