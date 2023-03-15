const prompt = require("prompt-sync")({ sigint: true });

// Problema 1:
// Subir a un bondi

const busCorrecto = true;

const boleto = 44;

let dineroPagar = prompt ("Ingrese el monto a Pagar ");

dineroPagar = Number(dineroPagar - boleto);

console.log(dineroPagar);


// Problema 2 :
// Retiro de dinero en un cajero

const tarjeta = true;

const clave = true;

let opcionOperacion = prompt (" Que operacion desea realizar: 1- Extraccion  2- Deposito ");

let extraccion = prompt ("Ingrese el monto a extraer: ");

const dinero = 20000;

extraccion = Number(extraccion);

console.log(' Saldo disponible ' + (dinero - extraccion) );


// Ejercicio 3

let remeras = 'pantalon deportivo, vaquero';

let pantalones = 'manga corta, manga larga';

console.log('Un Horror!');

console.log ( `Remeras: ${remeras}`)
console.log( `Pantalones: ${pantalones}` ) ;


console.log('Arreglado');

console.log ( `Remeras: ${pantalones}`)
console.log( `Pantalones: ${remeras}` ) ;