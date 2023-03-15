// Funcion expresada

let sumar = function (numeroA, numeroB) {
    return numeroA + numeroB ;
}

console.log (sumar(7 , 9));


// Funcion declarada

function restar (numeroC, numeroD) {
    return numeroC - numeroD;
}

console.log(restar(10,3));


// Ejemplo de SCOPE

let mensaje = 'Hola';

function saludar (){
    let mensaje = 'Chau';
    return mensaje;
}

console.log(mensaje);
console.log(saludar());
