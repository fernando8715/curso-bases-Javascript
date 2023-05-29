

function miFuncion(a,b,c,d){

	console.log(a + b + c + d);
	if(arguments.length !== 4){		//verificando que se envie la cantidad de argumentos
		console.error("La función necesita 4 parametros");
		return; //cuando se cumpla esta condicion se regresara
	}  

}

miFuncion(10, 20, 30, 40);








