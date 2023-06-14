package service;

import entity.Paciente;
import org.springframework.stereotype.Service;
import repository.IDAO;

import java.sql.SQLException;
import java.util.List;

@Service
public class PacienteService {
    private IDAO<Paciente> pacienteIDAO;

    public PacienteService() {
    }

    public PacienteService(IDAO<Paciente> pacienteIDAO) {
        this.pacienteIDAO = pacienteIDAO;
    }

    public void setPacienteIDAO(IDAO<Paciente> pacienteIDAO) {
        this.pacienteIDAO = pacienteIDAO;
    }


    public Paciente agregar (Paciente paciente) throws SQLException {
        pacienteIDAO.agregar(paciente);
        return paciente;
    }
    public List<Paciente> listarTodos (){
        return pacienteIDAO.listarTodos();
    }

    public Paciente buscar(Integer id){
        return pacienteIDAO.buscar(id);
    }

    public void eliminar(Integer id ) throws SQLException {
        pacienteIDAO.eliminar(id);
    }

    public Paciente actualizar(Paciente p) throws SQLException {
        return pacienteIDAO.actualizar(p);
    }

}
