/* los prototipos sirven cuando se tiene muchos objetos con una misma estructura
	y sirve para hacer mas eficiente los objetos, los prototipos nos ayudan a 
	manejar mejor los objetos.
	Los prototipos son propiedades y metodos que son heredados por ser un tipo de dato, ejemplo: un tipo numerico hereda las funciones de ese tipo
	Si utilizamos mucho una funcion, la podemos incluir en el prototipo y la tendremos
	a la mano para que se facilmente poder llamarlas
*/


function Persona (){
	this.nombre = "Fernando";
	this.apellido = "Ruiz";
	this.edad = 34;
};

/* si la coloco una funcion como prototipo evito tener q se repita estas lineas
 de codigo cada vez q se crea un nuevo objeto, solo se creara una vez */

	Persona.prototype.imprimirInfo = function(){
		console.log(this.nombre + " " + this.apellido + " ("+this.edad + ")");
	}

var fer = new Persona();

Number.prototype.esPositivo = function () {
	if(this > 0){
		return true;
	}else{
		return false;
	}
}


