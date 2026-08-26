LAION — PORTFOLIO DINÁMICO
==========================

QUÉ CAMBIÓ
----------
La antigua galería de imágenes sueltas fue reemplazada por un sistema de proyectos.
Cada proyecto tiene una tarjeta y, al abrirlo, una ficha completa con descripción,
tags y galería de proceso.

NO TENÉS QUE CREAR HTML PARA CADA PROYECTO.

PARA AGREGAR / EDITAR TRABAJOS
------------------------------
1. Cargá tus imágenes dentro de /images.

   Estructura sugerida:

   images/projects/mesa-modular/cover.jpg
   images/projects/mesa-modular/01.jpg
   images/projects/mesa-modular/02.jpg
   images/projects/mesa-modular/03.jpg

2. Abrí projects.js.
3. Duplicá uno de los bloques dentro de window.PORTFOLIO_PROJECTS.
4. Cambiá:
   - title
   - category
   - subtitle
   - cover
   - year
   - description
   - tags
   - gallery

FILTROS
-------
No se editan en HTML. Se crean automáticamente según las categorías que escribas
en projects.js.

Ejemplo:
category: "Furniture"
category: "Product"
category: "Development"
category: "Interiors"

Si agregás category: "Graphic", aparecerá solo el botón GRAPHIC.

OTHER STUFF
-----------
window.PORTFOLIO_ARCHIVE sirve para trabajos sueltos.
Si no querés mostrarlo, usá:

window.PORTFOLIO_ARCHIVE = [];

ARCHIVOS
--------
index.html    estructura general de tu web
main.css      estilos + responsive
script.js     comportamiento de la web y portfolio
projects.js   <-- archivo que deberías editar habitualmente
