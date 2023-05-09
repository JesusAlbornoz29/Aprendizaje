import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.*;

public class PersonaTest {

    Persona persona;
    Persona persona2;

    @BeforeEach
    public void setUp(){
        persona = new Persona ("Perez", "Juan", "juan@gmail.com", LocalDate.of(1993,01,05));
        persona2 = new Persona ("Perez", "Juan", "juan@gmail.com", LocalDate.of(1993,01,05));
    }
    @Test
    public void testNombreCompleto() {
        assertEquals("Perez, Juan", persona2.getNombreCompleto());
    }

    @Test
    public void testEsMayorDeEdad() {
         assertTrue(persona2.esMayorDeEdad());
    }

}