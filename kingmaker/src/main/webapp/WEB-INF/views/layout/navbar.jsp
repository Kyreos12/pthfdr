<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page contentType="text/html; charset=UTF-8"%>
<%@ page pageEncoding="UTF-8"%>

<!-- nav class="navbar navbar-default navbar-fixed-top">
	<div class="container-fluid">
		<div class="navbar-header">
			<button type="button" class="navbar-toggle collapsed"
				data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
				<span class="sr-only">Toggle navigation</span> <span
					class="icon-bar"></span> <span class="icon-bar"></span> <span
					class="icon-bar"></span>
			</button>

			<a class="navbar-brand" href="#"><spring:message code="navbar.name"/></a>
		</div>

		<div class="navbar-collapse collapse"
			id="bs-example-navbar-collapse-1">
			<ul class="nav navbar-nav" value="TEST">
				<li class="active"><a href="<c:url value='/index'/>">Par adresse</a></li>
				<li class="active"><a href="<c:url value='/rechercheParNumeroDossier'/>">Par numéro de dossier</a></li>
				<li class="active"><a href="<c:url value='/rechgercheParEtatEtDate'/>">Par état et date</a></li>
				<li class="active"><a href="<c:url value='/rechercheParAccesGeographique'/>">Par accès cartographique</a></li>
				
			</ul>
		</div>
	</div>
</nav-->

<nav class="navbar navbar-default navbar-fixed-top">
	<div class="container-fluid">
		<div class="navbar-header">
			<button type="button" class="navbar-toggle collapsed"
				data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
				<span class="sr-only">Toggle navigation</span> <span
					class="icon-bar"></span> <span class="icon-bar"></span> <span
					class="icon-bar"></span>
			</button>

			<a class="navbar-brand" href="#">Gerco 2</a>
		</div>

		<div class="navbar-collapse collapse"
			id="bs-example-navbar-collapse-1">
			<ul class="nav navbar-nav navbar-right">
				<li class="dropdown"><a data-toggle="dropdown"
					class="dropdown-toggle" href="#"> <i
						class="glyphicon glyphicon-question-sign"></i> Aide <b
						class="caret"></b>
				</a>

					<ul class="dropdown-menu" role="menu">
						<li><a data-target="#a-propos-dialog" data-toggle="modal"
							role="button" href="#a-propos-dialog"><i class="fff-script"></i>
								A propos...</a></li>
					</ul></li>
			</ul>

			<ul class="nav navbar-nav">


			</ul>
		</div>
	</div>
</nav>