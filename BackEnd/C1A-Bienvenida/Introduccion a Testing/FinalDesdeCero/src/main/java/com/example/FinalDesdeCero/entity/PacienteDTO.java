package com.example.FinalDesdeCero.entity;

import lombok.Getter;
import lombok.Setter;

import javax.xml.crypto.Data;
import java.util.Date;


@Getter
@Setter
public class PacienteDTO {
    private Long id;
    private String apellido;
    private String nombre;
    private String dni;
    private Date fechaDeAlta;
    private Domicilio domicilio;
}
