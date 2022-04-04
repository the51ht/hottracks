

/*** 라이브 메인 ***/
/* 라이브 배너 */
function corLiveBanner(){
    var $target = $('.cor_live_banner .swiper-container');
    $target.each(function (index, element) {
        var $parent = $(this).parent('.cor_live_banner');
        $parent.addClass('live_idx_' + index);

        var slideOption = {
            slidesPerView: 'auto',
            speed: 700,
            spaceBetween: 0,
            centeredSlides: true,
            loop: true,
            loopsSlide: 1,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            }, 
            autoHeight: true,
            //autoplay: {
            //     delay: 5000,
            //     disableOnInteraction: false,
            //     //pauseOnMouseEnter: true,
            // },
            navigation: {
                nextEl: ('.live_idx_' + index + ' .swiper-button-next'),
                prevEl: ('.live_idx_' + index + ' .swiper-button-prev'),
            },
            pagination: {
                el: ('.hero_idx_' + index + ' .swiper-pagination'),
                type: 'fraction',
                formatFractionCurrent: function (number) {
                    return KyoboBookPub.ink.setPrependZero(number, 2);
                },
                formatFractionTotal: function (number) {
                    return KyoboBookPub.ink.setPrependZero(number, 2);
                }
            }
        };
      
        if($parent.find('.swiper-slide').length > 1) {
            htHeroBannerSwiper = new Swiper(this, slideOption);
            $parent.addClass('swiper-on');
            $parent.find('.option_box').css('display','flex');
        }
	});
}

$(function(){
    if(!$('.cor_live_banner').length) return;
    corLiveBanner();
    $('.cor_live_banner').find('.title, .sub_title').lettering('lines');
});

/* 라이브 다시보기 */
function livReplaySwiper(){
    var $target = $('.liv_replay_cont');
    $target.each(function (index, element) {
        var $parent = $(this).parent('.liv_replay_wrap');
        var slideOption = {
            spaceBetween: 0,
            observer: true,
            observeParents: true,
            slidesPerView:'auto',
            slidesPerGroup: 5,
            // loop: true,
            // loopsSlide:1,
            autoHeight: true,
            speed:1000,
            navigation: {
                nextEl: $($parent).find('.swiper-button-next'),
                prevEl: $($parent).find('.swiper-button-prev'),
            },

        };

        if($parent.find('.swiper-slide').length > 5) {
            livReplaySwiperCont = new Swiper(this, slideOption);
            $parent.addClass('swiper-on');
        }
	});
}

$(function(){
    if(!$('.liv_replay_cont').length) return;
    livReplaySwiper();
});


var calendarTabSwiperCont;

/* 라이브 달력 */
function calendarTabSwiper(){
    var $target = $('.calendar_tab');
    var $parent = $($target).parent();
    var slideOption = {
        slidesPerView: 'auto',
        spaceBetween:0,
        freeMode: true,
        observer: true,
        observeParents: true,
        slidesPerView:7,
        slidesPerGroup:7,
        speed:500,
        navigation: {
            nextEl: $($parent).find('.swiper-button-next'),
            prevEl:  $($parent).find('.swiper-button-prev'),
        },
    };
    calendarTabSwiperCont = new Swiper($target.get(), slideOption);
    $parent.addClass('swiper-on');
}

$(function(){
    if(!$('.calendar_tab').length) return;
    calendarTabSwiper();
});




/* 미리 만나는 라이브 */
// function livNewMsg(){
// 	var offsetPosition = $('.liv_list .li:first-child .alarm_chk02').offset();
// 	var y = offsetPosition.top - $('.liv_list').offset().top + 35;
// 	$('.liv_new_msg').css('top', y);
// }
// $(function(){
//     if(!$('.liv_new_msg').length) return;
// 	livNewMsg();
// 	$(window).resize(function() {
// 		livNewMsg();
// 	});
// });




$(function(){

    /* prod_replace_chk */
    $.fn.prod_replace_chk = function(){
        var tar = $(this).closest('.li').children('article.replace_prod_swap');
        var foldingChk = tar.hasClass('show_bubble');
        if (foldingChk){
            //tar.removeClass('show_bubble');
        } else {
            tar.addClass('show_bubble');
            //$(window).scrollTop(tar.offset().top - 250);
        }
    };
    
    $('.btn_prod_replace_chk').click(function(e){
        e.preventDefault();
        $(this).prod_replace_chk();
    });
    
    $('.replace_prod_swap .close_swap').click(function(e){
        e.preventDefault();
        $(this).parents('.replace_prod_swap').removeClass('show_bubble');
    });

    $('.replace_prod_swap .mySwiper').each(function (index, element) {
        var $parent = $(this).parent('.replace_prod_swap');
        $parent.addClass('idx_' + index);
  
        if($parent.find('.swiper-slide').length > 1) {
            var replaceSwiper = new CustomSwiper(this, {
              slidesPerView: 'auto',
              spaceBetween: 16,
              freeMode: true,
              observer: true,
              observeParents: true,
            }); 
        }
    });

});

/* 4단배너 */

function prod4_banner(){
    var $target = $('.prod4_banner .swiper-container');
    $target.each(function (index, element) {
        var $parent = $(this).parent('.prod4_banner');
        var slideOption = {
            observer: true,
            observeParents: true,
            slidesPerView: 'auto',
            centeredSlides: false,
            slidesPerGroup: 4,
            loop: true,
            loopsSlide: 1,
            spaceBetween:0,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            speed: 1000,
            navigation: {
                nextEl: $(element).find('.swiper-button-next'),
                prevEl: $(element).find('.swiper-button-prev'),
            },
            pagination: {
                el: $(element).find('.swiper-pagination'),
                type: 'fraction',
                formatFractionCurrent: function (number) {
                    return KyoboBookPub.ink.setPrependZero(number, 2);
                },
                formatFractionTotal: function (number) {
                    return KyoboBookPub.ink.setPrependZero(number, 2);
                }
            }
        };

        if($parent.find('.swiper-slide').length > 4) {
            var prod4_b = new Swiper(this, slideOption);
        }
    });
}

$(function(){
	if(!$('.prod4_banner').length) return;
	prod4_banner();
});
