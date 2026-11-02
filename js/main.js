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
      if (url.indexOf("/releases/") !== -1) { // descarga directa
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
})();
