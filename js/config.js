/*
 * Configuración central de URLs.
 * Mientras un valor esté vacío (""), el botón queda deshabilitado con el texto "Próximamente".
 * Para activarlo, pegá la URL acá. No hace falta tocar el HTML.
 *
 * URLs de ejemplo (usar cuando existan los releases; el nombre del asset debe ser siempre el mismo):
 *   atriaWindows: https://github.com/DAv-Project-Team-UADER/Atria/releases/latest/download/ATRIA_Window.exe
 *   atriaLinux:   https://github.com/DAv-Project-Team-UADER/Atria/releases/latest/download/ATRIA_Linux
 *
 * No subir binarios a este repo.
 */
window.ATRIA_CONFIG = {
  downloads: {
    atriaWindows: "",
    atriaLinux: "",
    // DAV: el PDF no define nombres de assets todavía.
    davWindows: "",
    davLinux: ""
  },
  // Cuando exista el canal de YouTube (se abre en pestaña nueva).
  youtube: "",
  // Manuales (a definir).
  manual: {
    atria: "",
    dav: ""
  },
  // URL oficial de UADER FCyT (a confirmar).
  uader: ""
};
