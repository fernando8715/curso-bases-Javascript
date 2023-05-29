
//Funciones, para definir una funcion se utiliza la palabra reservada function, seguido 
// del nombre de la funcion se coloca parentesis. 
// se usa la notacion de camelCase. Dentro de los parentesiis van parametros
// Para invocar la funcion se escribe el nombre seguido de ()


function getNombre (){
	var a = 20;

	console.log(a);
}

getNombre();


// es una buena practica escribir las funciones al inicio

function imprimir(fn){
	fn();
}

var obj = {
	nombre: "Fernando",
	apellido: "Ruiz"
}

var miFuncion = function(){
	console.log("mi funcion");
}

//imprimir(obj);

//las funciones en javascript son objetos

imprimir(miFuncion);




