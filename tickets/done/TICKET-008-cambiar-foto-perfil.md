# TICKET-008: Cambiar foto de perfil (carina.png → Carina2.jpeg)

**Estado:** completado
**Tipo:** contenido
**Prioridad:** baja
**Creado:** 2026-07-23
**Completado:** 2026-07-23

## Descripción

Reemplazar la foto de perfil de Carina Cantú (`carina.png`) por `Carina2.jpeg`, ya
presente en el directorio del proyecto. También se genera un favicon a partir de la
misma foto, ya que el sitio no tenía ninguno configurado.

## Alcance

1. `js/data.js`: cambiar el campo `foto: "carina.png"` → `foto: "Carina2.jpeg"`.
   Este campo alimenta el hero de `index.html` (única referencia encontrada en todo
   el sitio).
2. Generar `favicon.png` (512×512) recortado sobre el rostro a partir de
   `Carina2.jpeg` (el archivo original es una captura del visor de fotos del celular,
   con barra de estado y botones — se recortó evitando esos bordes).
3. Agregar `<link rel="icon" type="image/png" href="favicon.png" />` en las 8 páginas
   del sitio (no existía ningún favicon configurado previamente).

## Criterios de aceptación

- [x] `js/data.js` actualizado con la nueva foto
- [x] `favicon.png` generado y enlazado en las 8 páginas
- [x] Verificado en local (incluyendo responsive) antes de publicar
- [ ] Publicado en producción y verificado en vivo
