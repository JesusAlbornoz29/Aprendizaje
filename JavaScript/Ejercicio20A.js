// Ejercicio 1
// En un concurso de fotografía, donde los usuarios publican una fotografía y obtienen likes, se registra la cantidad de likes obtenidos por cada usuario en un array. Ordenar
// los valores para poder indicar cuál fue la mayor cantidad de likes obtenidos, cuánto obtuvo el segundo, cuánto el tercero y cuánto el que menos likes obtuvo —suponer
// que participaron 15 usuarios y suponer para cada uno, una cantidad de likes—.

let concurso = [
    {nombre: 'Maria',
    likes: 4,
        },
    {nombre: 'Juan' ,
        likes: 20,
        },
    {nombre: 'Pedro',
        likes: 3,
        },
    {nombre: 'Batman',
        likes: 99 ,
        },
    {nombre: 'Robin',
        likes: 98 ,
        },
    {nombre: 'Bianca',
        likes: 50,
        },
    {nombre: 'Felipe',
        likes: 23,
        },
    {nombre:'Mica',
        likes: 32,
        },
    {nombre: 'Karen',
        likes: 32,
        },
    {nombre: 'Estefi',
        likes: 32,
        },
    {nombre: 'Adrian',
        likes: 32,
        },
    {nombre: 'Matias',
        likes: 32,
        },
    {nombre: 'Jose',
        likes: 100,
        },
    {nombre: 'Diego',
        likes: 25,
        },
    {nombre: 'Pablo',
        likes: 8,
        }
]

function ordenarLikes(objeto) {
    for (let i = 0; i < objeto.length; i++) {
        for (let j = 0; j < objeto.length - 1; j++) {
            if (objeto[j].likes < objeto[j + 1].likes) {
                let temp = objeto[j];
                objeto[j] = objeto[j + 1];
                objeto[j + 1] = temp;
            }
        }
    }
}

ordenarLikes(concurso)

console.log(`El primer puesto es ${concurso[0].nombre}, el segundo puesto es ${concurso[1].nombre}, el tercer puesto es ${concurso[2].nombre}. El último puesto es ${concurso[concurso.length -1].nombre}.`)

// Ejercicio 2
// El servicio meteorológico, para llevar el control diario de temperatura, utiliza un objeto temperatura donde registra día —valor numérico del día—, mes —valor
// numérico—, temperatura máxima y temperatura mínima, correspondiente a dicho día. Las temperaturas —objeto temperatura— están cargados en un array.
// a) Ordenar por temperatura mínima de menor a mayor.
// b) Ordenar por temperatura máxima de mayor a menor.

let temperatura =[
    {
        dia: 3,
        mes: 5,
        tempMax: 20,
        tempMin: 10,
    },
    {
        dia:25,
        mes:1,
        tempMax: 40,
        tempMin: 32,
    },
    {
        dia: 4,
        mes: 8,
        tempMax: 17,
        tempMin: -2,
    },
    {
        dia: 11,
        mes: 9,
        tempMax: 22,
        tempMin: 18,
    },
    {
        dia: 24,
        mes: 12,
        tempMax: 28,
        tempMin: 16,
    }    
 ]

function ordenarTemp(objeto, temp) {
    let array = Object.values(objeto)
 
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j][temp]< array[j + 1][temp]) {
                let aux = array[j];
                array[j] = array[j + 1];
                array[j + 1] = aux;
            }
        }
    }
    if (temp == 'tempMax'){
        return array
    }
    else{
        return array.reverse()
    }     
}

console.log('Temperatura máximas de mayor a menor: ', ordenarTemp(temperatura, 'tempMax'))
console.log('Temperatura mínimas de menor a mayor: ', ordenarTemp(temperatura, 'tempMin'))