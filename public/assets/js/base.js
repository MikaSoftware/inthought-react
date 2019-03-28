$(document).ready(function () {

	$("#sidebar").mCustomScrollbar({
	     theme: "minimal"
	});
	
	$('#sidebarCollapse').on('click', function () {
		// open or close navbar
	    $('#sidebar,#main,#sidebarCollapse,#return-to-top,body').toggleClass('active');
	        
	});

	$('.nav-item.dropdown-btn > a').click(function(){
		$(this).find('.fa-caret-down').toggle();
		$(this).find('.fa-caret-right').toggle();
		$(this).parent().find('ul').toggle();
	});
	    
        // ===== Scroll to Top ==== 
	$(window).scroll(function() {
	    if ($(this).scrollTop() >= 100) {        // If page is scrolled more than 50px
	        $('#return-to-top').fadeIn(200);    // Fade in the arrow
	    } else {
	        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
	    }
	});
	$('#return-to-top').click(function() {      // When arrow is clicked
	    $('body,html').animate({
	        scrollTop : 0                       // Scroll to top of body
	    }, 500);
	});
	
});
