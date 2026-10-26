# Medicina Sin Filtros
Landing institucional en React + Vite + Tailwind CSS.

## Desarrollo
```bash
npm install
npm run dev
```

## Producción
```bash
npm run build
npm run preview
```

## Netlify
Conectar el repositorio Git o subir la carpeta `dist` luego de compilar.
- Build command: `npm run build`
- Publish directory: `dist`
- Node: 20 (`netlify.toml`)
- `public/_redirects` se copia automáticamente a `dist/_redirects`.

No se requieren variables de entorno. Los números de WhatsApp están en `src/data/content.js`.
Para actualizar cursos, editar `src/data/content.js`.
