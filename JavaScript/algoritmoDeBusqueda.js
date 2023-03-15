//////////////////////////// Busqueda lineal 
// ACEPTA NUMERO ENTERO, CADENA o ARREGLO
// La función buscará en cada elemento del arreglo para encontrar el valor y devolverá la posición del mismo en el arreglo si ha sido encontrado.
//  Si el valor no está en el arreglo, devolverá -1.

let numeros = [5,10,15,2,8,6,2];

function linearSerch (value, array) {
    // recorrer array.length comparando 
    for (let i = 0; i < array.length; i++) {
    // si algun elemento es igual a value
        if (array[i] === value){
            // Si se cumple  retorna la posicion en list.length de value
            return i
        }
    }
    return -1
}

let resultado = linearSerch(1, numeros);

console.log(resultado)


/////////////////////// BUSQUEDABINARIA///////////////////////
// 1) Lo primero que vamos a hacer es escribir una funcion que nos permita tomar dos parametros, la lista sobre la que vamos a buscar y el elemento que vamos a buscar:

// 2) La lista retornará null si no encuentra nada, pero procedamos a rellenar la función. Vamos a declarar dos límites, uno bajo y uno alto. ESTOS LIMITES NOS SERVIRAN PARA PODER ENCONTRAR EL PUNTO MEDIO DE LA LISTA.

// 3) Ahora bien, la operación de encontrar el punto medio, es una operación recursiva o iterativa, es decir, la vamos a querer hacer tantas veces como no encontremos el número. Para esto podemos usar un ciclo while, el cual se ejecutara mientras que el punto más bajo sea menor o igual que el punto más alto:

const binarySerch = (list, item) => {
    // punto mas bajo
    let low = 0;
    // punto mas alto
    let high = list.length - 1;
    // mientras que low sea menor o igual que high
    while (low <= high) {
        // encontramos la mitad entre low y high
        const mid = Math.floor ((low + high) / 2);

        // adivinar si el valor es el de la mitad
        const guess = list[mid];

        // si es asi, retornar esa posicion
            if (guess == item) {
                return mid;
            }
            // si lo propuesto es mayor que lo que estamos buscando
            if (guess > item) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
    }

    return null; // si no encontramos nada
};

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let buscar = 11;
console.log(binarySerch(list, buscar));

