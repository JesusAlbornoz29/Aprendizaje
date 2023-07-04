package com.example.FinalDesdeCero.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.*;


import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Entity
@Table(name = "Pacientes")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Paciente {
    @Id
    @GeneratedValue
    private Long id;
    @Column(name ="apellido")
    private String apellido;
    @Column (name ="nombre")
    private String nombre;
    @Column (name ="dni")
    private String dni;
    @Column (name ="FechaDeAlta")
    private Date fechaDeAlta;

    @ManyToOne
    @JoinColumn(name = "domicilio_id")
    private Domicilio domicilio;

    @OneToMany(mappedBy = "paciente")
    @JsonIgnore
    private Set<Turno> turnos;


}
