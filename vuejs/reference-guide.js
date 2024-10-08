// Vuejs

//  ---------------------------------------------------------------------------------------------------------------------------------------------------------------
//  ---------------------------------------------------------------Template: <template>...</template>--------------------------------------------------------------
//  ---------------------------------------------------------------------------------------------------------------------------------------------------------------

/**********************************************************
 * 
 * V  A  R  I  A  B  L  E  S
 * 
 ***********************************************************/
/**
/** 
* NOTAS: 
* 
 // Para que se vean el nombre de las variables en pantalla:

 <div>{{ mensaje }}</div>

 
Aquí en el Template dentro de un <div><div/> o un <p><p/> cuando muestras las variables para que se vea en el navegador ex: {{ gasto.cantidad }} también se puede hacer una llamada a una función y enviarle uno o más parámetros Ex: <p class="cantidad">{{ formatearCantidad(gasto.cantidad) }}</p> 
    
--> "formatearCantidad" es la funcion se le hace una llamada y dentro se le esta enviando el parámetro --> "gasto.cantidad"
NOTA: no solo el el script se pueden hacer llamadas a funciones y enviar paramentros en el Template también

 - Cuando este presente un "@" hace referencia a una funcion. Ex: @click.prevent="unaFuncion"
 - Cuando este presente un ":" hace referencia a una variable. Ex: :src="unaVariable" / :unaVariable="unaVariable"
 - Cuando se usa el v-model hace referencia a los input. Ex: <input v-model="nombre"/> se puede usar el v-model.number para convertir en numero el campo que    necesitamos
 - Aquí en el Template NO SE UTILIZA el ".value" para las variables

 ---------------------------------------------------------------------------------------------------------------------------------------------------------------
 ----------------------------------------------------------------------Script: <script>...</script>-------------------------------------------------------------
 ---------------------------------------------------------------------------------------------------------------------------------------------------------------

EMIT (envio solamente funciones):

-En el padre se escribe el nombre de la funcion en camelCase y con el signo @. 
    Ex: 
    1) Declaracion de la Funcion: const ocultarModal = () => {//Cuerpo de la funcion}. 
    2) Y en el componente: @ocultar-modal="ocultarModal" 

    -En el hijo se escribe el nombre de la funcion con guion y se recibe en el defineEmit(). 
        
    1) Se recibe el emit: const emit = defineEmits(['ocultar-modal']). 
    2) En la etiqueta:  @click.prevent="$emit('ocultar-modal')"


PROPS (envio solamente variables):

- En el Padre se escribe igual que una variable pero con : antes del nombre de la variable. 
    Ex: :unaVariable="unaVariable"

    - En el Hijo se reciben en el defineProps()
        Ex: 
        const props = defineProps({
            unaVariable: {
                type: Object,
                required: true
            }

        })


 ---------------------------------------------------------------------------------------------------------------------------------------------------------------
 ----------------------------------------------------------------------Style (Solamente CSS)--------------------------------------------------------------------
 ---------------------------------------------------------------------------------------------------------------------------------------------------------------


 En la etiqueta <style></style>:

 -Cuando no tiene ninguna propiedad el estilo(clases Css) es para todo el proyecto, es decir se aplica a todos los componentes
 -Cuando tiene la propiedad "scoped" <style scoped></style> se utiliza solamente en el componente, es decir las clases se aplicaran solo en ese componente
 -Cuando tiene la propiedad 'lang="scss" <style lang="scss"></style> hace referencia a codigo SASS




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

   
  <p>{{variableParaEnviar}}</p>

   
//</template>


