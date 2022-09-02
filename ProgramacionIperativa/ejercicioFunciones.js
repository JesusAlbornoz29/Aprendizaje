function test1 (x,y){
    return y - x
}

console.log(test1(10,40));

// No importa el orden en que pasemos los Argumentos, sino el de los Parametros en el return

function test2 (x,y){
    return x * 2
    console.log(x)
    return x / 2
}

console.log(test2(10))

// Cuando JS encuentra la palabra clave return, devuelve el valor de la expresion que tiene a su derecha y termina la ejecucion del bloque

/////////////////////////////////////////EJERCICIOS///////////////////////////////////////////////////////////////
// 1. Crear una función que convierta pulgadas en centímetros. Recibe por parámetro pulgadas y retorna su equivalente en centímetros.

function pulgadasACentimetros (pulgadas){
    let cm = 2.54
    return pulgadas * cm
}


console.log (pulgadasACentimetros(10))

// 2. Crear una función que recibe un string y lo convierte en una URL. Ej: “pepito” es devuelto como “http://www.pepito.com”

function stringAUrl (texto){
    return `http://www.${texto}.com`
}

console.log(stringAUrl('Jesus'))

// 3. Crear una función que recibe un string y devuelve la misma frase pero con admiración.

function admiracion (palabra) {
    return console.log(`!${palabra}!`)
} 

admiracion('Guacho');

// 4. Crear una función que calcule la edad de los perros, considerando que 1 año para nosotros son 7 de ellos.

function edadPerros (edad) {
    let edadPerro = edad * 7
    return edadPerro
}

console.log(edadPerros(5));

// 5. Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu sueldo mensual como parámetro. PD: considerá que tu mes de trabajo tiene 40 horas.

function horasTrabajadas (sueldo) {
let sueldoHora = sueldo / 40
return console.log(sueldoHora)
}

horasTrabajadas(20000)

// 6. Crear la función calculadorIMC() que reciba la altura en metros y el peso en kilogramos y calcule el IMC de una persona. Luego, ejecutar la función probando diferentes valores.

function calcularIMC (a,p) {
let aAlCuadrado = a ** 2
let IMC = p / aAlCuadrado
return IMC + " "
}

console.log (calcularIMC(1.54, 55));

// 7. Crear una función que recibe un string en minúscula, lo convierta a mayúsculas y lo retorne Investigá qué hace el método de strings .toUpperCase()

function textoAMayuscula (fragmento) {
    return fragmento.toUpperCase()
}

console.log(textoAMayuscula('jose'));

// 8. Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese parámetro. Pista: te servirá revisar qué hace la palabra reservada typeof.

function queEs (dato) {
    return console.log(typeof(true))
}

queEs(2);

// 9. Crear una función que le pasamos el radio de un círculo y nos devuelve la circunferencia. Pista: Investigá si el objeto Math tiene entre sus propiedades el número Pi.

function circunferencia (radio) {
let diametro = radio * 2
let circu = diametro * Math.PI
return circu
}

console.log(circunferencia(5));