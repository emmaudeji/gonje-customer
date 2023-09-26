
	$(".bannerslider").slick({
	dots: true,
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1
	});


 $(".trensdingslider").slick({
				dots: true,
				infinite: true,
				slidesToShow: 4,
				slidesToScroll: 1,
				 responsive: [
				{
					 breakpoint: 1201,
					 settings: {
						slidesToShow: 3,

				}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,

					}
				},
				{
					breakpoint: 640,
					settings: {
						slidesToShow: 1,

					}
				}
			]
			});



$( ".recepieotr" ).hover(
  function() {
    $('.recepimg1').hide();
  }, function() {
    $('.recepimg1').show();
  }
);


	$(".bannerslider").slick({
	dots: true,
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1
	});


 $(".trensdingslider").slick({
				dots: true,
				infinite: true,
				slidesToShow: 4,
				slidesToScroll: 1,
				 responsive: [
				{
					 breakpoint: 1201,
					 settings: {
						slidesToShow: 3,

				}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,

					}
				},
				{
					breakpoint: 640,
					settings: {
						slidesToShow: 1,

					}
				}
			]
			});



$( ".recepieotr" ).hover(
  function() {
    $('.recepimg1').hide();
  }, function() {
    $('.recepimg1').show();
  }
);



	//Initiate WOW
	new WOW().init();
	



