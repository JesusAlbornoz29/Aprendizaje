package com.example.FinalDesdeCero.entity;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter

public class TurnoDTO {
    private Long id;
    private Date fechaYHoraTurno;
    private OdontologoDTO odontologo;
    private PacienteDTO paciente;
}
