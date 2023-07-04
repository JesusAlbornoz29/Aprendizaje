package com.example.FinalDesdeCero.service;

import com.example.FinalDesdeCero.entity.TurnoDTO;

import java.util.Collection;

public interface ITurnoService {
    void crearTurno(TurnoDTO turnoDto);
    TurnoDTO buscarTurno(Long id);
    void actualizarTurno(TurnoDTO turnoDto);
    void borrarTurno(Long id);
    Collection<TurnoDTO> listarTodos();
}
