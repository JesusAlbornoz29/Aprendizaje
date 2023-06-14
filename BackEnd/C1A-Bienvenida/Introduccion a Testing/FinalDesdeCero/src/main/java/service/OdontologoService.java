package service;

import entity.Odontologo;
import org.springframework.stereotype.Service;
import repository.IDAO;

import java.sql.SQLException;
import java.util.List;

@Service
public class OdontologoService {

    private IDAO<Odontologo> odontologoIDAO;

    // Costructor vacio
    public OdontologoService(){

    }

    //Getters y Setters
    public OdontologoService(IDAO<Odontologo> odontologoIDAO){
        this.odontologoIDAO = odontologoIDAO;
    }

    public void setOdontologoIDAO(IDAO<Odontologo> odontologoIDAO) {
        this.odontologoIDAO = odontologoIDAO;
    }

    //Metodos
    public Odontologo guardar(Odontologo odontologo) throws SQLException{
        odontologoIDAO.agregar(odontologo);
        return odontologo;
    }

    public List<Odontologo> listarTodos() {
        return odontologoIDAO.listarTodos();
    }

    public Odontologo buscar (Integer id){
        if (id != null){
            System.out.println("Odontologo encontrado");
        }
        System.out.println("Odontologo no encontrado");
        return odontologoIDAO.buscar(id);
    }

    public void eliminar(Integer id) throws SQLException{
        odontologoIDAO.eliminar(id);
    }

    public  Odontologo actualizar(Odontologo o ) throws SQLException{
        return odontologoIDAO.actualizar(o);
    }
}
