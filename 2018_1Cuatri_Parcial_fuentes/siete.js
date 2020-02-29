function mostrar()
{
var contador;
var nota;
var sexo;
var promedioNotas = 0;
var sumaNotas = 0;
var minNota;    
var minSexo;
var cantVarones = 0;

for (contador = 0 ; contador < 5 ; contador++) {
    nota = parseInt(prompt("Ingrese la nota del alumno."));
    while (!(nota >= 0 && nota <= 10)) {
        nota = prompt ("Ingrese una nota entre 0 y 10");
    }
    sexo = prompt ("Ingrese el sexo del alumno.","f o m");
    while (!(sexo == "f" || sexo == "m")) {
        sexo = prompt ("Ingrese el sexo del alumno.","f o m");
    }
    if (contador == 0 || nota < minNota) {
        minNota = nota;
        minSexo = sexo;
    }
    if (nota >= 6 && sexo == "m") {
        cantVarones++
    }
    sumaNotas = sumaNotas + nota;
}
promedioNotas = sumaNotas / contador;
alert ("a) El promedio de notas totales es " + promedioNotas + 
"/nb) La nota mas baja es " + minNota + " y el sexo de esa persona es " + minSexo + 
"./nc) La cantidad de varones con nota mayor o igual a 6 es de " + cantVarones + ".");
}
