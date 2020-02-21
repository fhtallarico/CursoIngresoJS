function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='s';
	var numero

	while (respuesta == "s") {
		numero = parseFloat(prompt ("Ingrese un numero"));
		acumulador = acumulador + numero;
		contador = contador + 1;
		respuesta = prompt ("Quiere ingresar otro número?");

	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN