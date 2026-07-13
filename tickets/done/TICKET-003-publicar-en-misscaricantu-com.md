# TICKET-003: Publicar la página de Carina en misscaricantu.com

**Estado:** listo
**Tipo:** infraestructura
**Prioridad:** alta
**Creado:** 2026-07-11
**Completado:** 2026-07-12

## Descripción

Publicar la página de Carina Cantú Mirón (actualmente solo en local) en el dominio
`misscaricantu.com`, usando Netlify — mismo proceso que se usó para publicar
`pagina-ventas` en `profsitio.com` (ver `pagina-ventas/tickets/done/TICKET-011...` como
referencia).

## Criterios de aceptación

- [x] Confirmar dónde está registrado el dominio `misscaricantu.com` (Porkbun u otro) y que
      esté activo/pagado — confirmado: Porkbun
- [x] Sitio desplegado en Netlify y visible en la URL temporal `.netlify.app`
      (`radiant-dusk-8e1a97.netlify.app`)
- [x] Dominio `misscaricantu.com` conectado en Netlify — nameservers cambiados en Porkbun a
      los de Netlify (`dns1-4.p06.nsone.net`), delegación confirmada propagada a nivel
      registro (verificado con `dig +trace` contra los servidores raíz de `.com`)
- [x] HTTPS activo automáticamente (certificado de Netlify) — confirmado 2026-07-12,
      `curl` responde con conexión HTTPS válida y header `strict-transport-security`
- [x] Se verifica que `https://www.misscaricantu.com` y `https://misscaricantu.com` cargan
      correctamente la página — confirmado 2026-07-12: ambas responden HTTP 200, `index.html`
      y `js/data.js` sirven el contenido real de Carina (no la redirección de Porkbun)
- [x] El formulario de contacto (Formspree) sigue funcionando correctamente ya en producción
      — confirmado por el usuario 2026-07-12: mensaje de prueba llegó correctamente

## Bitácora — problema de DNS (2026-07-11)

**Síntoma:** después de cambiar los nameservers en Porkbun a los de Netlify, tanto
`misscaricantu.com` como `www.misscaricantu.com` seguían redirigiendo a
`https://misscaricantu-com.l.ink/` (página de "URL Forwarding" de Porkbun) en vez de
servir el sitio real, mucho más allá del tiempo normal de propagación.

**Diagnóstico:**
- La delegación NS a nivel de registro (`.com`) se confirmó propagada correctamente vía
  `dig +trace` contra los servidores raíz — los servidores autoritativos correctos
  (`dns1-4.p06.nsone.net`, de Netlify) sí están delegados.
- Sin embargo, al consultar esos mismos 4 servidores directamente por el registro A de
  `misscaricantu.com`, los 4 devuelven consistentemente `98.84.224.111` y `18.208.88.157`
  (IPs de AWS que sirven el "Easy Links"/forwarding de Porkbun — confirmado por reverse DNS
  `ec2-*.compute-1.amazonaws.com` y por el `Content-Security-Policy` de la respuesta HTTP,
  que referencia `porkbun.com` y `l.ink`).
- El panel de Netlify (Domain management → DNS records) mostraba correctamente solo 2
  registros tipo `NETLIFY` apuntando a `radiant-dusk-8e1a97.netlify.app` — es decir, hay un
  desfase entre lo que el panel de Netlify dice tener configurado y lo que sus propios
  servidores DNS autoritativos están respondiendo realmente.
- El usuario reportó que desde su celular (red distinta) sí veía el sitio correcto en un
  momento dado — pero revisiones posteriores repetidas (varias veces, con ~15 min de
  diferencia, desde múltiples resolutores: los 4 nameservers de Netlify directamente, más
  Google 8.8.8.8 y Cloudflare 1.1.1.1) siguieron devolviendo las IPs de Porkbun de forma
  consistente, sin mejora — descartando que fuera solo propagación anycast lenta normal.

**Acciones intentadas:**
1. Esperar propagación estándar (~10-15 min) — sin cambio
2. Quitar el dominio del sitio en Netlify y volver a agregarlo (fix común para este tipo de
   desfase) — sin cambio, mismas IPs de Porkbun después de re-agregar

**Estado actual:** escalado a soporte de Netlify (usuario abrió ticket de soporte el
2026-07-11 con el detalle técnico completo). Ticket bloqueado hasta su respuesta.

**Resolución (2026-07-12):** el dominio ya resuelve correctamente y sirve el sitio real
(verificado con `curl`: HTTP 200 en `misscaricantu.com` y `www.misscaricantu.com`,
contenido real de Carina en `index.html`/`js/data.js`, HTTPS válido). Se resolvió sin
intervención adicional de nuestro lado — probablemente el propio soporte/backend de
Netlify corrigió el desfase, o terminó de sincronizar por sí solo. No se recibió
notificación explícita de soporte antes de confirmar que ya funcionaba.

## Notas técnicas

- A diferencia del enfoque inicial (deploy manual sin git), se decidió inicializar un
  repositorio git para este proyecto — repo `github.com/arturo10mt/carina-cantu`, conectado
  a Netlify para deploy automático en cada push a `main` (mismo patrón que `pagina-ventas`).
  El archivo `CV_Carina_Cantu_Ago25.docx` se excluyó del repo vía `.gitignore` por ser un
  documento personal de la clienta.
- Carpeta del proyecto: `Maestros/Carina/`
- Pendientes de contenido (foto en alta resolución, testimonios reales, redes sociales)
  quedan fuera de este ticket — ver notas de TICKET-001.
