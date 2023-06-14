package com.example.FinalDesdeCero;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import repository.ConfiguracionJDBC;

import java.sql.Connection;
import java.sql.SQLException;

@SpringBootApplication
public class FinalDesdeCeroApplication {

	public static void main(String[] args) {
		SpringApplication.run(FinalDesdeCeroApplication.class, args);

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


}
