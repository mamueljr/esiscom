# ESISCOM

## SItio web de la empresa ESISCOM

## Cambios
### Rediseño "Moderno audaz" (código en `main`, publicado en `gh-pages`)
- Sistema visual: tinta `#070b14` + acento voltio `#a3e635`, titulares Sora + cuerpo Inter. Fin del azul default y gradientes genéricos.
- Hero: titular gigante, foto en duotono, badge vivo de horario (hora de Chihuahua, Lun–Vie 9–6 / Sáb 9–1) y stats con conteo animado. Sin fallbacks a picsum.
- Cinta marquee voltio con clientes reales; servicios como filas numeradas 01–03 con hover invertido; soporte remoto estilo terminal; testimonios editoriales; sección "Cómo trabajamos"; banda de cierre "¿FALLÓ TU EQUIPO HOY?"; contacto "Hablemos." con mapa en modo oscuro; footer con marca de agua gigante.
- Tendencias 2026 aplicadas: dark mode, tipografía como ancla, micro-interacciones con propósito, WCAG 2.2 (skip-link, focos visibles, lazy en imágenes), JSON-LD `ProfessionalService` para SEO/IA.
- Verificación: `npx tsc --noEmit` y `npm run build` OK.
### 2026-10-16 - Enlace EManager en header
- Se agregó `EManager` al final del menú (`constants.tsx: NAV_ITEMS`).
- URL externa: `https://investigacioneducativafccf.net/esiscom/manager/login`.
- Se extendió `NavItem` (`types.ts`) con `external?: boolean`.
- `components/Navbar.tsx` (desktop y móvil) abre enlaces externos con `target="_blank" rel="noopener noreferrer"`.

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
