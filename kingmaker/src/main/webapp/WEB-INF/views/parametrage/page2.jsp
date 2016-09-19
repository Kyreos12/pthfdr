<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<html>
<head>
<title>Page2</title>
</head>
<body>

	<h2>Informations Transmises</h2>
	<table>
		<tr>
			<td>Nom Arrondissement</td>
			<td>${nomArrondissement}</td>
		</tr>
		<tr>
			<td>Nom Voie</td>
			<td>${nomVoie}</td>
		</tr>
		<tr>
			<td>Numéro début</td>
			<td>${numeroDebut}</td>
		</tr>
		<tr>
			<td>Numéro fin</td>
			<td>${numeroFin}</td>
		</tr>
		
	</table>
</body>
</html>