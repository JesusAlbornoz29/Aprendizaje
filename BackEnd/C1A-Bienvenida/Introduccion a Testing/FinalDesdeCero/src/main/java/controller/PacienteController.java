package controller;

import entity.Paciente;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import repository.Impl.PacienteDAOH2;
import service.PacienteService;

import java.sql.SQLException;
import java.util.List;

@RestController
@RequestMapping("/paciente")
public class PacienteController {
    // La conexion al la base de datos (?)
    private PacienteService pacienteService;


    //CREAR
    //@PostMapping (?)
    @PostMapping("/registrarPaciente")
    public Paciente agregar (@RequestBody Paciente paciente){
        return paciente = new Paciente(paciente.getNombre(),paciente.getApellido(),paciente.getDomicilio(),paciente.getDni(),paciente.getFechaDeAlta());
    }

    //BUSCAR
    //@GetMapping se utiliza para hacer una peticion
    @GetMapping("/{id}")
    public Paciente buscar (@PathVariable Integer id){
        return pacienteService.buscar(id);
    }

    //ELIMINAR
    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminar(@PathVariable Integer id) throws SQLException {
        if(pacienteService.buscar(id) != null) {
            pacienteService.eliminar(id);
            return ResponseEntity.ok("Paciente eliminado correctamente");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No se encontro el paciente");
        }
    }

    //LISTARTODOS
    @GetMapping
    public List<Paciente> listarTodos(){
        return pacienteService.listarTodos();
    }

    //MODIFICAR / ACTUALIZAR
    @PutMapping()
    public ResponseEntity<Paciente> actualizar (@RequestBody Paciente paciente) throws SQLException {
        ResponseEntity<Paciente> response = null;

        if (paciente.getId() != null && pacienteService.buscar(paciente.getId()) != null)
            response = ResponseEntity.ok(pacienteService.actualizar(paciente));
        else
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();

        return response;
    }

    // Esta anotacion inyecta una dependencia
    @Autowired
    // Constructor
    public PacienteController(PacienteService pacienteService) {
        this.pacienteService = pacienteService;
    }


}
