<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page pageEncoding="UTF-8"%>

<body>
	<h3>Accueil</h3>
	<form:form method="POST" action="/gerco2/page2" modelAttribute="accueil">
		<table>
			<tr>
				<td><form:label path="nomArrondissement">Nom arrodissement</form:label></td>
				<td><form:input path="nomArrondissement" /></td>
			</tr>
			<tr>
				<td><form:label path="nomVoie">Nom voie</form:label></td>
				<td><form:input path="nomVoie" /></td>
			</tr>
			<tr>
				<td><form:label path="numeroDebut">Numéro de début</form:label></td>
				<td><form:input path="numeroDebut" /></td>
			</tr>
			<tr>
				<td><form:label path="numeroFin">Numéro de fin</form:label></td>
				<td><form:input path="numeroFin" /></td>
			</tr>
			<tr>
				<td><input type="submit" value="Submit" /></td>
			</tr>
		</table>
	</form:form>
</body>
