function mostrar()
{
	var numero;
	numero = (Math.random(1,10))*10;
	if (numero >= 4){
		if (numero >= 9){
			alert("Nota: "+(parseInt(numero))+"; EXCELENTE");
		}
		else {
			alert("Nota: "+(parseInt(numero))+"; APROBÓ");
		}
	}
	else {
		alert("Nota: "+(parseInt(numero))+"; Vamos, la proxima se puede");
	}
	
	
}//FIN DE LA FUNCIÓN