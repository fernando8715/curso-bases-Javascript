/*/*
 * Es una funcion que puede recibir diferentes dipos de parametros
 */

 function determinaDato (a) {
 	if(a===undefined){
 		console.log("a es undefined... no se que hacer");
 	}

 	if(typeof a==="number"){
 		console.log("a es un numero y puedo hacer operaciones con numeros");
 	}

 	if(typeof a==="string"){
 		console.log("a es un texto");
 	}

 	if (typeof a==="object") {}
 		console.log("a es un objeto, pero puede ser cualqier cosa");
 }


determinaDato({
	nombre: "Fernando"
});
























