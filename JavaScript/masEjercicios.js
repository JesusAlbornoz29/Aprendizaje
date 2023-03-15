// // 1) Escribí un programa que le pida al usuario ingresar una frase y la imprima en la consola. Recordá que para pedirle al usuario que escriba una frase debés utilizar el método prompt() y para escribir en la consola debés utilizar el método console.log().


const prompt = require ('prompt-sync') ({sigint: true});

// let frase = prompt ('Ingrese una frase: ');

// console.log(frase);

// // 2) Escribí un programa que le pregunte al usuario su nombre eimprima "Hola " seguido del nombre y un signo de exclamación. Por ejemplo, si el usuario ingresa "Pedro" el programa debe imprimir en la consola "Hola Pedro!".


// let nombre = prompt ('Cual es tu nombre? ');

// console.log (`Hola! ${nombre}!`);

// // 3) Escribí un programa que le pida al usuario ingresar un número, luego le pida un segundo número, e imprima en la consola la suma de los dos números que ingresó el usuario.

// let num1 = prompt ('Ingresa 1 numero: ');
// let num2 = prompt ('Ingresa otro numero: ');

// console.log( parseInt(num1) + parseInt(num2) );

// // 4) Escribí un programa que le pida al usuario su año de nacimiento e imprima su edad actual en la consola con la frase "Tienes X años" (siendo X la cantidad de años). Por ejemplo, asumiendo que el año actual es 2019 y el usuario

// let anioNacimiento = prompt ('Ingrese su anio de nacimiento: ');

// let anioActual = 2022;

// let edad = anioActual - anioNacimiento  ;

// console.log(edad);

// 5) Escribí un programa que piense un número de forma aleatoria del 1 al 10 y le pida al usuario que lo trate de adivinar. Si el número es correcto debe imprimir en la consola Felicitaciones, ese era!", de lo contrario, debe imprimir "Lo siento, intenta nuevamente!"
// Math.ceil gnera un numero a partir del 1 y Math.random genera un numero rando entre 0 y 1


// function getRandomInt() {
//     let ran = Math.ceil(Math.random()*10);
//     let n = prompt ('Elija un numero del 1 al 10: ');
//     if ( ran == n) {
//         return console.log(`Felicitaciones, ese era!!! Elegiste ${n} y el numero era ${ran}`)
//     } else {
//         console.log(`Lo siento, intenta nuevamente. Elegiste ${n} y el numero era ${ran}`);
//     }
// }

// getRandomInt();

// 6) Escribi un programa que imprima los numeros pares del 0 al 100

// function mostrar () {
//     for (let i = 1; i <= 100 ; i++) {
//         if (i % 2 === 0) {
//         console.log (i);
//         }
// }
// };

// mostrar ();

// 7) Escribe un programa que itere sobre el arreglo nombres e imprima cada uno en la consola:

// const nombres = ['Pedro','Pablo','Maria','Juan','Diana'];

// for (let index = 0; index < nombres.length; index++) {
//     console.log (nombres[index]);
    
// }

// 8) Construir un pseudocodigo que permita ingresar un numero, si el numero es mayor de 500,s e debe calcular y mostrar en pantalla el 18% de este.

// mostrar ();

// function mostrar () {
//     let num = prompt ('Ingrese un numero: ');
//     if (num > 500) {
//         console.log (`El 18% de ${num} es: ` + num * 18 / 100);
//     } else {
//         console.log (num);
//     }
// }

// 9) Escribe una funcion llamada elemento que recibe un arreglo como parametro. La funcion debe devolver el valor que se encuentra en la tercera posicion. Si el arreglo no tiene al menos 3 elemntos debera debera retornar -1

// function elemento () {
//     let nombres = ['Ivan','Pablo','Jesus','Mathias','Agustina','Maira','Cecilia'];
//     console.log(nombres.indexOf('Mathias'));
// }

// elemento ();

// 10) Se ingresa por teclado un numero natural de hasta 2 cifras, si tiene una cifra que muestre lo minimo que le falta pra ser un numero de 2 cifras; de lo contrario, que muestre lo minimo que le falta para ser un numero de 3 cifras. Considerar que el usuario ingresa numeros de hasta dos cifras
