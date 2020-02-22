function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta;
	var numero

	do {
		numero = parseFloat(prompt ("Ingrese un numero"));
		acumulador = acumulador + numero;
		contador = contador + 1;
		respuesta = prompt ("Quiere ingresar otro número?");

	} while (respuesta == "s");
	var promedio = acumulador / contador;
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN