function mostrar()
{
 
 var letra;
 var numero;
 var respuesta;
 var contadorPares = 0;
 var contadorImpares = 0;
 var contadorCeros = 0;
 var sumaPositivos = 0;
 var contadorPositivos = 0;
 var promedioPositivo = 0;
 var sumaNegativos = 0;
 var numeroMax;
 var numeroMin;
 var letraMax;
 var letraMin;
 var flag = 0;

 do {
    letra = prompt ("Ingrese una letra.");
    while (!((letra >= "A" && letra <= "Z") || (letra >= "a" && letra <= "z"))) {
        letra = prompt ("Ingrese una letra.");
    }
    numero = parseInt(prompt ("Ingrese un numero."));
    while (!(numero >= -100 && numero <= 100)) {
        numero = parseInt(prompt ("Ingrese un numero entre -100 y 100."));
    }
    if (numero > 0) {
        sumaPositivos += numero;
        contadorPositivos ++;
    }
    else if (numero < 0) {
        sumaNegativos += numero;
    }   
    else {
        contadorCeros ++;
    }
    if (numero % 2 == 0) {
        contadorPares ++;
    }
    else {
        contadorImpares ++;
    }
    if (flag == 0 || numero > numeroMax) {
        numeroMax = numero;
        letraMax = letra;
    }
    if (flag == 0 || numero < numeroMin) {
        numeroMin = numero;
        letraMin = letra;
        flag = 1;
    }
    respuesta = prompt("Desea ingresar mas datos?" , "s o n");

 } while (respuesta == "s");
    
    if (!(contadorPositivos == 0)) {
        promedioPositivo = sumaPositivos / contadorPositivos;
 }
 document.write ("a) La cantidad de numero pares es: " + contadorPares + "</br>");
 document.write ("b) La cantidad de numeros impares es: " + contadorImpares + "</br>");
 document.write ("c) La cantidad de ceros es: " + contadorCeros + "</br>");
 document.write ("d) El promedio de todos los numeros positivos ingresados es: " + promedioPositivo + "</br>");
 document.write ("e) La suma de todos los numeros negativos es: " + sumaNegativos + "</br>");
 document.write ("f) El numero y la letra maximo es: " + numeroMax + " y " + letraMax + "</br>");
 document.write ("  -El numero y la letra minimo es: " + numeroMin + " y " + letraMin + "</br>");
}
