$(document).ready(function () {
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
});

$('nav a').on("click", function() { 
	$('nav').find('.active').removeClass('active'); 
	$(this).parent().addClass('active');
	$('nav').find('.in').removeClass('in');
});