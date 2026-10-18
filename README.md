# ESISCOM

## SItio web de la empresa ESISCOM

## Cambios
### 2026-10-17 — Chat de IA fuera, WhatsApp dentro + arreglos de móvil y SEO social
- **Asistente de IA desactivado** y sustituido por `components/WhatsAppButton.tsx` (botón flotante con mensaje precargado). Motivo: la `GEMINI_API_KEY` se inlineaba en el bundle público (`vite.config.ts → define`) y en el build de Pages nunca se inyectaba, así que el widget respondía siempre con un mensaje de error. `components/ChatWidget.tsx` y `services/geminiService.ts` quedan en el repo documentados para reactivarlo con un proxy serverless. Efecto colateral: `@google/genai` ya no entra al bundle (241 kB, 73.6 kB gzip).
- **Arreglo de navegación**: el ítem "Ubicación" apuntaba a `#location`, que no existía; ahora va a `#contact` (mapa + datos).
- **20 años** unificado en hero, footer, página de precios y `<meta description>` (antes decía 15 en tres lugares y 20 en otro).
- **SEO social**: `og:*`, `twitter:card`, `canonical`, `theme-color`, favicon SVG y JSON-LD ampliado (`url`, `image`, `priceRange`, `currenciesAccepted`, `areaServed`). La tarjeta usa `images/hero-bg.jpg` (960×538, la proporción más cercana a 1.91:1).
- **Móvil**: el titular del hero bajó a `text-4xl` en pantallas chicas (antes `text-5xl` partía "TU / TECNOLOGÍA"); el encabezado de "Servicios y Precios" ya no se encima con el botón Volver; la ⭐ del plan recomendado es ahora un badge de marca.
- **Accesibilidad**: `aria-label` dinámico y `aria-expanded`/`aria-controls` en el menú móvil. Corregido el texto "FAP" del fallback de IA.
- Verificación: `npx tsc --noEmit` y `npm run build` OK; revisado en Chrome a 390 px y 1440 px (sin scroll horizontal).

### Página "Servicios y Precios" (vista interna `#servicios-detalle`)
- Nuevo componente `components/ServicesDetail.tsx` con precios de taller, soporte externo, empresas, zonas de cobertura, "Cómo trabajamos" y "Por qué ESISCOM".
- Todos los CTA usan WhatsApp prellenado (`wa.me/526142541066?text=...`).
- Datos reales: SSD 240 GB desde $980, zonas por distancia (1 sin cargo / 2 +$150 / 3 +$250), 20 años de experiencia, revisión técnica de oficina gratis.
- Navegación SPA sin dependencias: estado `view` en `App.tsx` + hash `#servicios-detalle` (soporta back/forward). Botones "Precios" en Navbar (desktop/móvil), "Ver precios" en Hero, "Precios y servicios" en Footer y en las filas de Services.
- Verificación: `npx tsc --noEmit` y `npm run build` OK.
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
- Actions está bloqueado por billing (`account is locked`), así que Pages usa **Deploy from a branch** (configurado una vez vía API: `build_type: legacy`, `source: {branch: gh-pages, path: /}`).
- Rama `gh-pages` (huérfana) contiene solo el build: `index.html` + `assets/` + `images/` + `.nojekyll`. El push a `main` solo guarda código; el workflow `deploy.yml` falla por billing y se ignora.
- Procedimiento completo (desde `main`, con árbol limpio):

```bash
# 1. Verificar y compilar
npx tsc --noEmit
npm run build

# 2. Respaldar el build y pasar a la rama gh-pages
rm -rf /tmp/esiscom-dist && cp -r dist /tmp/esiscom-dist
git checkout gh-pages
git rm -rq --cached assets images index.html .nojekyll 2>/dev/null
rm -rf assets images index.html
cp -r /tmp/esiscom-dist/* .
touch .nojekyll
git add -A -- assets images index.html .nojekyll  # paths explícitos: NO agregar node_modules/ ni dist/
git commit -m "Deploy <descripción>"
git push origin gh-pages
git checkout main

# 3. Disparar el build de Pages (solo si no auto-construye con el push)
gh api repos/mamueljr/esiscom/pages/builds -X POST

# 4. Verificar en vivo (esperar 1-2 min)
gh api repos/mamueljr/esiscom/pages/builds --paginate -q '.[0] | {status, commit: .commit[0:7]}'
curl -s https://mamueljr.github.io/esiscom/ | grep -o 'assets/[^"]*'
```
- Sitio en vivo: https://mamueljr.github.io/esiscom/

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install`
2. (Opcional) El asistente de IA está desactivado. Si lo reactivas, define `GEMINI_API_KEY` en [.env.local](.env.local) — pero recuerda que Vite la inlinea en el bundle público, así que en producción debe ir por un proxy.
3. Run the app:
   `npm run dev`
