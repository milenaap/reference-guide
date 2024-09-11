// Vuejs


// Para que se vean el nombre de las variables en pantalla

<div>{{ mensaje }}</div> 

/**********************************************************
 * 
 * V  A  R  I  A  B  L  E  S
 * 
 ***********************************************************/
/**
 * PARA HACER UNA VARIABLE REF
 * */ 

// 1.IMPORT

import { ref } from 'vue';

// 2.DECLARACION DE VARIABLES REF

const nombreVariableEntera = ref(0); // Variable ejemplo
const nombreVariableDouble = ref(0.0); 
const nombreVariableString = ref(''); 
const nombreVariableNull = ref(null); 
const nombreVariableArray = ref([]); 
const nombreVariableObject = ref({}); 


// 3.ASIGNACION DE VARIABLES REF

nombreVariableEntera.value = 30; 
nombreVariableDouble.value = 0.0; 
nombreVariableString = 'Milena'; 
nombreVariableNull.value = null; 
nombreVariableArray.value = [1,2,3,4]; 
nombreVariableObject.value = {nombre: 'Milena', edad:18}; 


/**
 * Para hacer una variable reactive 
 **/ 

// 1.IMPORT

import { reactive } from 'vue';

// 2.Declaracion de variables reactive

const formulario = reactive({
    nombre: 'Nombre',
    edad: 0,
});


// 3.Asignación de variable reactive

formulario.nombre = 'Pepe';
formulario.edad = 30; 


/**
 * Para conocer cual es el componente Padre y cual es el componente Hijo
 */


// PADRE: Ejemplo: Archivo App.vue:

// El componente PADRE tiene el import obligatoriamente del componente HIJO, es decir:
//  <script setup> 
    // ...
    import Alerta from './components/Alerta.vue'
    // ...
// </script>

<template>

    /**Llamada al componente */ 
    ...
    <Alerta 
        // @function-para-enviar="functionParaEnviar"
        // :variableParaEnviar="variableParaEnviar"
        // Se pueden definir otras propiedades, por ejemplo:
        // class="text-center" o :class="text-center"
        //v-if="condicion>0"
        //v-else
    />
    ...

</template>




// HIJO: Ejemplo: Archivo components/Alerta.vue
// El componente hijo debe ser donde se definen: para las funciones: "defineEmits" y "defineProps"

// 1.Ejemplo para las funciones: "defineEmits"

//  <script setup> 
    // ...
    const emit = defineEmits(['function-para-enviar'])
    // ...

    emit('function-para-enviar')


// </script>

//<template>

    //...
   //<button
   
    //...

    //@click.prevent="$emit('function-para enviar')
   
   //>

   //</button>
    //...

//</template>



// 2.Ejemplo para las funciones: "defineProps"

//  <script setup> 
    // ...
    const props = defineProps({
        variableParaEnviar: {
            type: Number,
            required: true,
        }
    })
    // ...
    // Para usar en el script
    props.variableParaEnviar;
// </script>

//<template>

   
  <p
    {{variableParaEnviar}}
    
   >

   </p>

   
//</template>


