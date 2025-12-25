// Ejercicios de programación

/* Convertir kilómetros a millas, sabiendo que: 
   (1 kilómetro es igual a 0.63 millas) */

export function kilometersToMiles(kilometers: number) {
    if (kilometers < 0) {
        throw new Error('Kilometers should be a positive number.');
    }
    return kilometers * 0.62;
}