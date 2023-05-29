/*/*
 * La sobrecarga de operadores no es posible en JS pero se puede manejar esto de la
 * siguiente manera
 */

 function crearProducto (nombre, precio) {
 	nombre = nombre || "sin nombre"; //si no se define un nombre se colocara el texto "sin nombre"
	precio = precio || 0 // si no se ingresa un valor, se coloca por defecto el cero

	console.log("Producto: ", nombre, "  precio: ", precio);

 }

 function crearProducto100(nombre) { // esta funcion va a crear un producto con un precio definido por defecto
 	crearProducto(nombre, 100);
 }

 function CrearProductoCamisa (precio) { //crear productos de tiipo camisa con el precio  que se determine por el usuario
 	crearProducto("Camisa", precio)
 }


 crearProducto("Lapíz");
 crearProducto100("Corrector");
 CrearProductoCamisa(200);