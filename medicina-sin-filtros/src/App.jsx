import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import { coursesData } from './data/content';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode] = useState(true); // Forzamos true para pintar la paleta #323232 fija

  useEffect(() => {
    // Inyectamos la clase dark para amoldar el fondo
    document.documentElement.classList.add('dark');
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-brandDark text-white transition-colors duration-300 font-sans selection:bg-brandRed selection:text-white">
      
      {/* Sidebar de Escritorio */}
      <Sidebar 
        isOpen={sidebarOpen} 
        setIsOpen={setSidebarOpen} 
        darkMode={darkMode} 
        setDarkMode={() => {}} 
      />

      {/* CONTENIDO PRINCIPAL: Ajustado con padding izquierdo exacto para el Sidebar (lg:pl-80) */}
      <main className="lg:pl-80 min-h-screen p-8 md:p-16 space-y-24">
        <div className="max-w-5xl mx-auto">
          
          {/* ================= SECCIÓN 1: INICIO (Tu captura 1) ================= */}
          <section id="cursos" className="pt-12 lg:pt-0 border-b border-brandMuted/20 pb-16">
            <header className="max-w-3xl mb-12">
              <span className="text-xs font-black tracking-widest text-brandRed uppercase border border-brandRed/40 px-3 py-1 rounded-md">
                Elegí aprender de verdad
              </span>
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter mt-6 mb-6 leading-none">
                MUCHOS OFRECEN CURSOS, <br />
                PERO SOLO ACÁ <span className="text-brandRed">GARANTIZÁS TU FUTURO.</span>
              </h1>
              <p className="text-lg text-brandMuted font-medium max-w-xl">
                Clases 100% en vivo, sin vídeos pregrabados aburridos. Grupos reducidos para sacarte todas las dudas con profesionales en tiempo real.
              </p>
            </header>

            {/* Grid de Tarjetas de Cursos de Alto Contraste */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {coursesData.map((course) => (
                <article 
                  key={course.id} 
                  className="bg-[#2a2a2a] border-2 border-brandMuted/20 rounded-2xl p-8 transition-all hover:border-brandRed group flex flex-col justify-between h-72"
                >
                  <div>
                    <div className="flex justify-between items-start">
                      <span className="text-xs font-black px-2.5 py-1 bg-brandRed text-white rounded-md uppercase tracking-wider">
                        {course.level}
                      </span>
                      <span className="text-sm font-bold text-brandMuted">{course.category}</span>
                    </div>
                    <h3 className="text-2xl font-black mt-6 tracking-tight group-hover:text-brandRed transition-colors">
                      {course.title}
                    </h3>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-brandMuted/10">
                    <span className="text-sm font-bold text-brandMuted">Inscripción Abierta</span>
                    <span className="text-brandRed font-black text-lg">⭐ {course.rating.toFixed(1)}</span>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* ================= SECCIÓN 2: BENEFICIOS & FAQS (Tu captura 2) ================= */}
          <section id="beneficios" className="grid grid-cols-1 lg:grid-cols-2 gap-12 border-b border-brandMuted/20 pb-16">
            <div>
              <h2 className="text-3xl font-black tracking-tight mb-6 uppercase">
                ¿Por qué nuestro método <span className="text-brandRed">realmente funciona?</span>
              </h2>
              <ul className="space-y-4 text-brandMuted font-medium">
                <li className="flex items-start gap-2">
                  <span className="text-brandRed font-bold">✓</span> 
                  <span><strong>Horas reales en vivo:</strong> Teoría y práctica resueltas directamente en clase.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brandRed font-bold">✓</span> 
                  <span><strong>Grupos reducidos:</strong> Un promedio de 20 alumnos para garantizar atención personalizada.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brandRed font-bold">✓</span> 
                  <span><strong>Repetición gratuita:</strong> Si necesitas reforzar, podés volver a cursarlo sin costo.</span>
                </li>
              </ul>
            </div>

            {/* Bloque de FAQ Acordeón Simple */}
            <div id="faqs" className="bg-[#2a2a2a] p-8 rounded-2xl border border-brandMuted/20">
              <h3 className="text-xl font-black mb-6 text-white uppercase tracking-tight">Preguntas Frecuentes</h3>
              <div className="space-y-4">
                <div className="border-b border-brandMuted/20 pb-3">
                  <h4 className="font-bold text-white text-sm mb-1">¿Qué pasa si me pierdo una clase?</h4>
                  <p className="text-xs text-brandMuted">Todas las clases quedan grabadas en la plataforma con acceso de por vida.</p>
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm mb-1">¿Los planes están actualizados?</h4>
                  <p className="text-xs text-brandMuted">Sí, los contenidos se actualizan constantemente incorporando avances y herramientas de IA.</p>
                </div>
              </div>
            </div>
          </section>

          {/* ================= SECCIÓN 3: RESEÑAS (Tu captura 3) ================= */}
          <section id="testimonios" className="border-b border-brandMuted/20 pb-16">
            <h2 className="text-3xl font-black tracking-tight mb-8 text-center uppercase">
              La voz de nuestros <span className="text-brandRed">estudiantes</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#2a2a2a] p-8 rounded-2xl border-l-4 border-brandRed">
                <p className="text-sm font-medium italic text-white">
                  "Poder revivir los videos de mis clases para volver a escuchar la respuesta del profe es excelente. Incluso pude volver a cursarlo sin costo alguno."
                </p>
                <span className="block mt-4 text-xs font-black uppercase text-brandMuted">— Franco Quiroga (Data Science)</span>
              </div>
              <div className="bg-[#2a2a2a] p-8 rounded-2xl border-l-4 border-brandMuted">
                <p className="text-sm font-medium italic text-white">
                  "Al fin un lugar donde realmente aprendés. Éramos pocos por clase y podías sacarte todas tus dudas directamente con el docente en tiempo real."
                </p>
                <span className="block mt-4 text-xs font-black uppercase text-brandMuted">— Benjamín Godoy (React Developer)</span>
              </div>
            </div>
          </section>

          {/* ================= SECCIÓN 4: CONTACTO (Tu captura 4) ================= */}
          <section id="contacto" className="bg-[#2a2a2a] p-8 md:p-12 rounded-2xl border-2 border-brandRed/30 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-2">
                ¿Necesitás ayuda para elegir tu camino?
              </h2>
              <p className="text-sm text-brandMuted font-medium">
                Resolvé tus dudas al instante con nuestro equipo experto de asesores académicos y profesionales.
              </p>
            </div>
            <button className="w-full md:w-auto px-8 py-4 bg-brandRed text-white font-black uppercase tracking-wider rounded-xl shadow-lg hover:bg-red-700 active:scale-95 transition-all whitespace-nowrap">
              Solicitar Asesoramiento
            </button>
          </section>

        </div>
      </main>
    </div>
  );
}
