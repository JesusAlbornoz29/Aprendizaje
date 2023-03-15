
// let notas = [3, 5, 10, 9, 7, 8, 8, 8];


// Metodos que trabajan al final de un Array

// PUSH
// Agrega un valor al final de un array
let estudiantes = [
    {
      nombre: 'Alvaro',
      promedio : 9,
      curso : 'Android',
    },
    {
      nombre: 'Daniel',
      promedio : 6,
      curso : 'Full Stack',
    },
    {
      nombre: 'Alexis',
      promedio : 3,
      curso : 'iOS',
    },
  ]

  // keys devuelve una matriz de nombres de propiedad de un objeto dado
console.log (Object.keys(estudiantes));


// values devuelve una matriz de valores de propiedad propios de un objeto determinado.
console.log (Object.values(estudiantes));


// entries devuelve una matriz de pares [clave, valor] de propiedad con clave de cadena propia de un objeto determinado.
console.log (Object.entries(estudiantes));



// notas.push(1);
// notas.push(2);
// notas.push(4);
// // POP
// // Saca el ultimo elemento del array
// // ademas de sacarlo tambien lo retorna se puede almacenar en una nueva variable

// let elUltimo = notas.pop();

// Metodos que trabajan al comienzo de un Arrays

// unshift ();
// Inserta uno o mas datos al principio del Arrays

// notas.unshift(1);

// // shift ();
// // Sacara del arrays el elemento del indice "0" = que POP

// notas.shift ();
// notas.shift();

// console.log(notas);


// let notas = [3, 5, 8, 10, 9, 7, 8, 8];

// let posicionDelOcho = notas.indexOf(2);

// if (posicionDelOcho != -1) {
//     console.log('Lo encontre');
// } else {
//     console.log('No lo encontre');
// }


// indexOf 
// Recibe como parametro una cadena de texto

// let posicionDelOcho = notas.indexOf(8);

//lastIndexOf();
// comienza a bucar desde el final
// let posicionDelOcho = notas.lastIndexOf(8);

//join();
// Permite unifac todos los elementos presentes de un string separados por una coma

// let resultadoJuntado = notas.join('**');

// console.log(resultadoJuntado);

// Resumen
// POP para extraer
// Push para insertar elementos al final
// Shift para extraer
// Unshift para insertar elementos al principio de un Array
// indexOf / lastindexOf para preguntar el indice de una ocurrencia
// Join para unificar todos los elementos presentes en un array 