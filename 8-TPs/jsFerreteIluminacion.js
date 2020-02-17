/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
     var cantidad = parseInt(document.getElementById("Cantidad").value);
     var marca = document.getElementById("Marca").value;
     if (cantidad >= 6) {
         document.getElementById("precioDescuento").value = (35 * 0.5) * cantidad;
     }
     else if (cantidad == 5 && marca == "ArgentinaLuz") {
        document.getElementById("precioDescuento").value = (35 * 0.6) * cantidad;
     } 
     else if (cantidad == 4 ) {
         if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") { 
            document.getElementById("precioDescuento").value = (35 * 0.75) * cantidad;
         }
         else {
            document.getElementById("precioDescuento").value = (35 * 0.8) * cantidad;
         }
     }
     else if (cantidad == 3) {
         if (marca == "ArgentinaLuz") {
            document.getElementById("precioDescuento").value = (35 * 0.85) * cantidad;
         }
         else if (marca == "FelipeLamparas") {
            document.getElementById("precioDescuento").value = (35 * 0.9) * cantidad;
         }
         else {
            document.getElementById("precioDescuento").value = (35 * 0.95) * cantidad;
         }
     }
     else {
        document.getElementById("precioDescuento").value = 35 * cantidad;
     }
     if (document.getElementById("precioDescuento").value >= 120) {
         var iibb = document.getElementById("precioDescuento").value * 0.10;
        document.getElementById("precioDescuento").value = document.getElementById("precioDescuento").value * 1.10
        alert ("Usted pagó " + iibb + " de IIBB.")
     }
}
