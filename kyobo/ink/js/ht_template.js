/***** PC 공통 *****/
/*HTR-P-CTG-LIST-001.html*/
$(function(){
    //lnb menu
    $(document).on('click', '.ht_lnb_cont > li', function(e){
        if($(this).hasClass('view_all') || e.isDefaultPrevented()) return;

        if($(this).hasClass('on')) {
            $(this).removeClass('on');
        } else {
            $(this).addClass('on');//.siblings().removeClass('on');
        }
    });
    //2depth
    $(document).on('click', '.dep2>li', function(e){
        if( e.isDefaultPrevented()) return;
        e.preventDefault();

        if($(this).hasClass('on')) {
            $(this).removeClass('on');
        } else {
            $(this).addClass('on').siblings().removeClass('on');
        }
    });
    //3depth
    $(document).on('click', '.dep3>li', function(e){
        e.preventDefault();
    });

    //커스텀 셀렉트 value 값 가져오기
    $(document).on ('click', '.ui-selectmenu-menu', function(){
        var customVal = $(this).find('.ui-menu').attr('aria-activedescendant');
        var selecIndex =  customVal.split('-')[ customVal.split('-').length - 1] - 1;
        var realSelecId  = $(this).find('.ui-menu').attr('aria-labelledby').split('-')[0]; 
        var selectedVal = $('#'+realSelecId).children('option').eq(selecIndex).val();
        $('#'+realSelecId).attr('value', selectedVal);
            console.log(selectedVal);
    });
    //상품 정렬 토글 버튼
    $(document).on('click', '.list_view_type_btn', function(){
       
       if( $(this).hasClass('row_view')) {
        $(this).removeClass('row_view');   
        $('.evt_products').removeClass('row_dir');
       } else {
        $(this).addClass('row_view');    
        $('.evt_products').addClass('row_dir');
       }
    })
});

$(function(){
    // 마감임박, 반응최고 스와이프
    //상품 개수 2개이하일때 ul class="evt_slider nonswipe"로 설정
    if ($('.swiper.evt_swiper').length == 0 ) return; 

    $('.swiper.evt_swiper').each(function(i, ele){
        if($(ele).find('.swiper-slide').length > 3){
            var eventSwiper = new CustomSwiper(this, {
                slidesPerView: 'auto',
                spaceBetween: 0,
                freeMode: true,
                observer: true,
                observeParents: true,
            });
        }else{
           $(ele).find('.swiper-wrapper').removeClass('swiper-wrapper');
           $(this).removeClass('evt_swiper');
        }
    });
})

/* 4단배너 */
function thumb4banner(){
    var $target = $('.thumb4_banner .swiper-container');
    $target.each(function (index, element) {
        var $parent = $(this).parent('.thumb4_banner');
        $parent.addClass('thumb4_idx_' + index);
        
        var slideOption = {
            observer: true,
            observeParents: true,
            slidesPerView: 'auto',
            centeredSlides: false,
            loop: true,
            loopsSlide: 1,
            spaceBetween:0,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            speed: 700,
            navigation: {
                nextEl: ('.thumb4_idx_' + index + ' .swiper-button-next'),
                prevEl: ('.thumb4_idx_' + index + ' .swiper-button-prev'),
            },
            pagination: {
                el: ('.thumb4_idx_' + index + ' .swiper-pagination'),
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
            thumb4bannerSwiper = new Swiper(this, slideOption);
        }
	});
}

$(function(){
    if(!$('.thumb4_banner').length) return;
    //thumb4banner();
});

/*이벤트 기획전 말풍선*/
$(function(){
    if($('.deadline_bubble').length < 1) return;

    function bubble_binding(){
        var evt_bubs = document.querySelectorAll('.deadline_bubble');
        for(var bub_num = 0; bub_num  < evt_bubs.length;  bub_num ++) {
           bubbleHighLight(evt_bubs[bub_num]);
        }
    }

    function bubbleHighLight (elem){
        var headerHeight = $('header').height();
       if( $(window).scrollTop() > $(elem).offset().top -  headerHeight - 400) {
            $(elem).addClass('highlight');
       } else {
            $(elem).removeClass('highlight');
       };

    } 

    bubble_binding()
    window.addEventListener('scroll', function(){
        bubble_binding();
    });

});


/* 이벤트 기획 Banner */
function evtPlanBanner(){
    var $target = $('.evt_plan_banner .swiper-container');
    $target.each(function (index, element) {
        var $parent = $(this).parent('.evt_plan_banner');
        $parent.addClass('evtPlan_idx_' + index);
    
        var slideOption = {
            observer: true,
            observeParents: true,
            slidesPerView: 3,
            centeredSlides: false,
            loop: false,
            loopsSlide: 1,
            spaceBetween:36,
            speed: 700,
            navigation: false,
            pagination: {
                el: ('.evtPlan_idx_' + index + ' .swiper-pagination'),
                type: "progressbar",
            },
            mousewheel: true,
        };

        if($parent.find('.swiper-slide').length > 3) {
            evtPlanBannerSwiper = new Swiper(this, slideOption);
        }
	});
}

$(function(){
    if(!$('.evt_plan_banner').length) return;
    evtPlanBanner();
});





/***  Banner ***/
/* Hero Banner */
$(function(){
    if(!$('.wel_hero_banner').length) return;
    if($('.wel_hero_banner .swiper-slide').length > 1) {
        var heroSwiper = new CustomSwiper('.wel_hero_banner .swiper-container', {
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
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
                //pauseOnMouseEnter: true,
            },
            navigation: {
                nextEl: $('.wel_hero_banner').find('.swiper-button-next')[0],
                prevEl: $('.wel_hero_banner').find('.swiper-button-prev')[0],
            },
            pagination: {
                el: $('.wel_hero_banner').find('.swiper-pagination')[0],
                type: 'fraction',
                formatFractionCurrent: function (number) {
                    return KyoboBookPub.ink.setPrependZero(number, 2);
                },
                formatFractionTotal: function (number) {
                    return KyoboBookPub.ink.setPrependZero(number, 2);
                }
            }
        });
        $('.wel_hero_banner .option_box').css('display','flex');
    }
    $('.wel_hero_banner .play_pause_box').click(function(){
        if ( $(this).hasClass('play') ) {
            heroSwiper.autoplay.stop();
            $(this).removeClass('play').addClass('pause');
        } else {
            heroSwiper.autoplay.start();
            $(this).removeClass('pause').addClass('play');
        }
    });
});

function btnHeroListOp(){
    $('body').css('overflow','hidden');
    $('.pop_hero').addClass('on');
}
function btnHeroListCl(){
    $('body').css('overflow','');
    $('.pop_hero').addClass('off');
    setTimeout(function(){
        $('.pop_hero').removeClass('off').removeClass('on');
    }, 600);
}

$(function(){
    if(!$('.wel_hero_banner').length) return;
    $('.wel_hero_banner').find('.s1, .s2').lettering('lines');
});



/* 광고배너 */
function htBeltBanner(){
    var $target = $('.ht_belt_banner .swiper-container');
    $target.each(function (index, element) {
        var $parent = $(this).parent('.ht_belt_banner');
        $parent.addClass('belt_idx_' + index);
    
        var slideOption = {
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            loop: true,
            loopsSlide: 1,
            autoHeight: true,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            }, 
            // autoplay: {
            //     delay: 5000,
            //     disableOnInteraction: false,
            // },
            speed: 700,
            navigation: {
                nextEl: ('.belt_idx_' + index + ' .swiper-button-next'),
                prevEl: ('.belt_idx_' + index + ' .swiper-button-prev'),
            },
            pagination: {
                el: ('.belt_idx_' + index + ' .swiper-pagination'),
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
            welBeltBannerSwiper = new Swiper(this, slideOption);
        }
	});
}

$(function(){
    if(!$('.ht_belt_banner').length) return;
    htBeltBanner();
    $('.ht_belt_banner').find('.s1, .s2').lettering('lines');
});



/* 하단 공통 배너 */
function htUnderBanner(){
    var $target = $('.ht_under_banner .swiper-container');
    $target.each(function (index, element) {
        var $parent = $(this).parent('.ht_under_banner');
        $parent.addClass('ht_under_idx_' + index);
    
        var slideOption = {
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            loop: true,
            loopsSlide: 1,
            autoHeight: true,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            }, 
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            speed: 700,
            navigation: {
                nextEl: ('.ht_under_idx_' + index + ' .swiper-button-next'),
                prevEl: ('.ht_under_idx_' + index + ' .swiper-button-prev'),
            },
            pagination: {
                el: ('.ht_under_idx_' + index + ' .swiper-pagination'),
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
            htUnderBannerSwiper = new Swiper(this, slideOption);
        }
	});
}

$(function(){
    if(!$('.ht_under_banner').length) return;
    htUnderBanner();

    $('.ht_under_banner .play_pause_box').click(function(){
        if ( $(this).hasClass('play') ) {
            htUnderBannerSwiper .autoplay.stop();
            $(this).removeClass('play').addClass('pause');
        } else {
            htUnderBannerSwiper .autoplay.start();
            $(this).removeClass('pause').addClass('play');
        }
    });
});









/* Tab */
function tabSwiper(){
    var $target = $('.tab_swiper');
    var slideOption = {
        slidesPerView: 'auto',
        spaceBetween: 0,
        freeMode: true,
        observer: true,
        observeParents: true,
        speed:300,
    };
    tabSwiperCont = new Swiper($target.get(), slideOption);
}

$(function(){
    if(!$('.tab_swiper').length) return;
    tabSwiper();
});

$(function(){
    $.fn.tabTy = function(){
        $.each(this, function(i,v){
            $(v).closest('.tab_link').find('a').removeClass('on');
            $(v).addClass('on');
            var s = $(v).attr('href');
            $(s).parent().find('.tab_cont').removeClass('on');
            $(s).addClass('on');
        });
    };
    $('.tab_link a').click(function(){    
        $(this).tabTy();
        return false;
    });
});


/* anchor 이동 */
$(function(){
    $.fn.anchorChk = function(){
        $.each(this, function(i,v){
            var s = $(v).attr('href');
            $('html, body').stop().animate({scrollTop:$(s).offset().top - 60 }, 500 );
        });
    };

    $('.btn_anchor_chk').click(function(){    
        $(this).anchorChk();
        return false;
    });
});




























