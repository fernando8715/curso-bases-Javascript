

function Persona() {

	this.nombre = "Juan";
	this.apellido = "Mendoza";
	this.edad = 34;
	this.imprimirPersona = function () {
		return this.nombre + " " + this.apellido;
	}

};


//la palabra reservada new reserva el espacio en memoria, crea el contexto, 
// crear el this que hace referencia al objeto persona. tambien se puede crear metodos


var juan = new Persona(); 

console.log(juan);
console.log(juan.nombre);
console.log(juan.imprimirPersona());
















