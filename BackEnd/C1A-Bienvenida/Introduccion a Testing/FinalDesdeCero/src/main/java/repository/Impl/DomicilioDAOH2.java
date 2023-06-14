package repository.Impl;

import entity.Domicilio;
import org.springframework.stereotype.Repository;
import repository.ConfiguracionJDBC;
import repository.IDAO;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Repository
public class DomicilioDAOH2 implements IDAO<Domicilio> {


    ConfiguracionJDBC configuracionJDBC = new ConfiguracionJDBC();



    @Override
    public Domicilio agregar(Domicilio domicilio) throws SQLException {

        Connection connection = null;
        PreparedStatement preparedStatement = null;

        try{
            connection = configuracionJDBC.conectarConBaseDeDatos();

            preparedStatement = connection.prepareStatement("INSERT INTO domicilio(calle,numero,localidad,provincia) VALUES (?,?,?,?)", Statement.RETURN_GENERATED_KEYS);
            preparedStatement.setString(1, domicilio.getCalle());
            preparedStatement.setInt(2,domicilio.getNumero());
            preparedStatement.setString(3,domicilio.getLocalidad());
            preparedStatement.setString(4, domicilio.getProvincia());


            preparedStatement.executeUpdate();
            ResultSet keys = preparedStatement.getGeneratedKeys();
            if (keys.next())
                domicilio.setId(domicilio.getId());keys.getInt(1);

            preparedStatement.close();
        } catch (SQLException throwables){
            throwables.printStackTrace();
        }
        return domicilio;
    }

    @Override
    public Domicilio actualizar(Domicilio domicilio) throws SQLException {
        Connection connection = null;
        PreparedStatement preparedStatement = null;

        try {
            connection = configuracionJDBC.conectarConBaseDeDatos();
            preparedStatement = connection.prepareStatement("UPDATE domicilio SET calle = ?, numero = ? ,localidad = ?, provincia = ?  WHERE id = ?");
            //No le vamos a pasar el ID ya que hicimos que fuera autoincremental en la base de datos
            //preparedStatement.setInt(1,domicilio.getId());
            preparedStatement.setString(1, domicilio.getCalle());
            preparedStatement.setInt(2, domicilio.getNumero());
            preparedStatement.setString(3, domicilio.getLocalidad());
            preparedStatement.setString(4, domicilio.getProvincia());
            preparedStatement.setInt(5, domicilio.getId());

            //3 Ejecutar una sentencia SQL y obtener los ID que se autogeneraron en la base de datos
            preparedStatement.executeUpdate();
            preparedStatement.close();
        } catch (SQLException e){
            e.printStackTrace();
        }
        return domicilio;
    }

    @Override
    public void eliminar(Integer id) throws SQLException {
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        try {
            //1 Levantar el driver y Conectarnos

            connection = configuracionJDBC.conectarConBaseDeDatos();
            //2 Crear una sentencia
            preparedStatement = connection.prepareStatement("DELETE FROM domicilio where id = ?");
            preparedStatement.setInt(1,id);

            //3 Ejecutar una sentencia SQL
            preparedStatement.executeUpdate();
            preparedStatement.close();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
    }

    @Override
    public Domicilio buscar(Integer id) {
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        Domicilio domicilio = null;
        try {

            connection = configuracionJDBC.conectarConBaseDeDatos();
            //2 Crear una sentencia
            preparedStatement = connection.prepareStatement("SELECT id,calle,numero,localidad,provincia FROM domicilio where id = ?");
            preparedStatement.setInt(1,id);

            //3 Ejecutar una sentencia SQL
            ResultSet result = preparedStatement.executeQuery();

            //4 Obtener resultados
            while (result.next()) {
                Integer idDomicilio = result.getInt("id");
                String calle = result.getString("calle");
                Integer numero = result.getInt("numero");
                String localidad = result.getString("localidad");
                String provincia = result.getString("provincia");

                domicilio = new Domicilio(idDomicilio,calle,numero,localidad,provincia);
            }

            preparedStatement.close();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }

        return domicilio;

    }

    @Override
    public List<Domicilio> listarTodos() {
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        List<Domicilio> domicilios = new ArrayList<>();

        try {
            connection = configuracionJDBC.conectarConBaseDeDatos();
            //2 Crear una sentencia
            preparedStatement = connection.prepareStatement("SELECT *  FROM domicilio");

            //3 Ejecutar una sentencia SQL
            ResultSet result = preparedStatement.executeQuery();

            //4 Obtener resultados
            while (result.next()) {

                Integer idDomicilio = result.getInt("id");
                String calle = result.getString("calle");
                Integer numero = result.getInt("numero");
                String localidad = result.getString("localidad");
                String provincia = result.getString("provincia");

                Domicilio domicilio = new Domicilio(idDomicilio, calle, numero, localidad, provincia);

                domicilios.add(domicilio);
            }
            preparedStatement.close();
        }   catch (SQLException e) {
            throw new RuntimeException(e);
        } return domicilios;
        }


    }
