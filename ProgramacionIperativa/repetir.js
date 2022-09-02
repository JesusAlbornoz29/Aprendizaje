const prompt = require ('prompt-sync') ({sigint: true});


// let text = prompt ('Ingrese un text: ');


// function repetir (text) {

//         for (let index = 1; index <= 50; index = index * 5) {
//             console.log(index + ' - ' + text);
//         }
// }


function repetir () {

    for (let index = 1; index <= 10; index++) {
        console.log(index);
    }
    for (let index = 10; index > 0; index--) {
        console.log(index);
    }

}



repetir();