let numeros = [
	[10, 3, 2, 1, 4, 7],
	[5, 5, 10, 100, 4],
	[5, 125, 10, 1020, 4],
	[5, 5, 5097, 100, 4]
];

/**
 * Suma los valores que sean mayores
 * o iguales a 10, pero menor a 1000.
 */

function sumarElementos  (matriz) {
    let suma = 0
    for (let fila = 0; fila < matriz.length; fila++){
        for(let columna= 0; columna <matriz[fila].length; columna++){
            if (matriz[fila][columna] >= 10 && matriz[fila][columna] < 1000){
            suma += matriz[fila][columna]
            }
        }
    } return suma
}
let resultado = sumarElementos(numeros) 
console.log(resultado)