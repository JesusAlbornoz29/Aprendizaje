package controller;


import entity.Domicilio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import repository.Impl.DomicilioDAOH2;
import service.DomicilioService;

import java.sql.SQLException;
import java.util.List;

@RestController
@RequestMapping("/domicilios")
public class DomicilioController {

    // La conexion con la base dee datos

    private DomicilioService domicilioService;


    //CREAR
    @PostMapping ("/crearDomicilio")
    public Domicilio agregar (@RequestBody Domicilio domicilio){
        return domicilio = new Domicilio(domicilio.getCalle(),domicilio.getNumero(),domicilio.getLocalidad(),domicilio.getProvincia());
    }

    //BUSCAR
    //@GetMapping se utiliza para hacer una peticion
    @GetMapping("/{id}")
    public Domicilio buscar (@PathVariable Integer id) {
        // @PathVariable quiere decir que el id "Varia"
        return domicilioService.buscar(id);
    }

    //ELIMINAR
    @DeleteMapping("/{id}")
    public ResponseEntity<String> eliminar(@PathVariable Integer id) throws SQLException {
        if (domicilioService.buscar(id) != null) {
            domicilioService.eliminar(id);
            return ResponseEntity.ok("Domicilio eliminado correctamente");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No se encontró el domicilio con ID: " + id);
        }
    }


    //LISTARTODOS
    @GetMapping
    public List<Domicilio> listarTodos(){
        return domicilioService.listarTodos();
    }

    //MODIFICAR / ACTUALIZAR
    @PutMapping("/actualizar")
    public ResponseEntity<Domicilio> actualizar (@RequestBody Domicilio domicilio) throws SQLException {
        ResponseEntity<Domicilio> response = null;

        if (domicilio.getId() != null && domicilioService.buscar(domicilio.getId()) != null)
            response = ResponseEntity.ok(domicilioService.actualizar(domicilio));
        else
            response = ResponseEntity.status(HttpStatus.NOT_FOUND).build();

        return response;
    }

    //@Autowired(?) inyecta una dependencia (?) sin necesidad de crear un nuevo objeto
    @Autowired
    // Constructor (?) El profe lo pone
    public DomicilioController(DomicilioService domicilioService){
        this.domicilioService = domicilioService;
    }

}
