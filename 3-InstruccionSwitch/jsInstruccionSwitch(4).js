function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var dias28 = "Este mes tiene 28 días";
var dias30 = "Este mes tiene 30 días";
var dias31 = "Este mes tiene 31 días";

switch (mesDelAño) {
    case "Febrero" :{
        alert (dias28);
        break;
    }
    case "Abril" :{
        alert (dias30);
        break;
    }
    case "Junio" :{
        alert (dias30);
        break;
    }
    case "Septiembre" :{
        alert (dias30);
        break;
    }
    case "Noviembre" :{
        alert (dias30);
        break;
    }
    default :{
        alert (dias31);
    }
}

	
	



}//FIN DE LA FUNCIÓN