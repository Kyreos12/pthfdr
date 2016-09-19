package fr.gfi.skeleton.db;

import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import fr.gfi.skeleton.db.model.Clients;

public class ClientsService {

	public static List<Clients> getClientsBuPage(int pageid) {
		
		ArrayList<Clients> cList = new ArrayList<Clients>();
		
		try {
		
		Statement stmt = Dao.getConnectionJDBC().createStatement();
		ResultSet resultMessages = stmt
				.executeQuery("SELECT * FROM client ORDER BY id_client LIMIT 10 OFFSET " + pageid);

		while (resultMessages.next()) {

			Clients client = new Clients();
			client.setIdClient(resultMessages.getInt("id_client"));
			client.setNomCompte(resultMessages.getString("nom_compte"));
			client.setNomVille(resultMessages.getString("ville"));
			client.setCodePostal(resultMessages.getString("code_postal"));
			client.setAdresse(resultMessages.getString("adresse"));
			cList.add(client);
		}
		}catch(Exception e) {
			System.out.println(e.getMessage());
		}
		return cList;
	}
}
