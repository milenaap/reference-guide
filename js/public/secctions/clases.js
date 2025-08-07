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

