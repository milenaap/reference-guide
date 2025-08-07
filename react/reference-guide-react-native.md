## VARIABLES
 
## Hook  

``` sh
react-native

Estructura básica de un componente funcional

// 1. Importación de React y otras funciones necesarias

import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

// 2. Definición del componente
export const CounterScreen = () => {

// 3. Estado del componente
  const [counter, setCounter] = useState(0);

// 4. Renderizado (lo que se ve en pantalla)
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Contador: {counter}</Text>

      <Button title="Sumar +1" onPress={() => setCounter(counter + 1)} />
    </View>
  );
};

🔍 Explicación paso a paso
Parte	¿Qué hace?
import React, { useState } from 'react';	Importa React y la función useState que permite manejar estado
export const CounterScreen = () => {}	Crea un componente funcional exportado
const [counter, setCounter] = useState(0);	Declara una variable de estado counter que inicia en 0
<View> ... </View>	Es como un <div> en React Native, sirve para agrupar elementos
<Text>	Muestra texto en pantalla
<Button>	Un botón que ejecuta una función cuando se presiona
<Button title="Sumar +1" onPress={() => setCounter(counter + 1)} />	Botón que incrementa el contador al hacer clic

🎯 Diferencia con React Web

En tu ejemplo pusiste:

return <div>CounterScreen</div>

➡️ En React Native, no usamos <div>, sino que usamos:

    <View> → similar a <div>

    <Text> → para mostrar texto

    <Button> → botón nativo

🧪 Ejercicio de práctica
🚀 Crea una pantalla que tenga:

    Un contador que empieza en 10

    Un botón que reste 1

    Un botón que sume 1

import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export const MyCounterScreen = () => {
  const [counter, setCounter] = useState(10);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Valor: {counter}</Text>

      <Button title="➖ Restar" onPress={() => setCounter(counter - 1)} />
      <Button title="➕ Sumar" onPress={() => setCounter(counter + 1)} />
    </View>
  );
};

📌 Consejos para recordar

    useState(valorInicial) → te da una variable y una función para actualizarla.

    Todo lo que devuelves en return debe ir dentro de un solo contenedor, como un <View>.

    React Native no tiene etiquetas HTML, se usan componentes especiales (View, Text, ScrollView, etc.).

    Para estilizar, se usan objetos {} no clases CSS.

```










