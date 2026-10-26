/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // Forzamos el modo oscuro activo por defecto mediante clase para la estética
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brandDark: '#323232',    // Tu fondo oscuro base
        brandRed: '#A81218',     // Tu rojo de marca
        brandMuted: '#9D5B56',   // Tu tono terracota secundario
      },
    },
  },
  plugins: [],
}
