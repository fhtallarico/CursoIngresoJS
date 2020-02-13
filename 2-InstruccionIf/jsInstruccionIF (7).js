function mostrar()
{
    var edad
    var estado
    edad = document.getElementById("edad").value
    estado = document.getElementById("estadoCivil").value
    if (edad < 18)
    {
        if (estado != "Soltero")
        {
            alert("Es muy pequeño para NO ser soltero.")
        }
    }
	


}//FIN DE LA FUNCIÓN