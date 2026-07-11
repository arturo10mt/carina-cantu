# Sistema de Tickets — Carina Cantú Mirón

Todo el trabajo de desarrollo se gestiona mediante tickets. No se implementa ningún cambio
sin un ticket previo aprobado.

Este proyecto tiene su propia numeración de tickets, independiente de `pagina-ventas` y de
cualquier otro proyecto de cliente — para evitar colisiones de números entre proyectos.

---

## Estructura de carpetas

```
tickets/
├── README.md        ← Este archivo
├── backlog/         ← Ideas y tareas pendientes de priorizar
├── in-progress/     ← Trabajo activo (máximo 1 ticket a la vez)
└── done/            ← Tickets completados (historial)
```

---

## Flujo de trabajo

```
backlog → in-progress → done
```

1. Los tickets nuevos se crean en `backlog/`
2. Al iniciar trabajo se mueven a `in-progress/`
3. Al completarse se mueven a `done/`

---

## Nomenclatura de archivos

```
TICKET-{NNN}-{slug-descriptivo}.md
```

El número `NNN` es secuencial y nunca se reutiliza. Último usado: TICKET-002.

---

## Plantilla de ticket

```markdown
# TICKET-NNN: Título corto y descriptivo

**Estado:** backlog | en progreso | listo
**Tipo:** feature | fix | mejora | contenido | infraestructura
**Prioridad:** alta | media | baja
**Creado:** YYYY-MM-DD
**Completado:** —

## Descripción
Contexto claro del qué y el por qué. No el cómo (eso se define al implementar).

## Criterios de aceptación
- [ ] Criterio verificable 1
- [ ] Criterio verificable 2
- [ ] Criterio verificable N

## Notas técnicas
(Opcional) Restricciones, dependencias, o consideraciones de implementación.
```

---

## Reglas del sistema

- Un solo ticket `in-progress` a la vez.
- Los criterios de aceptación deben ser verificables (no ambiguos).
- El ticket se mueve a `done/` solo cuando **todos** los criterios están cumplidos.
- Los tickets `done/` son inmutables — si hay un fix posterior, se crea ticket nuevo.

---

## Historial

TICKET-001 y TICKET-002 se crearon originalmente como TICKET-016/017 dentro de
`pagina-ventas/tickets/` (sin commitear a git) porque este proyecto se trabajó
directamente en `profesionista-template/` en vez de en su propia carpeta. El 2026-07-11
se movió todo a `Maestros/Carina/` y se renumeraron para tener su propia secuencia.
