

var a = "Juan Herrera Contreras";

console.log(a.toUpperCase()); //coloca el texto en mayusculas

console.log(a.toLowerCase());

var i = a.indexOf("Herrera"); //busca la posicion de una letra
console.log("la letra esta en la posición: " + i); 

i = a.lastIndexOf("n"); // busca la posicion de una letra empezando por el final
console.log(i);

var nombre = a.substring(0, a.indexOf(" ")); //corta hasta cuando encuentra un espacio
console.log(nombre);


var split = a.split(" "); //convierte el texto en un arreglo, el espacio dentro de la funcion va a separarlo cuanndo encuentre un espacio
console.log(split);
console.log(split.length);	// cuenta el numero de palabras

console.log(a.charAt(1)); //devuelve el caracter de una posición

















