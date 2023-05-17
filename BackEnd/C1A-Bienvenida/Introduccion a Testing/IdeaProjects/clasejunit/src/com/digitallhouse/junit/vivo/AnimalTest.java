package com.digitallhouse.junit.vivo;

import org.testng.annotations.Test;

import static org.testng.AssertJUnit.assertEquals;
import static org.testng.AssertJUnit.assertFalse;

class AnimalTest {

    @Test
    public void siElAnimalEsPesado() {
        Animal caballo = new Animal("caballo", "grande", 500);
        Animal perro = new Animal("perro", "mediano", 20);

        boolean esPesado = caballo.esPesado();
        boolean esPesado1 = perro.esPesado();

        assertEquals(true, caballo.esPesado());
        assertFalse(esPesado1);
;    }

}