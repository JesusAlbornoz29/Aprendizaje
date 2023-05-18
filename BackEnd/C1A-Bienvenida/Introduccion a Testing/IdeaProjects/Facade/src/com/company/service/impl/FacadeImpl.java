package com.company.service.impl;

import com.company.AerolineaA;
import com.company.AerolineaB;
import com.company.AerolineaC;
import com.company.service.IFacade;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

public class FacadeImpl implements IFacade {

    private AerolineaA aerolineaA;
    private AerolineaB aerolineaB;
    private AerolineaC aerolineaC;

    public FacadeImpl() {
    }

    public FacadeImpl(AerolineaA aerolineaA, AerolineaB aerolineab, AerolineaC aerolineaC) {
        this.aerolineaA = aerolineaA;
        this.aerolineaB = aerolineab;
        this.aerolineaC = aerolineaC;
    }

    @Override
    public List<Map<String, String>> buscarVuelo(Date fecha, String destino, String origen) {
        List<Map<String,String>> vuelos = new ArrayList<>();
        vuelos.add(aerolineaA.buscarVuelo(fecha, destino, origen));
        vuelos.add(aerolineaB.buscarVuelo(fecha, destino, origen));
        vuelos.add(aerolineaC.buscarVuelo(fecha, destino, origen));


        return vuelos;
    }
}
