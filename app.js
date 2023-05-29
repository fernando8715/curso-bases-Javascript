
// hay 5 tipos de datos primitivos

var num = 10;
var str = "text";
var bol = true;
var und = undefined;
var nul = null;

// Javascript puede entender el cambio de un tipo de dato

bol = num;

/* Cuando vemos en consola una estructura que esta encerrada entre llaves, se identifica que es un objeto. 
las {} es la definicion de objeto vacio, el objeto puede ser tener datos primitivos o contener otros objetos 

*/

var obj = {};

/* 	dentro de un objeto todo esta dentro de lo que se llama nomenclatura de pares, es decir cada una de las
	propiedaes que se pongan tiene que tener :
	Si el objeto tiene mas de una propiedad se coloca , al final de la propiedad pero la ultima propiedad va SIN ,
	
	Un objeto puede tener otros objetos dentro y este contener propiedades u objetos dentro de el.

	Los nombres de variables siempren empiezan con minuscula, pero cuando son objetos con palabras compuestas
	se utiliza el camelCase.

	las variables cuando estan dentro de los objetos no es necesario escribir la palabra "var", porque Javascript
	reserva el espacio en memoria al momento de crear el objeto, el objeto puede crecer de manera infinita, solo
	depende del tamaño de la Ram 

	para acceder a una propiedad que esta dentro de un objeto se utiliza el punto, ejm: obj1.numero
*/

var obj1 = {	
	numero: 10,
	texto: "Nuevo texto",

	objHijo: {
		num: 20,
		text2: "Nuevo texto 2"

	}
};

console.log (obj1);

console.log (obj1.numero);

