package com.example.FinalDesdeCero.entity;
// Implementado DOM, JPA y anotaciones Hibernate


import lombok.*;

import javax.persistence.*;

@Entity
@Table (name = "Domicilios")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Domicilio {
    @Id
    @GeneratedValue
    private Long id;
    @Column (name = "calle")
    private String calle;
    @Column (name = "numero")
    private Integer numero;
    @Column (name = "localidad")
    private String localidad;
    @Column (name = "provincia")
    private String provincia;
    // Donde iria la bidireccionalidad
    @ManyToOne
    @JoinColumn(name = "paciente_id",nullable = true)  //Consultar si esta bien?
    private Paciente paciente;


}
