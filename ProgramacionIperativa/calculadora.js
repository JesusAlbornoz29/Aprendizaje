const prompt = require("prompt-sync")({ sigint: true });

function cuadradoArea (a,b) {
    return a + b;
}

function circuloArea (c,d) {
    return c - d ;
}

function circuloPerimetro (e,f) {
    return e * f;
}

function dividir (g,h) {
    if ( h == 0 ){
        console.log ('no puede dividirse entre 0')
    }
    return g / h ;

}

console.log("==================================Testeo de Operaciones / Calculadora ========================");


console.log ('Cuadrado area, ingrese primero 1 numero luego otro mas: ')
console.log ('El resultado es: ' + cuadradoArea(parseInt(prompt()), parseInt(prompt())));

console.log ('Circulo area, ingrese primero 1 numero luego otro mas: ')
console.log ('El resultado es: ' + circuloArea(parseInt(prompt()), parseInt(prompt())));

console.log ('Circulo perimetro, ingrese primero 1 numero luego otro mas: ')
console.log ('El resultado es: ' + circuloPerimetro(parseInt(prompt()), parseInt(prompt())));

console.log ('Dividir, ingrese primero el dividendo luego el divisor: ')
console.log ('El cociente es: ' + dividir(parseInt(prompt()), parseInt(prompt())));





