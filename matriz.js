///////////////////////////////////////////////////////////////////////////////// DOBLE FOR ////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////// PDF 1 /////////////////////////////////

// const matriz = [
//     [1,3,5,6],
//     [0,2,4,6],
//     [8,9,10,11],
// ]


// // Recorrer una fila ej la fila 1
// for (i = 0; i < matriz[1].length ; i++){
//     console.log(matriz[1][i]);
// }

// // Recorrer una colimna ej la columna 2
// for (i = 0; i < matriz.length; i++) {
//     console.log(matriz[i][2]);
// }

// // Recorrer por filas
// // el primer for recorre por filas y mide el largo de las filas
// for (let fila=0; fila <matriz.length;fila++){
//     // el segundo for recorre todos los elementos de la esta fila y cuando termina de recorrerlos recien entonces pasa a la segunda fila
//     for(let columna=0; columna<matriz[fila].length;columna++){
//         console.log(matriz[fila][columna]);
//     }
// }

// // // Recorrer por columnas
// // // en el primer for medimos la cantidad de columnas
// for (let columna = 0; columna < matriz[0].length ; columna++){
//     // en el segundo for recorre todos los elementos del for de columna recien cuando termina salta a la siguiente columna
//     for (let fila=0;fila<matriz[fila].length;fila++){
//         console.log(matriz[fila][columna]);
//     }
// } // CONSULTAR EN CLASE DE VIERNES POR QUE ME DA ERROR EN .LENGTH



///////////////////////////////////////////////////////////////////////////////// DOBLE FOR ////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////// DIAPO PG /////////////////////////////////
// let butacasCine = [
//     ['ocupado', 'libre', 'libre', 'libre'],
//     ['libre', 'libre', 'libre', 'libre'],
//     ['libre', 'libre', 'ocupado', 'ocupado'],
//     ['ocupado', 'ocupado', 'ocupado', 'ocupado'],
//     ['libre', 'libre', 'libre', 'libre']
// ];

/////////////////////////////////// UN CICLO FOR //////////////////////////////////////
///////// Hacemos que la matriz se mida a si misma. Podemos hacerlo de 2 formas
// 1
// let cantidadFilas = butacasCine.length;
// //2 
// let cantidadColumnas = butacasCine[0].length;
// Si bien medimos solo la fila 0, todas las columnas tienen la misma cantidad de filas.
///////// Recorrer una fila
// Vamos a recorrer la matriz para saber si en la fila 1 hay butacas libres
// let libres = false;
// for (let fila=0;fila<butacasCine.length;fila++){ // Este for itera por cada fila y mide cuantas filas hay
//     libres = false;
//     for(let col=0;col<butacasCine[fila].length; col++){ // este for comprueba cada columna
//             if (butacasCine[fila][col]=='libre'){
//         libres=true;
//             }
//             if (libres==true){
//                 console.log('En la fila '+fila+ ' hay butacas libres');
//                 // luego de recorrer una fila muestra el resultado
//             }
//     } // CONSULTAR EN CLASE DE VIERNES POR QUE ME DEVUELVE 4 LIBRES EN LA FILA 2 CUANDO SON SOLO 2 LIBRES

// }


//////// Recorrer una columna
/// como saber si las butacas del medio estan ocupadas
// let ocupada= true;
// for (let col=0;col<butacasCine[0].length;col++){
//     ocupado = true;
//     for (fila=0;fila<butacasCine.length; fila++){
//         if(butacas[fila][col]=='ocupado')
//         ocupado=false;
//     }
//     if (ocupado==false)
//     console.log('En la '+col+ ' hay butacas libre');
// } // CONSULTAR 





///////////////////////////////////////////////////////////////////////////////// DOBLE FOR ////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////// SEGUNDO PDF //////////////////////////////////

// TRABAJANDO CON MATRICES
// 1) Creamos una matriz de 2x2
let matriz = [
    [5,8],
    [2,6]
];

console.table(matriz);

// 2) Como accedo al valor almacenado en 1-1 ?
console.log(matriz[1][1]);

// 3) como puedo cambiar el valor almacenado en 1-0?
matriz[1][0] = 1;
console.table(matriz);

// 4) Probemos ahora crear matrices que no sean cuadradas. Como lo hariamos? 
// Sugerencia: Te recomendamos que uses console.table() en vez de console.log() para poder visualizar mejor la matriz.

let arrayMatriz = [];

let arrayX=['x0','x1','x2'];

let arrayY=['y0','y1','y2'];

arrayMatriz[0] = arrayX;

arrayMatriz[1] = arrayY;

console.table(arrayMatriz);

// Ahora bien, pensemos, con los conocimientos que ya tenemos. Como podemos optimizar el funcionamiento de una matriz? Si pensaste en un FOR estas en lo correcto, veremos como imprimir todos los valores.

console.log(arrayMatriz.length);

for (let i = 0; i<arrayMatriz.length;i++){
    console.log(arrayMatriz[i])
}

// Como veran, el resultado de esto quiza no es lo que esperabamos
// Pensemos ahora, como podemos IMPRIMIR con un CICLO FOR LA PRIMERA COLUMNA solamente y, luego, solo la PRIMERA FILA

// PRIMERA COLUMNA
for (let i = 0; i<arrayMatriz.length; i++){
    console.log(arrayMatriz[i][0])
}

// PRIMERA FILA

for (let i = 0; i<arrayMatriz.length; i++){
    console.log(arrayMatriz[0][i])
}

// Ahora que ya sabemos como recorrer una fila y una columna, Como podremos recorrer toda la matriz?
// Una opcion muy comun es USAR UN DOBLE CICLO FOR, pensamos como se haria:

//  Bucle que recorre el primer arra
for(let i=0;i<arrayMatriz.length;i++)