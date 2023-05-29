/*
 * La funcion type of nos permite verificar el tipo de dato el tipo de dato que
 estamos recibiendo antes de hacer cualquier acción
 */


function identifica(param) {
	console.log(typeof param);
}

function Persona() {

};

var juan = new Persona();

identifica(1); //number
identifica("Fernando"); //string
identifica(juan); //object 			
identifica({}); //object 			la sintaxis de un objeto son { }			
identifica(function(){}); //funcion    la syntaxis de la funcion   function(){}


/*------------ejemplo2--------------------------*/
console.log("\n-------------ejemplo2-------------------");

function identifica2 (param) {
	if(typeof param == "function"){
		param(); //invoca la funcion
	}else{
		console.log(typeof param);
		console.log(param); //imprime el param
	}
}

function Persona(){
	this.nombre = "Fernando";
	this.edad = 34;
}

var juan = new Persona();

identifica2(function(){console.log("soy función anónima");});
identifica2(juan); //como el param que estoy enviando a la funcion no es una funcion la imprime en pantalla
identifica2(2); //como no es una funcion va a mostrar en pantalla el 2


//---------------------------------------------------------------------------

console.log("\n--------utilizando instanceof para comparar tipos objetos");
/*
 * Si necesito saber si el tipo del parametro es el que envie puedo utilizar la 
 * palabra reservada instanceof compara dos objetos 
 */


function identifica3 (param) {
	console.log(param instanceof Persona); //regresa un booleano y lo imprime en pantalla
};

identifica3(juan); //como el param es un objeto de tipo persona imprime true
identifica3("fernando"); //como no es un objeto, imprime en pantalla false 



