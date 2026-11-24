# DAV-ATRIA-Web

Landing bilingüe (español / inglés) de Atria y DAV, en tres páginas: Atria, DAV y Sobre nosotros.
Sitio estático, sin build ni servidor: HTML + CSS + JavaScript.

Sitio publicado: https://dav-atria-web.vercel.app/

## Stack

- HTML semántico, CSS con variables (`:root`) y JavaScript vanilla.
- Fuentes: Alan Sans (navegación), Days One (títulos) e Inter (texto), importadas desde Google Fonts en `css/styles.css`.
- Deploy: Vercel (sitio estático, sin build).

## Estructura

```
index.html          Atria (ES, /atria)
dav.html            DAV (ES, /DAV)
nosotros.html       Sobre nosotros (/nosotros)
en/index.html       Atria (EN, /en/atria)
en/dav.html         DAV (EN, /en/DAV)
en/about.html       About us (/en/aboutUs)
vercel.json         Rutas limpias, redirecciones y rewrites de Vercel
dev_server.py       Preview local de las rutas limpias, sin cuenta de Vercel
css/styles.css      Variables (colores, jerarquía tipográfica), header, hero a pantalla completa y responsive
js/config.js        URLs de descargas, YouTube, manuales (único lugar)
js/main.js          Header fijo, visibilidad según footer y activación de links por idioma
assets/             img/, icons/, fonts/ (exportados de Figma)
```

Ambos idiomas comparten CSS, JS y assets. Cada página enlaza a su equivalente en el otro idioma
(selector ES/EN) y declara `lang` y `hreflang`.

## Levantarlo en local

No hay build ni hace falta iniciar sesión en Vercel. Para probar localmente las rutas
limpias configuradas en `vercel.json`, ejecutar:

```bash
python dev_server.py
```

Luego abrir `http://localhost:8001/atria` (también están disponibles las otras cinco rutas).
Los servidores estáticos simples no aplican rewrites; con ellos, abrir los archivos `.html`
directamente:

- Abrir `index.html` en el navegador.
- Servir la carpeta con Python: `python -m http.server 8000` y entrar a
  `http://localhost:8000/index.html`, `dav.html`, `nosotros.html` o sus equivalentes en `en/`.
- En VS Code, con la extensión Live Server, abrir las páginas `.html` correspondientes.

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
