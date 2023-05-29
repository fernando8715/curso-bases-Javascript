/*/*
 * Un error en tiempo de ejecución en js es complicado de realizarlo, para disparar
 * el catch podemos hacerlo empleando el "throw".
 * El throw puede lanzar tipos primitivos, objetos, funciones, lo que sea y se 
 * ejecutara en el catch automaticamente.

 * para obtener errores de js se emplea throw new Error
 */


try{	// js intenta ejecutar este codigo

	var a = 103;

	if( a === 100){

		throw 'oh oh';
	}else{
		throw 'que mal';
	}

	console.log("esta parte nunca se ejecuta");
}
catch (e){   //si falla la ejecuciión del codigo ejecuta estoo

	if(e === 'oh oh'){
		console.log("Error tipo 1");
	}
	if(e === 'que mal'){
		console.log("Error tipo 2");
	}

}
finally{	//se ejecute o no el codigo, se ejecutara lo q esta en finally

	console.log("Finalmente");

}















