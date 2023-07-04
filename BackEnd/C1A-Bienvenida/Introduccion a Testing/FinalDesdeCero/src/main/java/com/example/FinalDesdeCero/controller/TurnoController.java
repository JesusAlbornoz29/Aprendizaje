package com.example.FinalDesdeCero.controller;

import com.example.FinalDesdeCero.entity.TurnoDTO;
import com.example.FinalDesdeCero.service.ITurnoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/turnos")

public class TurnoController {
    @Autowired
    ITurnoService turnoService;

    @PostMapping()
    public ResponseEntity<?> crearTurno(@RequestBody TurnoDTO turnoDto) {
        turnoService.crearTurno(turnoDto);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping("/listar")
    public Collection<TurnoDTO> listarTurno() {
        return turnoService.listarTodos();
    }

    @GetMapping("/{id}")
    public TurnoDTO buscarTurno(@PathVariable Long id) {
        return turnoService.buscarTurno(id);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> eliminarTurno(@PathVariable Long id) {
        ResponseEntity<String> response = null;
        turnoService.borrarTurno(id);
        response = ResponseEntity.status(HttpStatus.OK).body("El turno fue eliminado");
        return response;
    }

    @PutMapping()
    public ResponseEntity<?> modificarTurno(@RequestBody TurnoDTO turnoDto) {
        turnoService.actualizarTurno(turnoDto);
        return ResponseEntity.ok(HttpStatus.OK);
    }
}
