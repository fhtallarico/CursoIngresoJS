function mostrar()
{

	var flag = 0;
	var positivo = 0;
	var negativo = 1;
	var respuesta = "s";
	var num 
	while (respuesta == "s") {
		num = parseFloat(prompt ("Ingrese un número."));
		if (num > 0) {
			positivo = positivo + num;
		}
		else {
			negativo = negativo * num;
			flag = 1
		}
		respuesta = prompt ("Quiere ingresar otro número?");

	}
		if (flag == 0){
			negativo = 0;
		}
	

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN