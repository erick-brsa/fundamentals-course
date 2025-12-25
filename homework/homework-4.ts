// Ejercicios de programación

/* Dado el siguiente arreglo: 
let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5] 
Utilizando un ciclo FOR, barra todo el arreglo y determine 
¿Cuál es el número mayor? */

export function max(numbers: number[]) {
    if (numbers.length === 0) {
        return null;
    } 
    let maximum = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maximum) {
            maximum = numbers[i];
        } 
    }
}