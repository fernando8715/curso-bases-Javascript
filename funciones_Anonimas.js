/* las funciones anonimes previenen que el codigo sea manipulado por otras secciones 
del programa, para evitar que se cambie una variable.
*/


(function() { //una funcion se identifica por usar ()

	var a = 15;

	console.log(a);

	a = function() {
		a = 20;
		return a;
	}();


	console.log(a);  
})(); //los parentesis () invocan la funcion

/* --------------otro ejemplo implementando funciones anónimas -------------*/

console.log("\n--------ejemplo2 de funcion anónima--------");

function ejecutarFuncion(fn) {
	if(fn() === 1){
		return true;
	}else{
		return false
	}
};


/*para no asignar la funciona una variable, puedo colocar la funcion dentro del 
console.log */

console.log(		//el console.log es una funcion

	ejecutarFuncion(function(){		//invoco la funcion y envio una funcion como argumento
	console.log("funcion anónima ejecutada!");
	return 1;
})

);

/* es una funcion que le estamos enviando un objeto a la cual le estamos enviando
otro objeto*/




