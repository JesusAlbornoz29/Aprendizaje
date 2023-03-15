const prompt = require('prompt-sync')({ sifint: true});

let numbers = [1, 99, 4, 5];

function ordenarArray(array) {
  for (let j = 0; j < array.length - 1; j++) {
    let aux = 0;
      for (let i = 0; i < array.length - 1; i++) {
        if (array[i]> array[i + 1]) {
          aux = array[i + 1];
          array[i + 1] = array[i];
          array[i] = aux;
          }; 
      }; 
  }
  return array;
  }

console.log(ordenarArray(numbers));

