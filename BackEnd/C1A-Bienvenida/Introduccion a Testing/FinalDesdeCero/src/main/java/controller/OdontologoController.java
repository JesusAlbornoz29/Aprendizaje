package controller;


import entity.Odontologo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import repository.Impl.OdontologoDAOH2;
import service.OdontologoService;

import java.sql.SQLException;
import java.util.List;

@RestController
@RequestMapping("/odontologo")
public class OdontologoController {

    // La conexion al la base de datos (?)


    // Para la inyeccion de dependencia por constructor
    private OdontologoService odontologoService;

    //CREAR
    //@PostMapping (?)
    @PostMapping("/registrarOdontologo")
    public Odontologo agregar (@RequestBody Odontologo odontologo){
        return odontologo = new Odontologo(odontologo.getApellido(),odontologo.getNombre(),odontologo.getMatricula());
    }

    //BUSCAR
    //@GetMapping se utiliza para hacer una peticion
    @GetMapping("/{id}")
    public Odontologo buscarPorId (@PathVariable Integer id){
        return odontologoService.buscar(id);
    }

    //ELIMINAR
    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminar(@PathVariable Integer id) throws SQLException {
        if(odontologoService.buscar(id) != null) {
            odontologoService.eliminar(id);
            return ResponseEntity.ok("Odontologo eliminado correctamente");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No se encontro el Odontologo");
        }
    }

    //LISTARTODOS
    @GetMapping
    public List<Odontologo> listarTodos(){
        return odontologoService.listarTodos();
    }

    //MODIFICAR / ACTUALIZAR
    @PutMapping()
    public ResponseEntity<Odontologo> modificar (@RequestBody Odontologo odontologo) throws SQLException {
        ResponseEntity<Odontologo> response = null;

        if (Odontologo.getId() != null && odontologoService.buscar(odontologo.getId()) != null)
            response = ResponseEntity.ok(odontologoService.actualizar(odontologo));
        else
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();

        return response;
    }

    // Esta anotacion inyecta una dependencia
    @Autowired
    // Constructor
    public OdontologoController(OdontologoService odontologoService){
        this.odontologoService = odontologoService;
    }

}
