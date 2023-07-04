package com.example.FinalDesdeCero.service;

import com.example.FinalDesdeCero.entity.DomicilioDTO;

import java.util.Set;

public interface IDomicilioService {
    void crearDomicilio(DomicilioDTO domicilioDTO);

    // BUSCAR
    DomicilioDTO leerDomicilio (Long id);
    // MODIFICAR
    void modificarDomicilio (DomicilioDTO domicilioDTO);
    // ELIMINAR
    void eliminarDomicilio(Long id);
    // LISTAR TODOS
    Set<DomicilioDTO> getTodos();
}
