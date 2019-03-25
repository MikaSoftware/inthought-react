$(document).ready(function () {

	// ===== Advance search form ====
	$('#advance_search_btn').on('click', function () {
	    $('#adv-search').show();
	    $('#advance_search_btn_x').show();
	    $('#advance_search_btn').hide();
	});
	$('#advance_search_btn_x').on('click', function () {
	    $('#adv-search').hide();
	    $('#advance_search_btn_x').hide();
	    $('#advance_search_btn').show();
	});
	
	// ===== Residential and Commercial forms toggle ====
	$('#residential').on('click', function () {
	    $('#commercial-form').hide();
	    $('#residential-form').show();
	    $('#residential').addClass('active');
	    $('#commercial').removeClass('active');
	    $('#residential-form').addClass('active show');
	});
	$('#commercial').on('click', function () {
	    $('#commercial-form').show();
	    $('#residential-form').hide();
	    $('#commercial').addClass('active');
	    $('#commercial-form').addClass('active show');
	    $('#residential').removeClass('active');
	});
	
});
