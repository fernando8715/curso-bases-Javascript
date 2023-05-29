
function a(){

	console.log("Funcion a")
};

a();

a.nombre = "Maria";
a.direccion = {
	pais: "Colombia",
	ciudad: "Popayan",
	edificio: {				//dentro de un objeto va : en vez de =
		nombre: "Calatrava",
		piso: "2do"
	}
}


//---------------------------------------------------------------

// Metodos y el objeto this

var persona = {
	nombre: "Fernando",
	apellido: "Ruiz",
	imprimirNombre: function () {   //metodo
		
	//La palabra this hace referencia a las proppiedades que estan dentro del objeto persona
		console.log(this.nombre + " " + this.apellido)
	},
	direccion: {
		pais: "Colombia",
		ciudad: "Popayan",
		obtenerPais: function () {
			console.log(this.pais);	
		}
	}
};

persona.nombre = "Ciro";

persona.imprimirNombre();
persona.direccion.obtenerPais();












