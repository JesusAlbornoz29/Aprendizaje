// Bucles y Repeticiones 
// 1 Crear una función que pida un valor por parámetro y muestre los 10 números siguientes.

// function numerosSiguientes (numero) {
//     for (let i = 0; i < 10; i++) {
//         let valor = numero + i
//         console.log(valor);
//     } 
// }
// numerosSiguientes (1);

// 2) Imprimir los números entre el 5 y el 20, saltando de tres en tres.

// for (let i = 5; i <= 20; i= i+3) {
// //     console.log(i);
// // }

// // 3)Escribir un programa que muestre la sumatoria de todos los números entre el 0 y el 100
// let suma = 0
// for (let i = 0; i <= 100; i++){
//     suma = suma + i
// }
// console.log (suma)

// 4) Dado un número entero positivo, mostrar su factorial. El factorial de
// un número se obtiene multiplicando todos los números enteros
// positivos que hay entre el 1 y ese número.

// function factorial (numero){
//     let total = 1;
//     for (i=1; i <= numero; i++){
//         total = total * i;
//     }
//     return console.log (total);
// }

// factorial(4);

// 5) Crear una función que muestre todos los números de la secuencia de fibonacci hasta el valor 
// ingresado por parámetro.

function fibonacci (valor) {
   let resultado = 0 ;
   if (valor==0 || valor == 1){
    return resultado = resultado + 1;
   }
   return fibonacci (valor -1 ) + fibonacci (valor -2 )
}

console.log(fibonacci(6));

function repetir (valor){
    
}