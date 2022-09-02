// // ejemplo


// let auto = {
//     patente : 'AC 134 DD'
// };

// console.log(auto.patente)
// // Metodos de un objeto cuando declaramos una funcion dentro de un objeto literal decimos que es un metodo
// // let tenista = {
// //     nombre : 'Roger',
// //     edad : 38,
// //     activo: true,
// //     saludar: function () {
// //         return 'Hola! Me llamo Roger';
// //     }
// // };


// // Ejecucion de un metodo de un objeto

// console.log(tenista.saludar());

// // Trabajando dentro del objeto this.propiedad

// let tenista = {
//     nombre : 'Roger',
//     edad : 38,
//     activo: true,
//     saludar: function () {
//         return 'Hola! Me llamo ' + this.nombre;
//     }
// };


//la lista de clientes.
let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    },
  ];
  // podes continuar tu codigo a partir de aca!

  // 2) Nos solicitan tambien crear un objeto literal llamado 'banco'
  // , el cual tendra una propiedad llamada cliente que esta compuesta de la lista de objetos obtenidos en el punto anterior

  const banco = {
    clientes: [
        {
            nroCuenta: 5486273622,
            tipoDeCuenta: "Cuenta Corriente",
            saldoEnPesos: 27771,
            titularCuenta: "Abigael Natte",
          },
          {
            nroCuenta: 1183971869,
            tipoDeCuenta: "Caja de Ahorro",
            saldoEnPesos: 8675,
            titularCuenta: "Ramon Connell",
          },
          {
            nroCuenta: 9582019689,
            tipoDeCuenta: "Caja de Ahorro",
            saldoEnPesos: 27363,
            titularCuenta: "Jarret Lafuente",
          },
          {
            nroCuenta: 1761924656,
            tipoDeCuenta: "Cuenta Corriente",
            saldoEnPesos: 32415,
            titularCuenta: "Ansel Ardley",
          },
          {
            nroCuenta: 7401971607,
            tipoDeCuenta: "Cuenta Unica",
            saldoEnPesos: 18789,
            titularCuenta: "Jacki Shurmer",
          },
    ],
        // 3 Al objeto 'Banco', crearle un metodo llamado consultarCliente, el cual reciba nombre (titula) por parametro
     consultarCliente : function (titular) {
        let clienteEncontrado;
          // debera buscarlo en la lista de cuentas 
        this.clientes.forEach(cliente => {
            if (cliente.titularCuenta == titular) {
                 // y retornar el objeto cliente que corresponda con ese nombre ingresado 
                clienteEncontrado = cliente
            }
        })
        return clienteEncontrado
        },

        // 4 Crear otro metodo llamado 'deposito' que reciba dos parametros: el titular de cuenta y el monto a extraer

        deposito : function (titular, cantidadDinero) {
            // El metodo debe obtener la cuenta correspondiente 
            let cliente = this.consultarCliente(titular)
            // y luego sumar la cantidad de dinero a depositar a SALDOENPESOS.
            cliente.saldoEnPesos = cliente.saldoEnPesos + cantidadDinero
            // Luego debera dar un aviso por la consola con el mensaje "Deposito realizado, su nuevo saldo es:XXXX"
            return "Deposito realizado, su nuevo saldo es: "+ cliente.saldoEnPesos
        },

         // 5 Crear un ultimo metodo llamado EXTRACCION que reciba tambien dos parametros: titularde cuenta y el monto a extraer.
         extraccion : function (titular, cantidadDinero) {
            // El metodo debe obtener la cuenta correspondiente 
            let cliente = this.consultarCliente(titular)
            // y restar el monto al saldo actual.
            cliente.saldoEnPesos = cliente.saldoEnPesos - cantidadDinero 
            // En caso de que el resultado sea menos a 0, debera imprimir "Fondos insuficientes".
            if (cliente.saldoEnPesos <= 0) {
                return 'Fondos insuficientes'
            } else if (cliente.saldoEnPesos > 0) {
                  // De lo contrario debera imprimir 'Extraccion realizada correctamente, su nuevo saldo es: XXXX'
               return 'Extraccion realizada correctamente, su nuevo saldo es: ' + cliente.saldoEnPesos
            }

         }

}

  console.log(banco.consultarCliente('Jacki Shurmer'))
          
  // AYUDA: let clienteEncontrado = banco.consultarCliente('Ramon Connel)

  // Deposito

  console.log(banco.deposito('Jacki Shurmer', 5000))


// Extracion 

console.log(banco.extraccion('Jacki Shurmer', 2000))
