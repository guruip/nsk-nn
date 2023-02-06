/*ниже код для выбора главного фото*/
if (window.innerWidth <= 620) {
	document.getElementById("loggo").src = "./img/main-phone.png";
	
  }else {
		document.getElementById("loggo").src = "./img/main.png";
}
/*ниже код для слайдера*/
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
/*ниже код для первой кнопки чтобы скролила к форме*/
const $button = document.getElementById('formscroll');
const $form = document.getElementById('wrapeers');
$button.addEventListener('click', e => {
  $form.scrollIntoView({ 
    block: 'nearest',
    behavior: 'smooth',
  });
});
/*ниже код для кнопки "подробнее о нас" чтобы скролила к Портфолио*/
const $butt = document.getElementById('aboutus');
const $for = document.getElementById('wrapscroll');
$butt.addEventListener('click', e => {
  $for.scrollIntoView({ 
    block: 'nearest',
    behavior: 'smooth',
  });
});