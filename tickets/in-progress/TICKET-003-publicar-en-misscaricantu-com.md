# TICKET-003: Publicar la página de Carina en misscaricantu.com

**Estado:** backlog
**Tipo:** infraestructura
**Prioridad:** alta
**Creado:** 2026-07-11
**Completado:** —

## Descripción

Publicar la página de Carina Cantú Mirón (actualmente solo en local) en el dominio
`misscaricantu.com`, usando Netlify — mismo proceso que se usó para publicar
`pagina-ventas` en `profsitio.com` (ver `pagina-ventas/tickets/done/TICKET-011...` como
referencia).

## Criterios de aceptación

- [ ] Confirmar dónde está registrado el dominio `misscaricantu.com` (Porkbun u otro) y que
      esté activo/pagado
- [ ] Sitio desplegado en Netlify y visible en la URL temporal `.netlify.app`
- [ ] Dominio `misscaricantu.com` conectado en Netlify (nameservers o registros DNS,
      según lo que ofrezca Netlify al momento de configurar)
- [ ] HTTPS activo automáticamente (certificado de Netlify)
- [ ] Se verifica que `https://www.misscaricantu.com` y `https://misscaricantu.com` cargan
      correctamente la página
- [ ] El formulario de contacto (Formspree) sigue funcionando correctamente ya en producción

## Notas técnicas

- Proyecto sin git — a diferencia de `pagina-ventas`, aquí el deploy en Netlify probablemente
  se hará arrastrando la carpeta directamente (deploy manual) en vez de deploy automático
  vía Git, salvo que se decida inicializar un repositorio para este proyecto también.
- Carpeta del proyecto: `Maestros/Carina/`
- Pendientes de contenido (foto en alta resolución, testimonios reales, redes sociales)
  quedan fuera de este ticket — ver notas de TICKET-001.
