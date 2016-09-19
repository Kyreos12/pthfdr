/*! DataTables Bootstrap 3 integration
 * ©2011-2014 SpryMedia Ltd - datatables.net/license
 */

/**
 * DataTables integration for Bootstrap 3. This requires Bootstrap 3 and
 * DataTables 1.10 or newer.
 *
 * This file sets the defaults and adds options to DataTables to style its
 * controls using Bootstrap. See http://datatables.net/manual/styling/bootstrap
 * for further information.
 */
(function(window, document, undefined){

var factory = function( $, DataTable ) {
"use strict";


/* Set the defaults for DataTables initialisation */
$.extend( true, DataTable.defaults, {
	dom:
		"<'row'<'col-sm-6'l><'col-sm-6'f>>" +
		"<'row'<'col-sm-12'tr>>" +
		"<'row'<'col-sm-6'i><'col-sm-6'p>>",
	renderer: 'bootstrap'
} );


/* Default class modification */
$.extend( DataTable.ext.classes, {
	sWrapper:      "dataTables_wrapper form-inline dt-bootstrap",
	sFilterInput:  "form-control input-sm",
	sLengthSelect: "form-control input-sm"
} );


/* API method to get paging information */
$.fn.dataTableExt.oApi.fnPagingInfo = function(oSettings)
{
	return {
		"iStart":         oSettings._iDisplayStart,
		"iEnd":           oSettings.fnDisplayEnd(),
		"iLength":        oSettings._iDisplayLength,
		"iTotal":         oSettings.fnRecordsTotal(),
		"iFilteredTotal": oSettings.fnRecordsDisplay(),
		"iPage":          oSettings._iDisplayLength === -1 ?
			0 : Math.ceil( oSettings._iDisplayStart / oSettings._iDisplayLength ),
		"iTotalPages":    oSettings._iDisplayLength === -1 ?
			0 : Math.ceil( oSettings.fnRecordsDisplay() / oSettings._iDisplayLength )
	};
};

/*
 * Natural Sort algorithm for Javascript - Version 0.7 - Released under MIT license
 * Author: Jim Palmer (based on chunking idea from Dave Koelle)
 * Contributors: Mike Grier (mgrier.com), Clint Priest, Kyle Adams, guillermo
 * See: https://github.com/overset/javascript-natural-sort/blob/master/naturalSort.js
 */
function naturalSort(a, b) {
	var re = /(^-?[0-9]+(\.?[0-9]*)[df]?e?[0-9]?$|^0x[0-9a-f]+$|[0-9]+)/gi,
		sre = /(^[ ]*|[ ]*$)/g,
		dre = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,
		hre = /^0x[0-9a-f]+$/i,
		ore = /^0/,
		// convert all to strings and trim()
		x = a.toString().replace(sre, '') || '',
		y = b.toString().replace(sre, '') || '',
		// chunk/tokenize
		xN = x.replace(re, '\0$1\0').replace(/\0$/, '').replace(/^\0/, '').split('\0'),
		yN = y.replace(re, '\0$1\0').replace(/\0$/, '').replace(/^\0/, '').split('\0'),
		// numeric, hex or date detection
		xD = parseInt(x.match(hre)) || (xN.length != 1 && x.match(dre) && Date.parse(x)),
		yD = parseInt(y.match(hre)) || xD && y.match(dre) && Date.parse(y) || null;
	
	// first try and sort Hex codes or Dates
	if (yD)
		if (xD < yD) return -1;
		else if (xD > yD) return 1;
	
	// natural sorting through split numeric strings and default strings
	for (var cLoc = 0, numS = Math.max(xN.length, yN.length); cLoc < numS; cLoc++) {
		// find floats not starting with '0', string or 0 if not defined (Clint Priest)
		var oFxNcL = !(xN[cLoc] || '')
			.match(ore) && parseFloat(xN[cLoc]) || xN[cLoc] || 0;
		var oFyNcL = !(yN[cLoc] || '')
			.match(ore) && parseFloat(yN[cLoc]) || yN[cLoc] || 0;
		// handle numeric vs string comparison - number < string - (Kyle Adams)
		if (isNaN(oFxNcL) !== isNaN(oFyNcL)) return (isNaN(oFxNcL)) ? 1 : -1;
		// rely on string comparison if different types - i.e. '02' < 2 != '02' < '2'
		else if (typeof oFxNcL !== typeof oFyNcL) {
			oFxNcL += '';
			oFyNcL += '';
		}
		
		if (oFxNcL < oFyNcL) return -1;
		if (oFxNcL > oFyNcL) return 1;
	}

	return 0;
}

/* pattern de détection des dates sous la forme dd/mm/yyyy */
$.fn.dataTable.ext.type.detect.unshift(
	function (d) {
		if (d.toString().match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/) == null) {
			return null;
		}
		
		return 'date';
    }
);

/* pattern de détection des dates sous la forme dd/mm/yyyy hh:mm */
/*$.fn.dataTable.ext.type.detect.unshift(
	function (d) {
		if (d.toString().match(/^(\d{1,2})\/(\d{1,2})\/(\d{4}) (\d{1,2}):(\d{1,2})$/) == null) {
			return null;
		}

		return 'date-heure';
    }
);*/

delete $.fn.DataTable.ext.type.order['string-pre'];

$.extend( $.fn.dataTableExt.oSort, {
	// ne pas implémenter string-pre, sinon jQueryDatatables n'appelera pas
	// string-asc ou string-desc

	"string-asc": function (a, b) {
		return naturalSort(a.toString().toLowerCase(), b.toString().toLowerCase());
    },
 
    "string-desc": function (a, b) {
		return naturalSort(a.toString().toLowerCase(), b.toString().toLowerCase()) * -1;
    },

    "date-pre": function ( a ) {
        if (a == null || a == "") {
            return 0;
        }

        var ukDatea = a.split('/');

        return (ukDatea[2] + ukDatea[1] + ukDatea[0]) * 1;
    },

    "date-asc": function ( a, b ) {
        return ((a < b) ? -1 : ((a > b) ? 1 : 0));
    },

    "date-desc": function ( a, b ) {
        return ((a < b) ? 1 : ((a > b) ? -1 : 0));
    },
/*
    "date-heure-pre": function ( a ) {
        if (a == null || a == "") {
            return 0;
        }

        var ukDatea = a.split(/(\d{1,2})\/(\d{1,2})\/(\d{4}) (\d{1,2}):(\d{1,2})/)

        return ((ukDatea[3] + ukDatea[2] + ukDatea[1]) * 100 + ukDatea[4] * 60 + ukDatea[5]) * 1;
    },

    "date-heure-asc": function ( a, b ) {
        return ((a < b) ? -1 : ((a > b) ? 1 : 0));
    },

    "date-heure-desc": function ( a, b ) {
        return ((a < b) ? 1 : ((a > b) ? -1 : 0));
    },
*/
    "html-pre": function (a) {
		var i = a.indexOf('class');

		if (i != -1) {
			if (a.indexOf('</i></a>') != -1) {
				return a.substring(i).toLowerCase();
			}

			if (a.indexOf('</i>') != -1) {
				return a.substring(i).toLowerCase();
			}

			// html traité comme une chaîne de caractères
			return a.replace(/<.*?>/g, '').toLowerCase();	
		}

		var img = a.indexOf('src');
		if (img != -1) {
			return a.substring(img).toLowerCase();
		}

		// html traité comme une chaîne de caractères
		return a.replace(/<.*?>/g, '').toLowerCase();
	}
});

$.fn.dataTableExt.oSort['html-num-pre'] = $.fn.dataTableExt.oSort['html-pre'];

/* Bootstrap style pagination control */
$.extend($.fn.dataTableExt.oPagination, {
	"bootstrap": {
		"fnInit": function(oSettings, nPaging, fnDraw) {
			var oLang = oSettings.oLanguage.oPaginate;
			var fnClickHandler = function(e) {
				e.preventDefault();
				if (oSettings.oApi._fnPageChange(oSettings, e.data.action)) {
					fnDraw(oSettings);
				}
			};
			$(nPaging).append(
				'<ul class="pagination">' +
				'<li class="first disabled"><a href="#">' + oLang.sFirst + '</a></li>' +
				'<li class="prev  disabled"><a href="#">' + oLang.sPrevious + '</a></li>' +
				'<li class="next  disabled"><a href="#">' + oLang.sNext + '</a></li>' +
				'<li class="last  disabled"><a href="#">' + oLang.sLast + '</a></li>' +
				'</ul>'
			);
			var els = $('a', nPaging);
			$(els[0]).bind('click.DT', {
				action: "first"
			}, fnClickHandler);
			$(els[1]).bind('click.DT', {
				action: "previous"
			}, fnClickHandler);
			$(els[2]).bind('click.DT', {
				action: "next"
			}, fnClickHandler);
			$(els[3]).bind('click.DT', {
				action: "last"
			}, fnClickHandler);
		},
		"fnUpdate": function(oSettings, fnDraw) {
			var iListLength = 5;
			var oPaging = oSettings.oInstance.fnPagingInfo();
			var an = oSettings.aanFeatures.p;
			var i, j, sClass, iStart, iEnd, iHalf = Math.floor(iListLength / 2);
			if (oPaging.iTotalPages < iListLength) {
				iStart = 1;
				iEnd = oPaging.iTotalPages;
			} else if (oPaging.iPage <= iHalf) {
				iStart = 1;
				iEnd = iListLength;
			} else if (oPaging.iPage >= (oPaging.iTotalPages - iHalf)) {
				iStart = oPaging.iTotalPages - iListLength + 1;
				iEnd = oPaging.iTotalPages;
			} else {
				iStart = oPaging.iPage - iHalf + 1;
				iEnd = iStart + iListLength - 1;
			}
			for (i = 0, iLen = an.length; i < iLen; i++) {
				// Remove the middle elements
				$('li:gt(1)', an[i]).filter(':not(.next,.last)').remove();
				// Add the new list items and their event handlers
				for (j = iStart; j <= iEnd; j++) {
					var act = "";
					if (j == oPaging.iPage + 1) {
						act = 'class="active"';
					}
					$('<li ' + act + '<a href="/ref#sClass"></a>' + '<a href="#">' + j + '</a></li>')
						.insertBefore($('.next,.last', an[i])[0])
						.bind('click', function(e) {
							e.preventDefault();
							oSettings._iDisplayStart = (parseInt($('a', this).text(), 10) - 1) * oPaging.iLength;
							fnDraw(oSettings);
						});
				}
				// Add / remove disabled classes from the static elements
				if (oPaging.iPage === 0) {
					$('li:first', an[i]).addClass('disabled');
					$('li.prev').addClass('disabled');
				} else {
					$('li:first', an[i]).removeClass('disabled');
					$('li.prev').removeClass('disabled');
				}
				if (oPaging.iPage === oPaging.iTotalPages - 1 || oPaging.iTotalPages === 0) {
					$('li:last', an[i]).addClass('disabled');
					$('li.next').addClass('disabled');
				} else {
					$('li:last', an[i]).removeClass('disabled');
					$('li.next').removeClass('disabled');
				}
			}
		}
	}
});



/* Bootstrap paging button renderer */
DataTable.ext.renderer.pageButton.bootstrap = function ( settings, host, idx, buttons, page, pages ) {
	var api     = new DataTable.Api( settings );
	var classes = settings.oClasses;
	var lang    = settings.oLanguage.oPaginate;
	var btnDisplay, btnClass;

	var attach = function( container, buttons ) {
		var i, ien, node, button;
		var clickHandler = function ( e ) {
			e.preventDefault();
			if ( !$(e.currentTarget).hasClass('disabled') ) {
				api.page( e.data.action ).draw( false );
			}
		};

		for ( i=0, ien=buttons.length ; i<ien ; i++ ) {
			button = buttons[i];

			if ( $.isArray( button ) ) {
				attach( container, button );
			}
			else {
				btnDisplay = '';
				btnClass = '';

				switch ( button ) {
					case 'ellipsis':
						btnDisplay = '&hellip;';
						btnClass = 'disabled';
						break;

					case 'first':
						btnDisplay = lang.sFirst;
						btnClass = button + (page > 0 ?
							'' : ' disabled');
						break;

					case 'previous':
						btnDisplay = lang.sPrevious;
						btnClass = button + (page > 0 ?
							'' : ' disabled');
						break;

					case 'next':
						btnDisplay = lang.sNext;
						btnClass = button + (page < pages-1 ?
							'' : ' disabled');
						break;

					case 'last':
						btnDisplay = lang.sLast;
						btnClass = button + (page < pages-1 ?
							'' : ' disabled');
						break;

					default:
						btnDisplay = button + 1;
						btnClass = page === button ?
							'active' : '';
						break;
				}

				if ( btnDisplay ) {
					node = $('<li>', {
							'class': classes.sPageButton+' '+btnClass,
							'aria-controls': settings.sTableId,
							'tabindex': settings.iTabIndex,
							'id': idx === 0 && typeof button === 'string' ?
								settings.sTableId +'_'+ button :
								null
						} )
						.append( $('<a>', {
								'href': '#'
							} )
							.html( btnDisplay )
						)
						.appendTo( container );

					settings.oApi._fnBindAction(
						node, {action: button}, clickHandler
					);
				}
			}
		}
	};

	attach(
		$(host).empty().html('<ul class="pagination"/>').children('ul'),
		buttons
	);
};



/*
 * TableTools Bootstrap compatibility
 * Required TableTools 2.1+
 */
if ( DataTable.TableTools ) {
	// Set the classes that TableTools uses to something suitable for Bootstrap
	$.extend( true, DataTable.TableTools.classes, {
		"container": "DTTT btn-group",
		"buttons": {
			"normal": "btn btn-default",
			"disabled": "disabled"
		},
		"collection": {
			"container": "DTTT_dropdown dropdown-menu",
			"buttons": {
				"normal": "",
				"disabled": "disabled"
			}
		},
		"print": {
			"info": "DTTT_print_info"
		},
		"select": {
			"row": "active"
		}
	} );

	// Have the collection use a bootstrap compatible drop down
	$.extend( true, DataTable.TableTools.DEFAULTS.oTags, {
		"collection": {
			"container": "ul",
			"button": "li",
			"liner": "a"
		}
	} );
}

}; // /factory


// Define as an AMD module if possible
if ( typeof define === 'function' && define.amd ) {
	define( ['jquery', 'datatables'], factory );
}
else if ( typeof exports === 'object' ) {
    // Node/CommonJS
    factory( require('jquery'), require('datatables') );
}
else if ( jQuery ) {
	// Otherwise simply initialise as normal, stopping multiple evaluation
	factory( jQuery, jQuery.fn.dataTable );
}


})(window, document);