// 
const prompt = require ('prompt-sync') ({sigint: true});

// Ejercicio 1): 
// Crea una funcion que reciba un numero por parametros 
// la funcion tendra que verificar que ese numero sea multiplo de 5
// y ademas que sea un numero par, si eso se cumple retornar verdadero
// de lo contrario retornar falso

// let numero = 10

// // Si ES PAR
// console.log ( numero % 2 === 0)

// // Si ES IMPAR
// console.log ( numero % 2 !== 0)

// // Si ES MULTIPLO DE 7
// console.log ( numero % 7 === 0)

// console.log("Ejercicio 1")
// console.log("=========")

// function verificar ( num ) {
//     if(num % 5 === 0 && num % 2 === 0 ){
//         return true 
//     } else {
//         return false
//     }
// }

// console.log(verificar (10))

// Ejercicio 2): 
// Crea una funcion que reciba un string por parametros,
// luego trabajaremos con ese string para que la funcion nos diga si la palabra 
// es corta, mediana o localStoragelas palabras cortas son aquellas que tienen menos de 4 letras
// las palabras medianas son aquellas  que tienen 4 o mas letras pero menos que 8
// y las palabras largas son aquellas que tienen 8 o mas letras


// Si la funcion flecha tiene un solo parametro se le puede secar los parentesis


// console.log("Ejercicio 2")
// console.log("=========")


// const verificadorPalbra =  str  => {

//     if( str.lenght < 4 ){
//         return 'La palabra es corta'
//     } else if ( str.lenght < 8) {
//         return 'La palabra es mediana'
//     } else {
//         return "La palabra es larga"
//     }

// }

// let tipoPalabra = verificadorPalabra ("mi")
// console.log( tipoPalabra)



// Ejercicio 3):

// Vamos a simular un E-commerce
// Para eso, necesitamos crear un arreglo que contendra los productos
// Cada produto tendra ( nombre, descripcion, precio, cantidad)
// Ahora, como duenio de la empresa, queremos saber cuanto dienero nos
// ingresaria si se venden todos los productos que tenemos en stock
// Ademas de eso, nos dimos cuenta que nuestros productos no tienen ID 
// un ID que empieze en 1 y que valla incrementando
// Por ultimo nos piden que si hay algun producto que sea "notebook",
// debemos aumentar el precio en un 30%

// console.log("Ejercicio 3")
// console.log("=========")



let productos = [
    {
        nombre: "celular",
        descripcion: "Es un celular",
        precio: 200,
        cantidad: 10
    },
    {
        nombre: "notebook",
        descripcion: "Es una notebook",
        precio: 300,
        cantidad: 5
    },
    {
        nombre: "zapatilla",
        descripcion: "Es una zapatilla",
        precio: 50,
        cantidad: 7
    }
]


// 3850

const calcularTotal = array => {

    let acumulador = 0 // 2000 , 3500 , 3850

        for (let i = 0; i < array.length; i++) {
           // nombre del arreglo en la posicion i
          acumulador +=  array[i].precio * array[i].cantidad 

          // acumulador = acumulador + (array[i].precio * array[i].cantidad )

        }

        return acumulador

}

let ventaTotal = calcularTotal(productos);
console.log(ventaTotal);



function generadorDeId ( array ) {

    for (let i = 0; i < array.length; i++) {
        array[i].id = i + 1
    }

}

generadorDeId(productos)





let perro = {
    nombre: "jack",
    edad: 2,
}

// MODIFICAR
perro.nombre = "pepito" 

// CREAR 
perro.raza = "callejero"



console.log (perro)