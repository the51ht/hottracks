
/****  음반  ****/
/* 예약상품 */
function musReserved(){
    var $target = $('.mus_mc_reserved_cont .swiper-container');
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
    $('.mus_mc_reserved_cont .swiper-slide-active').addClass('zoom_in');
}

$(function(){
    if(!$('.mus_mc_reserved_cont').length) return;
    musReserved();
    $(window).resize(function() {
        //musReserved();
        //$('.mus_mc_reserved_cont .swiper-slide-active').addClass('zoom_in');
    });
});



/* 주문내역 */
function musOrder(){
    var $target = $('.mus_mc_order_cont .swiper-container');
    var $parent = $('.mus_mc_order_cont');
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
    if($parent.find('.swiper-slide').length > 1) {
        musOrderSwiper = new Swiper($target.get(), slideOption);
        $parent.addClass('swiper-on');
    }
}

$(function(){
    if(!$('.mus_mc_order_cont').length) return;
    musOrder();
});



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
    if($(".mus_mc_new_album_cont .swiper-wrapper > li").length < 7){
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
    var $parent = $('.mus_mc_special_cont')
    saleListWrapInit = true;
    var slideOption = {
        observer: true,
        observeParents: true,
        slidesPerView: 3,
        spaceBetween: 36,
        slidesPerGroup: 3,
        loop: false,
        loopsSlide:3,
        navigation: {
            nextEl: '.mus_mc_special_cont .swiper-button-next',
            prevEl: '.mus_mc_special_cont .swiper-button-prev',
        },
        speed: 700,
    };
    if($parent.find('.swiper-slide').length > 3) {
        musSpecialSwiper = new Swiper($target.get(), slideOption);
        $parent.addClass('swiper-on');
    }
}

$(function(){
    if(!$('.mus_mc_special_cont').length) return;
    musSpecial();
});



