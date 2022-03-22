/********** PC 공통 **********/
/***** LNB *****/
$(function(){
    //lnb menu
    $(document).on('click', '.ht_lnb_cont > li', function(e){
        if($(this).hasClass('view_all') || e.isDefaultPrevented()) return;

        if($(this).hasClass('on')) {
            $(this).removeClass('on');
        } else {
            $(this).addClass('on').siblings().removeClass('on');
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
});










/***** Banner *****/
/* Hero Banner */
function htHeroBanner(){
    var $target = $('.wel_hero_banner .swiper-container');
    $target.each(function (index, element) {
        var $parent = $(this).parent('.wel_hero_banner');
        $parent.addClass('hero_idx_' + index);
    
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
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
                //pauseOnMouseEnter: true,
            },
            navigation: {
                nextEl: ('.hero_idx_' + index + ' .swiper-button-next'),
                prevEl: ('.hero_idx_' + index + ' .swiper-button-prev'),
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
    if(!$('.wel_hero_banner').length) return;
    htHeroBanner();
    $('.wel_hero_banner').find('.s1, .s2').lettering('lines');
});


$(function(){
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
            autoplay: {
                 delay: 5000,
                 disableOnInteraction: false,
            },
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



/* 4단배너 */
function thumb4banner(){
    var $target = $('.thumb4_banner .swiper-container');
    $target.each(function (index, element) {
        var $parent = $(this).parent('.thumb4_banner');
        $parent.addClass('thumb4_idx_' + index);
        
        var slideOption = {
            observer: true,
            observeParents: true,
            slidesPerView: 4,
            centeredSlides: false,
            slidesPerGroup: 4,
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
    thumb4banner();
});










/***** From *****/
/*** Tab ***/
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


/* Tab Swiper */
function tabSwiper(){
    var $target = $('.tab_swiper');
    $target.each(function (index, element) {
        var $parent = $(this);
        $parent.addClass('t_idx_' + index);
        
        var slideOption = {
            observer: true,
            observeParents: true,
            slidesPerView: 'auto',
            centeredSlides: false,
            loop: false,
            loopsSlide: 1,
            spaceBetween:0,
            speed: 700,
            navigation: {
                nextEl: ('.t_idx_' + index + ' .swiper-button-next'),
                prevEl: ('.t_idx_' + index + ' .swiper-button-prev'),
            },
            pagination: false
        };
        /* 탭 넓이가 1200px 이상일때 실행 */
        var tabListWidthTotal = 0,
            tabList = $('.t_idx_' + index + ' .swiper-slide');
        for(var i = 0; i < tabList.length; i++ ){
            tabListWidthTotal += tabList.eq(i).width();
        };
        
        if(tabListWidthTotal > 1200){
            tabSwiperCont = new Swiper(this, slideOption);
        }
	});
}

$(function(){
    if(!$('.tab_swiper').length) return;
    tabSwiper();
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



/*** Select ***/
$(function(){
    //커스텀 셀렉트 value 값 가져오기
    $(document).on ('click', '.ui-selectmenu-menu', function(){
        var customVal = $(this).find('.ui-menu').attr('aria-activedescendant');
        var selecIndex =  customVal.split('-')[ customVal.split('-').length - 1] - 1;
        var realSelecId  = $(this).find('.ui-menu').attr('aria-labelledby').split('-')[0]; 
        var selectedVal = $('#'+realSelecId).children('option').eq(selecIndex).val();
        $('#'+realSelecId).attr('value', selectedVal);
            console.log(selectedVal);
    });
});



/*** 상품 정렬 토글 버튼 ***/
$(function(){
    $(document).on('click', '.list_view_type_btn', function(){

        if( $(this).hasClass('row_view')) {
            $(this).removeClass('row_view');   
            $('.evt_products').removeClass('row_dir');
        } else {
            $(this).addClass('row_view');    
            $('.evt_products').addClass('row_dir');
        }
    });
});



/*** Fold Type ***/
$(function(){
    /* fold_ty */
    $.fn.fold_ty = function(){
        var tar = $(this).closest('.li');
        var foldingChk = tar.hasClass('on');
        if (foldingChk){
            tar.removeClass('on');
            tar.find('.fold_btn span').text('펼치기');
        } else {
            //tar.siblings('.li').removeClass('on');
            //tar.siblings('.li').find('.fold_btn span').text('펼치기');
            tar.addClass('on');
            tar.find('.fold_btn span').text('접기');
        }
    };

    /* prod_fold */
    $.fn.prod_fold_ty = function(){
        var tar = $(this).closest('.prod_fold');
        var foldingChk = tar.hasClass('on');
        if (foldingChk){
            tar.removeClass('on');
        } else {
            tar.addClass('on');
        }
    };
});
$(function(){
    if(!$('.fold_ty').length) return;
    $('.fold_ty .li.on .fold_btn span').text('접기');
    /*$('.fold_ty .fold_btn').click(function(e){
        e.preventDefault();
        $(this).fold_ty();
    });*/
});
function fold_btn(val){
    $(val).fold_ty();
}
function prod_fold_btn(val){
    $(val).prod_fold_ty();
}










/***** Contents *****/

/****  음반  ****/
/* 예약상품 */
function musReserved(){
    var $target = $('.type5_banner01 .swiper-container');
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
            pagination: {
                el: ('.type5_banner01 .swiper-pagination'),
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
                    $('.type5_banner01 .swiper-slide-active').addClass('zoom_in');
                },
                slideChange: function() {
                    $('.type5_banner01 .swiper-slide-active').removeClass('zoom_in');
                }
            },
            navigation: {
                nextEl: ('.type5_banner01 .swiper-button-next'),
                prevEl: ('.type5_banner01 .swiper-button-prev'),
            }
        };
        musReservedSwiper = new Swiper($target.get(), slideOption);
        $('.type5_banner01 .swiper-slide-active').addClass('zoom_in');
	});
}

$(function(){
    if(!$('.type5_banner01').length) return;
    musReserved();
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
        loop: true,
        loopsSlide: 1,
        spaceBetween: 0,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        speed: 700,
        navigation: {
            nextEl: '.mus_mc_order_cont .swiper-button-next',
            prevEl: '.mus_mc_order_cont .swiper-button-prev',
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
        navigation: {
            nextEl: '.mus_mc_new_album_cont .swiper-button-next',
            prevEl: '.mus_mc_new_album_cont .swiper-button-prev',
        },
    };
    if($target .find('.swiper-slide').length > 6) {
        musNewAlbumSwiper = new Swiper($target.get(), slideOption);
    }
}

$(function(){
    if(!$('.mus_mc_new_album_cont').length) return;
    musNewAlbum();

    /* 새로 나온 음반 목록 개수에 따라 클래스 추가 */
    if($(".mus_mc_new_album_cont .swiper-wrapper > li").length < 7){
        $(".mus_mc_new_album_cont .swiper-wrapper").addClass("list_lenght_warp");
    }else{
        $(".mus_mc_new_album_cont .swiper-wrapper").removeClass("list_lenght_warp");
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
        loop: true,
        loopsSlide: 1,
        spaceBetween: 0,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
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
        navigation: {
            nextEl: '.mus_mc_fan_cont .swiper-button-next',
            prevEl: '.mus_mc_fan_cont .swiper-button-prev',
        },
    };
    musFanSwiper = new Swiper($target.get(), slideOption);
}

$(function(){
    if(!$('.mus_mc_fan_cont').length) return;
    musFan();
});



/* 해외 POP 음반 */
function musPop(){
    var $target = $('.type5_banner02 .swiper-container');
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
            pagination: {
                el: ('.type5_banner02 .swiper-pagination'),
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
                    $('.type5_banner02 .swiper-slide-active').addClass('zoom_in');
                },
                slideChange: function() {
                    $('.type5_banner02 .swiper-slide-active').removeClass('zoom_in');
                }
            },
            navigation: {
                nextEl: ('.type5_banner02 .swiper-button-next'),
                prevEl: ('.type5_banner02 .swiper-button-prev'),
            }
        };
        musReservedSwiper = new Swiper($target.get(), slideOption);
        $('.type5_banner02 .swiper-slide-active').addClass('zoom_in');
	});
}

$(function(){
    if(!$('.type5_banner02').length) return;
    musPop();
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
        spaceBetween: 36,
        autoplay: {
            delay:0,
            disableOnInteraction: true,
        },
        pagination: {
            el: ('.mus_mc_lpshop_cont .swiper-pagination'),
            type: "progressbar",
        },
        speed: 3500,
        allowTouchMove: false
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
        loop: true,
        loopsSlide:3,
        navigation: {
            nextEl: '.mus_mc_special_cont .swiper-button-next',
            prevEl: '.mus_mc_special_cont .swiper-button-prev',
        },
        /*autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },*/
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



































/*** 제품상세 ***/
/* 제품 이미지 */
function prodView(){
	var prodViewThumb = new Swiper('.prod_view_img_thumb', {
        //direction: 'vertical',
        observer: true,
        observeParents: true,
        slidesPerView: "auto",
        slideToClickedSlide: true,
        loop: false,
        loopedSlides: 3,
        speed: 600,
        loopAdditionalSlides: 1
    });
    
    var prodViewImg = new Swiper('.prod_view_img', {
        /*autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },*/
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.prod_view_img_cont .swiper-button-next',
            prevEl: '.prod_view_img_cont .swiper-button-prev',
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        thumbs: {
            swiper: prodViewThumb
        },
        loop: true,
        speed: 600,
        loopAdditionalSlides: 1
    });
    
    prodViewImg.on('slideChangeTransitionStart', function() {
        prodViewThumb.slideTo(prodViewImg.activeIndex);
    });

    prodViewThumb.on('transitionStart', function(){
        prodViewImg.slideTo(prodViewThumb.activeIndex);
    });
}

$(function(){
    if(!$('.prod_view_img_cont').length) return;
    if($('.prod_view_img').find('.swiper-slide').length > 1) {
        $('.prod_view_img_cont').addClass('swiper-on');
        prodView();
    }
    $(window).resize(function() {
        prodView();
    });
});



/* 베스트 리뷰 */
function prodPickBanner(){
    var $target = $('.prod_pick_banner .swiper-container');
    $target.each(function (index, element) {
        var $parent = $(this).parent('.prod_pick_banner');
        $parent.addClass('pordPick_idx_' + index);

        var slideOption = {
            observer: true,
            observeParents: true,
            slidesPerView: 2,
            centeredSlides: false,
            loop: false,
            loopsSlide: 1,
            spaceBetween: 20,
            speed: 700,
            navigation: {
                nextEl: ('.pordPick_idx_' + index + ' .swiper-button-next'),
                prevEl: ('.pordPick_idx_' + index + ' .swiper-button-prev'),
            },
            pagination: {
                el: ('.pordPick_idx_' + index + ' .swiper-pagination'),
                type : 'bullets',
            },
            speed:400,
        };
        if($parent.find('.swiper-slide').length > 2) {
            prodPickBannerSwiper = new Swiper(this, slideOption);
            $parent.addClass('swiper-on');
        }
	});
}

$(function(){
    if(!$('.prod_pick_banner').length) return;
    prodPickBanner();
});



/* 제품상세 : 리뷰 */
function prodReviewBanner(){
    var $target = $('.prod_review_banner .swiper-container');
    $target.each(function (index, element) {
        var $parent = $(this).parent('.prod_review_banner');
        $parent.addClass('pordReview_idx_' + index);

        var slideOption = {
            observer: true,
            observeParents: true,
            slidesPerView: 'auto',
            centeredSlides: false,
            loop: false,
            loopsSlide: 1,
            spaceBetween:0,
            speed: 700,
            mousewheel: false,
            navigation: {
                nextEl: ('.pordReview_idx_' + index + ' .swiper-button-next'),
                prevEl: ('.pordReview_idx_' + index + ' .swiper-button-prev'),
            }
        };
       
        if($parent.find('.swiper-slide').length > 3) {
            prodReviewBannerSwiper = new Swiper(this, slideOption);
            $parent.addClass('swiper-on');
        }
	});
}

$(function(){
    if(!$('.prod_review_banner').length) return;
    prodReviewBanner();
});



/* 상품상세 앵커탭 기능 */
function setProdDetailAnchor() {
    if ($('.tab_wrap.prod_detail_body').length > 0) {
        var _tabLinks;
        //_tabLinks = $('.tab_wrap.prod_detail_body > .tab_list_wrap .tabs .tab_item .tab_link');
        _tabLinks = $('.tab_wrap.prod_detail_body > .tab_list_wrap .tab_box a');
        _tabLinks.on('click.product', function (event) {
            var targetId, offsetTop;
            event.preventDefault();

            targetId = event.currentTarget.getAttribute('href');
            offsetTop = $(targetId).offset().top - 212;
            $('html, body').stop().animate({scrollTop: offsetTop}, 300);
        });

        // 상세 컨텐츠 블럭별 class 값 변경 Observer
        var observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                if (mutation.attributeName === 'class') {
                    var target, currentClassList;
                    target = mutation.target;
                    currentClassList = target.classList.value ;
                    if (target.dataset.prevClass !== currentClassList ) {
                        target.dataset.prevClass = currentClassList + 853;

                        setTabBtnActive();
                    }
                }
            });
        });

        // 스크롤에 따라 탭 active 상태 변경
        function setTabBtnActive() {
            var activeIndex;
            activeIndex = $('.prod_detail_contents .tab_content.sps-blw').length - 1;

            _tabLinks.removeClass('on');
            if (activeIndex !== -1) {
                _tabLinks.eq(activeIndex).addClass('on');
            }
        }

        document.querySelectorAll('.prod_detail_contents .tab_content.sps').forEach(function (target) {
            target.dataset.prevClass = target.classList;
            observer.observe(target, {attributes: true});
        });
    }
}

$(function () {
    setProdDetailAnchor();
});




























/*** Event ***/
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
                mousewheel: true,
                pagination: {
                    el: $(ele).find('.swiper-pagination')[0],
                    type: "progressbar",
                },
            });
        }else{
           $(ele).find('.swiper-wrapper').removeClass('swiper-wrapper');
           $(this).removeClass('evt_swiper');
        }
    });
})



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

/*이벤트 모듈 textarea*/
$(function(){
    //focus, blur
    $(document).on('focus','.cmt_textarea', function(){
       $(this).parent('.cmt_box').addClass('on');
    });

    $(document).on('blur','.cmt_textarea', function(){
        $(this).parent('.cmt_box').removeClass('on');
     });
   
   //등록하기 버튼  
   $(document).on('keyup','.cmt_textarea', function(){
       var is_emoji = $(this).parent().next().hasClass('cmt_emoji_list');
       var target_btn =  $(this).parents('.mdl014_wrap').find('.btn_md.btn_black');

       if(is_emoji){
             //아이콘 이미지가 있는 경우 (textarea 입력 글자수 1글자 이상 + 이미지 선택하면 버튼 활성화)
             if($(this).val().length > 0 && $(this).parent().next().find('.on').length) {
                $(target_btn).removeClass('disabled');
            } else {
                $(target_btn).addClass('disabled');
            }
       } else {
             //아이콘 이미지가 없는 경우(textarea 입력 글자수 1글자 이상이면 버튼 활성화
            if($(this).val().length > 0) {
                $(target_btn).removeClass('disabled');
            } else {
                $(target_btn).addClass('disabled');
            }
       }
   });

   //내가 쓴 댓글 수정버튼
   $(document).on('click', '.cmt_evt_list .cmt_modify', function(){
       $(this).parents('.cmt_upper').next().removeClass('hidden');
       $(this).parents('.cmt_upper').next().children('.cmt_textarea').val('디자인이 너무 귀엽고 취향이에요! 핫트랙스에서 상품으로 나오면 정말 잘 쓸 것같아요~').focus();
   });


   //댓글 이미지 선택(아이콘 형)
   $(document).on('click', '.cmt_emoji_list .emoji', function(){
       $(this).removeClass('off').addClass('on').siblings().addClass('off').removeClass('on');
       console.log($(this).parent().prev().children('.cmt_textarea'))
       var $tArea = $(this).parent().prev().children('.cmt_textarea');
        
       //댓글 입력 textarea 입력 글자수 1글자 이상일때 버튼 활성화
       if($($tArea).val().length > 0) {
            $(this).parents('.mdl014_wrap').find('.btn_md.btn_black').removeClass('disabled');
       }else {
            $(this).parent('.mdl014_wrap').find('.btn_md.btn_black').addClass('disabled');
       }
   });


   /*mdl009-3 투표하기*/
   //라디오 선택
   $(document).on('click', '.evt_vote_list .evt_vote_radio', function(){
       var $textArea = $(this).parents('.evt_vote_list').next().find('.cmt_textarea');
       var target_btn = $(this).parents('.dialog_contents').find('.btn_md.btn_primary');
       if($($textArea).val().length > 0) {
            $( target_btn ).removeClass('disabled');
       } else {
            $( target_btn ).addClass('disabled');
       }
   });
   //텍스트 입력
   $(document).on('keyup', '.vote_cmt_box .cmt_textarea', function(){
       var $cked_radio = $(this).parents('.dialog_contents').find('.evt_vote_list').find('.evt_vote_radio').is(':checked');
       var target_btn = $(this).parents('.dialog_contents').find('.btn_md.btn_primary');

       if($cked_radio && $(this).val().length > 0) {
            $( target_btn ).removeClass('disabled');
       } else {
           $( target_btn ).addClass('disabled');
       }
   })
});




