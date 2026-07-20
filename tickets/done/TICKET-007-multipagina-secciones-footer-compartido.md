# TICKET-007: Convertir a sitio multi-página con footer compartido

**Estado:** hecho
**Tipo:** mejora
**Prioridad:** media
**Creado:** 2026-07-20
**Completado:** 2026-07-20

## Descripción

Hoy `index.html` es una sola página con todas las secciones (Hero, Acerca de mí,
Servicios, Formación, Testimonios, FAQ, Contacto) navegadas por anclas (`#servicios`,
etc.). Se convierte a un sitio multi-página: cada sección pasa a ser su propia página
HTML, y todas comparten el mismo footer.

## Plan

**Páginas nuevas** (todas con el mismo nav completo y el mismo footer):
- `index.html` — solo Hero (se recorta, ya no incluye las demás secciones)
- `acerca.html` — "Acerca de mí"
- `servicios.html` — "Servicios"
- `credenciales.html` — "Formación" (id `credenciales`)
- `testimonios.html` — "Testimonios"
- `faq.html` — "Preguntas frecuentes"
- `contacto.html` — "Contacto" (formulario + mapa)

**Nav y footer:** el menú (desktop + móvil) y los links del footer cambian de anclas
(`#acerca`) a páginas reales (`acerca.html`), igual que en `pagina-ventas`. Cada
página marca su propio link como activo (`.nav-activo`) de forma estática — se quita
el scrollspy por `IntersectionObserver`, ya que no aplica entre páginas separadas.

**JS:** se extrae a `js/common.js` la lógica compartida por las 7 páginas (colores
personalizados desde `data.js`, logo del nav, población del footer, menú móvil,
animaciones `fade-in`) para que el footer realmente sea idéntico en todas — un solo
lugar que mantener, no copiar y pegar 7 veces. Cada página conserva un `<script>`
inline solo con la lógica específica de su sección (ej. `servicios.html` llena su
grid; `contacto.html` llena el formulario y el mapa). `data.js` no cambia.

## Notas técnicas

- Se encontró y corrigió un bug real durante la verificación: `js/common.js` (cargado
  antes que el script de cada página) configuraba el `IntersectionObserver` de las
  animaciones `.fade-in` **antes** de que el script de cada página inyectara su
  contenido dinámico (tarjetas de servicios, credenciales, testimonios) — esas
  tarjetas nunca quedaban observadas y se hubieran quedado invisibles para
  siempre. Se resolvió exportando `initFadeIn()` como función desde `common.js` y
  llamándola al final del script de cada página, después de inyectar su contenido.
- El link "Contactar" (estilo botón CTA) no lleva la clase `.nav-activo` en ninguna
  página, incluida `contacto.html` — mismo criterio que ya se usa en `pagina-ventas`
  (el CTA nunca se marca "activo", ya tiene su propio estilo distintivo).

## Ronda 2 (2026-07-20) — Aviso de privacidad, footer sin redes, "Powered by"

1. Se creó `aviso-privacidad.html` (nav + footer completos, contenido LFPDPPP
   adaptado a clases particulares — sin la cláusula de datos sensibles que sí aplica
   en el aviso de un psicólogo). El link "Aviso de Privacidad" del footer (antes
   `href="#"`) ahora apunta ahí en las 7 páginas + la nueva.
2. Se quitaron los íconos de redes sociales del footer: el `<div class="footer-redes">`
   en las 7 páginas, la población vía JS en `common.js`, y las reglas CSS
   `.footer-redes`/`.footer-red` (ya sin uso). El array `D.redes` en `data.js` se dejó
   intacto por si se reutiliza más adelante.
3. Se agregó "Powered by Profsitio" (enlaza a `https://profsitio.com`, `target="_blank"`)
   junto a "Aviso de Privacidad" en el footer de las 8 páginas, separados por un
   punto medio. Nueva clase `.footer-bottom-links` en `css/styles.css`.
4. `sitemap.xml` estaba desactualizado (solo listaba la URL raíz, del sitio de una
   sola página) — se actualizó con las 7 páginas de contenido reales;
   `aviso-privacidad.html` se dejó fuera a propósito, igual que en `pagina-ventas`.
5. "Powered by Profsitio" → "©Powered by Profsitio", y la línea inferior del footer
   (copyright + aviso + powered by) se centró en las 8 páginas.

## Criterios de aceptación

- [x] 7 páginas HTML creadas/ajustadas, cada una con su sección correspondiente
- [x] Nav (desktop + móvil) igual en las 7 páginas, apuntando a páginas reales
- [x] Footer idéntico en las 7 páginas (vía `js/common.js`)
- [x] Página activa marcada correctamente en el nav de cada página
- [x] Formulario de contacto y mapa siguen funcionando en `contacto.html`
- [x] `aviso-privacidad.html` creada y enlazada desde el footer de las 8 páginas
- [x] Íconos de redes sociales removidos del footer
- [x] "Powered by Profsitio" agregado junto al aviso de privacidad
- [x] Verificado en local (incluyendo responsive) antes de publicar
- [x] Publicado en producción y verificado en vivo
