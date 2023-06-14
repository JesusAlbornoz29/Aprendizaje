package repository;

import org.springframework.stereotype.Repository;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

@Repository
public class ConfiguracionJDBC {
    private String jdbcDriver;
    private String url;
    private String user;
    private String password;

    private Connection connection;

    // Constructor

    public ConfiguracionJDBC(String jdbcDriver, String url, String user, String password, Connection connection) {
        this.jdbcDriver = jdbcDriver;
        this.url = url;
        this.user = user;
        this.password = password;
        this.connection = connection;
    }

    public ConfiguracionJDBC(){
        this.jdbcDriver="org.h2.Driver";
        this.url = "jdbc:h2:C:\\Users\\HP\\IdeaProjects\\H2\\h2\\bin\\final;init=runscript from './src/main/resources/create.sql'";
        this.user = "sa";
        this.password = "sa";
    }

    public Connection conectarConBaseDeDatos(){
        if(connection ==null){
            try{
                connection = DriverManager.getConnection(url,user,password);
            } catch (SQLException e ){
                throw new RuntimeException(e);
            }
        } return connection;
    }
}
