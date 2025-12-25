// Ejercicios de programación

/* Calcule el área de un triángulo rectángulo */

export function calcRightTriangleArea(width: number, height: number) {
    if (width < 0) {
        throw new Error('Width should be a positive number.');
    }
    if (height < 0) {
        throw new Error('Height should be a positive number.');
    }
    return width * height / 2;
}