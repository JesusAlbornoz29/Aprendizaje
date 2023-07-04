function deleteBy(id)
{

            // Con fetch invocamos a la API de odontologos con el metodo DELETE
            // pasandole el id de la URL
            const url = '/odontologos/' + id;
            const settings = {
                method: 'DELETE'
            }
            fetch(url, settings)
            .then(response => response.json())

            //borrar la fila del estudiante eliminado
            let row_id = "#tr_" + id;
            document.querySelector(row_id).remove();
}