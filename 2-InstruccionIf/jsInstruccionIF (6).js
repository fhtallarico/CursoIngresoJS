function mostrar()
{
    var edad
    edad = document.getElementById("edad").value
    if (edad >= 18)
    {
        alert("Eres mayor de edad");
    }
    else if (edad >= 13)
    {
        alert("Eres adolecente");
    }
    else
    {
        alert("Eres un niño");
    }



}//FIN DE LA FUNCIÓN