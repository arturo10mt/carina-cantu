# TICKET-006: Configurar Google Search Console e indexación

**Estado:** backlog
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

- [ ] Existe una propiedad verificada en Google Search Console para `misscaricantu.com`
- [ ] Existe un `sitemap.xml` en la raíz con las páginas del sitio
- [ ] Existe un `robots.txt` en la raíz que permite el rastreo y referencia el sitemap
- [ ] El sitemap fue enviado ("Submit") dentro de Search Console
- [ ] Se solicitó indexación manual ("Request indexing") para el home
- [ ] Búsqueda `site:misscaricantu.com` en Google muestra al menos una página indexada
      (puede tardar de días a 1-2 semanas)

## Notas técnicas

- Ver `pagina-ventas/tickets/done/TICKET-020-*.md` para la referencia completa del proceso.
- Verificar si `www.misscaricantu.com` es un simple redirect al dominio apéx (como pasó con
  profsitio.com) antes de fijar las URLs del sitemap — usar el host que realmente sirve
  contenido sin redirecciones.
