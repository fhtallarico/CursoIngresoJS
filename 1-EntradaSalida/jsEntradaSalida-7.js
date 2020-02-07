/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var numero_1;
    var numero_2;
    var suma;
    numero_1 = parseInt(document.getElementById("numeroUno").value);
    numero_2 = parseInt(document.getElementById("numeroDos").value);
    suma = numero_1+numero_2
    alert(suma)
}

function restar()
{
	var numero_1;
    var numero_2;
    var resta;
    numero_1 = parseInt(document.getElementById("numeroUno").value);
    numero_2 = parseInt(document.getElementById("numeroDos").value);
    resta = numero_1-numero_2
    alert(resta)
}

function multiplicar()
{ 
	var numero_1;
    var numero_2;
    var mult;
    numero_1 = parseInt(document.getElementById("numeroUno").value);
    numero_2 = parseInt(document.getElementById("numeroDos").value);
    mult = numero_1*numero_2
    alert(mult)
}

function dividir()
{
	var numero_1;
    var numero_2;
    var div;
    numero_1 = parseInt(document.getElementById("numeroUno").value);
    numero_2 = parseInt(document.getElementById("numeroDos").value);
    div = numero_1/numero_2
    alert(div)
}

