$(document).ready(function(){
	$('#one').on('click',function(){
		$(this).html("<b>You just clicked ME!</b>");
	});

$('#two').on('click',function(){
		$('#four').slideToggle();
	});


$('#three').on('click',function(){
		$(this).hide();
	});


$('#f1').on('click',function(){
		$(this).fadeOut(600);
		$(this).fadeIn(500);
	});



$('#f2').on('click',function(){
		$('f2').fadeTo(1000,0.5);
	});

});






