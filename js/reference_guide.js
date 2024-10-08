/**********************************************************
 * 
 * V  A  R  I  A  B  L  E  S
 * 
 ***********************************************************/


//Creación de variables => declaración de variables

export var variableVar;            // es la mas antigua
let variableLet;            // esta sustituye a la var, Nota: Esta se usa para asignarle luego un valor osea se puede cambiar el valor luego
const variableConst = 'Valor Predefinido';   // es la mas usada, Nota: Es una constante y no se le puede asignar ningun valor luego 

// Asignación de variables

variableVar = 'hola';
variableLet = 'Mundo';
const variableConstAsignada = 'Hello'


/**********************************************************
 * 
 * A  R  R  A  Y  
 * 
 ***********************************************************/


// Creación de un arreglo o Array

let arrayNumber = [];                       // Array vacío
let arrayNumberLleno = [20, 30, 40, 50];    // Array con valores

// Creación de objetos 

let objectoCarro = {};      // Objeto vacío
let objectoCarroLleno = {   // Objeto con valores
    color: 'Blanco',
    marca: 'Fiat',
    puertas: '4'
};      


// Array de objectos

let arrayObjectos = [{}];   // Array de Objetos vacío


let arrayObjectosLLenos = [ // array lleno

    {
        color: 'blanco',
        marca: 'Palio',
        puertas: 4
    },

    {
        color: 'verde',
        marca: 'Chevrolet',
        puertas: 5
    }
]

// console.log(arrayObjectosLLenos[0]);


// Array dentro de objectos

let objectoMesa = {
    medidas: [20, 30, 40],
    color: 'blanco'
}

// console.log(objectoMesa);


let o = {
    tipo: 'pluma',
    etapas: [30, 'París', 30.50],

    arr: [
        {
            marca: 'Sedan',
            color: 'Azul',
            tipo: 'Sincronico'

        }
    ]
}

// console.log(o.etapas[1]);
// console.log(o.arr[1].tipo);



/**********************************************************
 * 
 * F  U  N  C  I  O  N  E  S
 * 
 ***********************************************************/

// Crear método o función

function nombreFunction(nombre, apellido){ // argumentos
    // Aquí el código
}

// Crear método flecha

const nombreFunctionFlecha = (nombre, apellido) => { //argumentos
    // Aquí el código   
}

// Crear funciones anónimas 

const functionAnonima = function() {
    // Aquí el código
}

// Llamadas enviando parametros con funciones anonimas

llamada(function(){});

llamada(() => {});


/**********************************************************
 * 
 * C  L  A  S  E  S
 * 
 ***********************************************************/

// Crear clase

class NombreClase {

    // Aquí las propiedades

    nombre;
    apellido;

    // Construye la clase a partir del "new"
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }


    // Aquí los métodos o funciones de clase

    nombreMetodo() {

    }
    
}

//

const claseNueva = new NombreClase('Milena', 'Aguilar');


//get y set

let getVariable; // coge el valor de la variable
let setVariable; // almacena el valor de la variable

let variableGet = getVariable();
let variableSet = setVariable('Nuevo valor');


/**********************************************************
 * 
 * B  U  C  L  E  S   o   I  T  E  R  A  D  O  R  E  S
 * 
 ***********************************************************/

// bucles o iteradores


// for
for(let i = 0; i < 10; i++){ // for = para
    //TODO aquí va el código o la lógica
}

// while
let edad = 10;
while( edad< 18 ){ // while = mientras
   //TODO aquí va el código o la lógica

   edad++;
} 


// do while
do{ // do = hacer
    //TODO aquí va el código o la lógica

    edad++;

}while( edad < 16); 


