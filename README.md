1. El frontend fue desarrollado con ReactJs
2. El Frontend consume una API que tiene las consultas HTML necesarias para el funcionamiento de la aplicación
3. La API se encuentra desplegada en Heroku en el enlace: 'https://millonario-backend.herokuapp.com/'
4. El front se encuentra desplegado en: https://millonario-front.herokuapp.com/
5. La API cuenta con una base de datos no relacional desarrollada con MongoDB.
6. las peticiones HTML que se pueden realizar hacia la API se realizan de la siguiente manera:
    a) https://millonario-backend.herokuapp.com/preguntas, método POST para almacenar preguntas en la base de datos(no accequible mediante el frontend)
       https://millonario-backend.herokuapp.com/preguntas, método GET para obtener un arreglo con todas las preguntas almacenadas en la base de datos
       https://millonario-backend.herokuapp.com/preguntas/:id, método GET para obtener un objeto con la pregunta suministrando el id(suministrado por MongoDB)
       https://millonario-backend.herokuapp.com/preguntas/indice/:indice, método GET para obtener un objeto con la pregunta suministrando el indice, un número de 1 a 25 en este caso.
    b) https://millonario-backend.herokuapp.com/jugador, método POST para almacenar los datos del jugador en la base de datos
       https://millonario-backend.herokuapp.com/jugador, método GET para obtener un arreglo con todos los jugadores registrados en la base de datos
7. Funcionalidad:
    a) Registro en la base de datos de los usuarios 
    b) Visualización de los usuarios almacenados en la base de datos con sus puntuaciones
    c) Visualización de preguntas aleatorias en la interfáz(al recargar página muestra una pregunta al azar)
    d) Seleción de respuesta múltiple (4 opciones, 3 falsas y 1 verdadera).
    e) Visualización en pantalla de la respuesta seleccionada.
    f) Verifica mediante un botón si la respuesta seleccionada es correcta o incorrecta.
8. Quedó pendiente por agregar mas funcionalidades las cuales no se alcanzaron a completar por falta de tiempo.


Gracias,

Desarrollado Por:


Rodrigo Gallego Arboleda
