
const marcarFavorito = () => {
// seleccion el boton de likes
const heart = document.querySelectorAll(".fa-heart ");
// recorrerlos

heart.forEach(boton => {
    boton.addEventListener('click', function (){
        console.log(boton.id);


    })
})

// al hacer click

// cambiar estado

} 


marcarFavorito();