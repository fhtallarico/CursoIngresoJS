/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var numero_1;
    var numero_2;
    var resultado;
    numero_1 = parseInt(document.getElementById("numeroUno").value);
    numero_2 = parseInt(document.getElementById("numeroDos").value);
    resultado = numero_1+numero_2;
    alert(resultado);

}

