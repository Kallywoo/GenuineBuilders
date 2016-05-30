$(document).ready(function() {	
	// Mobile menu slide up/down
	$('.mobileNav #mobileNavButton img').click(function() {
		if($('#mobileMenu').is(':hidden')) {
			$('#mobileMenu').slideDown('normal');
		} else {
			$('#mobileMenu').slideUp('normal');
		}
	});
	
	$('#mobileMenu > ul > li > a').click(function() {
	    $('#mobileMenu').slideUp('normal');
	});
	
	//lightbox gallery display - not on mobile
	$(function() {
		if (screen.width >= 560) {
			$('.selectedGallery a').lightBox();
		} else {
			$('.selectedGallery a').removeAttr('href');
		};
	});
	
	if ($('ul').hasClass('testimonials')) { 
		// quotes
		$('ul.testimonials li').quovolver();
	}
	
	$('.contactTab').hover(function(){
		$('.contactTab').animate({left:'0px'}, 300);
	}, function(){
		$('.contactTab').animate({left:'-20px'}, 300);
	})
	
	if (navigator.appVersion.indexOf("Chrome/") != -1) {
		$('body').css('letter-spacing','0.08em');
		$('#recommendation1,#recommendation2,#recommendation3').css('letter-spacing','0.05em')
	}
});