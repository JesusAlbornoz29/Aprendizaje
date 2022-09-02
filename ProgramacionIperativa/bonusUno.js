const prompt = require('prompt-sync')({ sigint: true});

let valoracion = prompt ('Cual es su valoracion de la pelcula? ');
// Le gusta que las funciones sean verbos
function responder (valoracion) {
    // si switch tiene un return no necesita el bracke
    switch (valoracion.toLowerCase()) {
        case 'muy mala':
            return 'Calificaste la pelicula como Muy Mala. Lo lamentamos mucho.'
        case 'mala':
            return 'Calificaste la pelicula como Mala. Lo lamentamos mucho.'
        case 'mediocre':
            return 'Gracias'
        case 'buena':
            return 'Calificaste la pelicula como Buena. Nos alegra mucho'
        case 'muy buena':
            return 'Calificaste la pelicula como Muy buena. Nos alegra mucho.'
        default:
            return 'Ingresaste un valor invalido'
    }
}


console.log (responder(valoracion));