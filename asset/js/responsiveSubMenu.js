document.addEventListener('DOMContentLoaded', subNavHeader)
document.addEventListener('DOMContentLoaded', subNavRespond)

	
	
function subNavHeader() {
  	$(document).ready(function(){
  		$(".sub-menu>ul").before("<p>In this section:</p>"); 
	});
}

function subNavRespond() {
  	$(document).ready(function(){
		$(".blocks").append($(".sub-menu").clone(true).removeClass().addClass("bottom-submenu"));
	});
}

function toggle()
	$(document).ready(function() {
  		$('#toggle').click(function() {
    			$('.header__bottom-tier').slideToggle('slow');
  		});
	});
}
