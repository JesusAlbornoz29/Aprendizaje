window.addEventListener('load', function() {
  (function() {
    const url = '/pacientes/listar';
    const settings = {
      method: 'GET'
    };
    fetch(url, settings)
      .then(response => response.json())
      .then(data => {
        var table = document.getElementById("pacienteTable");
        for (paciente of data) {
          var pacienteRow = table.insertRow();
          let tr_id = 'tr_' + paciente.id;
          pacienteRow.id = tr_id;

          let deleteButton = '<button id="btn_delete_' + paciente.id + '" type="button" onclick="deleteBy(' + paciente.id + ')" class="btn btn-danger btn_delete">' +
            '&times;</button>';

          let updateButton = '<button id="btn_id_' + paciente.id + '" type="button" onclick="findBy(' + paciente.id + ')" class="btn btn-info btn_id">' +
            paciente.id +
            '</button>';

          let fechaDeAlta = new Date();
          let fechaFormateada = fechaDeAlta.toLocaleDateString();

          pacienteRow.innerHTML = '<td>' + updateButton + '</td>' +
            '<td class="td_nombre">' + paciente.nombre.toUpperCase() + '</td>' +
            '<td class="td_apellido">' + paciente.apellido.toUpperCase() + '</td>' +
            '<td class="td_dni">' + paciente.dni.toUpperCase() + '</td>' +
            '<td class="td_fechaDeAlta">' + fechaFormateada + '</td>' + // Utilizar la fecha formateada aquí
            '<td class="td_domicilio">' + paciente.domicilio +
            '<td>' + deleteButton + '</td>';
        }
      });
  })();

  (function() {
    let pathname = window.location.pathname;
    if (pathname == "/pacienteList.html") {
      document.querySelector(".nav .nav-item a:last").classList.add("active");
    }
  });
});
