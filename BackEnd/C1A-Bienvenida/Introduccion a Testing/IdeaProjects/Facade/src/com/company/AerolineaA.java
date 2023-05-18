package com.company;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

public class AerolineaA {
    // un metodo que me devuelva un map
    public Map<String, String> buscarVuelo(Date fecha, String destino, String origen){
        Map<String,String> vuelo = new HashMap<>();
        vuelo.put("Id", "1");
        vuelo.put("Origen", "Buenos Aires");
        vuelo.put("Destino", "Uruguay");
        vuelo.put("fecha","2023-05-17");
        vuelo.put("costo", "100.000");

        return vuelo;
    }
}
