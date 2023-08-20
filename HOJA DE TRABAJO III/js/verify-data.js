
function ValidaInput(){
    if (document.getElementById("nombre").value.length == 0){
        alert('Ingrese Nombre Completo')
        return false
    } else if (document.getElementById("edad").value.length == 0){
        alert('Ingrese edad')
        return false
    } else if (document.getElementById("dtp").value.length == 0){
        alert('Ingrese Fecha de Nacimiento')
        return false
    } else if (document.getElementById("correo").value.length == 0){
        alert('Ingrese Correo')
        return false
    } else if (document.getElementById("contrasena").value.length == 0){
        alert('Ingrese Contraseña')
        return false
    } else if (document.getElementById("direc").value.length == 0){
        alert('Ingrese Dirección 1')
        return false
    } else if (document.getElementById("dpi").value.length == 0){
        alert('Ingrese DPI')
        return false
    } else if (document.getElementById("depto").value.length == 0){
        alert('Ingrese Departamento de residencia')
        return false
    } else if (document.getElementById("muni").value.length == 0){
        alert('Ingrese Municipio de residencia')
        return false
    } else if (document.getElementById("codpost").value.length == 0){
        alert('Ingrese Codigo Postal')
        return false
    } else {
        CopiaTextArea();
    }
} 

function CopiaTextArea(){
    var Nombre = document.getElementById("nombre").value;
    var Edad = document.getElementById("edad").value;
    var DTP = document.getElementById("dtp").value;
    var Correo = document.getElementById("correo").value;
    //var Contrasena = document.getElementById("contrasena").value;
    var Direcccion = document.getElementById("direc").value;
    var DPI = document.getElementById("dpi").value;
    var Departamento = document.getElementById("depto").value;
    var Muni = document.getElementById("muni").value;
    var CodPost = document.getElementById("codpost").value;

    var txt = "Nombre: " + Nombre + "\t\t" +
              "Edad: " + Edad + "\t\t" +
              "Fecha Nacimiento: " + DTP + "\t\t" +
              "Correo: " + Correo + "\t\t" +
              "Direccion: " + Direcccion + "\t\t" +
              "DPI: " + DPI + "\t\t" +
              "Depto: " + Departamento + "\t\t" +
              "Muni: " + Muni + "\t\t" +
              "Codigo Postal: " + CodPost + "\t\t";

    document.getElementById("rstltxt").innerHTML = txt;
}

function LlenaComboMuni(){
    var muni = ["Guatemala", "Santa Catarina Pinula", "San José Pinula", 
                "San José del Golfo", "Palencia", "Chinautla", "San Pedro Ayampuc",
                "Mixco", "San Pedro Sacatepequez", "San Raymundo", "Chuarrancho", 
                "Fraijanes", "Amatitlan", "Villa Nueva", "Villa Canales", "San Miguel Petapa"];
    var select = document.getElementById("muni");

    for(var i = 0; i<muni.length;i++){
        select.options[i] = new Option(muni[i]);
    }
}
