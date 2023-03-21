

/* -------------------------------------------------------------------------- */
/*                                  FUNCION 1                                 */
/* -------------------------------------------------------------------------- */
function iniciarJuego() {

    // saludamos al usuario
    alert("Bienvenido al piedra papel o tijera de Frontend II.");
    // guardamos en una variable en nombre ingresado
    let nombre = prompt("Ingrese su nombre por favor:");

    // mostramos los datos por consola
    console.log("----------------------------");
    console.log("El jugador es:")
    console.log(nombre);
    console.log("----------------------------");

    // validar  Ejecutamos el bucle do while almenos una vez hasta que cumpla la condicion
    let isValid = true;
    // Tambien podesmos hacerlo con !isNaN(nombre)
    // El bucle do while ejecuta codigo almenos una vez hasta que la condicion sea falsa
    do {
        if (!isNaN(nombre) || nombre.length < 3) {
            nombre = prompt("Ingrese un nombre válido por favor:");
        } else {
            isValid = false;
        }
    } while (isValid);

    alert("Gracias por jugar " + nombre.toUpperCase() + ". ¡Mucha suerte!");

    return nombre.toUpperCase();



}

// creamos una variable a nivel global para guardar el nombre del jugador que nos devuelve la función
const nombreJugador = iniciarJuego();

/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1- Modificar la funcion de iniciarJuego(), validar si ingresa un dato válido como nombre.
// 2- Si no ingresa un texto, o tiene menos de 3 caracteres debemos volverle a pedir que lo ingrese.
// 3- Finalmente el nombre devuelto debe estar todo en mayúsculas.


// progar pasar a ternario 
// var bandera = true; 
// do {
//     (!isNaN(nombre) || nombre.length < 3) ? nombre = prompt("Ingrese un nombre valido por favor: ") : isValid = false;
//     alert("Gracias por jugar " + nombre.toUpperCase() + ". !Mucha Suerte!");
//     return nombre.toUpperCase();
//     } while(bandera)

// RESUMEN DE CREAR FUNCION CON ARROW Y IF CON TERNARIO : 
// let iniciarJuego = () => {

//     alert("Welcome to the stone, paper or scissors ");

//     let nombre = prompt("Enter your name plase ")

//     console.log("El nombre del jugador es: " + nombre);

//     let bandera = true; 

//     do {
//         (!isNan(nombre) || nombre.length < 3) ? nombre = prompt("Ingrese un nombre correcto") : bandera = false; 
//     } while(bandera)

//     alert("Gracais por jugar "+ nombre.toUpperCase() + ". !Mucha suerte!");

//     return nombre.toUpperCase();
// };


