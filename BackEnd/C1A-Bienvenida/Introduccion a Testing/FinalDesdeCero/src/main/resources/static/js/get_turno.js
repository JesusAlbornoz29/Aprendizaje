window.addEventListener('load', function() {
  (function() {
    const url = '/turnos/listar';
    const settings = {
      method: 'GET'
    };
    fetch(url, settings)
      .then(response => response.json())
      .then(data => {
        var table = document.getElementById("turnoTable");
        for (turno of data) {
          var turnoRow = table.insertRow();
          let tr_id = 'tr_' + turno.id;
          turnoRow.id = tr_id;

          let deleteButton = '<button id="btn_delete_' + turno.id + '" type="button" onclick="deleteBy(' + turno.id + ')" class="btn btn-danger btn_delete">' +
            '&times;</button>';

          let updateButton = '<button id="btn_id_' + turno.id + '" type="button" onclick="findBy(' + turno.id + ')" class="btn btn-info btn_id">' +
            turno.id +
            '</button>';

          let fechaDeAlta = new Date(turno.fechaYHoraTurno);
          let fechaFormateada = fechaDeAlta.toLocaleDateString();

          turnoRow.innerHTML = '<td>' + updateButton + '</td>' +
            '<td class="td_odontologo_id">' + turno.odontologo.id + '</td>' +
            '<td class="td_paciente_id">' + turno.paciente.id + '</td>' +
            '<td class="td_fechaDeAlta">' + fechaFormateada + '</td>' + // Utilizar la fecha formateada aquí
            '<td>' + deleteButton + '</td>';
        }
      });
  })();

  (function() {
    let pathname = window.location.pathname;
    if (pathname == "/turnoList.html") {
      document.querySelector(".nav .nav-item a:last").classList.add("active");
    }
  });
});
