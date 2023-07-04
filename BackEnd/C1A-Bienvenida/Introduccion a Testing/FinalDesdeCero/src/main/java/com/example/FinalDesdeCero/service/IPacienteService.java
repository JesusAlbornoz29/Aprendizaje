package com.example.FinalDesdeCero.service;


import com.example.FinalDesdeCero.entity.PacienteDTO;

import java.util.Set;

public interface IPacienteService {
    void crearPaciente(PacienteDTO pacienteDTO);

    // BUSCAR
    PacienteDTO leerPaciente (Long id);
    // MODIFICAR
    void modificarPaciente (PacienteDTO pacienteDTO);
    // ELIMINAR
    void eliminarPaciente(Long id);
    // LISTAR TODOS
    Set<PacienteDTO> getTodos();
}
