// variables y tipo de datos
// numericos
// let numero = 1;
// let texto = 'Hola soy un texto';
// let booleano = true;
// const constante = 5;

// condicionales
// if else if else

// let numero = 3;

// if (numero == 1) {
//     console.log('El numero es 1');
// } else if (numero == 2){
//     console.log('El numero es 2')
// } else {
//     console.log('El numero no es ni 1 ni 2')
// }

// if ternario

// numero == 1 ? console.log('el numero es 1'): numero == 2 ? console.log('el numero no es 1'): console.log('el numero no es ni 1 ni 2');

// switch Nos permite evaluar muchas posibilidades de un solo valor
// let numero = 1;

// switch (numero) {
//     case 1:
//         console.log('el valor es 1');
//         break;
//     case 2: 
//         console.log('el valor es 2');
//         break;
//     case 3:
//         console.log('el valor es 3');
//         break;
//     case 4:
//         console.log('el valor es 4');
//         break;
//     default:
//         console.log('el valor ingresado no es ni 1, 2, 3 o 4');
// }

// for (declarion ; condicion ; accion) {}

// for (let vuelta = 1; vuelta < 5; vuelta++) {
//     console.log('Dando la vuelta numero '+ vuelta);
// }

// function noParesDeContarImparesHasta(numero){
    
// }

// console.log(noParesDeContarImparesHasta(4));


function numerosSiguientes (numero) {
    
    for (let i = 0; i < 10; i++) {
        let valor = numero + i
        console.log(valor);
    } 
}

numerosSiguientes (1);