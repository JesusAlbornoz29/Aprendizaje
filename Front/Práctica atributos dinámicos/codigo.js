// Elementos y atributos dinamicos

// setAttribute ("atribuo", "valor") 
// removeAttribute("atributo")
// hasAttribute("atributo")
// getAttribute("atributo")

//1- Agregar a la tarjeta, el atributo "class" con el valor "card"

const divTarjeta = document.querySelector("#tarjeta");
divTarjeta.setAttribute("class", "card");


//2- Agregar a la imagen, el atributo "src" con el valor "https://www.youtube.com/img/desktop/yt_1200.png"

const imagen = document.querySelector("#logo");
imagen.setAttribute("src","https://www.youtube.com/img/desktop/yt_1200.png")
//3- Quitarle al titulo la clase que le está dando un formato feo
const titulo = document.querySelector(".titulo-feo");

titulo.removeAttribute("class");

// O borramos el estilo del css 
// titulo.classList.toggle("titulo-feo");

//4- Chequear si el link a youtube posee o no el atributo href

const linkYoutube = document.querySelector("#link_youtube");
console.log(linkYoutube.hasAttribute('href'));

//5- Obtener el href del link a wikipedia y mostrarlo por consola

console.log(linkYoutube.getAttribute('href'));

const linkWikipedia = document.querySelector('#link_wikipedia');

console.log(linkWikipedia.getAttribute('href'));