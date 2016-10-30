$(document).ready(function() {

	var carouselCount = $(".carousel").length;

	if(carouselCount > 0){
		for (var i = 0; i < carouselCount; i++){
			var carousel = $(".carousel").eq(i);
			var countItem = carousel.find(".carousel__item").length;
			if ( countItem <= 5 ){
				carousel.find(".carousel__arrow").addClass("carousel__arrow_disabled");
			}

			carousel.find(".carousel__list").customCarousel({
				nextSelector: carousel.find(".carousel__arrow_next"),
                prevSelector: carousel.find(".carousel__arrow_prev")
			});
		}
	}

	if($(".brands__list").length > 0){
		$(".brands__list").customCarousel({
			nextSelector: $(".brands__arrow_next"),
	        prevSelector: $(".brands__arrow_prev")
		});
	}

	if($(".promo__carousel").length > 0){
		$(".promo__carousel").customCarousel({
			changeSelector: $(".promo__point"),
			slideTimeout: 5000,
			afterSlideCallback: function(e){
				$(".promo__point").removeClass("promo__point_active");
				$(".promo__point").eq(e.currentIndex).addClass("promo__point_active");
			}
		});
	}

	$(".menu__button").click(function(e){
		e.preventDefault();
		var self = $(this);
		var parent = self.closest(".menu");
		parent.find(".menu__list").slideToggle(300);
	});

	$(".faq__question").click(function(e){
		e.preventDefault();
		var self = $(this);
		var parent = self.closest(".faq__item");
		parent.toggleClass("faq__item_active");
		parent.find(".faq__answer").slideToggle(300);
	});
});