# TICKET-001: Desarrollo de página para Carina Cantú Mirón

**Estado:** listo
**Tipo:** feature
**Prioridad:** alta
**Creado:** 2026-07-01
**Completado:** 2026-07-01

## Descripción

Adaptación del `profesionista-template` para la primera cliente real: Carina Cantú Mirón,
docente y asesora pedagógica con 20+ años de experiencia en Metepec, Estado de México.

## Trabajo realizado

### Datos generales
- [x] Nombre, título, especialidad y frase valor actualizados desde CV
- [x] Foto conectada (`carina.png`) — pendiente reemplazar con foto de alta resolución

### Sección "Acerca de mí"
- [x] Dos párrafos sintetizados del CV (Licenciatura, Maestría, experiencia actual)

### Sección "Formación y experiencia"
- [x] 7 credenciales reales: Licenciatura, Maestría, Centro Cultural Guadalupe,
  Anáhuac del Norte, Diplomado ITESM, Diplomado Excelencia Humana, 20 años de exp.

### Sección "Servicios"
- [x] Frase: "De las letras al cálculo y la música — clases particulares con 20 años
  de experiencia, presenciales o en línea"
- [x] 7 servicios con precios: Lectoescritura $200, Aritmética $200, Álgebra $300,
  Trigonometría $300, Geometría Analítica $300, Cálculo Diferencial e Integral $400,
  Guitarra $50

### Sección "Testimonios"
- [x] 3 testimonios inventados (Patricia Herrera/álgebra, Jorge Sánchez/lectoescritura,
  Sofía Ramírez/guitarra) — pendiente reemplazar con testimonios reales

### Sección "Preguntas frecuentes"
- [x] "FAQ" renombrado a "Preguntas frecuentes" en toda la página
- [x] 6 preguntas relevantes para alguien que busca clases particulares

### Navegación
- [x] Scrollspy: resaltado ovalado azul en el item activo del nav al scrollear

### Sección "Contacto"
- [x] Título: "Solicita información de mis clases"
- [x] Dirección: Calle 16 de septiembre #115 casa 2, Col. Llano Grande, Metepec, Edo. Méx.
- [x] Email: pata.carinacantu@gmail.com
- [x] WhatsApp: 527221568782
- [x] Número de teléfono eliminado de la vista
- [x] Mapa real de Metepec con click para abrir Google Maps
- [x] Formulario funcional: email vía Formspree (`mzdljoba`) + mensaje de éxito visible
- [x] Botón "Enviar mensaje" solo envía email (WhatsApp solo con botón dedicado)
- [x] Dropdown de servicio incluye "Otro asunto..." al final

## Pendientes para próxima sesión

- [ ] Foto de Carina en alta resolución (mínimo 800×1000 px) — ella la conseguirá
- [ ] Actualizar redes sociales con URLs reales de Carina
- [ ] Actualizar horarios reales de disponibilidad
- [ ] Testimonios reales cuando los tenga
- [ ] Publicar en producción (dominio + Netlify)

## Archivos modificados

| Archivo | Descripción |
|---------|-------------|
| `js/data.js` | Todos los datos de Carina |
| `index.html` | Textos, formulario y scrollspy |
| `css/styles.css` | Estilos scrollspy y mensaje de éxito |

## Datos técnicos

- Servidor local: `http://localhost:3001`
- Formspree endpoint: `https://formspree.io/f/mzdljoba` → pata.carinacantu@gmail.com
- WhatsApp: `527221568782`

## Nota de reorganización

Este ticket se creó originalmente como TICKET-016 dentro de `pagina-ventas/tickets/`
(sin commitear a git) porque el proyecto se trabajó directamente en `profesionista-template/`
en vez de en su propia carpeta. El 2026-07-11 se movió el proyecto completo a
`Maestros/Carina/` y este ticket se renumeró a TICKET-001 dentro de su propia numeración.
