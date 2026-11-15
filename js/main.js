(function () {
  "use strict";

  var cfg = window.ATRIA_CONFIG || {};

  function resolve(path) {
    return path.split(".").reduce(function (obj, key) {
      return obj && obj[key] !== undefined ? obj[key] : "";
    }, cfg);
  }

  /* Activar links cuando la URL existe en config.js; si está vacía queda deshabilitado ("Próximamente") */
  document.querySelectorAll("[data-link]").forEach(function (el) {
    var url = resolve(el.getAttribute("data-link"));
    if (!url) return;

    var a = document.createElement("a");
    a.href = url;
    a.className = el.className;
    a.target = "_blank";
    a.rel = "noopener noreferrer";

    if (el.classList.contains("btn")) {
      var label = el.querySelector(".btn__label");
      a.innerHTML = '<span class="btn__label"></span>';
      a.firstChild.textContent = label ? label.textContent : "";
      if (url.indexOf("/releases/download/") !== -1) { // instalador: descarga directa, sin salir de la página
        a.removeAttribute("target");
        a.removeAttribute("rel");
        a.setAttribute("download", "");
      }
    } else {
      a.textContent = el.childNodes[0] ? el.childNodes[0].textContent.trim() : url;
    }
    el.replaceWith(a);
  });

  /* Menú hamburguesa */
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.getElementById("main-nav");
  if (toggle && nav) {
    function close(focus) {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      if (focus) toggle.focus();
    }
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) close(true);
    });
  }

  /* Header: se esconde al bajar y reaparece al subir (siempre visible arriba de todo o con el menú abierto) */
  var header = document.querySelector(".site-header");
  if (header) {
    var lastY = window.pageYOffset;
    var ticking = false;
    var keepUntil = 0;
    /* Al saltar a una sección con un link interno (botón Descargar) el header queda visible */
    document.addEventListener("click", function (e) {
      var a = e.target.closest && e.target.closest('a[href^="#"]');
      if (a) { keepUntil = Date.now() + 800; header.classList.remove("is-hidden"); }
    });
    function update() {
      var y = Math.max(0, window.pageYOffset);
      var delta = y - lastY;
      if (Date.now() < keepUntil) { lastY = y; }
      else if (Math.abs(delta) > 6) {
        var menuOpen = nav && nav.classList.contains("is-open");
        header.classList.toggle("is-hidden", delta > 0 && y > 80 && !menuOpen);
        lastY = y;
      }
      ticking = false;
    }
    window.addEventListener("scroll", function () {
      if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
    }, { passive: true });
  }
})();
