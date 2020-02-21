function mostrar()
{

	var contador = 0;
	var maximo;
	var minimo;
	var num
	var respuesta = 's';

	while(respuesta != 'n')
	{
		num = prompt ("Ingrese un número.");
			while (isNaN(num)){
				num = prompt ("Eso no es un número. Ingrese un numero.");
			}
		if (contador == 0) {
			maximo = num;
			minimo = num;
		}
		else if (num > maximo) {
			maximo = num;
		}
		else if (num < minimo) {
			minimo = num;
		}
		contador ++;
		respuesta = prompt ("Quiere ingresar otro número?");
	}
	document.getElementById('maximo').value = maximo;
	document.getElementById('minimo').value = minimo;



}//FIN DE LA FUNCIÓN