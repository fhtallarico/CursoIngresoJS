/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var importe;
    var descuento;
    importe = parseInt(document.getElementById("importe").value)
    descuento = importe*0.15
    document.getElementById("resultado").value = parseInt(descuento)

}
