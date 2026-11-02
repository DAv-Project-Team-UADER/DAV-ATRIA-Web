# DAV-ATRIA-Web

Landing bilingüe (ES/EN) de Atria y DAV, en 3 páginas. Sitio estático: HTML + CSS + JS, sin build.

## Stack
HTML, CSS (variables en `:root`), JavaScript vanilla. Fuentes: Days One e Inter (Google Fonts).

## Estructura
```
index.html         # Atria (ES)
dav.html           # DAV (ES)
nosotros.html      # Sobre nosotros (ES)
en/index.html      # Atria (EN)
en/dav.html        # DAV (EN)
en/about.html      # About us (EN)
css/styles.css     # variables, estilos, responsive
js/config.js       # URLs de descargas y YouTube (único lugar)
js/main.js         # menú y activación de links
assets/            # img, icons, fonts (exportados de Figma)
```

## Levantarlo en local
Abrir `index.html` en el navegador, o servir la carpeta:
```
python -m http.server 8000
```
y entrar a http://localhost:8000.

## Publicar en GitHub Pages
Deploy con GitHub Actions desde `main` (Settings > Pages > Source: GitHub Actions). Sin build; se publica la raíz del repo.

## Qué URLs reemplazar
Todo se cambia en `js/config.js`. Mientras un valor esté vacío, el botón queda deshabilitado con "Próximamente".
- Descargas: `downloads.atriaWindows` / `downloads.atriaLinux` (ejemplos en el comentario de `config.js`).
- YouTube: `youtube`. Manuales: `manual.*`. UADER FCyT: `uader`.

Licencia: GPL-3.0.
