

var carro = {
	color: "rojo",
	marca: "Mazda",
	imprimir: function(){
		var salida = this.marca + " - " + this.color;
		return salida;
	}
};

var carro2 = {
	color: "rojo",
	marca: "Toyota"
};


console.log(carro.imprimir());

var logCarro = function(arg1, arg2){
	console.log("Carro: ", this.imprimir()); //aqui, el this apunta al objeto global, como no encuentra la funcion va a imprimir un error
	console.log("argummentos", arg1, arg2);
	console.log("==================================================");
}

//con la funcion bind puedo alterar el valor de this cuando se llame la funcion
// con el bind puedo hacer q apunte al objeto carro

var logModeloCarro = logCarro.bind(carro);

logModeloCarro();

//=======================================================================
//Metodo Call, esta invoca la funcion y el primer parametro sera a lo que debe apuntar el this
//seguidamente vienen los parametros que pide la funcioón.

logModeloCarro.call(carro, "123", "456");	

//=======================================================================
//El metodo apply, este invoca la funcion pero solo recibe dos parametros, uno es el objeto al que queremos que apunte this
// y el otro en un arreglo que puede contener x cantidad de parametros dentro, esto es util cuando no sabemos la cantidad de parametros que ocupara la función

logModeloCarro.apply(carro, ["asd", "xyz"]);


/*esto nos sirve para hacer uso de funciones prestadas, el objeto carro2 tiene definidos unas propiedades pero sin la funcion imprimir
* si llamo al metodo imprimir carro pero no voy a llamar la funcion sino que empleo el call y en los parentesis coloque el objeto al cual quiero apuntar con el this
* vamos a cabiar el puntero del this para que apunte a los valores del carro 2
*/

console.log(carro.imprimir.call(carro2));










