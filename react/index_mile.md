# VARIABLES
 
## Hook  

```sh

 Se importa 

- useState

 import { useState } from "react";

 Luego en el componente se declara la variable y la funcion que la modifica
 const [nombreVariable, setNombreVariable] = useState(valorInicial);        // Se puede inicializar con cualquier valor
 


 Estructura de un JSX:

import React from 'react'                   /// <------- Aquí van los import 
const formData = {                          /// <------- NO SIEMPRE van la declaraciones de las variables y/o constantes y/o funciones
    ...

}  
                     
 export const reference-guide = () => {

    const dispatch = useDispatch();        /// <------- Aquí van los "use..." Hooks


    const formData = {                     /// <------- NO SIEMPRE van la declaraciones de las variables y/o constantes y/o funciones
    ...

}
    
    return (
     <div>reference-guide</div>            /// <------- Aquí va el HTML y/o renderizaciones y/o llamadas a componentes
   )
 }


# VARIABLES_2
 
 ## Hook  
 Se importa 

 import { useState } from "react";

 Luego en el componente se declara la variable y la funcion que la modifica
 const [nombreVariable, setNombreVariable] = useState(valorInicial);        // Se puede inicializar con cualquier valor
 

 Funcional component


 import React from 'react'
 
 export const CounterScreen = () => {

    // Declaración de la variable de estado
    const [counter, setCounter] = useState(0);

    // Retorno del componente   
   return (
     <div>CounterScreen</div>
   )
 }

```







