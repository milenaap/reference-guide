/**********************************************************
 * 
 * L  I  B  R  E  R  I  A  S 
 * 
 ***********************************************************/

#include <stdio.h>
#include <stdlib.h>
#include <time.h>


/**********************************************************
 * 
 * Firma de las funciones 
 * 
 ***********************************************************/
void imprimeBienvenida();

/**********************************************************
 * 
 * Declaracion de la función principal (main) 
 * 
 ***********************************************************/

int main() {

    //Declaración de las variables

    // tipo nombre de la variable = valor;
    int eleccion;
    int num1, num2, result = 0;
    int resto = 0;
    int cociente = 0;

    // imprimir por pantalla solo con la frase que se quiere
    printf("Escoje una operacion:\n");
    printf("1. Multiplicacion\n");
    printf("2. Division\n");
    return 0;

    // imprimir por pantalla con las variables requeridas colocando el %tipo de variable entre comillas dobles "", seguido de una " , " y el nombre de la variable
    printf("El %d repetido %d veces es:\n", num1, num2);

    // Pedir información por pantalla %tipo de variable, &nombre de la variable
    scanf("%d", &eleccion);    
    scanf("%d", &num1);    
    scanf("%d", &num2);


    /**********************************************************
     * 
     * B  U  C  L  E  S   o   I  T  E  R  A  D  O  R  E  S
     * 
     ***********************************************************/

    // bucles o iteradores


    // for
    for(int i = 0; i < 10; i++){ // for = para
        //TODO aquí va el código o la lógica
    }

    // while
    int edad = 10;
    while( edad< 18 ){ // while = mientras
    //TODO aquí va el código o la lógica

    edad++;
    } 
}

/**********************************************************
 * 
 * Declaracion de funciones 
 * 
 ***********************************************************/
// (ejemplo)
int nombreVariable() {
    return rand() % 100 + 1; // Operaciones
}

// Función vacia 
void imprimeBienvenida() {
    system("cls");
    printf("Bienvenido al juego del Ahorcado \n \n");
    printf("Tienes que adivinar la palabra secreta \n");
    printf("Tienes 6 intentos \n");
    printf("Buena suerte!! \n");
}