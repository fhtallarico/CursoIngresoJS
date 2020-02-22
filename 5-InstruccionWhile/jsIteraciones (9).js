function mostrar()
{

	var flag = 0;
	var maximo;
	var minimo;
	var num
	var respuesta = 's';

	do {
		num = prompt ("Ingrese un número.");
			while (isNaN(num)){
				num = prompt ("Eso no es un número. Ingrese un numero.");
			}
		if (flag == 0 || num > maximo) {
			maximo = num;
		}
		if (flag == 0 || num < minimo) {
			minimo = num;
			flag = 1; 	
		}
		respuesta = prompt ("Quiere ingresar otro número?");
	} while(respuesta != 'n');
	document.getElementById('maximo').value = maximo;
	document.getElementById('minimo').value = minimo;



}//FIN DE LA FUNCIÓN