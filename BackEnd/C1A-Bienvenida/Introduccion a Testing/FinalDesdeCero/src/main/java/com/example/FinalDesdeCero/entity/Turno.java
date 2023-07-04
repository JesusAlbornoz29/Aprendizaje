package com.example.FinalDesdeCero.entity;

import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Turnos")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString

public class Turno {
    @Id
    @GeneratedValue
    private Long id;

    @Column
    private Date fechaYHoraTurno;

    @ManyToOne
    @JoinColumn(name = "odontologo_id", nullable = false)
    private Odontologo odontologo;

    @ManyToOne
    @JoinColumn(name = "paciente_id", nullable = false)
    private Paciente paciente;

}
