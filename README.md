# Primer prueba de conocimiento

## Instrucciones

### Panorama general

Usted va a construir una infografía que se deriva de los datos que se proporciona, así como los datos de entrada del usuario. Javascript orientado a objetos es perfecto para trabajar con datos complejos, pero no es de mucha utilidad sin una interfaz para interactuar. Extraeras información de un formulario para completar un array de objetos que luego serán anexados al DOM.

Hay una buena cantidad de piezas en movimiento que dependen unas de otras para funcionar. Tendrás que planificar la lógica de lo que estás tratando de lograr antes de empezar a desarrollar. Hay una lista de funcionalidades adicionales que puedes añadir y que buscan mejorar la experiencia de los usuarios.

Para el proyecto, generarás una cuadrícula de 3x3 de fichas (9 en total) con el humano en la ficha central. Cada ficha contendrá la especie, una imagen y un dato. Para el ficha humano, se mostrará el nombre del humano en lugar de la especie y no es necesario ningún hecho para el humano. Cuando el usuario haga clic para generar la infografía a partir del formulario, aparecerá la cuadrícula y el formulario se ocultará. Los hechos mostrados deben ser aleatorios por dinosaurio con una oportunidad de mostrar al menos 6 tipos diferentes de hechos (3 deben ser de los métodos que se crean). Uno de los títulos debe ser para una paloma en la que ficha debe mostrar siempre, "Todas las aves se consideran dinosaurios”.
El usuario debera poder generar de nuevo la infografia con los datos suminiestras con el fin de compara sus datos con el de otros dinosaurios; el proceso debe recordar hasta dos veceses la previas ejecuciones. Asi tambien el usuario debera poder iniciar el proceso desde cero usando el formulario para suministrar nuevos datos


### Como Empezar

Suministrados parte del código fundacional. Así que sigue estos pasos para empezar:

1. Empezaremos con la configuración típica - clonar este repositorio e instalar las dependencias

2. Decide cómo vas a trabajar con las clases, luego construye tus clases y objetos.

3. Obtén los datos humanos del formulario html para construir tu objeto humano. Piensa en las 3 cosas que vas a comparar con tu humano. Es posible que tengas que crear más campos, ajustar los campos que hay o eliminar campos para que se correspondan con los datos que vas a recuperar.

4. Crea al menos tres métodos que comparen los datos del dinosaurio con los del humano. Dependiendo de cómo hayas decidido crear tus objetos y del patrón de diseño que hayas elegido, puedes encontrarte con problemas para acceder o trabajar con algunos de los datos. ¿Necesitas crear alguna función para acceder/almacenar estos datos?

5. Genera las fichas y añádelas al DOM. Cada título de Dino debe incluir al menos la especie, una imagen y un hecho. El hecho del dino que se muestre debe ser elegido al azar entre al menos 6 opciones (incluyendo sus 3 métodos). La ficha de Humano debe incluir el nombre del usuario, y el gráfico del humano--no es necesario ningún hecho. La ficha de pájaros debe incluir la especie, la imagen y el hecho: "All birds are considered dinosaurs.".

6. Asegúrese de que la rejilla no se agrega hasta que se hace clic en el botón para enviar los datos del usuario. Además, elimine el formulario una vez que el usuario haya hecho clic para generar la infografía. Es una buena idea eliminar cualquier llamada a console.log en este punto.

7. REFACTORIZAR. En este punto, su código debería funcionar correctamente. Idealmente, la refactorización se realiza mientras se está desarrollando, pero como desarrollador nuevo, es posible que no tenga toda la imagen en la cabeza para poder hacerlo correctamente. Cuando este refactorizando usar los commits que describan el proceso con su palabra clave

8. Para previsualizar la versión final de tu proyecto en línea, confirma el proyecto en tu cuenta de github. Accede a la página de índice en. https://github.com/path/to/project/index.html Copia esa URL en https://htmlpreview.github.io/

### Requisitos del proyecto

Para completar este proyecto, tu UI debe mostrar lo siguiente:

- [ ] El formulario debe contener un botón que al hacer clic, elimine el formulario
- [ ] El botón debe añadir una rejilla con 9 fichas al DOM con el Humano situado en el centro
- [ ] La ficha de Humano debe mostrar el nombre de la persona y una imagen, las fichas de dino deben contener la especie, una imagen y un dato, el título de ave debe contener la especie, la imagen y "Todas las aves son Dinosaurios”.
- [ ] Un boton para permitir comparar el humano con una configuracion de dinosarios que no se mostraron previamente.
- [ ] Un boton para reiniciar el proceso con nuevos datos en el formulario.
- [ ] Una interfaz para permir elegir el sistema metrico


Para completar este proyecto, su código backend debe:

- [ ] Contener una clase y todos los objetos necesarios
- [ ] Contener al menos 3 métodos para comparar dinosaurios con el humano
- [ ] Metodo(s) para recordar al menos las dos configuraciones de dinos mostradas previamente y no mostrarlas en la tercera ejecución
- [ ] Obtener los datos del usuario desde el DOM
- [ ] Anexar mosaicos con datos de objetos al DOM
- [ ] Operaciones para convertir valores en sistema imperial y sistema metrico

Todas las tecnologias deben estar en estado "Vanilla", está prohibido usar frameworks o librerías de ningún tipo


Algunas propuestas podrían ser validar los datos del formulario para asegurar que los datos son aceptables y completos. Permitir al usuario generar una nueva infografía. Mover los colores de los mosaicos de CSS a JS para tener más control. Aleatorizar el orden de las fichas manteniendo al humano en el centro. Crear un estado hover en las fichas que muestre el resto de las estadísticas de las especies. Crear métodos adicionales para comparar los datos. Reescribir el proyecto para utilizar constructor functions, factory functions, el module pattern, y revealing module pattern. Cambie los datos y las imágenes para generar una infografía de su propia elección. Permita que el usuario seleccione diferentes unidades para los números y actualice sus métodos para tener en cuenta esto. Realiza cambios en el CSS y el HTML para hacer que el proyecto sea tuyo.

### Control de versiones

Se evaluara el uso de Git desde el principio. Asegúrate de hacer commits a menudo y de usar mensajes de commit bien formateados que se ajusten a nuestra Guía de Estilo Git.