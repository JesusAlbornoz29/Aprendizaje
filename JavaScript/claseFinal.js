

const fotos = [
    {
        username: 'Pehuen', likes: 8 
    },
    {
        username: 'Pehuen', likes: 4 
    },
    {
        username: 'Pehuen', likes: 88 
    },
    {
        username: 'Pehuen', likes: 12 
    },
    {
        username: 'Pehuen', likes: 8 
    },
    {
        username: 'Pehuen', likes: 2
    },
    {
        username: 'Pehuen', likes: 8 
    }
]



function ordenar (array) {
    
    // 1 crear una variable aux
    let aux = undefined

    // 2 crear 2 ciclos for
    for (let i = 0; i < array.length; i++) {
        
        for (let j = 0; j < array.length - 1; j++) {
           // este for es el que hace la magia

            // hacer la pregunta y condicionar AQUI CAMBIAR EL SIGNO HACE QUE SE ORDENE DE FORMA ASC > O DESC <
            // PARA COMPARAR OBJETOS TENEMOS QUE COMPARAR PROPIEDADES EJ {}.EDAD > {}.EDAD
            if( array[j].likes > array[j + 1].likes ) {
                // guardo el elemento de la posicion siguiente
                aux = array[j]
                // intercambio
                array[j] = array[j + 1] // cambia el elemento 1 al 0
                array[j + 1] = aux
            }

        }
        
    }
}

ordenar(fotos)

console.log(fotos)