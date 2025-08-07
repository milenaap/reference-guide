# React Básico — README de Bolsillo (con tips y equivalencias Java ↔ React)

Guía rápida y práctica para empezar con **React**, adaptada para quienes vienen de Java o TypeScript, con una hoja de equivalencias para entender mejor los conceptos.

---

## 0) ¿Qué es React?

* Librería de JavaScript para crear interfaces de usuario.
* Basado en **componentes** reutilizables y **estado** (datos que cambian la UI).
* Usa **JSX**: HTML mezclado con JavaScript.

💡 *Piensa en cada componente como una "clase" muy pequeña en Java, pero escrita como función.*

---

## 1) Equivalencias Java ↔ React

| Concepto en Java           | Equivalente en React                            |
| -------------------------- | ----------------------------------------------- |
| Clase                      | Componente funcional (función que devuelve JSX) |
| Constructor con parámetros | Props                                           |
| Atributo de clase          | Estado (`useState`) o props                     |
| Método                     | Función dentro o fuera del componente           |
| Getter/Setter              | Estado con `[valor, setValor]`                  |
| `System.out.println`       | `console.log()`                                 |
| `if/else`                  | Render condicional `{condición ? ... : ...}`    |
| Bucle `for` / `for-each`   | `.map()` sobre arrays                           |
| Eventos (`ActionListener`) | Eventos como `onClick`, `onChange`              |
| `import` de clases         | `import` de componentes o librerías             |

---

## 2) Ejemplos esenciales

### Hola Mundo

```jsx
export default function App() {
  return <h1>Hola React 👋</h1>;
}
```

### Estado con useState

```jsx
import { useState } from 'react';

export default function Contador() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Sumar</button>
    </div>
  );
}
```

💡 *En Java cambiarías el valor directamente; aquí siempre usas el setter (`setCount`).*

### Props

```jsx
function Saludo({ nombre }) {
  return <h2>Hola {nombre}</h2>;
}

export default function App() {
  return <Saludo nombre="Ada" />;
}
```

💡 *Piensa en props como parámetros pasados al constructor.*

### Lista con map

```jsx
export default function Lista() {
  const items = ['Manzana', 'Banana', 'Pera'];
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
```

### Render condicional

```jsx
export default function App() {
  const logueado = true;
  return (
    <div>
      {logueado ? <p>Bienvenido</p> : <p>Inicia sesión</p>}
    </div>
  );
}
```

### Input controlado

```jsx
import { useState } from 'react';

export default function Form() {
  const [valor, setValor] = useState('');
  return (
    <form onSubmit={(e) => { e.preventDefault(); alert(valor); }}>
      <input value={valor} onChange={(e) => setValor(e.target.value)} />
      <button type="submit">Enviar</button>
    </form>
  );
}
```

### useEffect básico

```jsx
import { useState, useEffect } from 'react';

export default function Reloj() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return <p>{hora}</p>;
}
```

---

## 3) Tips para quienes vienen de Java/TS

* Usa `const` siempre que puedas; `let` solo si el valor cambia.
* JSX no es HTML, pero se parece mucho.
* No hay tipos por defecto: si vienes de TypeScript, tipar te dará más seguridad.
* Aprende `map`, `filter` y `reduce`; se usan muchísimo.
* Piensa en hooks como métodos de ciclo de vida y manejo de estado.

---

## 4) Mini-ejercicios

1. Contador con +, -, y reset.
2. Lista de tareas editable.
3. Formulario con validación simple.
4. Mostrar/ocultar contenido con un botón.
5. Reloj en tiempo real con `useEffect`.

---

## Glosario express

* **Componente**: función que devuelve JSX.
* **Props**: datos que recibe un componente.
* **Estado (State)**: valores que cambian y afectan la UI.
* **JSX**: sintaxis HTML dentro de JS.
* **Hook**: función especial como `useState` o `useEffect`.

## Diagrama de flujo: ciclo de vida React simplificado

[Montaje del componente]
      ↓
   useEffect([]) → Se ejecuta una vez al montar
      ↓
[Cambio de estado o props]
      ↓
   Re-render del componente
      ↓
   useEffect([dependencias]) → se ejecuta si cambian dependencias
      ↓
[Desmontaje del componente]
      ↓
   Limpieza en useEffect (return ()=>{})

💡 En React, los datos fluyen de arriba hacia abajo (padre → hijo) y cada cambio de estado provoca un re-render.
