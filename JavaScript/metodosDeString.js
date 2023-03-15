/////////////////////////PARA JAVA SCRIPT UN STRING ES UN OBJETO ////////////////////////////////////////////

/////////////////////////////////////////.length///////////////////////////////////////////////////////

// .length Esta propriedad retorna la cantidad total de caracteres del String, incluidos los espacios.
// Al ser una propriedad, solo debemos llamarla, sin necesidad de los parentesis.

let miSerie = 'Mad Men';
miSerie.length; // devuelve 7

let arrayNombres = ['Bart', 'Lisa', 'Moe'];
arrayNombres.length; // devuelve 3

arrayNombres[0].length; // Corresponde a 'Bart', devuelve 4


/////////////////////////////////////////.indexOf()///////////////////////////////////////////////////////

// .indexOf() Busca, en el String, el String que recibe como parametro.
// Recibe un elemento a  buscar en el Array
// Retorna el primer indice donde encontro lo que buscamos. Si no lo encuentra retorna -1


let saludo = '!Hola! Estamos programando';

saludo.indexOf('Estamos'); // devuelve 7
saludo.indexOf('vamos') // devuelve -1, no lo encontro
saludo.indexOf('o'); // encuentra la letra 'o' que esta en la posicion 2, devuelve 2 y corta la ejecucion


/////////////////////////////////////////.slice()///////////////////////////////////////////////////////

// Corta el String y devuelve una parte del String donde se aplica
// Recibe 2 numeros como parametros (pueden ser negativos):
//     . El indice desde donde se indica el corte
//     . El indice hasta donde se hace el corte (es opcional)
// Retorna la parte correspondiente al corte 

let frase = 'Breaking Bad Rules!';

frase.slice(9,12); // devuelve 'Bad'
frase.slice(13); // devuelve 'Rules!'
frase.slice(-10); // Devuelve los 10 ultimos caracteres contados desde el final 

/////////////////////////////////////////.trim()///////////////////////////////////////////////////////

// Elimina los espacios que esten al principio y al final de un String.
//     . No revibe parametros
//     . No quita los espacios del medio

let nombreCompleto = '   Homero Simpson   ';
nombreCompleto.trim(); // devuelve 'Homero Simpson'

let nombreCompleto1 = '  Homero  J.  Simpson     ';
nombreCompleto1.trim(); // devuelve 'Homero  J.  Simpson'

/////////////////////////////////////////.replace()///////////////////////////////////////////////////////

// Reemplaza una parte del String por otra
//     . Recibe dos String como parametros:
//         . El String que queremos buscar.
//         . El String que usaremos de reemplazo.
//     . Retorna un nuevo String con el reemplazo

let frase1 = 'Aguante Python!';
frase1.replace('Phyton','JS!'); // devuelve 'Aguante JS!'
frase1.replace('Py','JS') // devuelve 'Aguante JSthon!'


/////////////////////////////////////////.split()///////////////////////////////////////////////////////

// Divide un String en partes
//     Recibe un String que usara como separador de las partes.
//     Devuelve un array con las partes del String

let cancion = 'And bingo was his name, oh!';

cancion.split(' '); // devuelve ['And', 'bingo', 'was', 'his', 'name,' , 'oh!']

cancion.split(', '); // devuelve ['And bingo was his name', 'oh!']

