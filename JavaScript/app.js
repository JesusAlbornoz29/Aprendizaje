
// const prompt = require("prompt-sync")({ sigint: true });

// let nombre = prompt ("Ingrese su nombre: ");

// let apellido = prompt ("Ingrese su apellido: ");


// console.log(`Hola ${nombre}`);


// function dominio (a) {
//     let dom
//     return dom = 'http://' + a;
// }

// console.log (dominio( "www.digitalhouse.com.ar" ));






// Nuestra misión, ahora, es crear una función llamada reemplazoFastFast que va a recibir los siguientes tres parámetros:

// 1. Un texto.

// 2. La palabra que vamos a buscar para reemplazar.

// 3. La palabra que vamos a usar para reemplazar.

// La función deberá devolver el texto con la palabra reemplazada.

// Ejemplo:

// let textoSinGuiones = reemplazoFastFast('Este texto es mala onda','mala','buena');
// console.log(textoSinGuiones) //'Este texto es buena onda'

// function reemplazoFastFast (texto,buscar,remplazar) {
//     return texto.replace(buscar,remplazar);
// }

// let textoSinGuiones = reemplazoFastFast('Este texto es mala onda','mala','buena');

// function menciona (texto,palabra) {
//     let index = texto.indexOf(palabra)
//     return index > -1
// }

// console.log(menciona('Existen muchos lenguajes de programación y JavaScript es uno de ellos','Java'));

let deportista = {
	energia: 100,
    experiencia: 10,
    nombre: "Aimar",
    entrenarHoras: function(cantidadDeHoras)    {
        this.energia -= cantidadDeHoras * 5,
        this.experiencia += cantidadDeHoras *2
    }
};

console.log("==Antes de comenzar entrenamiento==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
console.log("==ENTRENANDO==");
deportista.entrenarHoras(5);
console.log("==FIN ENTRENAMIENTO==");
console.log("Deportista energia: "+this.entrenarHoras());
console.log("Deportista experiencia: "+deportista.experiencia);