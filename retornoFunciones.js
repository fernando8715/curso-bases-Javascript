console.log("\n---------------returno de funciones----------------");

function obtenerAleatorio () {
	
	return Math.random();
}


console.log(obtenerAleatorio());


function obtenerNombre () {
	return "Juan"
};


//-----------------------------------------------------------------
// asignando el valor a una variable

var nombre = obtenerNombre();

console.log(nombre + " Padilla")


console.log("\n------funcion que regrese un booleano--------")
console.log("el numero aleatorio es mayor a 05")

function esMayor05 () {
	if (obtenerAleatorio() > 0.5) {
		return true;
	} else {
		return false;
	}
}

if( esMayor05()){
	console.log("es mayor a 0,5");
} else {
	console.log("es menor a 0,5");
}

//-------------------------------------------------------------------
//Las funciones pueden regresar objetos
console.log("\n--------Funciones que retornan objetos----------------");

function crearPersona(nombre, apellido){

	return {	//objeto aninimo

		nombre: nombre,
		apellido: apellido,

	}
}

var persona = crearPersona("Maria", "paz");

console.log(persona);
console.log(persona.nombre);
console.log(persona.apellido);

//--------------------------------------------------------------
//Funciones que retornan funciones
console.log("\n--------Funciones que retornan funciones----------------");


function crearFuncion(){

	return function (nombre) {
		console.log("Me creó !!! " + nombre);
	
		return function(){
			console.log("segunda Funcion");
		}

	}
}

var nuevaFuncion = crearFuncion();
//nuevaFuncion(persona.nombre);

//en esta variable va a contener las dos funciones
var segundaFuncion = nuevaFuncion(persona.nombre);
segundaFuncion();








