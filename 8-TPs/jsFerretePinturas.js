/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var grados = parseFloat(document.getElementById("Temperatura").value);
    var cel = (grados - 32) * (5 / 9);
    alert ("La temperatura en Celcius es: " + cel);
}

function CentigradosFahrenheit () 
{
    var grados = parseFloat(document.getElementById("Temperatura").value);
    var far = (grados * (9/5)) + 32;
    alert ("La temperatura en Fahrenheit es: " + far);
}
