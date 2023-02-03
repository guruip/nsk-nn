if (window.innerWidth <= 620) {
	document.getElementById("loggo").src = "./img/main-phone.png";
	
  }else {
		document.getElementById("loggo").src = "./img/main.png";
}

$(document).ready(function(){
	$('.slider').slick({
		arrows:false,
		dots:true,
		slidesToShow:2,
		autoplay:true,
		speed:1000,
		autoplaySpeed:5000,
		responsive:[
			{
				breakpoint: 1066,
				settings: {
					slidesToShow:1
				}
			},
		]
	});
});
