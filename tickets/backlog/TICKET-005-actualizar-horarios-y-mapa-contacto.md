# TICKET-005: Actualizar horarios y ubicación del mapa en Contacto

**Estado:** backlog (pendiente — bloqueado esperando dirección correcta del cliente)
**Tipo:** contenido
**Prioridad:** alta
**Creado:** 2026-07-11
**Completado:** —

## Descripción

Dos correcciones de contenido en la sección de Contacto:
1. Actualizar horarios de atención
2. Actualizar el mapa para que apunte a la ubicación exacta que indicó el cliente

## Cambio 1 — Horarios

Reemplazar horarios actuales:

| Día | Actual | Nuevo |
|-----|--------|-------|
| Lunes – Viernes | 9:00 am – 6:00 pm | 4:40 pm – 7:40 pm |
| Sábado | 9:00 am – 1:00 pm | 10:00 am – 2:00 pm |
| Domingo | Cerrado | Cerrado (sin cambio) |

## Cambio 2 — Mapa

Actualizar `maps_link` y `maps_embed` para apuntar a la ubicación indicada en:
`https://maps.app.goo.gl/sDycnVzNhCnoAija6?g_st=aw`

Esa liga resuelve a: *C. 16 de Septiembre 115-casa 2, Lazaro Cardenas, 52148 Col. Llano
Grande, Méx.* — misma zona que la dirección actual en `data.js`, pero con un pin más
preciso confirmado por el cliente.

## Criterios de aceptación

- [x] `horarios` en `js/data.js` actualizado: Lunes–Viernes 4:40 pm – 7:40 pm, Sábado
      10:00 am – 2:00 pm, Domingo sin cambio — confirmado correcto por el usuario en local
- [ ] `maps_link` actualizado con la nueva liga de Google Maps — aplicado, pero pendiente
      de validar (ver bitácora)
- [ ] `maps_embed` (iframe de la sección Contacto) actualizado para mostrar el pin correcto
      — **sigue mostrando una ubicación incorrecta**, ver bitácora
- [x] Verificado en local (`http://localhost:3001`) que la tabla de horarios es correcta;
      el mapa se revisó pero no quedó bien
- [x] Ningún otro dato de contacto cambia

## Bitácora — mapa incorrecto (2026-07-11)

Se resolvió la liga corta `https://maps.app.goo.gl/sDycnVzNhCnoAija6?g_st=aw` a la dirección
*"C. 16 de Septiembre 115-casa 2, Lazaro Cardenas, 52148 Col. Llano Grande, Méx."* y se
usó ese texto para reconstruir `maps_embed` (formato `?q=DIRECCION&output=embed`, igual
que el resto del sitio) y se puso la liga corta original directo en `maps_link`.

Al revisar en local, el usuario reportó que el mapa sigue mostrando una ubicación que no
es la correcta. Dos posibles causas a investigar cuando se retome:

1. **La dirección en sí está mal** (typo, colonia incorrecta, etc.) — requiere que el
   cliente confirme/reenvíe la ubicación correcta.
2. **Problema de geocodificación:** `maps_embed` se construyó re-geocodificando el texto
   de la dirección (`q=...`), lo cual puede resolver a un punto distinto al pin exacto que
   apunta la liga original (que usa un ID de lugar específico, no solo texto). Si el
   problema es este, la liga corta de Porkbun... digo, de Google (`maps_link`) sí sería
   correcta pero el iframe (`maps_embed`) no. Vale la pena, al retomar, intentar embeber
   usando la liga original completa o sus coordenadas exactas en vez de reconstruir por texto.

**Se pausa el ticket** hasta que el cliente confirme la dirección/ubicación correcta.
El cambio de horarios (Cambio 1) ya quedó aplicado en el código local, sin commitear
todavía — se commitea junto con el cambio de mapa cuando ambos queden listos.

## Notas técnicas

- Ambos campos están en `js/data.js`, sección `--- CONTACTO ---`
- El mapa se usa en dos lugares del `index.html` vía `D.maps_link` (href del wrapper) y
  `D.maps_embed` (src del iframe) — ambos deben quedar consistentes con la misma ubicación
