function mostrar()
{
    var marca;
    var peso;
    var temperatura;
    var temperaturaPar = 0;
    var marcaPesado = "sin datos.";
    var cantidadCeroGrados = 0;
    var contadorPeso = 0;
    var acumuladorPeso = 0;
    var promedioPeso;
    var pesoMax;
    var pesoMaxSobre0;
    var pesoMin;
    var flag = 0;
    var respuesta;

    do {
        marca = prompt("Ingrese una marca.");
        peso = parseInt(prompt("Ingrese un peso.","Entre 1 y 100."));
        while (!(peso >= 1 && peso <= 100)) {
            peso = parseInt(prompt("Ingrese un peso entre 1 y 100"));
        }
        temperatura = parseInt (prompt("Ingrese una temperatura." , "Entre -30 y 30"));
        while (!(temperatura >= -30 && temperatura <= 30)) {
            temperatura = parseInt(prompt("Ingrese una temperatura entre -30 y 30"));
        }
        if (temperatura % 2 == 0){
            temperaturaPar ++;
        }
        if ((contadorPeso == 0 || peso > pesoMaxSobre0) && temperatura > 0) {
            pesoMax = peso;
            marcaPesado = marca;
        }
        if (flag == 0 || peso > pesoMax) {
            pesoMax = peso;
        }
        if (flag == 0 || peso < pesoMin) {
            pesoMin = peso;
            flag = 1;
        }
        if (temperatura < 0) {
            cantidadCeroGrados ++;
        }
        contadorPeso ++;
        acumuladorPeso += peso;
        respuesta = prompt ("Desea ingresar mas datos?.","s o n");
    } while (respuesta == "s")
    if (contadorPeso != 0) {
        promedioPeso = acumuladorPeso / contadorPeso;
    }
    document.write ("a) La cantidad de temperaturas pares es: " + temperaturaPar + "</br>");
    document.write ("b) La marca del producto mas pesado no congelado es: " + marcaPesado + "</br>");
    document.write ("c) La cantidad de productos qie se conservan a menos de 0 grados es de: " + cantidadCeroGrados + "</br>");
    document.write ("d) El promedio del peso de todos los productos es: " + promedioPeso + "</br>");
    document.write ("e) El peso maximo es: " + pesoMax + "</br>");
    document.write ("f) El peso minimo es: " + pesoMin + "</br>");
}
