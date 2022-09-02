

// Ejercicio 3 

function refuerzo (base, pan, queso, tomate, lechuga, cebolla, mayonesa, mostaza){
    let precioCompra = 0;
    switch (base) {
        case "pollo": precioCompra = 150
        break;
        case "carne": precioCompra = 200
        break;
        case "vegetariano": precioCompra = 100
        break;
    }

    switch (pan) {
        case "blanco": precioCompra += 50
        break;
        case "negro": precioCompra += 60
        break;
        case "s/gluten": precioCompra += 75
        break;
    }
    if (queso == true) {
        precioCompra += 20
    }
    if (tomate == true) {
        precioCompra += 15
    }
    if (lechuga == true) {
        precioCompra += 10
    }
    if (cebolla == true) {
        precioCompra += 15
    }
    if (mayonesa == true) {
        precioCompra += 5
    }
    if (mostaza == true) {
        precioCompra += 5
    }
    console.log('El total es: ' + precioCompra)

}

refuerzo ('pollo', 'blanco', true,true,true,true,true,true);