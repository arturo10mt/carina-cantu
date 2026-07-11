# TICKET-004: Configurar Google Analytics en la página de Carina

**Estado:** backlog
**Tipo:** infraestructura
**Prioridad:** media
**Creado:** 2026-07-11
**Completado:** —

## Descripción

Instalar Google Analytics (GA4) en la página de Carina Cantú para poder ver estadísticas
de tráfico (visitas, origen de los visitantes, conversiones hacia WhatsApp/formulario de
contacto). Mismo proceso que se usó en `pagina-ventas` (ver TICKET-019 en ese proyecto
como referencia).

## Criterios de aceptación

- [ ] Existe una propiedad GA4 creada en Google Analytics para `misscaricantu.com`
      (nueva propiedad o agregada a la cuenta existente "Tu.Profesionista")
- [ ] El snippet de GA4 (gtag.js) está insertado en el `<head>` de `index.html`
- [ ] Se verifica en el reporte "Tiempo real" de GA4 que las visitas en producción se
      registran correctamente (requiere visitar el sitio real desde un navegador, no basta
      con curl — ver notas técnicas)
- [ ] El Measurement ID de GA4 queda documentado en este ticket
- [ ] No se afecta el rendimiento ni el diseño visible de la página

## Notas técnicas

- Bloqueado hasta que `misscaricantu.com` esté publicado y verificado (TICKET-003).
- `curl` solo confirma que el snippet está presente en el HTML servido — no que GA4
  recibió una visita real, porque no ejecuta JavaScript. La verificación final requiere
  abrir el sitio en un navegador real (sin bloqueador de anuncios) y revisar el dashboard.
- Deploy es automático vía Netlify al hacer push a `main` (repo `carina-cantu` en GitHub).
