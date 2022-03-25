/****  웰컴메인  ****/
/* 핫트랙스 라이브 */
function welLive(){
    var $target = $('.wel_live_cont .swiper-container');
    var slideOption = {
        observer: true,
        observeParents: true,
        slidesPerView: 'auto',
        centeredSlides: false,
        loop: true,
        loopsSlide: 1,
        spaceBetween: 0,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        speed: 1000,
        pagination: {
            el: $('.wel_live_cont').find('.swiper-pagination')[0],
            type: 'fraction',
            formatFractionCurrent: function (number) {
                return KyoboBookPub.ink.setPrependZero(number, 2);
            },
            formatFractionTotal: function (number) {
                return KyoboBookPub.ink.setPrependZero(number, 2);
            }
        },
        navigation: {
            nextEl: '.wel_live_cont .swiper-button-next',
            prevEl: '.wel_live_cont .swiper-button-prev',
        },
    };
    welLiveSwiper = new Swiper($target.get(), slideOption);
}

$(function(){
    if(!$('.wel_live_cont').length) return;
    welLive();
});



/* MD PICK */
function mdPick(){
    var $target = $('.wel_md_pick_cont .swiper-container');
    $target.each(function (index, element) {
        var $parent = $(this).parent('.type5_banner01');
        var slideOption = {
            observer: true,
            observeParents: true,
            slidesPerView: 5,
            centeredSlides: true,
            loop: true,
            spaceBetween: 0,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            speed: 700,
            on: {
                slideChangeTransitionEnd: function(){
                    $('.wel_md_pick_cont .swiper-slide-active').addClass('zoom_in');
                },
                slideChange: function() {
                    $('.wel_md_pick_cont .swiper-slide-active').removeClass('zoom_in');
                }
            },
            navigation: {
                nextEl: ('.wel_md_pick_cont .swiper-button-next'),
                prevEl: ('.wel_md_pick_cont .swiper-button-prev'),
            }
        };
        musReservedSwiper = new Swiper($target.get(), slideOption);
        $('.wel_md_pick_cont .swiper-slide-active').addClass('zoom_in');
    });
}

$(function(){
    if(!$('.wel_md_pick_cont').length) return;
    mdPick();
});



/* 실시간 홈쇼핑 */
function welSearch(){
    var $target = $('.wel_search_list .swiper-container');
    var slideOption = {
        direction: 'vertical',
        slidesPerView: 'auto',
        loop: true,
        loopsSlide: 1,
        spaceBetween: 0,
        touchRatio: 0,  //드래그 금지
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
    },
        speed: 500,
    };
    welSearchSwiper = new Swiper($target.get(), slideOption);
}

$(function(){
    if(!$('.wel_search_cont').length) return;
    welSearch();

    $('.btn_wel_search').on('click', function(e) {
        e.preventDefault();
        if($(this).closest('.wel_search_cont').hasClass('on')){
            welSearch();
            $(this).closest('.wel_search_cont').removeClass('on');
        }else{
            welSearchSwiper.destroy();
            $(this).closest('.wel_search_cont').addClass('on');
        }
    });  
    $('.btn_wel_search_cl').on('click', function(e) {
        e.preventDefault();
        welSearch();
        $(this).closest('.wel_search_cont').removeClass('on');
    });
});











/* 지금 이 상품을 */
function wel_now_banner(){
    var $target = $('.wel_now_banner.swiper-container');
    var slideOption = {
        observer: true,
        observeParents: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true,
        loopsSlide: 1,
        spaceBetween: 0,
        autoplay: {
            delay:0,
            disableOnInteraction: false,
        },
        speed: 15000,
    };
    var wel_now_b = new Swiper($target.get(), slideOption);

    $(document).on('mouseenter', '.wel_now_banner.swiper-container', function(){
        //slideOption.autoplay = false;
        //new Swiper($target.get(), slideOption);
    });
    
    $(document).on('mouseleave', '.wel_now_banner .swiper-slide', function(){
        //slideOption.autoplay = {
            //delay:0,
            //disableOnInteraction: false,
       //}
        new Swiper($target.get(), slideOption);
    });
    

}
$(function(){
    if(!$('.wel_now_banner').length) return;
    wel_now_banner();      
});	







/*  기획전 배너 */
function wel_exehibition_banner(){
    var $target = $('.wel_exehibition_banner .swiper-container');
    $target.each(function (index, ele) {
        var $parent = $(this).parent('.wel_exehibition_banner');
        var slideOption = {
            slidesPerView: 2,
            slidesPerColumn:2,
            slidesPerGroup: 2,
            spaceBetween: 0,
            observer: true,
            observeParents: true,
            // loop: true,
            // loopsSlide: 1,
            spaceBetween: 0,
            speed: 700,
            pagination: {
                el:  $(ele).find('.swiper-pagination')[0],
                type: 'fraction',
                formatFractionCurrent: function (number) {
                    return KyoboBookPub.ink.setPrependZero(number, 2);
                },
                formatFractionTotal: function (number) {
                    return KyoboBookPub.ink.setPrependZero(number, 2);
                }
            },
            navigation: {
                nextEl: $(ele).find('.swiper-button-next'),
                prevEl: $(ele).find('.swiper-button-prev'),
            },
        };

        if($parent.find('.swiper-slide').length > 4) {
            var thumb2bannerSwiper = new Swiper(this, slideOption);
        }
    });
}

$(function(){
    if(!$('.wel_exehibition_banner').length) return;
    wel_exehibition_banner();
});



/* 큐레이션 */
function curation_btn(val){
    if( $(val).closest('.li').hasClass('on')){
        $(val).closest('.li').removeClass('on')
    }else{
        $(val).closest('.curation_marker').find('.li').removeClass('on')
        $(val).closest('.li').addClass('on')
    }
}



/* 선물이 필요한 순간 */
function welGift(){
    var $target = $('.wel_gift_cont .swiper-container');
    var slideOption = {
        observer: true,
        observeParents: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true,
        loopsSlide: 1,
        spaceBetween: 36,
        autoplay: {
            delay:0,
            disableOnInteraction: true,
        },
        pagination: {
            el: ('.wel_gift_cont .swiper-pagination'),
            type: "progressbar",
        },
        speed: 3500,
        allowTouchMove: false
    };
    welGiftSwiper = new Swiper($target.get(), slideOption);
}

$(function(){
    if(!$('.wel_gift_cont').length) return;
    welGift();
});










$(function(){
    if(!$('.wel_category_banner').length) return;
    wel_category_banner();

    function wel_category_banner(){
        var $target = $('.wel_category_banner .swiper-container');
        $target.each(function (index, ele) {
            var $parent = $(this).parent('.wel_category_banner');
            var slideOption = {
                slidesPerView: 'auto',
                slidesPerGroup: 2,
                spaceBetween: 0,
                observer: true,
                observeParents: true,
                spaceBetween: 0,
                speed: 700,
                navigation: {
                    nextEl: $($parent).find('.swiper-button-next'),
                    prevEl: $($parent).find('.swiper-button-prev'),
                },
            };

            if($parent.find('.swiper-slide').length > 2) {
                var thumb2bannerSwiper = new Swiper(this, slideOption);
                $parent.addClass('swiper-on');
            }
        });
    }
});



/* wel_category_tab */
$(function(){
    if(!$('.wel_category_tab').length) return;
	$(window).resize (resizeBox).resize();
	function resizeBox(){
		function scrollEvent() {
		 	var locS =  $(window).scrollTop();
            var locA1 = $('.wel_category_tab').offset().top - 100;
            if( locS < locA1) {
                $('.wel_category_tab').removeClass('on');
                $('.sticky_tab a').removeClass('on');
            } else {
                $('.wel_category_tab').addClass('on');
            }
		}
		$(window).scroll(function() {
			scrollEvent();
		});
		$(window).resize(function() {
			scrollEvent();  
		});
	}
});