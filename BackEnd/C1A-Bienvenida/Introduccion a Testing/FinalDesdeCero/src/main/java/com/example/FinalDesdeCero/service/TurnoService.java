package com.example.FinalDesdeCero.service;

import com.example.FinalDesdeCero.entity.Turno;
import com.example.FinalDesdeCero.entity.TurnoDTO;
import com.example.FinalDesdeCero.repository.ITurnoRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class TurnoService implements ITurnoService{

    @Autowired
    private ITurnoRepository turnoRepository;

    @Autowired
    ObjectMapper mapper;

    @Override
    public void crearTurno(TurnoDTO turnoDto) {
        guardarTurno(turnoDto);
    }

    private void guardarTurno(TurnoDTO turnoDto) {
        Turno turno = mapper.convertValue(turnoDto, Turno.class);
        turnoRepository.save(turno);
    }

    @Override
    public TurnoDTO buscarTurno(Long id) {
        Optional<Turno> turno = turnoRepository.findById(id);
        TurnoDTO turnoDto = null;
        if(turno.isPresent())
            turnoDto = mapper.convertValue(turno.get(), TurnoDTO.class);
        return turnoDto;
    }

    @Override
    public void actualizarTurno(TurnoDTO turnoDto) {
    guardarTurno(turnoDto);
    }

    @Override
    public void borrarTurno(Long id) {
    turnoRepository.deleteById(id);
    }

    @Override
    public Collection<TurnoDTO> listarTodos() {
        List<Turno> turnos = turnoRepository.findAll();
        Set<TurnoDTO> turnosDto = new HashSet<TurnoDTO>();
        for(Turno turno: turnos)
            turnosDto.add(mapper.convertValue(turno, TurnoDTO.class));
        return turnosDto;
    }
}
