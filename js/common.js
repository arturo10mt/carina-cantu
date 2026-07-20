// ============================================================
//  COMMON.JS — Lógica compartida por las 7 páginas del sitio
//  (colores, logo del nav, footer, menú móvil, animaciones)
//  Requiere que data.js se cargue antes que este archivo.
// ============================================================

const D = PROFESIONISTA;

// --- Colores personalizados ---
const root = document.documentElement.style;
root.setProperty('--primario', D.color_primario);
root.setProperty('--acento',   D.color_acento);
root.setProperty('--claro',    D.color_claro);

// --- Logo del nav ---
const navLogoEl = document.getElementById('nav-logo');
if (navLogoEl) navLogoEl.textContent = D.nombre.split(' ').slice(0, 2).join(' ');

// --- FOOTER ---
const footerLogoEl = document.getElementById('footer-logo');
if (footerLogoEl) footerLogoEl.textContent = D.nombre.split(' ').slice(0, 3).join(' ');

const footerDescEl = document.getElementById('footer-desc');
if (footerDescEl) footerDescEl.textContent = D.titulo + ' — ' + D.especialidad;

const footerCopyEl = document.getElementById('footer-copy');
if (footerCopyEl) footerCopyEl.textContent = '© ' + new Date().getFullYear() + ' ' + D.nombre + '. Todos los derechos reservados.';

const footerHorarios = document.getElementById('footer-horarios');
if (footerHorarios) {
  D.horarios.forEach(h => {
    footerHorarios.innerHTML += `<tr><td style="padding:4px 0;font-size:.82rem">${h.dia}</td><td style="text-align:right;font-size:.82rem;color:rgba(255,255,255,.5)">${h.hora}</td></tr>`;
  });
}

// --- MENÚ MÓVIL ---
document.getElementById('burger').addEventListener('click', () => {
  document.getElementById('nav-mobile').classList.toggle('activo');
});
function cerrarMenu() {
  document.getElementById('nav-mobile').classList.remove('activo');
}

// --- ANIMACIONES DE ENTRADA (Intersection Observer) ---
// Se expone como función porque varias páginas inyectan sus tarjetas (.fade-in)
// por JS *después* de cargar este script — hay que llamar a initFadeIn() al
// final del script de cada página, una vez que su contenido ya existe en el DOM.
function initFadeIn() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}
