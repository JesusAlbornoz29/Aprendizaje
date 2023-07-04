package com.example.FinalDesdeCero.controller;


import com.example.FinalDesdeCero.entity.PacienteDTO;
import com.example.FinalDesdeCero.service.IPacienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/pacientes")
public class PacienteController {
    @Autowired
    IPacienteService pacienteService;

    //AGREGAR ODONTOLOGO
    @PostMapping ("/")
    public ResponseEntity<?> crearPaciente(@RequestBody PacienteDTO pacienteDTO){
        pacienteService.crearPaciente(pacienteDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    // BUSCARPORID
    @GetMapping("/{id}")
    public PacienteDTO getPaciente(@PathVariable Long id) {
        return pacienteService.leerPaciente(id);
    }

    //MODIFICAR
    @PutMapping ("/modificar")
    public ResponseEntity<?> modificarPaciente(@RequestBody PacienteDTO pacienteDTO){
        pacienteService.modificarPaciente(pacienteDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    // DELETE
    @DeleteMapping("/{id}")
    public ResponseEntity<?> eliminarPaciente(@PathVariable Long id){
        pacienteService.eliminarPaciente(id);
        return  ResponseEntity.ok(HttpStatus.OK);
    }

    //GETTODOS
    @GetMapping ("/listar")
    public Collection<PacienteDTO> getTodosPacientes() {
        return pacienteService.getTodos();
    }
}
