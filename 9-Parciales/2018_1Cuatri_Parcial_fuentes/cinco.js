function mostrar()
{
var planeta
planeta = prompt ("ingrese un planeta","")
switch (planeta){
    case "tierra" :{
        alert("Acá vivimos.");
        break;
    }
    case "mercurio" :{
        alert("Acá hace mas calor");
        break;
    }
    case "venus" : {
        alert("Acá hace mas calor");
        break;
    }
    default :{
        alert("Acá hace mas frio.");
        break;
    }
}
}
