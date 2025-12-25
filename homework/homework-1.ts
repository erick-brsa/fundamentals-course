// Ejercicios de programación

/* Convertir de Libras a Kilogramos. 
(1 libra = 0.453592 Kilogramos) */

export function poundsToKilograms(pounds: number) {
    if (pounds < 0){
        throw new Error('Pounds should be a positive number.');
    }
    return pounds * 0.453592;
}