function mostrar()
{
var precio
var descuento
var final

precio = prompt("Ingrese el precio del producto.","$")
descuento = prompt("Ingrese el porcentaje de descuento.","%")
final = parseFloat(precio) - ((parseFloat(precio)) * (parseFloat(descuento/100)))
document.getElementById("elPrecioFinal").value = final
}
