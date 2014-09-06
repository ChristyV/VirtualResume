jQuery(document).ready(function ($) {
	$(window).stellar();
	
	var links = $('#navigation').find('li');
	slide = $('.slide');
	button = $('.button');
	mywindow = $(window);
	htmlbody = $('html,body');
	
	slide.waypoint(function (event, direction) {
		dataslide = $(this).attr('data-slide');
		if (direction === 'down') {
			$('#navigation li[data-slide="'+ dataslide + '"]').addClass('current').prev().removeClass('current');
		}
		else {
			$('#navigation li[data-slide="' + dataslide + '"]').addClass('current').next().removeClass('current');
		}
	});
	mywindow.scroll(function () {
        if (mywindow.scrollTop() == 0) {
            $('#navigation li[data-slide="1"]').addClass('current');
            $('#navigation li[data-slide="2"]').removeClass('current');
        }
    });
	function goToByScroll(dataslide) {
	    htmlbody.animate({
	        scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
	    }, 2000, 'easeInOutExpo');
	}
	links.click(function (e) {
	    e.preventDefault();
	    dataslide = $(this).attr('data-slide');
	    goToByScroll(dataslide);
	});
	button.click(function (e) {
	    e.preventDefault();
	    dataslide = $(this).attr('data-slide');
	    goToByScroll(dataslide);
	});
});