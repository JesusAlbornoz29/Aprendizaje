package repository.Impl;

import entity.Domicilio;
import entity.Paciente;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Repository;
import repository.ConfiguracionJDBC;
import repository.IDAO;

import java.sql.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Repository
public class PacienteDAOH2 implements IDAO<Paciente> {

    private Logger log =Logger.getLogger(String.valueOf(OdontologoDAOH2.class));

    ConfiguracionJDBC configuracionJDBC = new ConfiguracionJDBC();

    private DomicilioDAOH2 domicilioDAOH2 = new DomicilioDAOH2();

    @Override
    public Paciente agregar(Paciente paciente) throws SQLException {
        log.debug("agregando un nuevo paciente");
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        try {
            //1 Levantar el driver y Conectarnos
            connection = configuracionJDBC.conectarConBaseDeDatos();


            //Como primer paso primero debemos guardar el domicilio del paciente
            //ya que necesitamos el ID del domicilio que se generará en la base de datos para luego
            //insertar ese id en el campo domicilio_id de la tabla pacientes
            Domicilio domicilio = domicilioDAOH2.agregar(paciente.getDomicilio());
            paciente.getDomicilio().setId(domicilio.getId());

            //2 Crear una sentencia especificando que el ID lo auto incrementa la base de datos y que nos devuelva esa Key es decir ID
            preparedStatement = connection.prepareStatement("INSERT INTO paciente(nombre,apellido,dni,fecha_ingreso,id_domicilio) VALUES(?,?,?,?,?)", Statement.RETURN_GENERATED_KEYS);
            //No le vamos a pasar el ID ya que hicimos que fuera autoincremental en la base de datos
            //preparedStatement.setInt(1,paciente.getId());
            preparedStatement.setString(1, paciente.getNombre());
            preparedStatement.setString(2, paciente.getApellido());
            preparedStatement.setString(3, paciente.getDni());
            //Hay que convertir el Date en sql.Date ya que son dos clases diferentes en Java
            preparedStatement.setDate(4, Date.valueOf(LocalDate.now()));
            //Tenemos que pasarle la clave foranea del ID del domicilio es decir el campo domicilio_id
            preparedStatement.setInt(5, paciente.getDomicilio().getId());

            //3 Ejecutar una sentencia SQL y obtener los ID que se autogeneraron en la base de datos
            preparedStatement.executeUpdate();
            ResultSet keys = preparedStatement.getGeneratedKeys();
            if(keys.next())
                paciente.setId(keys.getInt(1));

            preparedStatement.close();

        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return paciente;
    }

    @Override
    public Paciente actualizar(Paciente paciente) throws SQLException {
        log.debug("Modificando un paciente");
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        try {
            //1 Levantar el driver y Conectarnos
            connection = configuracionJDBC.conectarConBaseDeDatos();


            //Como primer paso actualizamos el domicilio del paciente
            Domicilio domicilio = domicilioDAOH2.actualizar(paciente.getDomicilio());

            //2 Crear una sentencia especificando que el ID lo auto incrementa la base de datos y que nos devuelva esa Key es decir ID
            preparedStatement = connection.prepareStatement("UPDATE paciente SET nombre=?, apellido=?, dni=?, fecha_ingreso=?, id_domicilio=?  WHERE id = ?");
            //No le vamos a pasar el ID ya que hicimos que fuera autoincremental en la base de datos
            //preparedStatement.setInt(1,paciente.getId());
            preparedStatement.setString(1, paciente.getNombre());
            preparedStatement.setString(2, paciente.getApellido());
            preparedStatement.setString(3, paciente.getDni());
            //Hay que convertir el Date en sql.Date ya que son dos clases diferentes en Java
            preparedStatement.setDate(4, Date.valueOf(LocalDate.now()));
            //Tenemos que pasarle la clave foranea del ID del domicilio es decir el campo domicilio_id
            preparedStatement.setInt(5, paciente.getDomicilio().getId());
            preparedStatement.setInt(6, paciente.getId());

            //3 Ejecutar una sentencia SQL
            preparedStatement.executeUpdate();


            preparedStatement.close();

        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        return paciente;
    }


    @Override
    public void eliminar(Integer id) throws SQLException {
        log.debug("Eliminando un paciente");
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        try {
            //1 Levantar el driver y Conectarnos
            connection = configuracionJDBC.conectarConBaseDeDatos();

            //2 Crear una sentencia
            preparedStatement = connection.prepareStatement("DELETE FROM paciente where id = ?");
            preparedStatement.setInt(1,id);

            //3 Ejecutar una sentencia SQL
            preparedStatement.executeUpdate();
            preparedStatement.close();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }

    }

    @Override
    public Paciente buscar(Integer id) {
        log.debug("Buscando un paciente");
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        Paciente paciente = null;
        try {
            //1 Levantar el driver y Conectarnos
            connection = configuracionJDBC.conectarConBaseDeDatos();

            //2 Crear una sentencia
            preparedStatement = connection.prepareStatement("SELECT id,nombre,apellido,dni,fecha_ingreso,id_domicilio  FROM paciente where id = ?");
            preparedStatement.setInt(1,id);

            //3 Ejecutar una sentencia SQL
            ResultSet result = preparedStatement.executeQuery();

            //4 Obtener resultados
            while (result.next()) {
                Integer idPaciente = result.getInt("id");
                String nombre = result.getString("nombre");
                String apellido = result.getString("apellido");
                String dni = result.getString("dni");
                Date fechaIngreso = result.getDate("fecha_ingreso");
                Integer idDomicilio = result.getInt("domicilio_id");
                //Con el domicilio_id traemos el domicilio de la tabla domicilio a traves de DAO de Domicilios
                Domicilio domicilio = domicilioDAOH2.buscar(idDomicilio);
                paciente = new Paciente(idPaciente,nombre,apellido,domicilio,dni,fechaIngreso);
            }

            preparedStatement.close();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }

        return paciente;
    }

    @Override
    public List<Paciente> listarTodos() {
        log.debug("Buscando un paciente");
        Connection connection = null;
        PreparedStatement preparedStatement = null;
        List<Paciente> pacientes = new ArrayList<>();
        try {
            //1 Levantar el driver y Conectarnos
            connection = configuracionJDBC.conectarConBaseDeDatos();

            //2 Crear una sentencia
            preparedStatement = connection.prepareStatement("SELECT *  FROM paciente");

            //3 Ejecutar una sentencia SQL
            ResultSet result = preparedStatement.executeQuery();


            //4 Obtener resultados
            while (result.next()) {
                Integer idPaciente = result.getInt("id");
                String nombre = result.getString("nombre");
                String apellido = result.getString("apellido");
                String dni = result.getString("dni");
                Date fechaIngreso = result.getDate("fecha_ingreso");
                Integer idDomicilio = result.getInt("domicilio_id");
                //Con el domicilio_id traemos el domicilio de la tabla domicilio a traves de DAO de Domicilios
                Domicilio domicilio = domicilioDAOH2.buscar(idDomicilio);
                Paciente paciente = new Paciente(idPaciente,nombre,apellido,domicilio,dni,fechaIngreso);
                pacientes.add(paciente);
            }

            preparedStatement.close();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }

        return pacientes;
    }
}
