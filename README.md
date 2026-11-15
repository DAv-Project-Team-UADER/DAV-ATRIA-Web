# DAV-ATRIA-Web

Landing bilingüe (español / inglés) de Atria y DAV, en tres páginas: Atria, DAV y Sobre nosotros.
Sitio estático, sin build ni servidor: HTML + CSS + JavaScript.

Sitio publicado: https://dav-atria-web.vercel.app/

## Stack

- HTML semántico, CSS con variables (`:root`) y JavaScript vanilla.
- Fuentes: Days One (títulos) e Inter (texto), desde Google Fonts.
- Deploy: Vercel (sitio estático, sin build).

## Estructura

```
index.html          Atria (ES, por defecto en /)
dav.html            DAV (ES)
nosotros.html       Sobre nosotros (ES)
en/index.html       Atria (EN)
en/dav.html         DAV (EN)
en/about.html       About us (EN)
css/styles.css      Variables (colores, jerarquía tipográfica), header, hero a pantalla completa y responsive
js/config.js        URLs de descargas, YouTube, manuales (único lugar)
js/main.js          Menú hamburguesa y activación de links (descargas y manuales por idioma)
assets/             img/, icons/, fonts/ (exportados de Figma)
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

## Deploy en Vercel

El repo está conectado a Vercel (proyecto `dav-atria-web`). No hay build: es un sitio estático.

- Configuración: Framework Preset *Other*, Root Directory `./`, sin Build/Output/Install Command.
- Producción: cada merge a `main` publica en https://dav-atria-web.vercel.app/ automáticamente.
- Preview: cada PR y cada push a una rama genera una URL de preview (aparece como comentario en el PR).
- Seguimiento de los deploys: pestaña *Deployments* del proyecto en Vercel.

## Qué URLs reemplazar cuando existan los instaladores y YouTube

Todas las URLs están en `js/config.js`. Mientras un valor esté vacío (`""`), el botón queda
deshabilitado con el texto "Próximamente" y no apunta a ningún link.

| Clave en `config.js` | Valor |
| --- | --- |
| `downloads.davLinux` | Archivo del release [DAV v1.0.5](https://github.com/DAv-Project-Team-UADER/DAV/releases/tag/v1.0.5) |
| `downloads.davWindows` | Archivo del release [DAV v1.0.4](https://github.com/DAv-Project-Team-UADER/DAV/releases/tag/v1.0.4) |
| `downloads.atriaWindows`, `downloads.atriaLinux` | A definir (por ejemplo `.../Atria/releases/latest/download/<archivo>`) |
| `manual.dav.es`, `manual.dav.en` | Archivo del manual en la carpeta [Manual](https://github.com/DAv-Project-Team-UADER/Recursos-Pedagogicos/tree/main/Manual) de Recursos-Pedagogicos, uno por idioma |
| `manual.atria.es`, `manual.atria.en` | A definir |
| `youtube` | URL del canal (a definir) |
| `uader` | https://fcytcdelu.uader.edu.ar/ |

Las páginas en español usan el manual `es` y las páginas en inglés el manual `en`.
Para copiar la URL de un archivo: clic derecho sobre el archivo en GitHub > "Copiar dirección del enlace".

El nombre del asset debe ser siempre el mismo en cada release, así el botón apunta siempre a la
última versión sin tocar la web. Los instaladores se descargan directo desde el release, sin salir de la landing.
Los links externos abren en pestaña nueva con `rel="noopener noreferrer"`. No subir binarios a este repo.

## Ramas y commits

- `main`: producción, siempre deployable. No se pushea directo; se actualiza por PR.
- `feat/<scope>`: ramas de trabajo (por ejemplo `feat/landing`). Se eliminan al mergear.
- Commits en español bajo Conventional Commits: `feat(hero): agrego sección principal`,
  `fix(nav): corrijo menú mobile`, `docs(readme): agrego comandos de deploy`.

## Licencia

Proyecto open source bajo licencia GPL-3.0. Ver [LICENSE](LICENSE).
