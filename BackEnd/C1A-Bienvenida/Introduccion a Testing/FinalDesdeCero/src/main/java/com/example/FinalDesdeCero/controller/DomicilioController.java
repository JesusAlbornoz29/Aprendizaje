package com.example.FinalDesdeCero.controller;

import com.example.FinalDesdeCero.entity.DomicilioDTO;
import com.example.FinalDesdeCero.service.IDomicilioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/domicilios")
public class DomicilioController {
    @Autowired
    IDomicilioService domicilioService;

    //AGREGAR ODONTOLOGO
    @PostMapping ("/")
    public ResponseEntity<?> crearDomicilio(@RequestBody DomicilioDTO domicilioDTO){
        domicilioService.crearDomicilio(domicilioDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    // BUSCARPORID
    @GetMapping("/{id}")
    public DomicilioDTO getDomicilio(@PathVariable Long id) {
        return domicilioService.leerDomicilio(id);
    }

    //MODIFICAR
    @PutMapping("/modificar")
    public ResponseEntity<?> modificarDomicilio(@RequestBody DomicilioDTO domicilioDTO){
        domicilioService.modificarDomicilio(domicilioDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    // DELETE
    @DeleteMapping("/{id}")
    public ResponseEntity<?> eliminarDomicilio(@PathVariable Long id){
        domicilioService.eliminarDomicilio(id);
        return  ResponseEntity.ok(HttpStatus.OK);
    }

    //GETTODOS
    @GetMapping ("/listar")
    public Collection<DomicilioDTO> getTodosDomicilios() {
        return domicilioService.getTodos();
    }
}
