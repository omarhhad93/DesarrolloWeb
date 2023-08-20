
var nombrea = [];
var notasa = [];
var Alumno = [];
var carneta = [];
var i = 0;

//var carn, name, note;

// Importar el módulo readline
const readline = require('readline');

// Crear una interfaz de lectura y escritura para la entrada estándar
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


IngresoCarnet();

function IngresoCarnet(){

  rl.question('Por favor, ingresa tu Carnet: ', (carn) => {
    carneta[i] = carn;
    IngresoNombre();
});
}


function IngresoNombre(){

  rl.question('Por favor, ingresa tu Nombre: ', (name) => {
    nombrea[i] = name;
    IngresoNota();
});
}


function IngresoNota(){
  rl.question('Por favor, ingresa tu Nota: ', (note) => {
    notasa[i] = note;
    RegresaIngreso();
});
}

function RegresaIngreso(){

  rl.question('Deseas regresar para ingresar otro alumno? SI / NO \n', (op) => {

    if(op === "SI" || op === "Si" || op === "si" || op === "sI"){
      Menu();
      i++
    } else if (op === "NO" || op === "no" || op === "No" || op === "nO"){
      MuestraDatos();
    } else{
      console.log("Opción No Válida");
      RegresaIngreso();
    }
});

}

function Menu(){
  rl.question('Selecciona Opción a Realizar (Número): \n' +
              '1 - Ingresar otro Alumno \n' +
              '2 - Buscar Alumno \n' +
              '3 - Ingresar otra Nota a Alumno \n', (op) => {
   switch(op){
    case "1":
        IngresoCarnet();
        break;
    case "2":
        BuscaAlumno();
        break;
    case "3":
        NotaAlumno();
        break;
    default:
      console.log("Opción no Válida!");
      Menu();
   }

});
}


function NotaAlumno(){

  rl.question('Por favor, ingresa Carnet a Buscar: \n', (carn1) => {
      for(var j=0; j < carneta.length; j++) {

        if(carn1 === carneta[j]){
          carneta[i] = carneta[j];
          nombrea[i] = nombrea[j];
          IngresarNotaAlumno();
        }
  }
});
}

function IngresarNotaAlumno(){

  rl.question('Por favor, ingresa tu Nota: ', (note) => {
    notasa[i] = note;
    Alumno = [{carnet: carneta[i],nombre: nombrea[i],nota: notasa[i]}];
    MuestraDatos();
});
}

function BuscaAlumno(){

  rl.question('Por favor, ingresa Carnet a Buscar: \n', (carn) => {
      for(var j=0; j < carneta.length; j++) {

        if(carn === carneta[j]){
          Alumno = [{carnet: carneta[j],nombre: nombrea[j],nota: notasa[j]}];
          console.log(Alumno);
        }

  }
});
}


function MuestraDatos(){
  for(var j=0; j < carneta.length; j++) {
    Alumno = [{carnet: carneta[j],nombre: nombrea[j],nota: notasa[j]}];
    console.log(Alumno)
  }

  rl.question('Selecciona Opción a Realizar (Número): \n' +
              '1 - Buscar Alumno \n' +
              '2 - Regresar al Menú \n', (op1) => {
   switch(op1){
    case "1":
        BuscaAlumno();
        break;
    case "2":
        Menu();
        i++
        break;
    default:
      console.log("Opción no Válida!");
      MuestraDatos();
   }

});
}
    // Bucle que recorre el array que está en la posición i
//    for(var j=0; j < nuevoArray[i].length; j++) {
        // Pinta todas las posiciones del array
//        document.write(nuevoArray[i][j]);



// Solicitar entrada de datos por teclado





  // Solicitar entrada de datos por teclado
  
  
    
  

  // Cerrar la interfaz de lectura
  

// Solicitar entrada de datos por teclado
//rl.question('Por favor, ingresa tu nombre: ', (notas) => {


    //console.log(`Hola, ${nombre}!`);
    
    // Cerrar la interfaz de lectura
    //rl.close();
  //});


//console.group();
//console.table(Alumno);
//console.groupEnd();

//function MuestraDatos(){
    // Bucle que recorre todas las posiciones del primer array
//for(var i=0; i < nuevoArray.length; i++) {
    // Bucle que recorre el array que está en la posición i
//    for(var j=0; j < nuevoArray[i].length; j++) {
        // Pinta todas las posiciones del array
//        document.write(nuevoArray[i][j]);
//    }
//}
//}



//var nombre = {'nombre': 'Milk' };

//var array = [];
//array.push(nombre);

//console.log(array[0]);