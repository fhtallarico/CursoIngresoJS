/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto ; 
var contadorIntentos = 1;
var numero;

function comenzar()
{
	numeroSecreto = parseInt(Math.floor(Math.random () * (100 - 1 + 1) + 1));
	console.log (numeroSecreto);

}

function verificar()
{
  numero = parseInt(document.getElementById("numero").value);
  if (numero == numeroSecreto) {
    alert ("Usted es el ganador y solo en " + contadorIntentos + " intentos.");
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
  document.getElementById("intentos").value = contadorIntentos
}