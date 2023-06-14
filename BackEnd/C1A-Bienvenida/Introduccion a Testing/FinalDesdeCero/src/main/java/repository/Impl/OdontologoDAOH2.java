package repository.Impl;

import entity.Odontologo;
import org.springframework.stereotype.Repository;
import repository.ConfiguracionJDBC;
import repository.IDAO;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import org.apache.log4j.Logger;

@Repository
public class OdontologoDAOH2 implements IDAO<Odontologo> {


    private Logger log =Logger.getLogger(String.valueOf(OdontologoDAOH2.class));

    ConfiguracionJDBC configuracionJDBC = new ConfiguracionJDBC();

    //AGREGAR
    @Override
    public Odontologo agregar(Odontologo odontologo) throws SQLException {
        log.debug("guardando un nuevo odontologo");
        Connection connection = null;
        PreparedStatement preparedStatement = null;

        try{
            connection = configuracionJDBC.conectarConBaseDeDatos();

            preparedStatement = connection.prepareStatement("INSERT INTO odontologo(nombre,apellido,matricula) VALUES(?,?,?)", Statement.RETURN_GENERATED_KEYS);
            //No le vamos a pasar el ID ya que hicimos que fuera autoincremental en la base de datos
            //preparedStatement.setInt(1,odontologo.getId());
            preparedStatement.setString(1, odontologo.getNombre());
            preparedStatement.setString(2, odontologo.getApellido());
            preparedStatement.setString(3, odontologo.getMatricula());

            //3 Ejecutar una sentencia SQL y obtener los ID que se autogeneraron en la base de datos
            preparedStatement.executeUpdate();
            ResultSet keys = preparedStatement.getGeneratedKeys();
            if(keys.next())
                odontologo.setId(odontologo.getId()); keys.getInt(1);

            preparedStatement.close();

        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return odontologo;
    }

    //ACTUALIZAR
    @Override
    public Odontologo actualizar(Odontologo odontologo) throws SQLException {
        log.debug("Actualizando un odontologo");
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        try {
            //1 Levantar el driver y Conectarnos
            connection = configuracionJDBC.conectarConBaseDeDatos();

            //2 Crear una sentencia
            preparedStatement = connection.prepareStatement("UPDATE odontologo SET nombre = ?, apellido = ?,matricula = ?  WHERE id = ?");
            //No le vamos a pasar el ID ya que hicimos que fuera autoincremental en la base de datos
            //preparedStatement.setInt(1,odontologo.getId());
            preparedStatement.setString(1, odontologo.getNombre());
            preparedStatement.setString(2, odontologo.getApellido());
            preparedStatement.setString(3, odontologo.getMatricula());
            preparedStatement.setInt(4, odontologo.getId());


            //3 Ejecutar una sentencia SQL
            preparedStatement.executeUpdate();


            preparedStatement.close();

        } catch (SQLException throwables) {
            throwables.printStackTrace();
            log.error(throwables);
        }
        return odontologo;
    }

    //ELIMINAR
    @Override
    public void eliminar(Integer id) throws SQLException {
        log.debug("Borrando odontologo con id : "+id);
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        try {
            //1 Levantar el driver y Conectarnos
            connection = configuracionJDBC.conectarConBaseDeDatos();

            //2 Crear una sentencia
            preparedStatement = connection.prepareStatement("DELETE FROM odontologo where id = ?");
            preparedStatement.setInt(1,id);

            //3 Ejecutar una sentencia SQL
            preparedStatement.executeUpdate();
            preparedStatement.close();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
            log.error(throwables);
        }
    }

    //BUSCAR
    @Override
    public Odontologo buscar(Integer id) {
        log.debug("Buscando al odontologo con id = " + id);
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        Odontologo odontologo = null;
        try {
            //1 Levantar el driver y Conectarnos
            connection = configuracionJDBC.conectarConBaseDeDatos();

            //2 Crear una sentencia
            preparedStatement = connection.prepareStatement("SELECT id,nombre,apellido,matricula FROM odontologo where id = ?");
            preparedStatement.setInt(1,id);

            //3 Ejecutar una sentencia SQL
            ResultSet result = preparedStatement.executeQuery();

            //4 Obtener resultados
            while (result.next()) {
                Integer idPaciente = result.getInt("id");
                String nombre = result.getString("nombre");
                String apellido = result.getString("apellido");
                String matricula = result.getString("matricula");

                odontologo = new Odontologo(idPaciente,nombre,apellido,matricula);
            }

            preparedStatement.close();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
            log.error(throwables);
        }

        return odontologo;
    }

    //LISTARTODOS
    @Override
    public List<Odontologo> listarTodos() {
        log.debug("Buscando todos los odontologos");
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        List<Odontologo> odontologos = new ArrayList<>();
        try {
            //1 Levantar el driver y Conectarnos
            connection = configuracionJDBC.conectarConBaseDeDatos();

            //2 Crear una sentencia
            preparedStatement = connection.prepareStatement("SELECT *  FROM odontologo");

            //3 Ejecutar una sentencia SQL
            ResultSet result = preparedStatement.executeQuery();

            //4 Obtener resultados
            //4 Obtener resultados
            while (result.next()) {
                Integer idOdontologo = result.getInt("id");
                String nombre = result.getString("nombre");
                String apellido = result.getString("apellido");
                String matricula = result.getString("matricula");

                Odontologo odontologo = new Odontologo(idOdontologo,nombre,apellido,matricula);
                odontologos.add(odontologo);
            }

            preparedStatement.close();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
            log.error(throwables);
        }

        return odontologos;
    }
}
