package com.example.FinalDesdeCero.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;


import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "Odontologos")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Odontologo {
    @Id
    @GeneratedValue
    private Long id;
    @Column(name = "apellido")
    private String apellido;
    @Column(name = "nombre")
    private String nombre;
    @Column(name = "matricula")
    private String matricula;

    @OneToMany(mappedBy = "odontologo")
    @JsonIgnore
    private Set<Turno> turnos;

}
