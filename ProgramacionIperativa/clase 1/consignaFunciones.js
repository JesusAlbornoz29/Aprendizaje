const prompt = require("prompt-sync")({ sigint: true });

function test2 (x,y) {
    return x * 2
    console.log (x)
    return x / 2
}

test2(10);

function pulgadasACentimetros () {
    const pulgadas=prompt('ingrese las pulgadas: ') ;
    return pulgadas * 2.54;
}

// console.log(pulgadasACentimetros());

function stringAUrl () {
    const texto=prompt('ingrese el texto: ')
    return 'https://www.' + texto + '.com';
}

// console.log(stringAUrl());

function stringConAdmiracion () {
    const texto=prompt('ingrese el texto: ')
    return  texto + '!!!';
}

// console.log(stringConAdmiracion());

function calculoEdad () {
    const edad=prompt('ingrese los anios: ') ;
    return 'La edad de su perro es: ' + edad * 7;
}

// console.log(calculoEdad());

function valorHora () {
    const sueldoMensual=prompt('ingrese su sueldo mensual: ');
    return 'El valor de tu hora es: ' + sueldoMensual / 40 ;
}

// console.log(valorHora());

function calculadorIMC() {
    const altura=prompt ('ingrese su altura en Mts: ');
    const kilogramos=prompt ('ingrese su peso en Kg: ');
    return kilogramos / (altura * altura);
}

// console.log(calculadorIMC());

function mayuscula () {
    const txt=prompt ('ingrese el texto en minuscula: ');
    return txt.toUpperCase();
}

// console.log(mayuscula());

function tipoDato (x) {
    return typeof(x);
}

// console.log(tipoDato(true));

function calculo () {
    const radio=prompt('ingrese el radio del circulo: ');
    return Math.PI * (radio * 2);
}

console.log(calculo ());