/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos = 0;
var numero

function comenzar()
{
	numeroSecreto = parseInt(Math.floor(Math.random () * (100 - 1 + 1) + 1));
	console.log (numeroSecreto);
}

function verificar()
{
	numero = parseInt(document.getElementById("numero").value);
	if (numero == numeroSecreto) {
		contadorIntentos += 1;
		switch (contadorIntentos) {
			case 1 :{
				alert ("Ganador!! Usted es un Psíquico.");
				break;
			}
			case 2 :{
				alert ("Ganador! Excelente percepción.");
				break;
			}
			case 3 :{
				alert ("Ganador. Esto es suerte.");
				break;
			}
			case 4 :{
				alert ("Ganador. Excelente técnica.");
				break;
			}
			case 5 :{
				alert("Ganador. Usted está en la media.");
				break;
			}
			case 6:
			case 7:
			case 8:
			case 9:
			case 10: {
				alert ("Ganador. Falta técnica.");
				break;
			}
			default :{
				alert ("Ganador, pero, aforntunado en el amor.");
			}
		}
	}
	else {
		while ( numeroSecreto != numero){
			if (numeroSecreto > numero){
			  alert ("Falta...");
			  
			}
			else {
			  alert ("Se pasó...");
			 
			}
			contadorIntentos += 1;
			break;
		  }
	}
	document.getElementById("intentos").value = contadorIntentos;
	console.log ("número: " + numero + " intento: " + contadorIntentos)
}