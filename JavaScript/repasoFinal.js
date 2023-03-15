// Todo: DADO EL SIGUIENTE ARREGLO DE MASCOTAS 
    // ORDENARLO DE FORMA DESCENDENTE EN BASE A LA EDAD

let mascotas = [
    {
        nombre: "jack",
        edad: 2
    },
    {
        nombre: "lola",
        edad: 1
    },
    {
        nombre: "firulais",
        edad: 4
    },
    {
        nombre: "mora",
        edad: 3
    },
];

let numeros = [12, 41, 3, 25, 7];


// podemos ordenar un arreglo con booblesort ya sea de numeros, string y tambien de objeto, cambia la pregunta del IF
// Algoritmo booblesort nunca retorna nada 
const ordenar = array => {

    // 1 crear una variable aux
    let aux = undefined

    // 2 crear 2 ciclos for
    for (let i = 0; i < array.length; i++) {
        
        for (let j = 0; j < array.length - 1; j++) {
           // este for es el que hace la magia

            // hacer la pregunta y condicionar AQUI CAMBIAR EL SIGNO HACE QUE SE ORDENE DE FORMA ASC > O DESC <
            // PARA COMPARAR OBJETOS TENEMOS QUE COMPARAR PROPIEDADES EJ {}.EDAD > {}.EDAD
            if( array[j] > array[j + 1] ) {
                // guardo el elemento de la posicion siguiente
                aux = array[j]
                // intercambio
                array[j] = array[j + 1] // cambia el elemento 1 al 0
                array[j + 1] = aux
            }

        }
        
    }
}

console.log(numeros)
ordenar(numeros)
console.log(numeros)




// TODO : DADO LA SIGUIENTE MATRIZ REALIZAR LOS SIGUIENTES EJERCICIOS

let matrix = [
    [14, 12, 17, 41],
    [55, 16, 61, 23],
    [13, 22, 13, 32],
    [12, 61, 18, 23],
];

//  UN SOLO CICLO FOR =>
// UNA FILA => LE PIDO LA LONGITUD A ESA FILA
// UNA COLUMNA => LE PIDO LA LONGITUD A LA MATRIZ
// DIAGONAL PRINCIPAL => LE PIDO LA LONGITUD A LA MATRIZ
// DIAGONAL SECUNDARIA => LE PIDO LA LONGITUD A LA MATRIZ


// TODO 1)  CREAR UNA FUNCION QUE RECIBA POR PARAMETRO A LA MATRIZ Y 
        //  ADEMAS LA POSICION DE UNA COLUMNA.
        //  NUESTRA FUNCION DEBE REMPLAZAR TODOS LOS ELEMENTOS DE ESA COLUMNA
        //  POR UN STRING QUE DIGA 'hello'


function recorrerCol(mat,posicionCol) {
    // PARA RECORRER UNA SOLA FILA, COLUMNA O DIAGONAL principal o secundaria "SOLO NECESITO 1 CICLO FOR"
    // PARA RECORRER LA MATRIZ COMPLETA ES CON UN "DOBLE FOR"

    for (let i = 0; i < mat.length; i++) {
        // CAMBIA LA FILA AL RECORRER UNA COLUMNA
        // LLAMO LA MATRIZ LE PIDO UNA FILA Y UNA COLUMNA
        // Con este codigo recorro una columna
        mat[i][posicionCol] = "hello" // REMPLAZA ELEMENTOS DE LA MATRIZ
        // Con este codigo recorro una fila
        // mat[posicionFil][i]
    }

}

recorrerCol(matrix, 2)
console.table(matrix)

// TODO 2) CREAR UNA FUNCION QUE RECIBA POR PARAMETRO A LA MATRIZ Y 
        // ADEMAS LA POSICION DE UNA FILA.
        // NUESTRA FUNCION DEBE RETORNAR EL RESULTADO DE MULTIPLICAR 
        // TODOS LOS ELEMENTOS DE ESA FILA

        function multiplicarFila (mat, fil) {
            let cont = 0
            for (let i = 0; i < mat.length; i++) {

                cont += mat[fil][i] 

                
            }
            return cont
        }

        let resMul = multiplicarFila(matrix,1);
        console.table(resMul);


// TODO 3) CREAR UNA FUNCION QUE RECIBA POR PARAMETRO A LA MATRIZ
        // Y RETORNE UN ARREGLO CON TODOS LOS ELEMENTOS DE LA DIAGONAL SEUNDARIA

        const recorrerDiagonal = mat =>{
    
            let arr = []

            for (let i = 0; i < mat.length; i++) {
                
                arr.push( mat[i][ mat.length - i - 1] )
                
            }

            return arr
        
        }

        let arrSecundaria = recorrerDiagonal(matrix)

        console.log(arrSecundaria)        

///////////////////////////////////////////////////////////////
// diagonal primaria//////////////////////////////////////////
//////////////////////////////////////////////////////////////

// console.log(matrix[0][0])
// console.log(matrix[1][1])
// console.log(matrix[2][2])
// console.log(matrix[3][3])

// for (let i = 0; i < matrix.length; i++) {
//     console.log(matrix[i][i])
// }


//////////////////////////////////////////////////////////////
// Diagonal Secundaria////////////////////////////////////////
///////////////////////////////////////////////////////////////

// console.log(matrix[0][3])
// console.log(matrix[1][2])
// console.log(matrix[2][1])
// console.log(matrix[3][0])

// for (let i = 0; i < matrix.length; i++) {
    
//     console.log(matrix[i][ matrix.length - i - 1]) // [0][3] - [1][2] - [2][1] - [3][0]

// }

/////////////////////////////////////////////////////////////////////


// TODO 4) CREAR UNA FUNCION QUE RECIBA POR PARAMETRO A LA MATRIZ
        // Y RETORNE LA SUMA DE TODOS LOS ELEMENTOS DE LA MATRIZ
        // TENIENDO EN CUENTA SOLO LOS NUMEROS IMPARES


        const recorrerMat = mat => {

            let acc = 0

            for (let i = 0; i < mat.length; i++) {
                
                for (let j = 0; j < mat[i].length; j++) {
                    
                    if( mat[i][j] % 2 !== 0) {
                        
                        acc += mat[i][j]

                    }

                }
                
            } 
            
            return acc

        }

        let resultadoMatriz = recorrerMat(matrix)
        console.log(resultadoMatriz)

        