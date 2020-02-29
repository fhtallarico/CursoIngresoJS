function mostrar()
{
var n_1
var n_2
var suma
var cnc
var resta
n_1 = (prompt ("Ingrese el primer numero.",""))
n_2 = (prompt ("Ingrese el segundo numero.",""))
suma = parseFloat(n_1) + parseFloat(n_2)
cnc = n_1.concat(n_2)
resta = n_1 - n_2
if (n_1 == n_2){
    alert(cnc)
}
else if (n_1 > n_2){
    alert(resta)
}
else {
    if (suma > 10){
        alert ("La suma es "+suma+" y supera 10");
    }
    else {
        alert(suma);
    }
}
}

