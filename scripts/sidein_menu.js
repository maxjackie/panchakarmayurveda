var timeout = 500;
var closetimer = 0;
var ddmenuitem = 0;

$j = jQuery.noConflict();

function menu_open(){ 
	menu_canceltimer();
	menu_close();
	ddmenuitem = $j(this).find('ul').eq(0).css('visibility', 'visible');
}

function menu_close(){ 
	if(ddmenuitem) 
		ddmenuitem.css('visibility', 'hidden');
}

function menu_timer(){ 
	closetimer = window.setTimeout(menu_close, timeout);
}

function menu_canceltimer(){
	if(closetimer){ 
		window.clearTimeout(closetimer);
		closetimer = null;
	}
}

$j(document).ready(function(){
	
	$j('#menu > ul li').bind('mouseover', menu_open);
	$j('#menu > ul li').bind('mouseout', menu_timer);
	
	$j(".toggleBtn").hover(function(){
			if($j("#slideMenu").hasClass('closed')){
				$j("#slideMenu").animate({left:0}, 500, function(){
					$j(this).removeClass('closed').addClass('opened');
					$j("a#toggleLink").removeClass('toggleBtn').addClass('toggleBtnHighlight');
				});
			}//if close
			
			$j('#slideMenu').bind("mouseleave",function(){
				$j("#slideMenu").animate({left:-350}, 500, function(){
					$j(this).removeClass('opened').addClass('closed');
					$j("a#toggleLink").removeClass('toggleBtnHighlight').addClass('toggleBtn');
				});
			});//bind close
	});//toggleBtn click close

	$j("a.anchorLink").click(function () {	
		elementClick = $j(this).attr("href");
		destination = $j(elementClick).offset().top;
		$j("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination}, 1000 );
		return false;
	})
	
	/* Mouse Enter Event (that is mouseover event)
	$j(".toggleBtn").bind("mouseenter",function(){
			if($j("#slideMenu").hasClass('closed')){
				$j("#slideMenu").animate({left:0}, 500, function(){
					$j(this).removeClass('closed').addClass('opened');
					$j("a#toggleLink").removeClass('toggleBtn').addClass('toggleBtnHighlight');
				});
			}//if close
			
			$j('#slideMenu').bind("mouseleave",function(){
				$j("#slideMenu").animate({left:-300}, 500, function(){
					$j(this).removeClass('opened').addClass('closed');
					$j("a#toggleLink").removeClass('toggleBtnHighlight').addClass('toggleBtn');
				});
			});//bind close
	});//toggleBtn click close*/

});//ready close

document.onclick = menu_close;



