# Template de Página para Profesionistas

Página web profesional para doctores, maestros, abogados y cualquier profesionista
que quiera ofrecer sus servicios en línea.

---

## Estructura del proyecto

```
profesionista-template/
├── index.html          ← Página principal (no tocar)
├── css/
│   └── styles.css      ← Estilos (no tocar salvo ajustes finos)
├── js/
│   └── data.js         ← ← ← EDITA ESTE ARCHIVO PARA CADA CLIENTE
└── assets/
    ├── doctor.jpg      ← Foto principal del profesionista
    └── (otras fotos)
```

---

## ¿Cómo adaptar para un nuevo cliente?

### 1. Copia la carpeta completa
Renómbrala con el nombre del cliente, por ejemplo: `dra-montoya`

### 2. Edita `js/data.js`
Es el único archivo que necesitas cambiar. Contiene:

| Sección           | Qué cambiar                              |
|-------------------|------------------------------------------|
| Datos generales   | Nombre, título, especialidad, frase      |
| Acerca de         | Dos párrafos de presentación             |
| Servicios         | Array de servicios con precio (opcional) |
| Credenciales      | Estudios y certificaciones               |
| Testimonios       | Reseñas de pacientes/clientes            |
| FAQ               | Preguntas y respuestas frecuentes        |
| Contacto          | WhatsApp, teléfono, email, dirección     |
| Colores           | color_primario, color_acento, color_claro|

### 3. Agrega la foto
Coloca la foto principal en `assets/doctor.jpg`
(o actualiza la ruta en `data.js` → campo `foto`)

### 4. Cambia los colores por especialidad
En `data.js`, sección colores:
```js
color_primario: "#0d6e8a",   // color dominante
color_acento:   "#12a89d",   // color de botones y detalles
color_claro:    "#e8f7f9",   // fondo de secciones
```

Sugerencias por tipo de profesionista:
- **Doctor**:    azul oscuro `#0d6e8a` + teal `#12a89d`
- **Maestro**:   naranja `#d4660a` + amarillo `#f0a500`
- **Abogado**:   azul marino `#1a2a5e` + dorado `#b8963e`
- **Psicólogo**: violeta `#5c3d8f` + lavanda `#8b67c5`
- **Nutriólogo**: verde `#2d7a4f` + lima `#5aaa6e`

---

## Cómo ver la página localmente

### Opción A — VS Code con Live Server (recomendado)
1. Abre la carpeta en VS Code
2. Instala la extensión **Live Server**
3. Clic derecho en `index.html` → "Open with Live Server"

### Opción B — Doble clic
Abre `index.html` directamente en tu navegador
(algunas funciones pueden no funcionar por restricciones CORS)

---

## Secciones incluidas

1. ✅ Navegación responsive con menú móvil
2. ✅ Hero con foto, nombre y botón de WhatsApp
3. ✅ Acerca de mí
4. ✅ Servicios (tarjetas con precio opcional)
5. ✅ Credenciales y formación
6. ✅ Testimonios
7. ✅ FAQ con acordeón
8. ✅ Contacto con formulario → WhatsApp + mapa
9. ✅ Footer con horarios, redes y aviso de privacidad

---

## Hosting recomendado (opciones gratuitas para empezar)

- **Netlify** → netlify.com (arrastra la carpeta y listo)
- **Vercel**  → vercel.com (ideal si usas GitHub)
- **GitHub Pages** → gratis con repositorio público

---

Creado con el template de profesionistas v1.0
