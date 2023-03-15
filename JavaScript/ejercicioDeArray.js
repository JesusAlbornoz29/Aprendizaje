// // ARRAYS 

// let array = ['Jose','Carlos','Javier'];
// let array2 = [1,4,6];
// // a) Acceder a elementos especificos de un array

// console.log (array[2])


// // b) Modificar cada uno de sus elementos e imprimirlos

// array[0] = 'Hola'
// array[1] = 'Jesus'
// array[2] = 10


// console.log(array)

// // c) Agregar elementos a un array
// // Agregar un elemento al final del array .push()
// array.push('Hola Mundo')
// console.log(array)
// // Agrega un elemento al comienzo de un array .unshift()
// array.unshift('Elemento 0')
// console.log(array)


// // d) Extrae elementos de un array
// // Elimina el ULTIMO elemento de un array .pop() tambien devuelve el elemento eliminado
// let ultimoElemento = array.pop();
// console.log(array)
// console.log (ultimoElemento)
// // Elimina el PRIMER elemento de un array .shift() tambien devuelve el elemento elimnado
// let primerElemento = array.shift()
// console.log(array)
// console.log (primerElemento)


// // E) Comparar elementos de un array con los elementos de otro
// // Compara longitud de array
// function compararLongitud (array,array2) {
//   if (array.length == array2.length) {
//     return true
// } else {
//     return false
// }
// }

// console.log(compararLongitud(array,array2))

// // Compara elementos
// function compararElementos(array, array2) {
//     let acumulador = [] 
//     for (let i = 0; i<array.length;i ++){
//         if (array[i] == array2[i]){
//             acumulador.push(true)
//         } else {
//             acumulador.push(false)
//         }
//     }
//     return acumulador
// }

// console.log(compararElementos(array,array2))


// 1. Crear la estructura adecuada para guardar las siguientes películas: "star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"
let peliculas = ['star wars', 'totoro', 'rocky', 'pulp fiction', 'la vida es bella']
// Importante: verificá que todo funciona correctamente accediendo a alguna de las películas una vez creada la estructura correspondiente.
console.log(peliculas)

// 2. Más tarde, de producción dieron el aviso de que las películas deberían estar todas en mayúsculas. 
// Para esto solicitan que crees una función que reciba por parámetro un array y convierta el contenido de cada elemento a mayúsculas.

function pasarAMayusculas(peliculas) {
        for (let i = 0; i < peliculas.length; i++){
                peliculas[i] = peliculas[i].toUpperCase()
            }
        return peliculas
}

console.log(pasarAMayusculas(peliculas))

// 3. Mientras trabajabas en el feature anterior, se dio el aviso de que también hay que crear otra estructura similar a la primera, pero con las siguientes películas animadas: "toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite" Por lo tanto, te piden crear una función que reciba dos arrays como parámetros, para poder agregar los elementos contenidos en el segundo array dentro del primero, y así retornar un solo array con todas las películas como sus elementos.
// Importante: las películas animadas también deberían convertirse a mayúsculas.

let peliculasAnimadas = ['toy story','finding Nemo', 'Kung-fu panda', 'wally', 'fortnite']

// function sumandoPelis  (peliculas,peliculasAnimadas) {
//     let catalogoNuevo = []
//         for (let i = 0; i < peliculasAnimadas.length;i ++){
//             peliculas.push(peliculasAnimadas[i].toUpperCase())
//         }
//         console.log(catalogoNuevo)
//         return peliculas
// }

// console.log (sumandoPelis(peliculas,peliculasAnimadas))
// console.log(peliculas)


// 4. Durante el proceso, uno de los desarrolladores advierte que el último elemento del array de películas animadas es un videojuego. Ahora tenés que editar el código y modificarlo de manera que puedas eliminar ese último elemento antes de migrar el contenido al array que contenga todas las películas.PD: por precaución, guardá el elemento que vas a eliminar en una variable.


function sumandoPelis  (peliculas,peliculasAnimadas) {
    let del = peliculasAnimadas.pop()
    let catalogoNuevo = []
        for (let i = 0; i < peliculasAnimadas.length;i ++){
            peliculas.push(peliculasAnimadas[i].toUpperCase())
        }
        console.log(catalogoNuevo)
        return peliculas,del
}


console.log (sumandoPelis(peliculas,peliculasAnimadas))
console.log(peliculas)

// 5. Finalmente, te envían dos arrays con calificaciones que hacen distintos usuarios del mundo sobre las películas con el siguiente formato:

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

// Te piden crear una función que compare las calificaciones e indique si son iguales o diferentes. 
//Te confirman que están en el orden adecuado y que solo traen valores numéricos del 1 al 10. 
// PD: los elementos de los scores tanto de Asia como de Europa corresponden en orden al del array resultante de combinar películas con películas animadas. Es decir, el primer elemento del array de películas general corresponde al primer elemento de asiaScores y al primer elemento de euroScores, y así sucesivamente.

// Compara elementos
function compararElementos(asiaScores, euroScores) {
    let acumulador = [] 
    for (let i = 0; i<asiaScores.length;i ++){
        if (asiaScores[i] == euroScores[i]){
            acumulador.push(true)
        } else {
            acumulador.push(false)
        }
    }
    return acumulador
}

console.log(compararElementos(asiaScores,euroScores))