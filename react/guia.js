

/**
 * 
 * 📘 Guía Completa y Actualizada para Empezar con React desde Cero
🚀 0. ¿Qué necesitas antes de empezar?

Antes de crear tu primer proyecto React, asegúrate de tener instalado:
✅ Requisitos:

    Node.js (incluye npm)

    Visual Studio Code

    Terminal (puede ser la de VS Code o una externa)

🧰 1. Crear tu primer proyecto React
🔧 Paso a paso:

    Abre tu terminal (en VS Code o fuera).

    Ve a la carpeta donde guardarás tu proyecto:

cd ~/Escritorio/MisProyectosReact

    Crea el proyecto con Vite (recomendado por rapidez y facilidad):

npm create vite@latest my-first-react-app -- --template react

    Entra a la carpeta del proyecto:

cd my-first-react-app

    Instala las dependencias necesarias:

npm install

    Abre el proyecto en VS Code:

code .

    Ejecuta el proyecto:

npm run dev

📍 Visita el navegador en http://localhost:5173
📁 2. Estructura del proyecto React creado con Vite

my-first-react-app/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── App.jsx           ← Componente principal
    ├── main.jsx          ← Punto de entrada
    └── components/       ← Carpeta sugerida para tus componentes

🧱 3. Estructura básica de un componente moderno

// src/components/Saludo.jsx
import React from 'react';

export const Saludo = () => {
  return <h2>¡Hola desde el componente Saludo!</h2>;
};

🧩 Usar el componente en App.jsx:

import { Saludo } from './components/Saludo';

export const App = () => {
  return (
    <div>
      <h1>Mi App en React</h1>
      <Saludo />
    </div>
  );
};

🔁 4. Estado con useState

import React, { useState } from 'react';

export const Contador = () => {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h2>Contador: {contador}</h2>
      <button onClick={() => setContador(contador + 1)}>➕</button>
      <button onClick={() => setContador(contador - 1)}>➖</button>
    </div>
  );
};

Y luego lo importas en App.jsx igual que Saludo.
📨 5. Props

// src/components/Mensaje.jsx
export const Mensaje = ({ nombre }) => {
  return <p>Hola, {nombre}</p>;
};

// En App.jsx
import { Mensaje } from './components/Mensaje';

<Mensaje nombre="Milena" />

🧠 6. Diferencia entre props y estado
Concepto	state	props
Quién lo define	El propio componente	El componente padre
Se puede cambiar	Sí	No
Ejemplo	useState(0)	<Componente nombre="X" />
📌 Consejos importantes

    Usa siempre export const Nombre = () => {} para declarar componentes.

    React necesita que todo el contenido se retorne desde un solo contenedor.

    Usa <div>, <h1>, <button>, etc., como si fuera HTML, pero con JavaScript.

    Para estilos usa className, no class.

📂 Organización sugerida

src/
├── App.jsx
├── main.jsx
└── components/
    ├── Saludo.jsx
    ├── Contador.jsx
    └── Mensaje.jsx

🧪 Ejercicios prácticos para ti

    ✍️ Crear un componente NombreUsuario que reciba una prop usuario.

    🔁 Hacer un contador que reinicie a 0.

    🧠 Mostrar un mensaje si el número es par o impar.

    🎯 Crear un array de productos y renderizarlo con .map().

✅ ¿Qué sigue?

    useEffect para ejecutar código al montar

    Formularios

    Navegación con react-router-dom

    Peticiones a APIs

    Manejo de estado global con Context o Redux
 * 
 * 
 * 
 * 
 */