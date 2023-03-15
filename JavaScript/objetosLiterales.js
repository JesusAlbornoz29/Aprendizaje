/////////////////////////////////////////////////OBJETOS LITERALES //////////////////////////////////////////////////
// Podemos decir que los objetos literales son la prepresentacion en codigo de un elemento de la vida real.
// Estructura basica un Objeto es na estructura de datos qe puede contener propiedades y metodos.

// let objeto = {
//     propiedad : valor,
// };

let curso = {
    cantidadDeAlumnos : 32,
    doncentes : ["Nacho", "Javier"],
    horario : "de 19 a 21 hs.",
    notificaciones : function(){
        return "El horario de la cursada es " +  this.horario;
    }
}

console.log (curso);

// dotNotation nombre de objeto.Propriedad

console.log("La cantidad de alumnos de este curso es de: " + curso.cantidadDeAlumnos);

///////////////////////////////////////////METODOS DE OBJETOS LITERALES ////////////////////////////////////////////////

// hacer referencia al nombre del objeto y con la dotNotation llamar al metodo que queres:

// this

console.log(curso.notificaciones());

