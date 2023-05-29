function Personaje(nombre) {
	this.nombre = nombre;
	this.pv = 100; //puntos de vida
	this.sp = 100; //super poder

	this.curar = function(jugadorObjetivo) {
		if (this.sp >= 40) {
			this.sp -= 40;
			jugadorObjetivo.pv += 20;
		}else {
			console.info("sin super poder para poder curar");
		}

		this.estado(jugadorObjetivo);

	}

	this.atacar = function(jugadorObjetivo) {
		if (jugadorObjetivo.pv > 20) {
			jugadorObjetivo.pv -= 20;
		} else {
			jugadorObjetivo.pv = 0;
			console.error(jugadorObjetivo.nombre + "ha muerto");
		}

		this.estado(jugadorObjetivo);
	}

	this.magia = function(jugadorObjetivo) {
		if (jugadorObjetivo.pv > 40) {
			jugadorObjetivo.pv -= 40
		} else {
			jugadorObjetivo.pv = 0;
			console.log(jugadorObjetivo.nombre + "ha muerto!!!");
		}

		this.estado(jugadorObjetivo);
	}


	this.estado = function(jugadorObjetivo) {
		console.info(this);
		console.info(jugadorObjetivo);
	}

};


var gandalf = new Personaje("Gandalf");
var legolas = new Personaje("Legolas");
var saruman = new Personaje("Saruman");

console.log(this.gandalf);
console.log(this.legolas);
console.log(this.saruman);