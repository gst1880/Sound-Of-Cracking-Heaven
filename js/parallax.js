$(window).scroll(function() {
	var st=$(this).scrollTop();
	$(".select-1").css({
		"transform" : "translate(0%, " +st/2+ "%"
	});
	$(".timeline").css({
		"transform" : "translate(0%, " -st/2+ "%"
	});
});
