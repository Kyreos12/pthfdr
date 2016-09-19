package fr.gfi.skeleton.db;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Dao {

	public static Connection getConnectionJDBC() throws IOException, ClassNotFoundException, SQLException {

		Class.forName("org.postgresql.Driver");
		Connection connection = DriverManager.getConnection(
				"jdbc:postgresql://127.0.0.1:5432/gfi_contrats", "postgres", "geouser");
		return connection;
	}
}
