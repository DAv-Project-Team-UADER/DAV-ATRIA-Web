(function () {
  "use strict";

  var cfg = window.ATRIA_CONFIG || {};

  function resolve(path) {
    return path.split(".").reduce(function (obj, key) {
      return obj && obj[key] !== undefined ? obj[key] : "";
    }, cfg);
  }

  /* ---------- Activar links cuando la URL existe en config.js ---------- */
  document.querySelectorAll("[data-link]").forEach(function (el) {
    var url = resolve(el.getAttribute("data-link"));
    if (!url) return; // sin URL: queda deshabilitado / "Próximamente"

    var a = document.createElement("a");
    a.href = url;
    a.className = el.className;
    a.target = "_blank";
    a.rel = "noopener noreferrer";

    if (el.classList.contains("btn")) {
      var label = el.querySelector(".btn__label");
      a.innerHTML = '<span class="btn__label">' + (label ? label.textContent : "") + "</span>";
      if (url.indexOf("/releases/") !== -1) {
        a.removeAttribute("target"); // descarga directa
        a.removeAttribute("rel");
        a.setAttribute("download", "");
      }
    } else {
      var text = el.childNodes[0] ? el.childNodes[0].textContent.trim() : url;
      a.textContent = text;
    }
    el.replaceWith(a);
  });

  /* ---------- Menú hamburguesa ---------- */
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.getElementById("main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  /* ---------- Sección activa (nav + selector de idioma con misma ancla) ---------- */
  var header = document.querySelector(".site-header");
  var langLink = document.querySelector("[data-lang-link]");
  var navLinks = document.querySelectorAll(".main-nav a[data-section]");
  var sections = [
    { id: "atria", key: "atria" },
    { id: "dav", key: "dav" },
    { id: "nosotros", key: "about" }
  ];

  function setActive(sec) {
    if (header) header.setAttribute("data-active", sec.key);
    navLinks.forEach(function (l) {
      if (l.getAttribute("data-section") === sec.key) l.setAttribute("aria-current", "true");
      else l.removeAttribute("aria-current");
    });
    if (langLink) {
      var base = langLink.getAttribute("href").split("#")[0];
      langLink.setAttribute("href", base + "#" + sec.id);
    }
  }

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        sections.forEach(function (s) {
          if (s.id === entry.target.id) setActive(s);
        });
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    sections.forEach(function (s) {
      var node = document.getElementById(s.id);
      if (node) io.observe(node);
    });
  }

  // Si se llega con ancla (ej. desde el selector de idioma), scrollea a esa sección.
  if (location.hash) {
    var target = document.querySelector(location.hash);
    if (target) target.scrollIntoView();
  }
})();
