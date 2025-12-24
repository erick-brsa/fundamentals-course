
let numberOfLines: number = 0;

export function printLineNumber() {
    numberOfLines++;
    console.log(`Line #${numberOfLines}`)
}

printLineNumber(); // Line #1
printLineNumber(); // Line #2
printLineNumber(); // Line #3
printLineNumber(); // Line #4