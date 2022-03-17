
/****  음반  ****/
$(function(){
    if(!$('.wel_hero_banner').length) return;
    $('.wel_hero_banner').find('.s1, .s2').lettering('lines');
});



/* 예약상품 */
function musReserved(){
    var $target = $('.mus_mc_reserved_cont .swiper-container');
    var slideOption = {
        observer: true,
        observeParents: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true,
        loopsSlide: 1,
        spaceBetween:15,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        speed: 700,
		pagination: {
			el: $('.mus_mc_reserved_cont').find('.swiper-pagination')[0],
			type: 'fraction',
            formatFractionCurrent: function (number) {
                return KyoboBookPub.ink.setPrependZero(number, 2);
            },
            formatFractionTotal: function (number) {
                return KyoboBookPub.ink.setPrependZero(number, 2);
            }
		},
        on: {
            slideChangeTransitionEnd: function(){
                var circles = document.getElementsByClassName("circle_txt");
                for (var i = 0; i < circles.length; i++) {
                    var circleType = new CircleType(circles.item(i));
                }
                $('.mus_mc_reserved_cont .swiper-slide-active').addClass('zoom_in');
            },
            slideChange: function() {
                $('.mus_mc_reserved_cont .swiper-slide-active').removeClass('zoom_in');
            }
        },
        navigation : {
            nextEl : '.swiper-button-next', // 다음 버튼 클래스명
            prevEl : '.swiper-button-prev', // 이번 버튼 클래스명
        }
    };
    musReservedSwiper = new Swiper($target.get(), slideOption);
}

$(function(){
    if(!$('.mus_mc_reserved_cont').length) return;
    musReserved();
});



/* 주문내역 */
function musOrder(){
    var $target = $('.mus_mc_order_cont .swiper-container');
    var slideOption = {
        observer: true,
        observeParents: true,
        slidesPerView: 'auto',
        centeredSlides: false,
        loop: false,
        loopsSlide: 1,
        spaceBetween: 0,
        /*autoplay: {
            delay:5000,
            disableOnInteraction: false,
        },*/
        speed: 700,
        navigation : {
            nextEl : '.swiper-button-next', // 다음 버튼 클래스명
            prevEl : '.swiper-button-prev', // 이번 버튼 클래스명
        },
    };
    musOrderSwiper = new Swiper($target.get(), slideOption);
}

$(function(){
    if(!$('.mus_mc_order_cont').length) return;
    musOrder();
});



/* 실시간차트 */
function btn_chart_view(val){
    if( $(val).closest('.li').hasClass('active')){
        $(val).closest('.li').removeClass('active')
    }else{
        $(val).closest('.mus_mc_chart_cont').find('.li').removeClass('active')
        $(val).closest('.li').addClass('active')
    }
}
    
/* 실시간차트 4초 단위 롤링 */
    var i = 0;
    setInterval(function(){
    if(i>4){
        i = 0;
        $(".mus_mc_chart_cont .li.active").removeClass("active");
        $(".mus_mc_chart_cont .li").eq(i).addClass("active");
    }else{
        $(".mus_mc_chart_cont .li.active").removeClass("active");
        $(".mus_mc_chart_cont .li").eq(i).addClass("active");
        i++;
    }
    }, 4000)

    

/* 새로 나온 음반 */
function musNewAlbum(){
    var $target = $('.mus_mc_new_album_cont .swiper-container');
    var slideOption = {
        observer: true,
        observeParents: true,
        slidesPerView: 3,
        slidesPerColumn:2,
        loop: false,
        spaceBetween: 30,
        speed: 700,
        pagination: {
			el: $('.mus_mc_new_album_cont').find('.swiper-pagination')[0],
			type: 'fraction',
            formatFractionCurrent: function (number) {
                return KyoboBookPub.ink.setPrependZero(number, 2);
            },
            formatFractionTotal: function (number) {
                return KyoboBookPub.ink.setPrependZero(number, 2);
            }
		},
        navigation : {
            nextEl : '.swiper-button-next', // 다음 버튼 클래스명
            prevEl : '.swiper-button-prev', // 이번 버튼 클래스명
        },
    };
    if($target .find('.swiper-slide').length > 6) {
        musNewAlbumSwiper = new Swiper($target.get(), slideOption);
    }
    //musNewAlbumSwiper = new Swiper($target.get(), slideOption);
}

$(function(){
    if(!$('.mus_mc_new_album_cont').length) return;
    musNewAlbum();

    
    /* 새로 나온 음반 목록 개수에 따라 클래스 추가*/
    if($(".mus_mc_new_album .mus_mc_new_album_cont .swiper-wrapper > li").length < 7){
        $(".mus_mc_new_album .mus_mc_new_album_cont .swiper-wrapper").addClass("list_lenght_warp");
    }else{
        $(".mus_mc_new_album .mus_mc_new_album_cont .swiper-wrapper").removeClass("list_lenght_warp");
    }
});

    

/* 팬사인회 소식 */
function musFan(){
    var $target = $('.mus_mc_fan_cont .swiper-container');
    var slideOption = {
        observer: true,
        observeParents: true,
        slidesPerView: 'auto',
        centeredSlides: false,
        loop: false,
        loopsSlide: 1,
        spaceBetween: 0,
        /*autoplay: {
            delay:5000,
            disableOnInteraction: false,
        },*/
        speed: 700,
		pagination: {
			el: $('.mus_mc_fan_cont').find('.swiper-pagination')[0],
			type: 'fraction',
            formatFractionCurrent: function (number) {
                return KyoboBookPub.ink.setPrependZero(number, 2);
            },
            formatFractionTotal: function (number) {
                return KyoboBookPub.ink.setPrependZero(number, 2);
            }
		},
        navigation : {
            nextEl : '.swiper-button-next', // 다음 버튼 클래스명
            prevEl : '.swiper-button-prev', // 이번 버튼 클래스명
        }
    };
    musFanSwiper = new Swiper($target.get(), slideOption);
}

$(function(){
    if(!$('.mus_mc_fan_cont').length) return;
    musFan();
});



/* 해외 POP 음반 */
/* 해외 POP 음반 PC 버전 swiper */
function musPopContAdd(){
    var $target = $('.mus_mc_pop_cont_add .swiper-container');
    var slideOption = {
        observer: true,
        observeParents: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true,
        loopsSlide: 1,
        spaceBetween:15,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        speed: 700,
		pagination: {
			el: $('.mus_mc_pop_cont_add').find('.swiper-pagination')[0],
			type: 'fraction',
            formatFractionCurrent: function (number) {
                return KyoboBookPub.ink.setPrependZero(number, 2);
            },
            formatFractionTotal: function (number) {
                return KyoboBookPub.ink.setPrependZero(number, 2);
            }
		},
        on: {
            slideChangeTransitionEnd: function(){
                $('.mus_mc_pop_cont_add .swiper-slide-active').addClass('zoom_in');
            },
            slideChange: function() {
                $('.mus_mc_pop_cont_add .swiper-slide-active').removeClass('zoom_in');
            }
        },
        navigation : {
            nextEl : '.swiper-button-next', // 다음 버튼 클래스명
            prevEl : '.swiper-button-prev', // 이번 버튼 클래스명
        }
    };
    musPopContAddSwiper = new Swiper($target.get(), slideOption);
}

$(function(){
    if(!$('.mus_mc_pop_cont_add').length) return;
    musPopContAdd();
});

function musPop(){
	var musPopThumb = new Swiper('.mus_mc_pop_thumb', {
        /*
        centeredSlides: true,
        centeredSlidesBounds: true,
        slidesPerView: 6,
        watchOverflow: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,*/
        direction: 'vertical',
        observer: true,
        observeParents: true,
        slidesPerView: 6,
        slideToClickedSlide: true,
        loop: false,
        loopedSlides: 3,
        speed: 600,
        /*autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },*/
        loopAdditionalSlides: 1
    });
    
    var musPopImg = new Swiper('.mus_mc_pop_img', {
        /*
        watchOverflow: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        preventInteractionOnTransition: true,
        navigation:'false',
        effect: 'fade',
        loop: true,
        fadeEffect: {
            crossFade: true
        },
        thumbs: {
            swiper: musPopThumb
        },*/
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        observer: true,
        observeParents: true,
        navigation:'false',
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        thumbs: {
            swiper: musPopThumb
        },
        loop: true,
        speed: 600,
        loopAdditionalSlides: 1
    });
    
    musPopImg.on('slideChangeTransitionStart', function() {
        musPopThumb.slideTo(musPopImg.activeIndex);
    });

    musPopThumb.on('transitionStart', function(){
        musPopImg.slideTo(musPopThumb.activeIndex);
    });
/*
    musPopImg.controller.control = musPopThumb;
    musPopThumb.controller.control = musPopImg;
    */
}

$(function(){
    if(!$('.mus_mc_pop_cont').length) return;
    if($('.mus_mc_pop_img').find('.swiper-slide').length > 1) {
        musPop();
    }
    $(window).resize(function() {
        musPop();
    });
});



/* LP SHOP */
function musLpshop(){
    var $target = $('.mus_mc_lpshop_cont .swiper-container');
    var slideOption = {
        observer: true,
        observeParents: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true,
        loopsSlide: 1,
        spaceBetween:0,
        autoplay: {
            delay:0,
            disableOnInteraction: false,
        },
        pagination: {
            el: ('.mus_mc_lpshop_cont .swiper-pagination'),
            type: "progressbar",
        },
        speed: 3500,
    };
    musLpshopSwiper = new Swiper($target.get(), slideOption);
}

$(function(){
    if(!$('.mus_mc_lpshop_cont').length) return;
    musLpshop();
});



/* 특별한 할인상품 스와이프 */
function musSpecial(){
    var $target = $('.mus_mc_special_cont .swiper-container');
    saleListWrapInit = true;
    var slideOption = {
        observer: true,
        observeParents: true,
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        loopsSlide:1,
        pagination: {
            el: ('.mus_mc_special_cont .swiper-pagination'),
        },
        navigation: {
            nextEl: '.mus_mc_special_cont .swiper-button-next',
            prevEl: '.mus_mc_special_cont .swiper-button-prev',
        },
    };
    musSpecialSwiper = new Swiper($target.get(), slideOption);
}

$(function(){
    if($('.mus_mc_special_cont .swiper-slide').length > 3 ){
        musSpecial();
    }
});



