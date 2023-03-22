

// 🚩 Antes de empezar, vinculemos el HTML solo con el script de clase 5.
// const template = `<h1>Hola Mundo! </h1>`;
// Agrega la propiedad id ='body' a tu elemento body en HTML
// const body = document.getElementById('body');
// body.innerText = template;
// body.innerHTML = template;


// Vamos a interactuar con el DOM para agregarle mas estilos a nuestro sitio.
// 👇 Primero capturemos todos los elementos que vamos a modificar.

const sitio = document.querySelector('body');
const btnTema = document.querySelector('.tema button')
const menuItems =  document.querySelectorAll('nav li');
const contenedorNoticias = document.querySelector('main');
const articulos = document.querySelectorAll('article');
const titulos = document.querySelectorAll('article h2');

/* ---------------------------- Editado los ITEMS --------------------------- */
// 👇acá podemos ver todas las propiedades CSS que podemos modificar con JS
console.log(menuItems[0].style)
// agregamos manualmente nuevos estilos en el menú
menuItems.forEach( item => {
    item.style.textTransform = "uppercase";
    item.style.color = "aqua";
    item.style.backgroundColor = "rgba(255,255,255,0.2";
    item.style.borderRadius = "50vh";
})

console.log(contenedorNoticias)


/* ----------------------------- Editando clases ---------------------------- */

// vamos probando uno a uno los métodos
// console.log(sitio.classList)

// console.log(sitio.classList.contains('dark'))
// console.log(sitio.classList)

// console.log(sitio.classList.add('dark'))
// console.log(sitio.classList)

// console.log(sitio.classList.add('remove'))
// console.log(sitio.classList)

// console.log(sitio.classList.toggle('remove'))
// console.log(sitio.classList)



/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// Primero debemos comentar o eliminar las líneas que modifican las clases de "sitio"
// 1- Desarrollar la función a continuacion para que el usuario elija el tema del sitio.
// 2- Debemos preguntarle al usuario mediante un confirm si desea usar el modo oscuro.
// 3- Si el usuario confirma debemos aplicar la clase "dark" al "sitio", si cancela debe quedar en modo claro.
// 4- A su vez, si está en modo onsecuritypolicyviolation, el texto del boton debe decir "Cambiar a modo claro 🌞". De lo contrario, si está en modo claro debeb decir "Cambiar a modo oscuro 🌛"


function elegirTema() {
    // creamos una variable que va a ser cambio de tema que recibe un confirm
        let cambioDeTema = confirm("Quiere cambiar de tema?");
    // si el confirm es verdadero
            if (cambioDeTema) {
    // agrega de css el stilo dark
            sitio.classList.add('dark')
            // cambia el texto del boton
            btnTema.innerText("Cambiar a modo claro 🌞");
            // si no 
            } else {
            // cambia el texto del boton
            btnTema.innerText("Cambiar a modo oscuro 🌛");  
            }
}

elegirTema();