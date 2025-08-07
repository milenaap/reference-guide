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

