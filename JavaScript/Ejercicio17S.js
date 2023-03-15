//Matrices
// Mesa de trabajo
// Vamos a practicar el uso de matrices y, de paso, los ciclos FOR.
// 1) Seguir las instrucciones en este sandbox, para escribir y sumar los valores dentro
// de una matriz.
// https://codesandbox.io/s/mesa-17-ejercicio-1-yh91v?file=/src/index.js
/**
 * Declara una variable que contenga una matriz
 * de 5x5 llena de puros numeros enteros y positivos
 */
const matriz = [
    [1,5,7,8,9],
    [16,52,75,82,19],
    [61,25,47,58,79],
    [31,53,37,83,93],
    [13,45,77,58,29],
]
/**
   * Luego, escribe un algoritmo para sumar todos
   * los numeros en la matriz.
   */

function sumarElementos  (matriz) {
    let suma = 0;
    for (let fila = 0; fila < matriz.length; fila++){
        for(let columna = 0; columna < matriz[fila].length; columna++){

            suma += matriz[fila][columna]

        }
    } return suma
}

let sumaDeMatriz = sumarElementos(matriz)
console.log(sumaDeMatriz)


// 2) Crear una función que genere una matriz de 10x10. Cada fila debe tener solo 10
// números. La matriz debe verse así:
// 1 2 3 4 5 6 7 8 9 10
// 11 12 13 14 15 16 17 18 19 20
// 21 22 23 24 25 26 27 28 29 30
// 31 32 33 34 35 36 37 38 39 40
// 41 42 43 44 45 46 47 48 49 50
// 51 52 53 54 55 56 57 58 59 60
// 61 62 63 64 65 66 67 68 69 70
// 71 72 73 74 75 76 77 78 79 80
// 81 82 83 84 85 86 87 88 89 90
// 91 92 93 94 95 96 97 98 99 100

const generarMatriz = (filas, columnas) => {
    const matriz = [];
    for (let i = 0; i < filas; i++) {
        matriz[i] = [];
        for (let j = 0; j < columnas; j++) {
            matriz[i][j] = i*filas+j+1 ; // NO ENTIENDO ESTA OPERACION
        }
    }
    return matriz;
}

console.table(generarMatriz(10, 10));

// 3) Por último, vamos a generar dos funciones:
/*a) Una va a sumar los valores en la diagonal marcada en rojo.*/
let matrizDiezXDiez = generarMatriz(10, 10)
console.table(matrizDiezXDiez)

function sumaValoresDiagonal(matriz) {
    let sumaRojo = 0;
    let indiceRojo = 0

    for (let index = 0; index < matriz.length; index++) {
        sumaRojo += matriz[indiceRojo][indiceRojo] 
        indiceRojo++
    }

    return sumaRojo
}

console.log('La suma de la diagonal roja es: ' + sumaValoresDiagonal(matrizDiezXDiez))

/*b) La otra va a marcar los valores de la diagonal marcada en verde.*/
function sumaValoresDiagonalInversa(matriz) {
    let sumaVerde = 0;
    let indiceVerde = matriz.length - 1; //NO ENTIENDO ESTA PARTE

    for (let index = matriz.length; index > 0; index--) {
        sumaVerde += matriz[indiceVerde][indiceVerde] 
        indiceVerde--
    }

    return sumaVerde
}

console.log('La suma de la diagonal verde es: ' + sumaValoresDiagonalInversa(matrizDiezXDiez))