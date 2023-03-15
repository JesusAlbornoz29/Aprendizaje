// Ejercicio 1
// Dado un array con los datos de una encuesta realizada sobre los temas musicales
// más populares 
// Lo que se tiene en el array son objetos definidos con el nombre de un tema musical y cantidad de votos que obtuvo
// crear el array con los datos de 5
// temas, crear los objetos con los temas que prefieran, y una cantidad de votos para
// cada uno.
// Los votos obtenidos están desordenados.
let canciones = [
    {
        nombre: 'Back in black',
        votos: 3
    },
    {
        nombre: 'Blinding Lights',
        votos: 5
    },
    {
        nombre: 'Thunder',
        votos: 1
    },
    {
        nombre: 'Numb',
        votos: 20
    },
    {
        nombre: 'Enemy',
        votos: 10
    }
]

// Escribir un algoritmo que, dado un tema, me informe cuántos votos obtuvo.
// a) Resolverlo aplicando búsqueda lineal.

function linearSerch (value, array) {
    // recorrer array.length comparando 
    for (let i = 0; i < array.length; i++) {
    // si algun elemento es igual a value
        if (array[i].nombre === value){
            console.log(`El nombre de la cancion es: ${value} y sus likes son: `)
            return array[i].votos
        }
    }
    return -1
}

let resultado = linearSerch('Enemy', canciones);

console.log(resultado)


// b) Resolverlo aplicando búsqueda binaria.


// Codigo dado en Recuperacion. Como buscar por atributo de un elemento del objeto literar dentro del array?
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
            if (guess.nombre == item) {
                return guess.votos;
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


let res = binarySerch(canciones, 'Numb')
console.log (res)