<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>

<!-- colonne gauche -->
<div class="col-sm-3">
	<ul class="nav nav-pills nav-stacked">
		<li role="presentation" class="active"><a href="#">Recherche
				par adresse</a></li>
		<li role="presentation"><a href="#">Recherche par numéro de dossier</a></li>
		<li role="presentation"><a href="#">Recherche par date</a></li>
		<li role="presentation"><a href="#">Recherche par accès géographique</a></li>
	</ul>
</div>
<!-- end well -->


<!-- colonne droite -->
<div class="col-sm-9">

	<form class="form-horizontal" method="post" action=""
		enctype="multipart/form-data">
		<legend>Recherche par adresse</legend>
		<fieldset>

			<div class="form-group required">
				<label class="col-sm-3 control-label" for="NomCouche">Spécifiez un arrondissement (facultatif)</label>
				<div class="col-sm-9">
					<select>
						<option>A</option>
					</select>
				</div>
			</div>

			<div class="form-group required">
				<label class="col-sm-3 control-label" for="NomCouche">Spécifiez un nom de voie ou une partie du nom de voie</label>
				<div class="col-sm-9">
					<select>
						<option>B</option>
					</select>
				</div>
			</div>
			<label class="col-sm-3 control-label" for="NomCouche">Pour affiner le résultat, vous pouvez spécifier des nuléro de début et de fin</label>
			<div>
			
			</div>

			<div class="form-group">
				<label class="col-sm-3 control-label" for="NomGroupe">Date</label>
				<div class="col-sm-9">
					<div class="row-fluid">
						<div class="input-group col-sm-5 pull-left">
							<span class="input-group-addon">Début</span> <input
								class="datepicker form-control" id="c_date_test"
								data-title="Date test" name="c_date_test"
								data-date-format="dd/mm/yyyy" value="14/09/2016" type="text">
							<span class="input-group-addon"><i
								class="glyphicon glyphicon-calendar"></i></span>
						</div>

						<div class="input-group col-sm-5 col-sm-offset-2  pull-left">
							<span class="input-group-addon">Fin</span> <input
								class="datepicker form-control" id="c_date_test"
								data-title="Date test" name="c_date_test"
								data-date-format="dd/mm/yyyy" value="14/09/2016" type="text">
							<span class="input-group-addon"><i
								class="glyphicon glyphicon-calendar"></i></span>
						</div>
					</div>
				</div>
			</div>

			<h1 class="page-header">Dossier(s) déposé(s) correspondant</h1>

			<table
				class="table table-bordered table-condensed table-hover table-striped">
				<thead>
					<tr>
						<th>Colonne1</th>
						<th>Colonne2</th>
						<th>Colonne3</th>
						<th>Colonne4</th>
						<th width="80">Actions</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>A1</td>
						<td>B1</td>
						<td>C1</td>
						<td>D1</td>
						<td class="text-center"><a class="btn-xs" title="Modifier"
							href=""> <i class="fff-page_white" title="Résumé dossier"></i>
						</a></td>
					</tr>
					<tr>
						<td>A2</td>
						<td>B2</td>
						<td>C2</td>
						<td>D2</td>
						<td class="text-center"><a class="btn-xs" title="Modifier"
							href=""> <i class="fff-page_white" title="Résumé dossier"></i>
						</a></td>
					</tr>
				</tbody>
			</table>
		</fieldset>
	</form>

</div>
<!-- end col-sm-9 -->