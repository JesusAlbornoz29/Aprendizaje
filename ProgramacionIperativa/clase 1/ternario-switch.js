// if ternario

let fruta = 'Manzana';

let resultado = fruta == 'Manzana'? 'Buenisimo me gustan las manzanas':'Ufa, queria manzana';

console.log (resultado);


// switch

let semaforo = 'Verde';

switch (semaforo){
    case 'Verde':
        console.log ('Puede cruzar');
        break;
    case 'Amarillo':
        console.log ('Precaucion');
        break;
    case 'Rojo':
        console.log('No cruces!!!');
        break;
    default:
        console.log('No funciona el semaforo');
        break;
}