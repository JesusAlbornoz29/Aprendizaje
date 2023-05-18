package com.company.service;

import java.util.Date;
import java.util.List;
import java.util.Map;

public interface IFacade {
    public List<Map<String,String>> buscarVuelo(Date fecha, String destino, String origen);
}
