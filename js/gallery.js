$(document).ready(function() {	

	$('.galleryImage').click(function() {
		var number = $(this).attr('id');
		$('.project').hide();
		$('#project'+number).removeClass('hide');
		$('#project'+number).show();
		$.scrollTo('.main-content', {
			duration: 'slow',
			offsetTop: '100'
			});
	});
	
});