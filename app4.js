console.log("\n-------definicion de una funcion que tiene como parametro un objeto----")

function imprimir (persona) {
	
	console.log(persona.nombre + " " + persona.apellido);

}

var persona = {

	nombre: "Fernando",
	apellido: "Ruiz"

}


imprimir(persona);

console.log("\n--------definición de funcion anonima-----------");

function imprimir2 ( fn ) {
	fn();
}


imprimir2( function() {
	
	console.log("imprimiendo función anonima")
})

//--------------------------------------------------------

console.log("\n-----------especificando la funcion---------------");

function imprimir3( fn ){
	fn();
}

var miFuncion = function(){
	console.log("imprimiendo la funcion");
}

imprimir3(miFuncion);



