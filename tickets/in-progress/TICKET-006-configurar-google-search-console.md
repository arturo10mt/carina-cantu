# TICKET-006: Configurar Google Search Console e indexación

**Estado:** en progreso
**Tipo:** infraestructura
**Prioridad:** alta
**Creado:** 2026-07-12
**Completado:** —

## Descripción

El sitio `misscaricantu.com` no está indexado en Google todavía. Configurar Google Search
Console para verificar la propiedad, generar y enviar un `sitemap.xml`, y solicitar
indexación manual para acelerar su aparición en resultados de búsqueda. Mismo proceso que
se usó en `pagina-ventas` (TICKET-020) y en `Psicoanalista/FelipeAlejandro` (TICKET-005).

## Criterios de aceptación

- [x] Existe una propiedad verificada en Google Search Console para `www.misscaricantu.com`
      — auto-verificada vía Google Analytics
- [x] Existe un `sitemap.xml` en la raíz con las páginas del sitio
- [x] Existe un `robots.txt` en la raíz que permite el rastreo y referencia el sitemap
- [x] El sitemap fue enviado ("Submit") dentro de Search Console — status **Success**
      directo, 1 página descubierta (más rápido que en Felipe Alejandro, que pasó unos
      minutos en "Couldn't fetch" antes de resolverse solo)
- [x] Se solicitó indexación manual ("Request indexing") para el home — confirmado
      "Indexing requested"
- [ ] Búsqueda `site:misscaricantu.com` en Google muestra al menos una página indexada
      (puede tardar de días a 1-2 semanas)

## Notas técnicas

- Ver `pagina-ventas/tickets/done/TICKET-020-*.md` para la referencia completa del proceso.
- Confirmado: `www.misscaricantu.com` es el host canónico (carga directo, HTTP 200) —
  `misscaricantu.com` sin `www` es el que redirige (al revés que profsitio.com y
  felipealejandro.com, donde el apéx era el canónico). El sitemap y la propiedad de
  Search Console usan `www` por eso.
- Apareció una entrada sobrante `/` en Sitemaps con "1 error" (probablemente un envío
  con el campo vacío) — inofensiva, Google la ignora. No afecta el sitemap real.
