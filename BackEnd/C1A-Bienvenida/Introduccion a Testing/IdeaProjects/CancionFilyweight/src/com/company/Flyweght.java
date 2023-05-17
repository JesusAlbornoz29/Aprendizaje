package com.company;

import java.util.HashMap;

public class Flyweght {
    private static final HashMap<String, Cancion> cancionesMap = new HashMap<>();

    public static Cancion obtenerCancion(String nombre){
        Cancion cancion = cancionesMap.get(nombre);
        if(cancion == null) {
            cancion = new Cancion(nombre);
            cancionesMap.put(nombre,cancion);
            System.out.println("Creando cancion " + nombre);
        }
        return cancion;
    };
}
