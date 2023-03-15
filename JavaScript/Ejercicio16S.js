// Programación Imperativa
// Ejercitación de algoritmos
// Esta mesa de trabajo tiene ejercicios bastante complejos, les recomendamos
// fuertemente charlar con sus compañeros de mesa para poder resolverlos entre todos,
// ya que requiere mucho pensamiento lógico. En ese sentido, es normal sentir
// frustración, por lo que sus compañeros y buscar en internet serán sus mejores
// aliados.
// 1) Escribir un programa que muestre en pantalla los números del 1 al 100,
// sustituyendo los múltiplos de 3 por la palabra “fizz”, los múltiplos de 5 por
// “buzz” y los múltiplos de ambos, es decir, los múltiplos de 3 y 5 —o de 15—,
// por la palabra “fizzbuzz”. Visiten este sandbox
// https://codesandbox.io/s/fizzbuzz-3e9uc?file=/src/index.js para realizar

for (let i = 1; i < 100; i++) { // Itero del 1 al 100
    if (i % 3 == 0 && i % 5 == 0){ // La condicion es asc primero el and
        console.log('FizzBuzz')
    } else if ( i % 3 == 0) { // luego de forma asc
        console.log('Fizz')
    } else if ( i % 5 == 0) {
        console.log('Buzz')
    } else {
        console.log(i) // Mostrar el resto de numeros
    }
};

// 2) Escriban una función que reciba dos parámetros: un array y un índice. La
// función deberá de mostrar por consola el valor del elemento según el
// índice dado. Por ejemplo, dada la siguiente array e índice, la función
// imprimirá '6'. 
let array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]; 
var index = 1;
// Visiten este sandbox para escribir su código.
// https://codesandbox.io/s/busqueda-en-array-025me?file=/src/index.js

function busqueda (array, indice) {
    return array[indice]
}

console.log(busqueda(array,index))


// 3) Escribir una función que, dado un número de mes, devuelva la cantidad
// de días de ese mes —suponiendo que no es un año bisiesto—.
// https://codesandbox.io/s/dias-del-mes-jb0f2?file=/src/index.js

function diasEnUnMes(mes) {
    return new Date(2022, mes, 0).getDate();
}

console.log(diasEnUnMes(01))


// 1

// 4) Escribir una función de JavaScript que invierta un número. Por ejemplo,
// si x = 32443, la salida debería ser 34423.
// https://codesandbox.io/s/inverter-jfwm7?file=/src/index.js

function invertirNumero(numero) {
    console.log(numero.toString().split('').reverse().join(''));
}

invertirNumero(3579);

// 5) Escribir una función que reciba una array y solo imprima los valores que
// se repiten. Por ejemplo, dada la siguiente array e índice, la función
// imprimirá '6,23,33,100'. let array =
// [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
// https://codesandbox.io/s/impresora-repitientes-qtz0e?file=/src/index.js

// Consultar poor que no lo entendi
function valoresRepetidos(array) {
    let newArray = []; // cremaos un array para guardar nuestros num
    let repetido; // guardamos nuestros num repetidos
    for (let i = 0; i < array.length; i++) { // recorremos nuestro array
        repetido = array.filter(x => x === array[i]);
        if (repetido.length > 1) {
            if(!newArray.includes(repetido[0])) newArray.push(repetido[0])           
        }
    }
    return newArray
}

console.log(valoresRepetidos(array))

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// 1
// Dado los siguientes numeros:

let num1 = 43;
let num2 = 78;
let num3 = 14;

// Crea un algoritmo que te permita identificar
// el numero mayor. Utiliza condicionales como el
// if, else, o else if.

function mayor (num1, num2, num3 ){
    if (num1 > num2 && num1 > num3){
        console.log(`${num1} es mayor que ${num2} y ${num3}`)
    } 
    else if (num2 > num1 && num2 > num3){
        console.log(`${num2} es mayor que ${num1} y ${num3}`)
    } 
    else if (num3 > num1 && num3 > num2){
        console.log(`${num3} es mayor que ${num1} y ${num2}`) 
    } else 
    console.log('ni idea')
}

mayor (num2,num1,num3)

// Escribe tu código debajo de estas lineas,
// y observa los resultados por la consola.
// especificamente para este conjunto de datos
// deberias ver por consola el numero 78,
// adicional, cambia los valores de num1, num2 y num3
// para verificar que tu algoritmo funcione con
// cualquiera 3 valores.

/////////////////////////////////////////////////////////////////////////////////////////

// 2) 
// Ahora bien. dado los siguientes numeros:

let num4 = 13;
let num5 = 1663;
let num6 = 3363;
let num7 = 65778;
// agrega una variable mas, llamada num7
// con un valor numerico

// Crea un algoritmo que te permita identificar
// el numero mayor de los 4 anteriores.

// Escribe tu código debajo de esta linea,
// y observa los resultados por la consola.
// Adicional, cambia los valores de los 4 numeros
// para ver que algoritmo funciona con cualquier
// conjunto de 4 numeros.

function mayorDos (num4, num5, num6, num7 ){
    if (num4 > num5 && num4 > num6 && num4 > num7){
        console.log(`${num4} es mayor que ${num5}, ${num6} y ${num7}`)
    } 
    else if (num5 > num4 && num5 > num6 && num5 > num7){
        console.log(`${num5} es mayor que ${num4}, ${num6} y ${num7}`)
    } 
    else if (num6 > num4 && num6 > num5 && num6 > num7){
        console.log(`${num6} es mayor que ${num4}, ${num5} y ${num7}`) 
    } 
    else if (num7 > num4 && num7 > num5 && num7 > num6){
        console.log(`${num7} es mayor que ${num4}, ${num5} y ${num6}`) 
    } 
    else 
    console.log('ni idea')
}

mayorDos (num4,num5,num6,num7)



/////////////////////////////////////////////////////////////////////////////////////////

/**
 * Extra: que puedes hacer para identificar
 * el numero mayor de una lista de numeros,
 * como la siguiente? Utiliza Javascript.
 *
 * Tip: es valido buscar en google :)
 *
 * Adicional: al terminar tu algoritmo,
 * cambia los valores de la lista, bien sea
 * agregando o removiendo, y asegurate
 * que tu algoritmo funcione con cualquier lista
 * de numeros
 */

const numeroS = [5, 12, 2, 40, 78, 2, 8];

let m = Math.max(...numeroS);

console.log(m)