# TICKET-002: Mejoras visuales — títulos e ilustración Acerca de mí

**Estado:** listo
**Tipo:** mejora
**Prioridad:** media
**Creado:** 2026-07-06
**Completado:** 2026-07-06

## Descripción

Dos mejoras visuales a la página de Carina:
1. Títulos de sección más grandes
2. Ilustración "Red del conocimiento" en la sección Acerca de mí (Opción C elegida)

## Criterios de aceptación

- [x] Los títulos de sección (Servicios, Acerca de mí, Formación, etc.) se ven notablemente más grandes
- [x] La sección "Acerca de mí" muestra la ilustración "Red del conocimiento"
- [x] La ilustración mantiene proporciones correctas (4:3 paisaje, no alargada)
- [x] La ilustración es responsiva en cualquier tamaño de pantalla

## Decisiones técnicas

**Ilustración — SVG inline en lugar de Canvas:**
Se intentó primero con HTML5 Canvas + JavaScript (3 iteraciones), pero el tamaño del canvas
se calculaba mal al momento de carga (`clientWidth` devolvía 0 antes de que el layout estuviera
listo), causando que la ilustración se viera estirada/alargada. La solución definitiva fue
reemplazar el `<canvas>` por un `<svg>` inline con `viewBox="0 0 400 300"`. El SVG escala
automáticamente con CSS `width: 100%` y siempre mantiene la proporción 4:3, sin necesidad de
JavaScript ni listener de `resize`.

**Títulos — CSS clamp():**
`font-size: clamp(2.8rem, 5.5vw, 4.2rem)` en `.section-titulo` (44px min — 67px max).

## Archivos modificados

| Archivo | Cambio |
|---------|--------|
| `css/styles.css` | `.section-titulo` font-size: `clamp(2.8rem, 5.5vw, 4.2rem)` |
| `index.html` | SVG "Red del conocimiento" inline (reemplaza `<canvas>`); se eliminó el IIFE de canvas drawing |

## Nota de reorganización

Este ticket se creó originalmente como TICKET-017 dentro de `pagina-ventas/tickets/`
(sin commitear a git). El 2026-07-11 se movió el proyecto completo a `Maestros/Carina/`
y este ticket se renumeró a TICKET-002 dentro de su propia numeración.
