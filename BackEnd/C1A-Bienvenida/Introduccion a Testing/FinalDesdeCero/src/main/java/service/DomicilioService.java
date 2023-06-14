package service;

import entity.Domicilio;
import org.springframework.stereotype.Service;
import repository.IDAO;

import java.sql.SQLException;
import java.util.List;

@Service
public class DomicilioService {

    private IDAO<Domicilio> domicilioIDAO;

    public DomicilioService(){
    }

    public DomicilioService(IDAO<Domicilio> domicilioIDAO) {
        this.domicilioIDAO = domicilioIDAO;
    }

    public void setDomicilioIDAO(IDAO<Domicilio> domicilioIDAO){
        this.domicilioIDAO = domicilioIDAO;
    }

    // METODOS

    // Listar todos
    public List<Domicilio> listarTodos(){
        return domicilioIDAO.listarTodos();
    }

    // Buscar
    public Domicilio buscar (Integer id){
        return domicilioIDAO.buscar(id);
    }

    // Eliminar
    public void eliminar(Integer id) throws SQLException {
        domicilioIDAO.eliminar(id);
    }

    // Actualizar
    public Domicilio actualizar(Domicilio d) throws SQLException{
        return domicilioIDAO.actualizar(d);
    }
}
