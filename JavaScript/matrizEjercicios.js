// // // Dada la siguiente matriz


// // // recorrer sus valores y sumar solo los numeros que esten por encima o sean iguales a 10, pero menores que 1000

// // let matriz = [
// //     [10, 3, 2, 1, 4, 7],
// //     [5, 5, 10, 100, 4],
// //     [5, 125, 10, 1020, 4],
// //     [5, 5, 5097, 100, 4]
// // ]
// //  // sumar solo los numeros que esten por encima o sean iguales a 10, pero menores que 1000
// // let suma = 0;

// // // recorrer sus valores
// // function sumarElementos  (matriz) {
// //     for (let fila = 0; fila < matriz.length; fila++){
// //         for(let columna= 0; columna <matriz[fila].length; columna++){
// //             if (matriz[fila][columna] >= 10 && matriz[fila][columna] < 1000){
// //             suma += matriz[fila][columna]
// //             }
// //         }
// //     } return suma
// // }


// // console.log(sumarElementos(matriz))


// // ///// Ejercicio

// // const mes = [
// //     [100,2000,300,560,55,99,467], // Posicion 0 - Semana 1
// //     [100,2000,300,560,55,99,467],
// //     [100,2000,300,560,55,99,467],
// //     [100,2000,300,560,55,99,467],
// // ];

// // // funcion que sume los gastos de una semana

// // function sumaSemana (num) {
// //     console.log('Sumando semana ' + num)
// //     let total = 0
// //     for (let i = 0; i < 7; i++) {
// //         total +=  mes[num - 1][i];
// //     }
// //     return total;
// // }

// // console.log(sumaSemana(2));

// // /////

// // function gastosDia (semana,dia) {
// //     return mes[semana-1][dia-1];
// // }


// // console.log(gastosDia(1,1));

// // //////

// // function gastoTotales () {
// //     let total = 0;
// //     for (let i = 1; i < 4; i++){
// //         total += sumaSemana(i);
// //     }
// //     return total;
// // }

// // console.log(gastoTotales(1,1));

// // ///


// // function matriz (filas,colimnas) {
// //     const resultado = [];
// //     let n=1;
// //     for (let i = 0; i < filas; i++) {
// //         resultado [i] = [];
// //         for (let j = 0; j < columnas; j++) {
// //             resultado[i] = n;
// //             n++;            
// //         }
// //         n++;
        
// //     }
// //     return resultado;
// // }

// // console.table(matriz(10,10));

// // function agregar (array,algo) {
// //     console.log(array,algo);
// //     array.push(algo);
// // }



// const fotos = [
//     { username: 'Pahuen', likes: 12},
//     { username: 'Pahuen', likes: 2},
//     { username: 'Pahuen', likes: 42},
//     { username: 'Pahuen', likes: 77},
//     { username: 'Pahuen', likes: 35},
//     { username: 'Pahuen', likes: 33},
//     { username: 'Pahuen', likes: 76},
//     { username: 'Pahuen', likes: 42}
// ]


// /// PRIMER TEMA DE PARCIAL
// // Patron de busquedas

// function masLikes (array) {
//     // que me traiga lo que tengan mas de 8 like
//     const resultado = []; // este array va a guardar lo del if
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].likes > 8) {
//             resultado.push(array[i]);
//         }
        
//     }
//     return resultado;
// }

// console.log (masLikes(fotos));

// // SEGUNDO TEMA DE PARCIAL FUNCION PARA GENERAR MATRIZES SABER LA ESTRUCTURA

// // ej funcion retorne suma de una columna
// // mal
// function columna (matriz, columna) {
//     let resultado = 0;
//     for (let i = 0; i < matriz.length; i++) {
//         for (let j = 0; index < j.length; j++) {
//             if (j == columna - 1) {
//                 resultado += matriz [i][j];
//             }
//         }
        
//     }
//     return resultado;
// }


// console.log(columna(mat,2));
// console.log(6)

// crear una matriz



// Patron de ordenacion

const array = ['a','z','f','h']

function ordenar(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if(array[j] > array [j + 1]) {
                // Va a ir guardando la posicion j
                const aux = array[j];
                // intercambia de lugar
                array[j] = array [j+1]
                // intecambia de lugar
                array[j+1] = aux;
            }
            
        }
        
    }
}


ordenar(array);
console.log(array);

// letras y numero es igual

// Descendente cambiar el simbolo de mayor a menor

// array de objetos en if va la propiedad del objeto


// Como sabemos si un array esta ordenado o no


/// Matriz que crea matriz

function crearMatriz(fila, columna) {
    const matriz = [];
    let auxiliar = 0;
    for (let i = 0; i < fila; i++) {
        matriz[i] = [];
        for (let j = 0; j < columna; j++) {
            auxiliar = auxiliar + 1;
            matriz[i][j] = auxiliar;
        }
    }
    return matriz;
}