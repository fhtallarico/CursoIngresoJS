/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo = parseFloat(document.getElementById("Largo").value);
    var ancho = parseFloat(document.getElementById("Ancho").value);
    var perrec = ((largo + ancho) * 2) * 3;
    alert ("Se necesitan " + perrec + "ms. de alambre para cubrir el perímetro.");

}
function Circulo () 
{
    var radio = parseFloat(document.getElementById("Radio").value);
    var percir = 2 * 3.14 * radio * 3;
    alert ("Se necesitan " + percir + "ms. de alambre para cubrir el perímetro. ");

}
function Materiales () 
{
	var largo = document.getElementById("Largo").value;
    var ancho = document.getElementById("Ancho").value;
    var cem = parseInt((largo * ancho) * 2);
    var cal = parseInt((largo * ancho) * 3);
    alert ("Se necesitan " + cem + " bolsas de cemento y " + cal + " bolsas de cal.");
}