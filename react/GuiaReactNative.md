
# React Native Básico — README de Bolsillo (Actualizado)

Guía rápida y práctica para empezar con **React Native**, incluyendo ejemplos de código listos para usar.

---

## 0) ¿Qué es React Native?

* Framework de JavaScript para construir apps **nativas** para iOS y Android.
* Usa componentes como `<View>`, `<Text>`, `<Button>` en lugar de HTML.
* Combina la lógica de React con APIs y estilos para móviles.

---

## 1) Requisitos mínimos

* Node.js LTS (>= 18 recomendado).
* Editor (VS Code).
* Android Studio y/o Xcode si vas a emular localmente.
* **Expo**: usa `npx` en lugar de instalar `expo-cli` globalmente.

### Crear proyecto con Expo

```bash
npx create-expo-app@latest mi-app
cd mi-app
npx expo start
```

---

## 2) Ejemplos de código

### Hola Mundo

```jsx
import { View, Text } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hola React Native 👋</Text>
    </View>
  );
}
```

---

### Estilos con StyleSheet

```jsx
import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Texto estilizado</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  text: { fontSize: 20, color: 'blue' }
});
```

---

### Estado con useState

```jsx
import { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function Contador() {
  const [count, setCount] = useState(0);

  return (
    <View style={{ padding: 20 }}>
      <Text>Contador: {count}</Text>
      <Button title="Sumar" onPress={() => setCount(count + 1)} />
    </View>
  );
}
```

---

### Entrada de datos

```jsx
import { useState } from 'react';
import { View, TextInput, Text } from 'react-native';

export default function Form() {
  const [name, setName] = useState('');

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Escribe tu nombre"
        value={name}
        onChangeText={setName}
        style={{ borderWidth: 1, padding: 8, marginBottom: 10 }}
      />
      <Text>Hola {name}</Text>
    </View>
  );
}
```

---

### Lista con FlatList

```jsx
import { FlatList, Text, View } from 'react-native';

export default function Lista() {
  const data = [
    { id: '1', name: 'Elemento 1' },
    { id: '2', name: 'Elemento 2' }
  ];

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={{ padding: 10 }}>
          <Text>{item.name}</Text>
        </View>
      )}
    />
  );
}
```

---

### Navegación básica con React Navigation

```jsx
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, Button } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Inicio</Text>
      <Button title="Ir a Detalles" onPress={() => navigation.navigate('Details')} />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Detalles</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

---

### ScrollView

```jsx
import { ScrollView, Text } from 'react-native';

export default function ScrollDemo() {
  return (
    <ScrollView style={{ padding: 20 }}>
      {[...Array(30)].map((_, i) => (
        <Text key={i}>Elemento {i + 1}</Text>
      ))}
    </ScrollView>
  );
}
```

---

## Mini-ejercicios

1. Contador con botones de +, -, y reset.
2. Lista de tareas editable con FlatList.
3. Formulario de login con validación simple.
4. Pantalla con navegación a un detalle.
5. ScrollView con imágenes.

---

## Glosario express

* **View**: contenedor flexible.
* **State**: valores que cambian la UI.
* **Props**: datos que recibe un componente.
* **Hook**: función especial como `useState` o `useEffect`.
* **StyleSheet**: define estilos en objeto JS.
* **Expo**: simplifica el desarrollo y testing en React Native.


