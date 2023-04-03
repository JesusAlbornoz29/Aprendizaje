// json.parse() => JSON A JAVASCRIPT
// json.stringify() => JAVASCROPT A JSON


const jsonData = `
{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}
`;

//Recorrer el JSON e insertar en el listado del html los nombres de los miembros
function recorrerMiembros() {
    //escribe la lógica
    // Primero parseamos el codigo Json a JavaScript
  const jsonDataParsed = JSON.parse(jsonData);

  // luego capturamos la lista del html donde agregariamos el contenido
  const listaMiembros = document.getElementById("miembros");

  // recorremos los miembros de la variable json parseada 
  jsonDataParsed.members.forEach((miembro) => {
    // vamos a tomar el nombre de los miembros
    const nombreMiembro = miembro.name;
    const edad = miembro.age;
    const poderes = miembro.powers;

    // Creamos un elemento lista
    const nuevoElemento = document.createElement("li");
    const elementoEdad = document.createElement("li")
    const elementoPower = document.createElement("li");
    // le asignamos el valor de los nombres quitados el json parseado
    nuevoElemento.innerText = nombreMiembro;
    elementoEdad.innerText = edad;
    elementoPower.innerText = poderes;
    // los creamos en el html
    listaMiembros.appendChild(nuevoElemento);
    nuevoElemento.appendChild(elementoEdad);
    elementoEdad.appendChild(elementoPower);

    })
};
// ejecutamos la funcion
recorrerMiembros();