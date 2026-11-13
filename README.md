# ESISCOM

## SItio web de la empresa ESISCOM

## Cambios
### 2026-11-13 — Formulario de contacto: envío por correo reparado
- `.github/workflows/deploy.yml`: el build ahora recibe `VITE_WEB3FORMS_KEY` desde el secreto de GitHub. Antes el build de CI nunca la tenía, así que Vite eliminaba la rama de correo y todos los envíos caían a WhatsApp.
- `components/ContactForm.tsx`: si el envío por correo falla, se muestra un botón que abre WhatsApp con el mismo mensaje ya armado (antes solo aparecía un aviso sin enlace). Se conserva el nombre en la pantalla de confirmación (antes se vaciaba el formulario y decía "Gracias, bienvenido"). Se corrigió la leyenda "nunca se comparten con terceros".
- Sin el secreto, el formulario sigue abriendo WhatsApp como hasta ahora. Para activar el correo: crear la llave en web3forms.com y agregarla como secreto `VITE_WEB3FORMS_KEY`.
- Verificación: `npx tsc --noEmit` y `npm run build` OK.

### 2026-11-13 — Aviso de privacidad alineado con Google Analytics
- `components/PrivacyPolicy.tsx` sección 9: ahora declara el uso de cookies estadísticas de **Google Tag Manager / Google Analytics 4** (`_ga`, `_ga_*`), para qué sirven, cuánto duran y cómo rechazarlas (navegador o complemento de inhabilitación). Se eliminó la afirmación de que el sitio "no utiliza cookies". Sección 6: Google se lista como proveedor de medición de audiencia. Fecha de actualización al 13/11/2026.
- `index.html`: reemplazado el snippet mixto (`gtm.js` + `gtag()`) por el snippet oficial de **Google Tag Manager** (script + `<noscript>`), que es el que corresponde al contenedor `GTM-N9RKSNH5` (dentro carga GA4 `G-2NQQCDWWH0`).
- **Pendiente de decisión:** añadir banner de consentimiento que bloquee la carga de GTM hasta que el usuario acepte.
- Verificación: `npx tsc --noEmit` y `npm run build` OK.

### 2026-11-12 — Sección "ESISCOM Soft" (apps de la empresa)
- Nueva vista `software` (`#software`) en `App.tsx`, con la misma mecánica que "Servicios y Precios": página completa con botón "Volver".
- Nuevo `components/SoftDetail.tsx`: hero con badges y grilla de tarjetas por aplicación. Cada tarjeta muestra icono, categoría, nombre, descripción, características y botón **"Acceder"** (enlace externo en pestaña nueva).
- Nuevo `services/softwareCatalog.ts`: arreglo `APPS` con las apps. **Agregar una app = agregar un objeto al arreglo**, sin tocar la UI. Incluye `ESISCOM Medical` (Salud, destacada), `ESISCOM Nails` y `ESISCOM Barber` (Cuidado personal).
- SEO: título, meta description y JSON-LD `SoftwareApplication`.
- Navegación: botón **"ESoft"** en el Navbar (desktop/móvil) y enlace **"ESISCOM Soft"** en el footer. Se eliminó el enlace directo a `EManager` (herramienta interna del dueño, no debe aparecer en el catálogo público).
- `public/sitemap.xml`: se agregó `https://esiscom.com/medical/`.
- Verificación: `npx tsc --noEmit` y `npm run build` OK.

### 2026-10-18 — Tailwind compilado (fuera el CDN)
- Se eliminó `cdn.tailwindcss.com` y el `tailwind.config` inline del `index.html`. Ahora `tailwind.config.cjs` + `postcss.config.cjs` + `index.css` (importado desde `index.tsx`) generan un CSS estático de **33.5 kB (6.5 kB gzip)** y la paleta/tipografías viven en el config real.
- Los estilos propios (`body`, `::selection`, `:focus-visible`, `.bg-grid`, `.scrollbar-hide`) pasaron a `@layer base` / `@layer utilities`; la animación del marquee ahora se define en `theme.extend.animation`.
- **Verificación pixel a pixel** contra el sitio anterior: 0% de diferencia en home desktop (1440×1250), home móvil (390×844) y aviso de privacidad. La única diferencia inicial era la posición del marquee animado, que se congeló para comparar.
- Efecto medido en móvil con caché desactivada: `DOMContentLoaded` **722 ms → 136 ms**. El navegador ya no descarga ni ejecuta el compilador de CSS en tiempo de ejecución.

### 2026-10-18 — Aviso de privacidad y formulario de contacto
- Nuevo `components/PrivacyPolicy.tsx`: aviso de privacidad en 12 secciones (responsable, datos, finalidades, transferencias, derechos ARCO, cookies, cambios). Ruta propia `#aviso-de-privacidad` y enlace en el footer. **Es una base conforme a la LFPDPPP: conviene revisión legal.** Si se agrega analítica hay que actualizar la sección 9.
- Nuevo `components/ContactForm.tsx` en la sección de contacto: validación en línea, honeypot anti-spam, estados de envío y mensaje de error con alternativa por WhatsApp.
  - Con `VITE_WEB3FORMS_KEY` definida envía a Web3Forms y llega por correo.
  - **Sin llave no simula un envío**: arma el mensaje y abre WhatsApp (el canal que ya se atiende).
  - Las variables se documentan en [.env.example](.env.example).
- La sección de contacto se reordenó: formulario a la izquierda, datos a la derecha y el mapa como banda inferior.
- Arreglo: al entrar a una vista por hash (`#servicios-detalle`, `#aviso-de-privacidad`) la página aterrizaba a media altura; ahora sube al inicio solo cuando cambia de vista, sin romper los anclas internas (`#services`, `#contact`).
- El botón flotante de WhatsApp se oculta mientras la sección de contacto está en pantalla (tapaba los campos del formulario en móvil).
- Verificación: `npx tsc --noEmit`, `npm run build` y pruebas automatizadas en Chrome (validación, envío por WhatsApp, navegación entre vistas, FAB oculto).

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
- Todos los CTA usan WhatsApp prellenado (`wa.me/526143249716?text=...`).
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

## Despliegue (Hostinger)

El sitio se publica en `https://esiscom.com` desde el hosting de Hostinger:

- **Document root:** `/home/u371508174/domains/esiscom.com/public_html`
- **Servidor SSH:** `191.96.56.28:65002` (usuario `u371508174`)
- El workflow `.github/workflows/deploy.yml` compila con Vite y sube `dist/` por `rsync` en cada push a `main`.
- **Deploy manual:** `npm run deploy`. Usa `~/.ssh/esiscom_com_deploy` por defecto; se puede cambiar con `SSH_KEY=/ruta/llave npm run deploy`. La llave `id_ed25519` **no** está autorizada en el servidor.
- **Red:** algunas redes (p. ej. la de la UACH) bloquean SSH saliente; en ese caso usar hotspot/VPN o el workflow de GitHub.
- Para que el build manual incluya el correo del formulario, definir `VITE_WEB3FORMS_KEY` en `.env.local`.

### Secretos necesarios (GitHub → Settings → Secrets and variables → Actions)

| Secreto | Valor |
|---|---|
| `SSH_PRIVATE_KEY` | llave privada de despliegue (`~/.ssh/esiscom_gh_actions`) |
| `SSH_HOST` | `191.96.56.28` |
| `SSH_PORT` | `65002` |
| `SSH_USER` | `u371508174` |
| `VITE_WEB3FORMS_KEY` | llave de Web3Forms para que el formulario de contacto llegue por correo (sin ella, el formulario abre WhatsApp) |

### Verificar
```bash
curl -sI https://esiscom.com/ | head -12
curl -s https://esiscom.com/ | grep -o 'src="/assets/[^"]*"' | head
```

- Sitio en vivo: https://esiscom.com/

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install`
2. (Opcional) El asistente de IA está desactivado. Si lo reactivas, define `GEMINI_API_KEY` en [.env.local](.env.local) — pero recuerda que Vite la inlinea en el bundle público, así que en producción debe ir por un proxy.
3. Run the app:
   `npm run dev`
