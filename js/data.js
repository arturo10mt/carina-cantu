// ============================================================
//  DATA.JS — Edita este archivo para cada nuevo cliente
//  Cambia los datos aquí y la página se actualiza sola
// ============================================================

const PROFESIONISTA = {

  // --- DATOS GENERALES ---
  nombre: "Carina Cantú Mirón",
  titulo: "Docente y Asesora Pedagógica",
  especialidad: "Educación Primaria y Formación Docente",
  frase_valor: "Más de 20 años construyendo aprendizajes que transforman vidas.",
  foto: "carina.png",
  foto_alt: "Carina Cantú Mirón",

  // --- ACERCA DE ---
  acerca_parrafo1: "Soy docente y asesora pedagógica con más de 20 años de experiencia en educación primaria. Cuento con Licenciatura en Educación Primaria por la Escuela Normal Particular 'Miguel Ángel' y Maestría en Formación Docente por el Grupo Colegio Mexiquense. Actualmente me desempeño como directora técnica y maestra titular en el Centro Cultural Guadalupe, donde también brindo apoyo pedagógico.",
  acerca_parrafo2: "Me especializo en el diseño de estrategias pedagógicas innovadoras, evaluación por competencias y liderazgo educativo. He capacitado a docentes y directivos en distintos estados del país a través de talleres y diplomados, en colaboración con instituciones como el ITESM y la Universidad Anáhuac del Norte. Mi vocación es crear ambientes de aprendizaje colaborativos que eleven la calidad educativa.",

  // --- SERVICIOS ---
  servicios: [
    {
      icono: "ti-book",
      nombre: "Lectoescritura",
      descripcion: "Desarrollo de habilidades de lectura y escritura para alumnos de primaria. Presencial o en línea.",
      precio: "$200 MXN / clase"
    },
    {
      icono: "ti-calculator",
      nombre: "Aritmética",
      descripcion: "Fundamentos de las matemáticas: operaciones básicas, fracciones, decimales y más. Presencial o en línea.",
      precio: "$200 MXN / clase"
    },
    {
      icono: "ti-math-function",
      nombre: "Álgebra",
      descripcion: "Ecuaciones, inecuaciones, sistemas de ecuaciones y pensamiento algebraico. Presencial o en línea.",
      precio: "$300 MXN / clase"
    },
    {
      icono: "ti-triangle",
      nombre: "Trigonometría",
      descripcion: "Funciones trigonométricas, identidades y resolución de triángulos. Presencial o en línea.",
      precio: "$300 MXN / clase"
    },
    {
      icono: "ti-vector-triangle",
      nombre: "Geometría Analítica",
      descripcion: "Puntos, rectas, cónicas y curvas en el plano cartesiano. Presencial o en línea.",
      precio: "$300 MXN / clase"
    },
    {
      icono: "ti-infinity",
      nombre: "Cálculo Diferencial e Integral",
      descripcion: "Límites, derivadas, integrales y sus aplicaciones. Ideal para bachillerato y universidad. Presencial o en línea.",
      precio: "$400 MXN / clase"
    },
    {
      icono: "ti-music",
      nombre: "Guitarra",
      descripcion: "Clases de guitarra desde cero: acordes, ritmos y canciones. Para niños y jóvenes. Presencial o en línea.",
      precio: "$50 MXN / clase"
    }
  ],

  // --- CREDENCIALES ---
  credenciales: [
    { icono: "ti-school",        texto: "Licenciatura en Educación Primaria — Escuela Normal Particular \"Miguel Ángel\", CDMX" },
    { icono: "ti-award",         texto: "Maestría en Formación Docente — Grupo Colegio Mexiquense, Toluca, Edo. de México (2013)" },
    { icono: "ti-building",      texto: "Directora Técnica y Maestra Titular — Centro Cultural Guadalupe (2020 – Actualidad)" },
    { icono: "ti-users",         texto: "Asesora Pedagógica — Universidad Anáhuac del Norte (2012 – 2013)" },
    { icono: "ti-certificate",   texto: "Diplomado \"Tecnología y Educación – Mi Campus\" — ITESM" },
    { icono: "ti-trophy",        texto: "Diplomado \"Excelencia Humana\" — Pensamiento estratégico y liderazgo educativo" },
    { icono: "ti-calendar",      texto: "Más de 20 años de experiencia en educación primaria" }
  ],

  // --- TESTIMONIOS ---
  testimonios: [
    {
      nombre: "Patricia Herrera",
      texto: "Mi hijo reprobaba matemáticas y en dos meses con Carina ya pasó álgebra con 9. Explica con una paciencia increíble y siempre encuentra la forma de que el alumno entienda.",
      estrellas: 5,
      iniciales: "PH"
    },
    {
      nombre: "Jorge Sánchez",
      texto: "Mi hija tenía muchos problemas para leer en voz alta y le daba pena en clase. Las clases de lectoescritura con Carina le dieron confianza y ahora lee muy bien. Totalmente recomendable.",
      estrellas: 5,
      iniciales: "JS"
    },
    {
      nombre: "Sofía Ramírez",
      texto: "Tomé clases de guitarra en línea y fue una experiencia genial. Carina es muy buena maestra, te va enseñando paso a paso y nunca te hace sentir que vas lento. En un mes ya tocaba mis primeras canciones.",
      estrellas: 5,
      iniciales: "SR"
    }
  ],

  // --- PREGUNTAS FRECUENTES ---
  faq: [
    {
      pregunta: "¿Para qué niveles escolares son las clases?",
      respuesta: "Las clases están dirigidas a alumnos de primaria y secundaria. Las materias de matemáticas avanzadas (Álgebra, Trigonometría, Geometría Analítica y Cálculo) son ideales para secundaria y bachillerato. Las clases de Lectoescritura y Aritmética son perfectas para primaria."
    },
    {
      pregunta: "¿Cuánto dura cada clase?",
      respuesta: "Cada clase tiene una duración de 1 hora. Si el alumno necesita más tiempo para reforzar un tema, podemos acordar sesiones de mayor duración."
    },
    {
      pregunta: "¿Cómo funcionan las clases en línea?",
      respuesta: "Las clases en línea se realizan por videollamada (Zoom o Google Meet). Solo necesitas una computadora o tablet con cámara, micrófono y buena conexión a internet. Yo comparto pantalla para explicar y el alumno puede compartir sus ejercicios en tiempo real."
    },
    {
      pregunta: "¿Ofrecen clase de prueba?",
      respuesta: "Sí. Puedes agendar una primera clase de prueba para que el alumno se familiarice con la dinámica y evaluemos juntos el nivel y las necesidades de aprendizaje."
    },
    {
      pregunta: "¿Cómo se realiza el pago?",
      respuesta: "El pago se realiza por clase o puedes contratar un paquete de clases con descuento. Acepto transferencia bancaria y efectivo. Contáctame por WhatsApp para más detalles."
    },
    {
      pregunta: "¿Con cuánta anticipación debo agendar?",
      respuesta: "Lo ideal es agendar con al menos 24 horas de anticipación para asegurar tu lugar. Escríbeme por WhatsApp y revisamos la disponibilidad de horarios juntos."
    }
  ],

  // --- CONTACTO ---
  whatsapp: "527221568782",
  telefono: "722 156 8782",
  email: "pata.carinacantu@gmail.com",
  direccion: "Calle 16 de septiembre #115 casa 2, Col. Llano Grande, Metepec, Estado de México",
  horarios: [
    { dia: "Lunes – Viernes", hora: "4:40 pm – 7:40 pm" },
    { dia: "Sábado",          hora: "10:00 am – 2:00 pm" },
    { dia: "Domingo",         hora: "Cerrado" }
  ],
  maps_embed: "https://maps.google.com/maps?q=19.2419971,-99.5663221&output=embed",
  maps_link: "https://www.google.com/maps/search/?api=1&query=19.2419971,-99.5663221",
  formspree: "https://formspree.io/f/mzdljoba",

  // --- REDES SOCIALES ---
  redes: [
    { red: "Instagram", url: "https://instagram.com/", icono: "ti-brand-instagram" },
    { red: "Facebook",  url: "https://facebook.com/",  icono: "ti-brand-facebook" },
    { red: "LinkedIn",  url: "https://linkedin.com/",  icono: "ti-brand-linkedin" }
  ],

  // --- COLORES (cambia aquí el "skin" de la página) ---
  color_primario: "#0d6e8a",     // azul médico profundo
  color_acento:   "#12a89d",     // teal vibrante
  color_claro:    "#e8f7f9",     // fondo suave

};
