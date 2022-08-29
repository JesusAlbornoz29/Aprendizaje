
// Imprime los numeros entre el 5 y el 20, saltando de tres en tres
// function tresEnTres () {

//     for (let index = 5; index <= 20; index = index +3) {
//         console.log(index)
//     }
    
// // }
// // tresEnTres();

// const prompt = require ('prompt-sync') ({ sigint : true});

// // const string = new String ('Pehuen');

// const MAYOR_DE_EDAD = 18;

// const personga = {
//     nombre: 'Pehuen',
//     apellido: 'Romani',
//     edad: 32,
//     saludar: function () {
//         return 'Hola soy ' + this.nombre + ' ' + this.apellido;
//     }
//     esMayorDeEdad: function () {
//         return this.edad > MAYOR_DE_EDAD
//     }
// };

// console.log (persona.esMayorDeEdad());
// console.log (string.concat (' Romani'));

// function noParesDeContarImparesHasta(numero){
//     // Escribe aqui tu código
//     let conteo = 0;
//     for (let i = 0; i <= numero; i++) {
//     if ((i % 2) !== 0) {
//         conteo = conteo + 1;
//         }
//     }
//     return conteo;
// }
// console.log(noParesDeContarImparesHasta(3));

// function tablaDeMultiplicar(numero) {
//     //Escribí tu código aquí   
//     for (let i = 0; i <= 10; i++) {
//         let resultado = numero * i;
//         console.log(numero + ' * ' + i + ' = ' + resultado);
//     }
// }
// console.log(tablaDeMultiplicar(3));

// let numero = 1



    function tablaDeMultiplicar(numero) {
        //Escribí tu código aquí   
        let i = 0;
        while (i < 11 ) {
        let resultado = numero * i;
        console.log(numero + ' * ' + i + ' = ' + resultado);
        i ++;
    }
   }

   console.log (tablaDeMultiplicar(3));