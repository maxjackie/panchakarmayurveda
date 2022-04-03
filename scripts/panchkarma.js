 function addLoadEvent(func) {
	var oldonload = window.onload;
		if (typeof window.onload != 'function') {
			window.onload = func;
		} else {
			window.onload = function() {
			oldonload();
			func();
		}
	}
}

function menuClass(id) {
	$j = jQuery.noConflict();
	$j(".active").removeClass("active");
	$j("#"+id).addClass("active");
}