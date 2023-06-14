package repository;

import entity.Domicilio;
import entity.Odontologo;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.testng.annotations.BeforeClass;
import repository.Impl.DomicilioDAOH2;
import repository.Impl.OdontologoDAOH2;

import java.sql.*;

import static org.junit.jupiter.api.Assertions.*;

class ConfiguracionJDBCTest {

    private static IDAO<Domicilio> domicilioIDAO = new DomicilioDAOH2();
    private  static IDAO<Odontologo> odontologoIDAO = new OdontologoDAOH2();

    //Cargamos un domicilio
    @BeforeClass
            public static void cargarDomicilio() throws SQLException {
        domicilioIDAO.agregar(new Domicilio("Ariel",5638,"Sayago","Montevideo"));

    }

    // Cargamos un odontologo
    @BeforeClass
    public  static  void cargarOdontologoprevio() throws SQLException{
        odontologoIDAO.agregar(new Odontologo("Albornoz","Jesus","BZA50625"));
    }




    @Test
    void conectarConBaseDeDatos() throws SQLException {
        try {
            Connection connection = null;
            ConfiguracionJDBC configuracionJDBC = new ConfiguracionJDBC();
            connection = configuracionJDBC.conectarConBaseDeDatos();
            System.out.println("Se ha conectado con la base h2");
            connection.close();
            System.out.println("Se ha cerrado la conecion");
        } catch (SQLException e){
            System.out.println("No pudo conectarse con la base de datos error: " + e);
            e.printStackTrace();
        }

    }

    @Test
     void cargarOdontologo() throws SQLException{
        odontologoIDAO.agregar(new Odontologo("Albornoz","Jesus","BZA50625"));
    }


}