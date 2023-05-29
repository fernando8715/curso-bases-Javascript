function crearFunciones() {

	var arr = [];
	
	for (var numero = 1; numero <= 5; numero++) {

		arr.push(

			(function(numero) {

				return function() {
					console.log(numero); //imprime el numero que esta en su contexto
				}

			})(numero) //funcion anonima que recibe como parametro numero

		);
	}

	return arr;
}

var funciones = crearFunciones();
funciones[0]();
funciones[1]();
funciones[2]();
funciones[3]();
funciones[4]();

