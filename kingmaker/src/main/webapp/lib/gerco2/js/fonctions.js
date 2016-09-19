
// gestion des datagrids (grille avec pagination, filtre et tri)
$.fn.dataTable['datagrid'] = {
    "iDisplayLength": 10,
    "aLengthMenu": [ 10, 25, 50, 100, 250 ],
    "oLanguage": {
        "sLengthMenu": "_MENU_ lignes par page",
        "sEmptyTable": "Aucune donnée",
        "sInfo": "De _START_ à _END_ sur _TOTAL_ lignes",
        "sInfoEmpty": "",
        "sInfoFiltered": "(_MAX_ lignes filtrées)",
        "sInfoThousands": " ",
        "sLoadingRecords": "Chargement...",
        "sProcessing": "En cours...",
        "sSearch": "Recherche",
        "sZeroRecords": "Aucun résultat trouvé",
        "oAria": {
            "sSortAscending": " - click/return to sort ascending",
            "sSortDescending": " - click/return to sort descending"
        },
        "oPaginate": {
        	"sPrevious": "&larr;",
        	"sNext": "&rarr;"
        }
    },
    "fnDrawCallback": function() {
        $('.mypopover').popover();
    }
};

/**
 * Options par défaut à passer au constructeur de select2, pour que select2
 * prenne toute la largeur disponible et propose le champ de recherche dès qu'il
 * y a 10 résultats et plus.
 */
var optionsSelect2WithSearch = {
    minimumResultsForSearch: 10,
    dropdownAutoWidth: true,
    placeholderOption: function () { return undefined; },
    width: '100%'
};

// cela s'applique aux tables ayant la classe datagrid
$(document).ready(function() {
    $('.datagrid').dataTable($.fn.dataTable['datagrid']);
    
    // liste déroulante améliorée
    $("select").select2(optionsSelect2WithSearch);
    
    // bulle d'aide
    $('.mypopover').popover();
    
    // calendrier (date)
    window.setTimeout(function() {
		$(".datepicker").datetimepicker({
	        language: "fr",
	        startView: "month",
	        minView: 2,
	        maxView: 4,
	        todayHighlight: true
	    });
	}, 10);
});
