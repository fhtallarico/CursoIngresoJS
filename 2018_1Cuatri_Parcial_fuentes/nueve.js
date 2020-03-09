function mostrar()
{
    var nombre;
    var edad;
    var sexo;
    var estadoCivil;
    var nombreHomCasJov;
    var edadHomCasJov = 99;
    var sexoViejo;
    var edadViejo;
    var nombreViejo;
    var contadorMujeresCasadas = 0;
    var contadorMujeres = 0;
    var acumuladorMujeres = 0;
    var promedioMujeres = "No ingresaron mujeres";
    var contadorHombresSolteros = 0;
    var acumuladorHombresSolteros = 0;
    var promedioHombres = "No ingresaron hombres solteros.";
    var respuesta;
    var flag = 0;
    var flag1 =0;

    do {
        nombre = prompt("Ingrese el nombre del pasajero.");
        edad = parseInt(prompt("Ingrese la edad del pasajero."));
        while (!(edad >= 18)) {
            edad = parseInt(prompt("Edad invalida. Ingrese una edad mayor a 18 años."));
        }
        sexo = prompt("Ingrese el sexo del pasajero.");
        while (!(sexo == "f" || sexo == "m")) {
            sexo = prompt("Sexo invalido. Ingrese un sexo f o m.")
        }
        estadoCivil = prompt("Ingrese el estado civil del pasajero.");
        while (!(estadoCivil == "soltero" || estadoCivil == "casado" || estadoCivil == "viudo")) {
            estadoCivil = prompt("Estado civil invalido. Ingrese un estado civil que sea soltero, casado o viudo.");
        }
        console.log("nombre " + nombre)
        console.log("edad " + edad)
        console.log("sexo " + sexo)
        console.log("estadoCivil " + estadoCivil)
        if ((flag1 == 0 && sexo == "m" && estadoCivil == "casado") || (sexo == "m" && estadoCivil == "casado" && edad <= edadHomCasJov)) {
            edadHomCasJov = edad;
            nombreHomCasJov = nombre;
            flag1 = 1;
        }
        if (flag == 0 || edad > edadViejo) {
            edadViejo = edad;
            sexoViejo = sexo;
            nombreViejo = nombre;
            flag = 1;
        }
        if (sexo == "f" && (estadoCivil == "casado" || estadoCivil == "viudo")) {
            contadorMujeresCasadas ++;
        }
        if (sexo == "f") {
            contadorMujeres ++;
            acumuladorMujeres += edad;
        }
        if (sexo == "m" && estadoCivil == "soltero") {
            contadorHombresSolteros ++;
            acumuladorHombresSolteros += edad;
        }
        respuesta = prompt("Desea ingresar los datos de otro pasajero?", "s o n");

    } while (respuesta != "n") ;
    if (contadorMujeres > 0) {
        promedioMujeres = acumuladorMujeres / contadorMujeres;
    }
    if (contadorHombresSolteros > 0) {
        promedioHombres = acumuladorHombresSolteros / contadorHombresSolteros;
    }
    console.log ("a) " + nombreHomCasJov)
    console.log ("b) " + sexoViejo + " " + nombreViejo)
    console.log ("c) " + contadorMujeresCasadas)
    console.log ("d) " + promedioMujeres)
    console.log ("e) " + promedioHombres)
    


}
