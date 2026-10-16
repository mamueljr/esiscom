# ESISCOM

## SItio web de la empresa ESISCOM

## Cambios
### 2026-10-16 - Enlace EManager en header
- Se agregó `EManager` al final del menú (`constants.tsx: NAV_ITEMS`).
- URL externa: `https://investigacioneducativafccf.net/esiscom/manager/login`.
- Se extendió `NavItem` (`types.ts`) con `external?: boolean`.
- `components/Navbar.tsx` (desktop y móvil) abre enlaces externos con `target="_blank" rel="noopener noreferrer"`.
- Verificación: `npx tsc --noEmit` y `npm run build` OK.

## Despliegue (GitHub Pages sin Actions)
- Actions está bloqueado por billing (`account is locked`), así que Pages usa **Deploy from a branch**.
- Rama `gh-pages` (huérfana) contiene el contenido de `dist/` + `.nojekyll`.
- Pasos: `npm run build` → copiar `dist/` a `gh-pages` → `git push origin gh-pages` → `POST /repos/mamueljr/esiscom/pages/builds` si no auto-construye.
- Fuente Pages: `build_type: legacy`, `source: {branch: gh-pages, path: /}`.
- El push a `main` solo guarda código; ya no despliega (el workflow `deploy.yml` falla por billing y se ignora).

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
