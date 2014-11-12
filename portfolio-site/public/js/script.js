$(window).scroll(function(){
	var targetPx1 = 650;
	var targetPx2 = 1500;
	var targetPx3 = 2400;
	var targetPx4 = 3200;
	var targetPx5 = 4000;



	//Change this to set the height of your nav bar so it hides properly. If you have a box shadow you may have to adjust this number to be height + shadow distance
	var navBarHeight = 66;

	//Change this to the ID of the content you are trying to show.
	var targetID = "#global-nav";
	
	//Window Math
	var scrollTo = $(window).scrollTop(),
	// docHeight = $(document).height(),
	// windowHeight = $(window).height();
	scrollPx = scrollTo;
	// scrollPercent = scrollPercent.toFixed(1);
		
	// $('#percentageCounter h1').text(scrollPercent+"%");

	if((scrollPx > targetPx1) && (scrollPx < targetPx2)) {
		$(targetID).css({ 'display': 'block', "background-color": "#2c5379"});
		
	}

	if((scrollPx >= targetPx2) && (scrollPx < targetPx3)) {
		$(targetID).css({ 'display': 'block', "background-color": "#071420"});
		
	}
	
	if((scrollPx > targetPx3) && (scrollPx < targetPx4)) {
		$(targetID).css({ 'display': 'block', "background-color": "#F8823C"});
		
	}

	if((scrollPx > targetPx4) && (scrollPx < targetPx5)) {
		$(targetID).css({ 'display': 'block', "background-color": "#222222"});
		
	}

	if(scrollPx < targetPx1) {
		$(targetID).css({ display:'none' });
	}
								
}).trigger('scroll');




function scrollNav() {
  $('#fixed-nav-container a').click(function(){  
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 10
    }, 1000);
    return false;
  });
}
scrollNav();



function scrollButton() {
  $('#page-down-arrow a').click(function(){  
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 1000);
    return false;
  });
}
scrollButton();