function mostrar()
{

	var contador = 0;
	var num;
	var pos = 0;
	var cpos = 0;
	var neg = 0;
	var cneg = 0;
	var ccero = 0;
	var cpares = 0;
	var cimpar = 0;
	var prompos;
	var promneg;
	var diferencia;
	
	var respuesta="s";

	while(respuesta == "s")
	{
		num = parseInt(prompt ("Ingrese un numero."));
			while (isNaN(num)){
				num = prompt ("Eso no es un número. Ingrese un numero.");
			}
		if (num > 0) {
			pos = pos + num;
			cpos ++;
		}
		else if (num < 0) {
			neg = neg + num;
			cneg ++;
		}
		else {
			ccero ++;
		}
		if ((num % 2) == 0){
			cpares ++;
		}
		else {
			cimpar ++;
		}

		respuesta = prompt ("Desea ingresa otro numero?.")
	
	}
	prompos = pos / cpos;
	promneg = neg / cneg;
	diferencia = pos - neg;
document.write("Suma de positivos = " + pos + "</br>");
document.write("Suma de negativos = " + neg + "</br>");
document.write("Conteo de nros. positivos = " + cpos + "</br>");
document.write("Conteo de nros. negativos = " + cneg + "</br>");
document.write("Conteo de nros. pares = " + cpares + "</br>");
document.write("Conteo de nros. impares = " + cimpar + "</br>");
document.write("Conteo de ceros = " + ccero + "</br>");
document.write("Promedio de nros. positivos = " + prompos + "</br>"); 
document.write("Promedio de nros. negativos = " + promneg + "</br>");
document.write("Diferencia de positivos y negativos = " + diferencia + ".")
}//FIN DE LA FUNCIÓN