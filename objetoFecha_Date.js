
/*/*
 * hay tres maneras de inicializar fechas que son los mas comunes, 
 * las fechas son objeto
 */ 

//var hoy = new Date();
//var fMili = new Date(1639012110852); //representacion numerica de una fecha
//var fechaFija = new Date(1987,7,15,7,20,43); //año, mes, dia, hora, min, seg, miliseg


//console.log(hoy);
//console.log(fMili);
//console.log(fechaFija); //los meses en js inician desde cero para el mes enero

// Las fechas tienen propiedades y metodos

//========hacer calculo de cuanto demora un proceso================
/*
var inicio = new Date()

for (var i = 0; i <= 15000; i++) {

	console.log("Algo...");

}

var fin = new Date();

//console.log(inicio);
//console.log(fin);

var duracion = fin.getTime() - inicio.getTime();
console.log(duracion, "milisegundos"); //duracion en milisegundos
console.log(duracion/1000, "segundos");

*/

var actual = new Date();

//Prototipo para sumar dias
Date.prototype.sumarDias = function (dias) { //hacer un prototipo para sumar dias
	this.setDate(this.getDate() + dias);
	return this;
}

//Prototipo para sumar años

Date.prototype.sumarAnios = function(anios){
	this.setFullYear(this.getFullYear() + anios);
	return this;
}

console.log(actual);
console.log(actual.sumarDias(5));
console.log("sumando años a la fecha actual");
console.log(actual.sumarAnios(20));
