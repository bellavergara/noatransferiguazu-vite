# NOA Transfer Iguazú

Sitio web de NOA Transfer Iguazú — traslados y tours en Puerto Iguazú, Misiones.

## Stack
Vite + React + TypeScript + Tailwind CSS. Sitio 100% estático (sin backend).

## Desarrollo
```sh
npm install
npm run dev
```

## Build y deploy (Netlify)
```sh
npm run build
```
Genera la carpeta `dist/`, que es lo que se publica.

- Build command: `npm run build`
- Publish directory: `dist`

`public/_redirects` hace que cualquier ruta sirva `index.html` (necesario para React Router).
