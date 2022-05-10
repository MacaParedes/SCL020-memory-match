funciones:

mostrar nombre
- toma: caja de texto value
- devuelve: nombre
- funcion: desde html1 a js1 a html2

boton start
- toma: click
- devuelve: html2
- desde html1 a html2

crear lista cartas
- toma: items pokemon
- devuelve: lista cartas
- desde base de datos a js2

duplicar lista cartas
-toma lista cartas
- devuelve: cartas duplicadas
- desde js2 a js2

shufflear lista cartas
- toma: cartas duplicadas
- devuelve: cartas shufleadas
- desde js2 a js2

crear tablero
- toma: cartas duplicadas (largo, imagenes)
- devuelve tablero
- desde js2 a js1

insertar tablero
- toma: div html2
- devuelve: tablero div html2
- desde js1 a html2

flip cartas
- toma: click html2
- devuelve carta girada en html2
- devuelve divs girados a js2
- desde js2 a html2, desde js2 a js2

revisar match
- toma: divs girados
- devuelve: match / no match
desde js2 a js2

no match:
- toma: revisar match, divs girados
- devuelve divs girados
desde js2 a html2

match:
- toma: revisar match, divs girados
- devuelve: modal match, pokemones, barra sube.
- desde js2 a html2?

modal match:
- toma div html2, divs girados
- devuelve div mostrado por unos segundos

barra sube:
- toma div html2, match
- devuelve: barra subida en html2
- desde 

pokemones van al jugador
-toma divs girados, div html(creado en js)
- devuelve pokemones al jugador html2

modal win

reiniciar
