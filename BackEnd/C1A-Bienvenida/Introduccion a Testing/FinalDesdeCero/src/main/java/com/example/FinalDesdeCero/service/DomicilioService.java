package com.example.FinalDesdeCero.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.example.FinalDesdeCero.entity.Domicilio;
import com.example.FinalDesdeCero.entity.DomicilioDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.FinalDesdeCero.repository.IDomicilioRepository;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class DomicilioService implements IDomicilioService{

    @Autowired
    private IDomicilioRepository domicilioRepository;

    @Autowired
    ObjectMapper mapper;

    // Metodo guardar
    private void guardarDomicilio(DomicilioDTO domicilioDTO){
        Domicilio domicilio = mapper.convertValue(domicilioDTO, Domicilio.class);
        domicilioRepository.save(domicilio);
    }

    @Override
    public void crearDomicilio(DomicilioDTO domicilioDTO) {
        guardarDomicilio(domicilioDTO);
    }

    @Override
    public DomicilioDTO leerDomicilio(Long id) {
        Optional<Domicilio> domicilio = domicilioRepository.findById(id);
        DomicilioDTO domicilioDTO = null;
        if(domicilio.isPresent())
            domicilioDTO = mapper.convertValue(domicilio, DomicilioDTO.class);
        return domicilioDTO;
    }

    @Override
    public void modificarDomicilio(DomicilioDTO domicilioDTO) {
        guardarDomicilio(domicilioDTO);
    }

    @Override
    public void eliminarDomicilio(Long id) {
        domicilioRepository.deleteById(id);
    }

    @Override
    public Set<DomicilioDTO> getTodos() {
        List<Domicilio> domicilios = domicilioRepository.findAll();
        Set<DomicilioDTO> domiciliosDTO = new HashSet<>();
        for(Domicilio domicilio: domicilios){
            domiciliosDTO.add(mapper.convertValue(domicilio, DomicilioDTO.class));
        }
        return domiciliosDTO;
    }
}
