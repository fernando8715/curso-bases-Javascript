/*
 * Los arreglos en Javascript son una colección de objetos
 * var nom_arreglo = [];  //forma de declara un arreglo
 */

var arr = [5,4,3,2,1];  //forma de declara un arreglo
console.log(arr); //imprime pantalla el arreglo

console.log(arr[0], arr[4], arr[5]); //imprime en pantalla la posicion, si se ingresa una posicion de más este imprime un undefined

/*/*
 * funciones de los arreglos
 */

arr.reverse(); //invierte el orden del arreglo
console.log(arr);

arr = arr.map(function (elem) {  //el map permite ejecuta una funcion en cada elemento del arreglo sin hacer un ciclo for
	elem *= elem; // multiplicando por el mismo elemento cada numero del arreglo
	return elem;  // retorna el valor de cada elemento del arreglo
});
	console.log(arr);

arr = arr.map(Math.sqrt); // sacando la raiz cuadrada a cada elemento del arreglo
console.log(arr);

arr = arr.join("|"); // une los elementos del arreglo y los separa por comas, dentro del parentesis se puede colocar algun caracter para separar los elementos
console.log(arr);

arr = arr.split("|"); // es la funcion opuesta al join, esta regresa un arreglo de un elemento
console.log(arr);

arr.push("6"); // esta funcion permite ingresar un nuevo elemento al arreglo en la ultima posición
console.log(arr);

arr.unshift("0"); //esta funcion permite ingresar un elemento en la primera posicion del arreglo
console.log(arr);

console.log(arr.toString()); //imprimir los datos del arreglo como un String, es mas rapido que el split

var eliminado = arr.pop();  // elimina el ultimo elemento del arreglo y devuelve el elemento eliminado 
console.log(arr, eliminado);

arr.splice(4, 0, "20"); ////se puede reemplazar un elemento o ingresar elementos despues de la posición cero
// el primer valor es la posicion, el segundo valor si es cero no modifica el valor solo ingresa un elemento en esa posicion y desplaza los demas a la derecha
console.log(arr);

arr = arr.slice(1, 4); // toma una rebanada del arreglo desde donde se indique hasta el siguiente elemento sin tocarlo
console.log(arr);

var arr2 = [

    true,
    {
        nombre: "Fernando",
        apellido: "Ruiz"
    },
    function(){
        console.log("estoy dentro de un arreglo");
    },
    function (persona) {
        console.log(persona.nombre + " " + persona.apellido);
    },
    ["fernando", "Allie", "Atenas",
        [
            "Marta", "Gloria",
            function(){
                console.log(this);
            }

        ]
    ] //Los arreglos tambien pueden contener arreglos

];


console.log(arr2);
console.log(arr2[0]);
console.log(arr2[1].nombre + " " + arr2[1].apellido);
arr2[2](); //imprime la funcion
arr2[3](arr2[1]); //imprimme el nombre y el apellido que le pasamos de la posición 1
console.log(arr2[4][2]); //imprime los datos del arreglo anonimo contenido en el arreglo principal
console.log(arr2[4][3][1]); //imprime los datos del arreglo anonimo contenido en el arreglo anonimo

var arreglo3 = arr2[4][3];
arreglo3[0] = "Mamá"

console.log(arreglo3);
console.log(arr2);

arreglo3[2](); //el this apunta al arreglo que lo contiene



