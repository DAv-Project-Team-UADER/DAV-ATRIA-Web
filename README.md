# DAV-ATRIA-Web

Landing bilingüe (español / inglés) de Atria y DAV, en tres páginas: Atria, DAV y Sobre nosotros.
Sitio estático, sin build ni servidor: HTML + CSS + JavaScript.

Sitio publicado: https://dav-project-team-uader.github.io/DAV-ATRIA-Web/

## Stack

- HTML semántico, CSS con variables (`:root`) y JavaScript vanilla.
- Fuentes: Days One (títulos) e Inter (texto), desde Google Fonts.
- Deploy: GitHub Actions + GitHub Pages.

## Estructura

```
index.html          Atria (ES, por defecto en /)
dav.html            DAV (ES)
nosotros.html       Sobre nosotros (ES)
en/index.html       Atria (EN)
en/dav.html         DAV (EN)
en/about.html       About us (EN)
css/styles.css      Variables (colores, tipografías), estilos y responsive
js/config.js        URLs de descargas, YouTube, manuales (único lugar)
js/main.js          Menú hamburguesa y activación de links
assets/             img/, icons/, fonts/ (exportados de Figma)
.github/workflows/  pages.yml (deploy)
```

Ambos idiomas comparten CSS, JS y assets. Cada página enlaza a su equivalente en el otro idioma
(selector ES/EN) y declara `lang` y `hreflang`.

## Levantarlo en local

No hay build. Cualquiera de estas opciones sirve:

- Abrir `index.html` en el navegador.
- Servir la carpeta con Python: `python -m http.server 8000` y entrar a
  http://localhost:8000/ (español) o http://localhost:8000/en/ (inglés).
- En VS Code, con la extensión Live Server (usar siempre la barra final en `/en/`).

Probar al menos en 360 px, 768 px y 1440 px de ancho.

## Deploy en GitHub Pages

El sitio se publica con GitHub Actions desde `main` (workflow `.github/workflows/pages.yml`).
No se usa rama `gh-pages`.

1. Una sola vez: en el repo, *Settings > Pages > Build and deployment > Source: GitHub Actions*.
2. Mergear el PR a `main`. El workflow se ejecuta solo y publica la raíz del repo.
3. Seguir el avance en la pestaña *Actions*. Al terminar, el sitio queda en la URL de arriba.

GitHub Pages no genera previews por PR: validar en local antes de mergear.

## Qué URLs reemplazar cuando existan los instaladores y YouTube

Todas las URLs están en `js/config.js`. Mientras un valor esté vacío (`""`), el botón queda
deshabilitado con el texto "Próximamente" y no apunta a ningún link.

| Clave en `config.js` | Valor cuando exista |
| --- | --- |
| `downloads.atriaWindows` | `https://github.com/DAv-Project-Team-UADER/Atria/releases/latest/download/ATRIA_Window.exe` |
| `downloads.atriaLinux` | `https://github.com/DAv-Project-Team-UADER/Atria/releases/latest/download/ATRIA_Linux` |
| `downloads.davWindows`, `downloads.davLinux` | A definir |
| `youtube` | URL del canal (a definir) |
| `manual.atria`, `manual.dav` | URL de la documentación (a definir) |
| `uader` | URL oficial de UADER FCyT |

El nombre del asset debe ser siempre el mismo en cada release, así el botón apunta siempre a la
última versión sin tocar la web. Las descargas son directas (sin pasar por la página de Releases).
Los links externos abren en pestaña nueva con `rel="noopener noreferrer"`. No subir binarios a este repo.

## Ramas y commits

- `main`: producción, siempre deployable. No se pushea directo; se actualiza por PR.
- `feat/<scope>`: ramas de trabajo (por ejemplo `feat/landing`). Se eliminan al mergear.
- Commits en español bajo Conventional Commits: `feat(hero): agrego sección principal`,
  `fix(nav): corrijo menú mobile`, `docs(readme): agrego comandos de deploy`.

## Licencia

Proyecto open source bajo licencia GPL-3.0. Ver [LICENSE](LICENSE).
