// fixed header
$(window).scroll(function() {
	if ($(this).scrollTop() > 100) {
		$(".header").addClass("fixed");
	} 
	else {
		$(".header").removeClass("fixed");
	}
});

// navbar -> hover
function after(element) {
	element.style.color = "#835511";
}
function before(element) {
	element.style.color = "#FF9800";
}

// Movable home text
$('.home_data').on('mousemove', function(e) {
	centerX = $(this).width() / 2;
	var moveX = centerX - e.offsetX;
	$(this).css({
		'transform': 'perspective(500px) rotateY(' + moveX / 50 + 'deg)'
	});
});

// Products animation
function fadeIn() {
	document.getElementById('person').innerHTML;
	$("#product").animate({top: '+=30px', opacity: '0'}, "slow");
   $("#product").animate({top: '-=30px', opacity: '1'}, "slow");
}
function fadeOut() {
	document.getElementById('person').innerHTML;
	$("#product").animate({top: '+=30px', opacity: '0'}, "slow");
   $("#product").animate({top: '-=30px', opacity: '1'}, "slow");
}