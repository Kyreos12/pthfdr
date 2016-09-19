<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<h1 class="page-header">Liste des clients</h1>

<table id="clientsTable"
	class="table table-bordered table-condensed table-hover table-striped">
	<thead>
		<tr>
			<th class="small-column text-center"><input type="checkbox"
				id="etablissementsTableToutCocher" /></th>
			<th>Identifiant</th>
			<th>Nom</th>
			<th>adresse</th>
			<th>Code postal</th>
			<th>Ville</th>
			<th width="80">Actions</th>
		</tr>
	</thead>

	<tbody>
		<c:forEach var="clients" items="${list}">
			<tr
				onclick="inverseCheckbox('selectionEtablissements${etablissement.idEtablissement}');">
				<td class="small-column text-center"><input
					onclick="if(event.stopPropagation){event.stopPropagation();}event.cancelBubble=true;"
					type="checkbox" name="selectionEtablissements"
					value="${etablissement.idEtablissement}"
					class="selectionEtablissements${etablissement.idEtablissement}" />
				</td>
				<td>${clients.idClient}</td>
				<td>${clients.nomCompte}</td>
				<td>${clients.adresse}</td>
				<td>${clients.codePostal}</td>
				<td>${clients.nomVille}</td>
				<td class="text-center"><a class="btn-xs" title="Modifier"
					href=""> <i class="fff-page_white" title="Résumé dossier"></i></a></td>
			</tr>
		</c:forEach>
	</tbody>
</table>

<button class="btn btn-default" type="submit"
	onclick="$('#exportEtablissement').modal();">Valider</button>
<br />

<div class="dataTables_paginate paging_simple_numbers" id="etablissementsTable_paginate">
	<ul class="pagination">
		<li class="paginate_button previous disabled" aria-controls="etablissementsTable" tabindex="0"
			id="etablissementsTable_previous"><a href="#"><</a></li>
		<li class="paginate_button active" aria-controls="etablissementsTable"
			tabindex="0"><a href="1">1</a></li>
		<li class="paginate_button " aria-controls="etablissementsTable"
			tabindex="0"><a href="2">2</a></li>
		<li class="paginate_button " aria-controls="etablissementsTable"
			tabindex="0"><a href="3">3</a></li>
		<li class="paginate_button " aria-controls="etablissementsTable"
			tabindex="0"><a href="4">4</a></li>
		<li class="paginate_button " aria-controls="etablissementsTable"
			tabindex="0"><a href="5">5</a></li>
		<li class="paginate_button disabled"
			aria-controls="etablissementsTable" tabindex="0"
			id="etablissementsTable_ellipsis"><a href="#">...</a></li>
		<li class="paginate_button " aria-controls="etablissementsTable"
			tabindex="0"><a href="446">446</a></li>
		<li class="paginate_button next" aria-controls="etablissementsTable"
			tabindex="0" id="etablissementsTable_next"><a href="#">></a></li>
	</ul>
</div>
