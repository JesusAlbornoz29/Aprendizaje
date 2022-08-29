const prompt = require ('prompt-sync')({ sigint: true});


const llave = true;

function hayLuz() {
    if (llave) {
        return true;
    }
    return false;
}



// 0, '', null, undefined, NaN = false en los booleanos
// 1, number, string = true
//[comparacion] 1 = true
//[comparacion] 44, string = false
//[comparacion stricta] 1 = false 



//and

//or

// if & or compuestos

//switch

//switch true


console.log (hayLuz());