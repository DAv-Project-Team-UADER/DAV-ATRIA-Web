## Descripción

Correcciones de la devolución sobre la landing de Atria y DAV, tomando el Figma como referencia. No cambia la estructura ni el contenido, salvo el texto del link de contacto del footer.

## Cambios

- **Header:** medio elipse con degradé por página; el nombre de la página actual va al centro y subrayado, los otros dos a los costados. Al navegar se mantiene la forma y cambian el degradé y el título activo.
- **Tipografía:** tres niveles (título, subtítulo, texto) como variables CSS, aplicados igual en las tres páginas. En «Sobre nosotros» el texto sube de tamaño y los nombres de los integrantes quedan por debajo de Atria y DAV.
- **Hero y secciones:** el Hero ocupa el alto visible (pantalla menos header) y la sección de descargas empieza al hacer scroll, también a alto completo. Verificado en 360, 768, 1440 y 1920 px.
- **Footer:** «Contacto» ahora lleva a https://github.com/orgs/DAv-Project-Team-UADER/people (el texto del link pasa a «Integrantes en GitHub» / «Members on GitHub»).
- **DAV:** instalador de Linux desde DAV v1.0.5, instalador de Windows desde DAV v1.0.4, y manuales desde Recursos-Pedagogicos según el idioma de la página.
- **Favicon:** logo de Atria (el mismo SVG del Hero).
- **Botón de idioma:** fijo abajo a la derecha, violeta en Atria, azul en DAV y gris en Sobre nosotros.

## Capturas

| | Desktop | Mobile |
| --- | --- | --- |
| Atria (hero) | _agregar_ | _agregar_ |
| Atria (descargas) | _agregar_ | _agregar_ |
| DAV | _agregar_ | _agregar_ |
| Sobre nosotros | _agregar_ | _agregar_ |

## Checklist

- [ ] Header igual al Figma en las tres páginas y degradé/título activo cambian al navegar.
- [ ] Tamaños de letra coherentes en las tres páginas, legibles en mobile.
- [ ] Hero a pantalla completa y sección siguiente al hacer scroll, en distintas resoluciones.
- [ ] Contacto del footer lleva a la lista de integrantes de la organización.
- [ ] Descargas de DAV (Linux y Windows) y manuales ES/EN descargan el archivo correcto.
- [ ] Favicon de Atria visible en la pestaña.
- [ ] Botón de idioma fijo, con el color de cada página.
- [ ] Self-review del diff hecha antes de mergear.
