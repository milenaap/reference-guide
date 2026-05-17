
##

```sh

Ejemplo de una clase en abap con eclipse

CLASS zcl_hello_ok DEFINITION
  PUBLIC
  FINAL
  CREATE PUBLIC .

  PUBLIC SECTION.
    INTERFACES if_oo_adt_classrun .
  PROTECTED SECTION.
  PRIVATE SECTION.
ENDCLASS.


CLASS zcl_hello_ok IMPLEMENTATION.
    METHOD if_oo_adt_classrun~main.
        DATA message TYPE string.   // Definicion de variable
        message = 'hello world'.    // Asignación del valor
        out->write( message ).      // Imprimir la variable
    ENDMETHOD.
ENDCLASS.


```

## Variables

```sh

DATA texto   TYPE string.
DATA numero  TYPE i.
DATA fecha   TYPE d.
DATA hora    TYPE t.
DATA importe TYPE p LENGTH 8 DECIMALS 2.


# crear una variable clasica:
DATA message TYPE string.

# Crear variable asignandole valor
DATA message TYPE string VALUE 'Milena'.

# crear variables en bloque:
DATA: nombre TYPE string,
     edad TYPE i,
     fecha TYPE d.

# Crear inferencia de tipo:
DATA(nombre) = 'Milena'.

```

# Constantes

```sh
CONSTANTS pi TYPE p LENGTH 4 DECIMALS 2 VALUE 3.1416.


```

# Imprimir

```sh

# Declarando una variable sencilla
DATA message TYPE string.   // Definicion de variable
  message = 'hello world'.    // Asignación del valor
    out->write( message ).      // Imprimir la variable


# Por inferenia de tipos
DATA(message) = 'Hola desde inferencia de tipos'.
    out->write( message ).


# De manera clásica
DATA(message) = 'Hola desde inferencia de tipos'.
  out->write( |Adiós , { message }| ).

```





