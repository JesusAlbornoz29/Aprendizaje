package com.example.FinalDesdeCero.service;

import com.example.FinalDesdeCero.entity.Odontologo;
import com.example.FinalDesdeCero.entity.OdontologoDTO;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Collection;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class OdontologoServiceTest {



    @Autowired
    IOdontologoService odontologoService;


    @Test
    public void testCrearOdontologo(){
        // Primero creare un estudianteDTO
        OdontologoDTO odontologoDTO = new OdontologoDTO();
        // seteamos nom y ape
        odontologoDTO.setApellido("Jesus");
        odontologoDTO.setApellido("Albornoz");
        odontologoDTO.setMatricula("bza50625");

        // creamos el estudiante
        odontologoService.crearOdontologo(odontologoDTO);

        //probamos si lo creo
        OdontologoDTO odontologoJesus = odontologoService.leerOdontologo(1L);

        // haacemos el assert
        assertTrue( odontologoJesus != null);
    }


}