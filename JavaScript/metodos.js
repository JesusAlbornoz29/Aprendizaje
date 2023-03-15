
let notas = [10, 4, 5, 8, 9, 2,7];

let notasHastaEl100 = notas.map(function(numero){
    // definimos las modificaciones que queremos
    // aplicamos sobre cada elemento del array
    return numero * 10;
});

// console.log(notasHastaEl100)

let notasAprobadas = notas.filter (function(numero){
    // definimos la condicion que queremos utilizar
    // como filtro para cada elemento del array
    return numero >= 7;
})

// console.log(notasAprobadas);

let sumaNotas = notas.reduce (function(estado, numero){
    // definimos el comportamiento que queremos
    // implementar sobre el acumulador y el elemento
    // podemos indicar el valor inicial que por defecto es 0
    return estado + numero;
});

// console.log(sumaNotas);

notas.forEach(function(valor, indice) {
    // definimos el comportamiento que queremos
    // implementar sobre cada elemento
    console.log("En la posicion " + indice+ " tengo el valor " + valor)
})