
// Las variables primitivas siempre se pasan por valor, cada una va a tenner espacio de memoria diferente

var a = 10;
var b = a;

 console.log ("a: ", a );
 console.log ("b: ", b );

a = 20;

 console.log ("a: ", a );
 console.log ("b: ", b );


// 	A diferencia de los objetos, donde las propiedades siempre se pasan por referencia.

var c = {
	nombre: "Juana"
}

var d = c;

console.log ("c: ", c );  //imprime el valor de Juana
console.log ("d: ", d );  //imprime el valor de Juana

c.nombre= "Maria"; //imprime el valor de Maria tanto para c como para d

console.log ("c: ", c );  //imprime el valor de Juana
console.log ("d: ", d );  //imprime el valor de Juana

d.nombre= "Pedro"; 

console.log ("c: ", c );  //imprime el valor de Pedro
console.log ("d: ", d );  //imprime el valor de Pedro


// Notacion de punto y corchete

var persona = {
	nombre: "Fernando",
	apellido: "Ruiz",
	edad: 25,
	direccion: {
		pais: "costa Rica",
		ciudad: "San Jose",
		edificio: {
			nombre: "Edificio principal",
			telefono: "0327-325063"	
		}
	}
};

console.log( persona.direccion.pais );

// Para agregar una propiedad nueva a un objeto 

persona.direccion.zipcode = 12345;

// Cuando queremos acceder a una propiedad que se hace con la notacion de punto, pero esta es demasiado larga,
// entonces se asigna esa propiedad a una variable para luego imprimir en pantalla

console.log(persona.direccion.edificio.telefono );  // demasiado largo si vamos a trabajar mucho con esta direccion

var edificio = persona.direccion.edificio;

// si quiero agregarle mas propiedades

edificio.numpiso= "8vo Piso";

console.log (persona);

// La notación de corchete permite decir que campo quiere mostrar, se utiliza cuando se trabaja en formularios

var campo = "";

console.log ( persona["direccion"]["edificio"]["nombre"] );





