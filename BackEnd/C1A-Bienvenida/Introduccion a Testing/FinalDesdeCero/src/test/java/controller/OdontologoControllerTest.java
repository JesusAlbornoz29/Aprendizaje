package controller;

import entity.Odontologo;
import org.junit.BeforeClass;
import org.junit.FixMethodOrder;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.jupiter.api.Assertions.*;



@RunWith(SpringRunner.class)
@SpringBootTest
public class OdontologoControllerTest {

    @BeforeClass
    public Odontologo creandoOdontologo(){
        Odontologo odontologo = new Odontologo(1,"Albornoz","Jesus","BZO50625");
        return odontologo;
    }


    @Test
    void agregar() {
    }

    @Test
    void buscarPorId() {
    }

    @Test
    void eliminar() {
    }

    @Test
    void listarTodos() {
    }

    @Test
    void modificar() {
    }
}