// 1. A partir de él siguiente array de edades nos solicitan realizar lo siguiente
const edades = [33, 27, 34, 30, 34, 25];

// a. Desarrollar una función que ordene internamente de forma ascendente las
// edades, la misma deberá retornar él array ordenado , es decir deberíamos
// obtener resultado como él siguiente.

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

ordenar(edades)
console.log(edades)


// b. Desarrollar una función que ordene internamente de forma descendente
// las edades, la misma deberá retornar él array ordenado , es decir
// deberíamos obtener resultado como él siguiente.

const ordenarDesc = array => {
    // 1 crear una variable aux
    let aux = undefined
    // 2 crear 2 ciclos for
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
           // este for es el que hace la magia
            // hacer la pregunta y condicionar AQUI CAMBIAR EL SIGNO HACE QUE SE ORDENE DE FORMA ASC > O DESC <
            // PARA COMPARAR OBJETOS TENEMOS QUE COMPARAR PROPIEDADES EJ {}.EDAD > {}.EDAD
            if( array[j] < array[j + 1] ) {
                // guardo el elemento de la posicion siguiente
                aux = array[j]
                // intercambio
                array[j] = array[j + 1] // cambia el elemento 1 al 0
                array[j + 1] = aux
            }
        }
    }
}

ordenarDesc(edades)
console.log(edades)

// 2. Dado un array de strings:

const letras = ["C", "A", "D", "E", "H", "Z", "J", "L"]

ordenar(letras)
console.log(letras)

// 3. A partir del siguiente array de Objetos Literales se solicita realizar lo siguiente:

const arrayCuentas = [
    {
        titular: "Arlene Barr",
        estaHabilitada: false,
        saldo: 3253.40,
        edadTitular: 33,
        tipoCuenta: "sueldo"
    },
    {
        titular: "Roslyn Torres",
        estaHabilitada: false,
        saldo: 3229.45,
        edadTitular: 27,
        tipoCuenta: "sueldo"
    },
    {
        titular: "Cleo Lopez",
        estaHabilitada: true,
        saldo: 1360.19,
        edadTitular: 34,
        tipoCuenta: "corriente"
    },
    {
        titular: "Daniel Malone",
        estaHabilitada: false,
        saldo: 3627.12,
        edadTitular: 30,
        tipoCuenta: "sueldo"
    },
    {
        titular: "Ethel Leon",
        estaHabilitada: true,
        saldo: 1616.52,
        edadTitular: 34,
        tipoCuenta: "sueldo"
    },
    {
        titular: "Harding Mitchell",
        estaHabilitada: true,
        saldo: 1408.68,
        edadTitular: 25,
        tipoCuenta: "corriente"
    },
]


// a. Desarrollar una función que ordene internamente de forma ascendente según él
// saldo de cada cuenta, la misma deberá retornar él array ordenado .

const ordenarSaldo = array => {
    // 1 crear una variable aux
    let aux = undefined
    // 2 crear 2 ciclos for
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
           // este for es el que hace la magia
            // hacer la pregunta y condicionar AQUI CAMBIAR EL SIGNO HACE QUE SE ORDENE DE FORMA ASC > O DESC <
            // PARA COMPARAR OBJETOS TENEMOS QUE COMPARAR PROPIEDADES EJ {}.EDAD > {}.EDAD
            if( array[j].saldo > array[j + 1].saldo ) {
                // guardo el elemento de la posicion siguiente
                aux = array[j].saldo
                // intercambio
                array[j].saldo = array[j + 1].saldo // cambia el elemento 1 al 0
                array[j + 1].saldo = aux
            }
        }
    }
}

ordenarSaldo(arrayCuentas)
console.log(arrayCuentas)

// b. Desarrollar una función que ordene internamente de forma ascendente según la
// edad del titular de cada cuenta, la misma deberá retornar él array ordenado.

const ordenarEdad = array => {
    // 1 crear una variable aux
    let aux = undefined
    // 2 crear 2 ciclos for
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
           // este for es el que hace la magia
            // hacer la pregunta y condicionar AQUI CAMBIAR EL SIGNO HACE QUE SE ORDENE DE FORMA ASC > O DESC <
            // PARA COMPARAR OBJETOS TENEMOS QUE COMPARAR PROPIEDADES EJ {}.EDAD > {}.EDAD
            if( array[j].edadTitular > array[j + 1].edadTitular ) {
                // guardo el elemento de la posicion siguiente
                aux = array[j].edadTitular
                // intercambio
                array[j].edadTitular = array[j + 1].edadTitular // cambia el elemento 1 al 0
                array[j + 1].edadTitular = aux
            }
        }
    }
}

ordenarEdad(arrayCuentas)
console.log(arrayCuentas)