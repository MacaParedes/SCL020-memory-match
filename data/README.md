### Definición del producto

Proceso de diseño
Problema - Solución

### Historias de usuario

_research_
Necesidades usuario
Entretención
Estimulos (sonidos, imagenes de pokemon, Ash, etc.)

hacer/ver

_definition of done_
Definición de terminado
Criterios de aceptación

1. Dado un set de cartas, barajar las cartas y mostrarlas en la interfaz.
2. Permitir al usuario _destapar_ las cartas de 2 en 2.
3. Dejar destapadas las cartas que coincidan al destaparlas.
4. Indicar al usuario que ganó cuando haya destapado todas las cartas.
5. Ser _responsive_, es decir, debe visualizarse sin problemas desde distintos
   tamaños de pantallas: móviles, tablets y desktops.
6. Que la interfaz siga los fundamentos de _visual design_.

### Diseño de la Interfaz de Usuario

#### Prototipo de baja fidelidad

![Prototipo de Baja Fidelidad](/src/pictures/prototipo-baja1.png)
![Prototipo de Baja Fidelidad](/src/pictures/prototipo-baja2.png)

#### Prototipo de alta fidelidad

![Prototipo de Alta Fidelidad](/src/pictures/prototipo-alta.png)

#### Testeos de usabilidad

Problemas de usabilidad detectados:

- Inicialmente usuari@ podía dar vuelta 3 cartas al mismo tiempo.
- Sonido de match se escuchaba a muy bajo volumen.
- letra poco legible.
- Carta se daba vuelta muy rápido.
- Poco conexión con el usuario (puntos, capturas, etc.)

#### Planificación

Plan de trabajo
Sprint 1. Experiencia de usuario
Historias de usuario
Prototipo baja fidelidad
Prototipo alta fidelidad
Sprint 2. Funciones en simple (arreglo de 4 cartas)
Botón iniciar: mostrar tarjetas ocultas, agarrar, revolver.
click 1: mostrar (traer) y mantener. Reconocer tarjeta marcada.
click 2: mostrar (traer) y mantener (límite de tiempo + deshabilitar click). Reconocer tarjeta marcada. comparar ambas tarjetas. volver a ocultar O dejar dadas vuelta.
Volver a jugar = iniciar
Sprint 3. CSS y uso de todas las cartas
Imitar prototipo. Usar valores estéticos que salen en la guía.
Hacerlo responsive.
Incluir algo divertido para niñxs. (animación? selector con forma de pokebola? meme al finalizar el juego? selección de personaje? jueguito cuando se hace match? sonido pokemon match?)
Sprint 4.
hacer readme
hacer tests
usar Git Hub Pages
