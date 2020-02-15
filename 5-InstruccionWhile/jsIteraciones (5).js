function mostrar()
{

var sexo = prompt("ingrese f ó m .");

while (!(sexo == "f" || sexo == "m")){
    alert ("Ingrese un sexo válido.");
    sexo = prompt("ingrese f ó m .");
}

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN