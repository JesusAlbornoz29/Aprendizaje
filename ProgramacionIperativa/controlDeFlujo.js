
// let edad = 21 // (el numero es a modo de ej, podes cambiarlo o crear otros para tener varias pruebas)


// if (edad < 0) {
//     console.log('Error, edad invalida. Por favor ingrese un numero valido');
// } else if (edad <= 18 && edad % 2) {
//     console.log ('No puede pasar al bar.')
//         if (edad % 2) {
//         console.log ('Sabias que tu edad es impar?');
//         }
// } else if (edad > 18 && edad < 21 ){
//     console.log ('Felicidades por haber llegado a la mayoria de edad!!! Puede pasar al bar, pero no puede tomar alcohol')
//         if (edad % 2) {
//         console.log ('Sabias que tu edad es impar?');
//         }
// } else {
//     console.log ('Puede pasar al bar y tomar alcohol');
//     if (edad % 2) {
//         console.log ('Sabias que tu edad es impar?');
//         }
// }

function totalAPagar (vehiculo, litrosConsumidos) {
    let costo = 0
    switch (vehiculo) {
        case 'coche':
            if (litrosConsumidos > 0 && litrosConsumidos <= 25) {
                litro = 86;
                costo = litrosConsumidos * litro + 50
                return `Costo por litro $ ${litro}. Litros consumidos ${litrosConsumidos} total a pagar $ ` + costo
            } else if (litrosConsumidos > 25) {
                litro = 86;
                costo = litrosConsumidos * litro + 25
                return `Costo por litro $ ${litro}. Litros consumidos ${litrosConsumidos} total a pagar $ ` + costo
            }
        break;
        case 'moto':
            if (litrosConsumidos > 0 && litrosConsumidos <= 25) {
                litro = 70;
                costo = litrosConsumidos * litro + 50
                return `Costo por litro $ ${litro}. Litros consumidos ${litrosConsumidos} total a pagar $ ` + costo
            } else if (litrosConsumidos > 25) {
                litro = 70;
                costo = litrosConsumidos * litro + 25
                return `Costo por litro $ ${litro}. Litros consumidos ${litrosConsumidos} total a pagar $ ` + costo
            }
        break;
        case 'autobus':
            if (litrosConsumidos > 0 && litrosConsumidos <= 25) {
                litro = 55;
                costo = litrosConsumidos * litro + 50
                return `Costo por litro $ ${litro}. Litros consumidos ${litrosConsumidos} total a pagar $ ` + costo
            } else if (litrosConsumidos > 25) {
                litro = 55;
                costo = litrosConsumidos * litro + 25
                return `Costo por litro $ ${litro}. Litros consumidos ${litrosConsumidos} total a pagar $ ` + costo
            }
        break;
        default:
            console.log('Ingrese un valor igual a `auto`,`moto`,`autobus`.')
    }
}
console.log(totalAPagar('moto', 30));


