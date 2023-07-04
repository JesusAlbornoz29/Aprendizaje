package com.example.FinalDesdeCero.service;


import com.example.FinalDesdeCero.entity.OdontologoDTO;

import java.util.Set;

public interface IOdontologoService {
    void crearOdontologo(OdontologoDTO odontologoDTO);

    // BUSCAR
    OdontologoDTO leerOdontologo (Long id);
    // MODIFICAR
    void modificarOdontologo (OdontologoDTO odontologoDTO);
    // ELIMINAR
    void eliminarOdongologo(Long id);
    // LISTAR TODOS
    Set<OdontologoDTO> getTodos();
}
