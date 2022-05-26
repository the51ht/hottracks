/*
 * name : ui_search_ink.js
 * desc : 통합검색 공통 자바스크립트
 * writer : glim
 * create : 2021/12/14
 * update :
 * -
 */

$(function () {
	// 리스트형보기/썸네일형보기 토글 버튼 이벤트 설정
	KyoboBookPub.ink.setSwitchListBtn(function(tg){
		if(tg.hasClass('view_type_img')){
			tg.find('.prod_area').removeClass('horizontal');
		}else{
			tg.find('.prod_area').addClass('horizontal');
		}
	});

	// $('.filter_integrate_box .btn_filter_depth1').on('click', function(event) {
	$(document).on('click.search', '.filter_integrate_box .btn_filter_depth1', function(event) {
		var that;
		that = event.currentTarget;

		$('.filter_integrate_box .btn_filter_depth1').each(function() {
			if (this !== that) {
				$(this).closest('.menu_item').find('.active').removeClass('active');
				$(this).closest('.menu_item').removeClass('active');
				$(this).removeClass('active');
			}
		});

		$(that).toggleClass('active');

		if ($(that).hasClass('active')) {
			$(that).closest('.menu_item').addClass('active');
		} else {
			$(that).closest('.menu_item').removeClass('active');
		}
	});
	// $('.filter_list_box .btn_filter_depth1').on('click', function(event) {
	$(document).on('click.search', '.filter_list_box .btn_filter_depth1', function(event) {
		var that;
		that = event.currentTarget;

		$(that).toggleClass('active');

		if ($(that).hasClass('active')) {
			$(that).closest('.menu_item').addClass('active');
		} else {
			$(that).closest('.menu_item').removeClass('active');
		}
	});
	// $('.btn_filter_depth2').on('click', function(event) {
	$(document).on('click.search', '.btn_filter_depth2', function(event) {
		var that;
		that = event.currentTarget;

		$(that).closest('.item_depth1').find('.btn_filter_depth2').each(function() {
			if (this !== that) {
				$(this).closest('.menu_item').find('.active').removeClass('active');
				$(this).closest('.menu_item').removeClass('active');
				$(this).removeClass('active');
			}
		});
		$(that).toggleClass('active');

		if ($(that).hasClass('active')) {
			$(that).closest('.filter_list').addClass('active');
		} else {
			$(that).closest('.filter_list').removeClass('active');
		}
	});
	// $('.btn_filter_depth3').on('click', function(event) {
	$(document).on('click.search', '.btn_filter_depth3', function(event) {
		$(this).toggleClass('active');

		if ($(this).hasClass('active')) {
			$(this).closest('.filter_list').addClass('active');
			$(this).closest('.menu_item').addClass('active');
		} else {
			$(this).closest('.filter_list').removeClass('active');
			$(this).closest('.menu_item').removeClass('active');
		}
	});


	// 검색 전 - 지금 많이 찾는 상품 or 함께 많이 본 상품 swiper
	setSearchKeywordProdSwiper();
	// 검색 후 - 관련 상품
	setSearchRelatedProdSwiper();
	// 검색 후 - 관련 이벤트
	setSearchRelatedEventSwiper();
	searchBannerSwiperInit();
	hotKeywordSwiperInit();
	searchEventSwiperInit();
	searchReccomendSwiperInit();
	searchAuthorSwiperInit();
	setSpecCompareLayer();
	relatedKeywordMore();

	setFloatingEventBanner();
});

// 검색 전 - 지금 많이 찾는 상품 or 함께 많이 본 상품 swiper
function setSearchKeywordProdSwiper() {
	if ($('.keyword_prod_swiper_wrap .keyword_prod_swiper .swiper-slide').length > 1){
		$('.control_keyword_prod').css('display', 'block');

		var keywordProdSwiper = new CustomSwiper('.keyword_prod_swiper_wrap .keyword_prod_swiper', {
			slidesPerView: '1',
			speed: 500,
			spaceBetween: 20,
			navigation: {
				nextEl: $('.control_keyword_prod').find('.swiper_control_box .swiper-button-next')[0],
				prevEl: $('.control_keyword_prod').find('.swiper_control_box .swiper-button-prev')[0],
			},
			pagination: {
				el: $('.control_keyword_prod').find('.swiper_control_box .swiper-pagination')[0],
				type: "fraction",
				formatFractionCurrent: function (number) {
					return KyoboBookPub.ink.setPrependZero(number, 2);
				},
				formatFractionTotal: function (number) {
					return KyoboBookPub.ink.setPrependZero(number, 2);
				},
			},
		});
	} else {
		$('.control_keyword_prod').css('display', 'none');
	}
}

// 검색 후 - 관련 상품
function setSearchRelatedProdSwiper() {
	if ($('.related_prod_swiper_wrap .related_prod_swiper .swiper-slide').length > 1){
		var keywordRelatedProdSwiper = new CustomSwiper('.related_prod_swiper_wrap .related_prod_swiper', {
			slidesPerView: '1',
			speed: 500,
			spaceBetween: 20,
			navigation: {
				nextEl: $('.related_prod_swiper_wrap').find('.swiper_control_box .swiper-button-next')[0],
				prevEl: $('.related_prod_swiper_wrap').find('.swiper_control_box .swiper-button-prev')[0],
			},
			pagination: {
				el: $('.related_prod_swiper_wrap').find('.swiper_control_box .swiper-pagination')[0],
				type: "fraction",
				formatFractionCurrent: function (number) {
					return KyoboBookPub.ink.setPrependZero(number, 2);
				},
				formatFractionTotal: function (number) {
					return KyoboBookPub.ink.setPrependZero(number, 2);
				},
			},
		});
	} else {
		$('.related_prod_swiper_wrap').find('.swiper_control_box').css('display', 'none');
	}
}

// 검색 후 - 관련 이벤트
function setSearchRelatedEventSwiper() {
	if ($('.related_event_swiper_wrap .event_swiper_wrap .swiper-slide').length > 1){
		var keywordEventSwiper = new CustomSwiper('.related_event_swiper_wrap .event_swiper_wrap .swiper-container', {
			slidesPerView: 'auto',
			slidesPerGroup: 2,
			speed: 500,
			navigation: {
				nextEl: $('.control_related_event').find('.swiper_control_box .swiper-button-next')[0],
				prevEl: $('.control_related_event').find('.swiper_control_box .swiper-button-prev')[0],
			},
			pagination: {
				el: $('.control_related_event').find('.swiper_control_box .swiper-pagination')[0],
				type: "fraction",
				formatFractionCurrent: function (number) {
					return KyoboBookPub.ink.setPrependZero(number, 2);
				},
				formatFractionTotal: function (number) {
					return KyoboBookPub.ink.setPrependZero(number, 2);
				},
			},
		});
	} else {
		$('.control_related_event').css('display', 'none');
	}
}

// 상단 배너 swiper
function searchBannerSwiperInit(){
	// swiper 재생/멈춤 버튼 타입 script

	$('.search_banner_wrap .banner_area').each(function(){
		var searchBannerSwiperEl = $(this);

		if( $('.swiper-slide', searchBannerSwiperEl).length > 1 ) {
			var serhchBannerSwiper = new CustomSwiper(searchBannerSwiperEl, {
				init: false,
				slidesPerView: 1,
				speed: 800,
				observer: true,
				observeParents: true,
				initialSlide: 0,
				loop: true,
				navigation: {
					nextEl: $('.swiper_auto_control_area .swiper-button-next', $(this))[0],
					prevEl: $('.swiper_auto_control_area .swiper-button-prev', $(this))[0],
				},
				pagination: {
					el: $('.swiper_auto_control_area .swiper-pagination', $(this))[0],
					type: 'fraction',
					formatFractionCurrent: function (number) {
						return KyoboBookPub.ink.setPrependZero(number, 2);
					},
					formatFractionTotal: function (number) {
						return KyoboBookPub.ink.setPrependZero(number, 2);
					},
				},
			});
			serhchBannerSwiper.init();
		}else{
			$('.swiper_auto_control_area', searchBannerSwiperEl).remove();
		}
	});
}

// 실시간 검색어 swiper
function hotKeywordSwiperInit(){
	if ($('.hot_keyword_list .swiper-slide').length <= 1) return;
	hotKeywordSwiper = new CustomSwiper('.hot_keyword_list', {
		direction: 'vertical',
		slidesPerView: 'auto',
		loop: true,
		speed: 500,
		autoplay: {
			delay: 2000,
		},
	});

	$('.hot_keyword_list .swiper-slide .hot_keyword_link').attr('tabindex', -1);

	hotKeywordSwiper.on('slideChangeTransitionStart', function() {
		$('.hot_keyword_list .swiper-slide:not(.swiper-slide-active) .hot_keyword_link').attr('tabindex', -1);
		$('.hot_keyword_list .swiper-slide.swiper-slide-active .hot_keyword_link').attr('tabindex', 0);
	});
	$('.hot_keyword_list').on('mouseover.search', pauseAutoPlay);
	$('.hot_keyword_list').on('mouseout.search', resumeAutoPlay);
	$('.hot_keyword_list .hot_keyword_link').on('focusin.search', pauseAutoPlay);
	$('.hot_keyword_list .hot_keyword_link').on('focusout.search', resumeAutoPlay);

	function pauseAutoPlay(event) {
		// console.log('pauseAutoPlay', event.type);
		hotKeywordSwiper.autoplay.stop();
	}
	function resumeAutoPlay(event) {
		// console.log('resumeAutoPlay', event.type);
		hotKeywordSwiper.autoplay.start();
	}
}

// 검색결과 이벤트 배너
function searchEventSwiperInit(){
	if ($('.event_swiper_wrap .swiper-slide').length > 3) {
		var searchEventSwiper = new CustomSwiper($('.event_swiper_wrap .swiper-container'), {
			slidesPerView: 'auto',
			speed: 500,
			navigation: {
				nextEl: $('.event_swiper_wrap').find('.swiper-button-next')[0],
				prevEl: $('.event_swiper_wrap').find('.swiper-button-prev')[0],
			},
		});
	}else{
		$('.event_swiper_wrap').find('.swiper-button-next').remove();
		$('.event_swiper_wrap').find('.swiper-button-prev').remove();
	}
}

// 함께 많이 본 상품
function searchReccomendSwiperInit(){
	if($('.prod_swiper_wrap.outside_nav').length > 0) {
		$('.prod_swiper_wrap.outside_nav').each(function () {
			var prodNavSwiperEl = $(this);
			if ($('.swiper-slide', prodNavSwiperEl).length > 6) {
				var prodNavSwiper = new CustomSwiper($('.swiper-container', prodNavSwiperEl), {
					slidesPerView: 'auto',
					speed: 500,
					navigation: {
						nextEl: $('.swiper-button-next', prodNavSwiperEl)[0],
						prevEl: $('.swiper-button-prev', prodNavSwiperEl)[0],
					},
				});
			}else{
				$('.swiper-button-next', prodNavSwiperEl).remove();
				$('.swiper-button-prev', prodNavSwiperEl).remove();
			}
		});
	}
}

// 저자정보
function searchAuthorSwiperInit(){
	if ($('.author_info_swiper_wrap .swiper-slide').length > 2) {
		var authorSwiper = new CustomSwiper($('.author_info_swiper_wrap .swiper-container'), {
			slidesPerView: 'auto',
			speed: 500,
			navigation: {
				nextEl: $('.author_info_swiper_wrap').find('.swiper-button-next')[0],
				prevEl: $('.author_info_swiper_wrap').find('.swiper-button-prev')[0],
			},
		});
	}else{
		$('.author_info_swiper_wrap').find('.swiper-button-next').remove();
		$('.author_info_swiper_wrap').find('.swiper-button-prev').remove();
	}
}

function setSpecCompareLayer(){
	var layerWrap;
	layerWrap = '.spec_compare_layer_wrap';

	if($(layerWrap).length > 0){
		// open
		$('.btn_spec_compare').on('click', function(){
			if($(layerWrap).hasClass('open')) return;
			$(layerWrap).addClass('open')
		});

		// close
		$('.btn_layer_close').on('click', function(){
			if(!$(layerWrap).hasClass('open')) return;
			$(this).closest(layerWrap).removeClass('open');
		});
	}
}

// 연관검색어 더보기 toggle
function relatedKeywordMore(){
	var keywordWrap = $('.related_keyword_wrap .related_keyword_inner');
	if(keywordWrap.length === 0) return;

	var keywordSwiperEl = $('.tag_wrap', keywordWrap);

	// 연관검색어 더보기 버튼 노출 체크
	function contOverflowCheck(e) {
		return (e.offsetWidth < e.scrollWidth);
	}

	if(!contOverflowCheck(keywordSwiperEl.get(0))) return;

	keywordWrap.addClass('active');

	var tagSwiper;
	function tagSwiperInit(){
		if ( keywordSwiperEl.length > 0 ) {
			tagSwiper = new CustomSwiper(keywordSwiperEl, {
				slidesPerView: 'auto',
				observer: true,
				observeParents: true,
				speed: 500,
			});
		}
	}

	tagSwiperInit();

	$('.related_keyword_wrap .btn_tag_more').on('click', function(){
		if($(this).closest('.related_keyword_inner').hasClass('more')){
			$(this).find('.hidden').text('더보기');
			$(this).closest('.related_keyword_inner').removeClass('more');

			tagSwiperInit();
		}else{
			$(this).find('.hidden').text('접기');
			$(this).closest('.related_keyword_inner').addClass('more');

			tagSwiper.destroy();
		}
	});
}

function setFloatingEventBanner() {
	if ($('.floating_event_wrapper').length > 0) {
		$('.floating_event_wrapper .btn_close').on('click.search', function (event) {
			$(this).closest('.floating_event_wrapper').remove();
			$('.floating_event_wrapper .btn_close').off('click.search');
		});
	}
}