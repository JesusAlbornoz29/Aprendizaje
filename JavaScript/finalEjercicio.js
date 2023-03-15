console.log('EJERCICIO 1')

// arreglo lineal
let numerosLineal =  [1, 3, 5, 7]

// algoritmo de recorrer la matriz
function linearSerch (array, num) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === num) {
            return i
        }       
    }
    return -1
}

let res = linearSerch(numerosLineal, 7);

console.log(res)
console.log('EJERCICIO 2')

// matriz cuadrada
let matriz = [
    [1, 3, 5, 7],
    [0, 2, 4, 6],
    [8, 9, 10, 11],
]

// Recorro una fila indicandola 
    for (i = 0; i < matriz[2].length ; i++){
            if(matriz[2][i] === 11) {
                return console.log(i) // return corta la busqueda
            }
    }

// Recorro una columna

    for (let j = 0; j < matriz.length; j++) {
        console.log(matriz[j][1])
    }

