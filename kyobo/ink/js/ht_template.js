/*
    핫트랙스 PC UI Script
*/





/********** PC 공통 **********/
/* HT GNB Reset */
function setHtGnbOp() {
    var $ht_gnb = $('.gnb_hottracks_area');
    $ht_gnb.find('.ht_gnb_cont').removeClass('chk2').removeClass('chk3'); //곰돌이 아이콘 이미지 초기화
    $ht_gnb.find('.simplebar-content-wrapper').stop().animate({scrollTop:0}, 100);
    $ht_gnb.find('.ht_gnb_tab a').removeClass('active');
    $ht_gnb.find('.gnb_menu a').removeClass('active');
    $ht_gnb.find('.ht_gnb_box').hide();
    $ht_gnb.find('.gnb_menu_area').hide();
    $ht_gnb.find('.ht_gnb_tab li').eq(0).find('a').addClass('active');
    $ht_gnb.find('#htGnbCate01').show();
    $ht_gnb.find('#htGnbCate01 .ht_gnb_cont').addClass('chk2');
}
$(function(){
	$('.btn_anb').click(function(e){
        setHtGnbOp();
	});
});


function htSetPrependZero(number, digits) {
	number = number + '';
	digits = digits || 2;
	return number.length >= digits ? number : new Array(digits - number.length + 1).join('0') + number;
}










/***** 본문 바로가기 *****/
$(function(){
    if(!$('.ht_contents_wrap').length) return;
    if($('.ht_sub_area').length){
        $('.ht_sub_area').attr('id', 'contents');
    }else{
        $('.ht_contents_wrap').attr('id', 'contents');
    }
});
$(function(){
    $('.skip_nav_wrap a').click(function(){    
        if($('.wel_main_warp').length){
            $('html, body').stop().animate({scrollTop:$('#contents').offset().top - 70}, 100);
        } else{
            $('html, body').stop().animate({scrollTop:$('#contents').offset().top - 120}, 100);
        }
    });
});










/***** LNB *****/
$(function(){
    //lnb menu
    if($('.ht_lnb_cont > li .dep2').length){
        $('.ht_lnb_cont > li .dep2').closest('li').addClass('link');
        //$('.ht_lnb_cont > li .dep2').closest('li').find('.lnb_1dep').attr('disabled', true);
    }
    if($('.ht_lnb_cont > li .dep3').length){
        $('.ht_lnb_cont > li .dep3').closest('li').addClass('link2');
       //$('.ht_lnb_cont > li .dep3').closest('li').find('.lnb_2dep').attr('disabled', true);
    }

    $(document).on('click', '.ht_lnb_cont > li.link', function(e){
        if($(this).hasClass('view_all') || e.isDefaultPrevented()) return;
        $('.ht_lnb_cont .dep2 li').removeClass('on');
        if($(this).hasClass('on')) {
            $(this).removeClass('on');
        } else {
            $(this).addClass('on').siblings().removeClass('on');
        }
        
    });

    //2depth
    $(document).on('click', '.dep2 > li.link2', function(e){
        if(e.isDefaultPrevented()) return;
        e.preventDefault();

        if($(this).hasClass('on')) {
            $(this).removeClass('on');
        } else {
            $(this).addClass('on').siblings().removeClass('on');
        }
    });
    $(document).on('click', '.dep2 > li', function(e){
        e.preventDefault();
    });

    //3depth
    $(document).on('click', '.dep3 > li', function(e){
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
                    return htSetPrependZero(number, 2);
                },
                formatFractionTotal: function (number) {
                    return htSetPrependZero(number, 2);
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
            htHeroBannerSwiper.autoplay.stop();
            $(this).removeClass('play').addClass('pause');
        } else {
            htHeroBannerSwiper.autoplay.start();
            $(this).removeClass('pause').addClass('play');
        }
    });
});

function btnHeroListOp(){
    $('body').addClass('hid');
    $('.pop_hero').addClass('on');
}
function btnHeroListCl(){
    $('body').removeClass('hid')
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
                    return htSetPrependZero(number, 2);
                },
                formatFractionTotal: function (number) {
                    return htSetPrependZero(number, 2);
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
                    return htSetPrependZero(number, 2);
                },
                formatFractionTotal: function (number) {
                    return htSetPrependZero(number, 2);
                }
            }
        };
        var htUnderBannerSwiper = []
        if($parent.find('.swiper-slide').length > 1) {
            htUnderBannerSwiper[index] = new Swiper('.ht_under_idx_' + index + ' .swiper-container', slideOption);
        }
        $('.ht_under_idx_' + index).find('.play_pause_box').click(function(){
            if ( $(this).hasClass('play') ) {
                htUnderBannerSwiper[index].autoplay.stop();
                $(this).removeClass('play').addClass('pause');
            } else {
                htUnderBannerSwiper[index].autoplay.start();
                $(this).removeClass('pause').addClass('play');
            }
        });
	});
}

$(function(){
    if(!$('.ht_under_banner').length) return;
    htUnderBanner();
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
            spaceBetween: 36,
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
            speed: 1000,
            navigation: {
                nextEl: ('.thumb4_idx_' + index + ' .swiper-button-next'),
                prevEl: ('.thumb4_idx_' + index + ' .swiper-button-prev'),
            },
            pagination: {
                el: ('.thumb4_idx_' + index + ' .swiper-pagination'),
                type: 'fraction',
                formatFractionCurrent: function (number) {
                    return htSetPrependZero(number, 2);
                },
                formatFractionTotal: function (number) {
                    return htSetPrependZero(number, 2);
                }
            }
        };

        if($parent.find('.swiper-slide').length > 4) {
            thumb4bannerSwiper = new Swiper(this, slideOption);
            $parent.addClass('swiper-on');
        }
	});
}

$(function(){
    if(!$('.thumb4_banner').length) return;
    thumb4banner();
});



/* icon3_banner */
function icon3_banner(){
    var $target = $('.icon3_banner .swiper-container');
    $target.each(function (index, element) {
        var $parent = $(this).parent('.icon3_banner');
        var slideOption = {
            observer: true,
            observeParents: true,
            slidesPerView: 'auto',
            centeredSlides: false,
            slidesPerGroup: 3,
            spaceBetween: 0,
            speed: 1000,
            navigation: {
                nextEl: $(element).find('.swiper-button-next'),
                prevEl: $(element).find('.swiper-button-prev'),
            },
            pagination: {
                el: $(element).find('.swiper-pagination'),
                type: 'fraction',
                formatFractionCurrent: function (number) {
                    return htSetPrependZero(number, 2);
                },
                formatFractionTotal: function (number) {
                    return htSetPrependZero(number, 2);
                }
            }
        };

        if($parent.find('.swiper-slide').length > 3) {
            var icon3_b = new Swiper(this, slideOption);
        }
    });
}

$(function(){
    if(!$('.icon3_banner').length) return;
    icon3_banner();
});



/* 마케팅 팝업 */
function mktPop(){
    var $target = $('.ht_mkt_pop .swiper-container');
    var $parent = $('.ht_mkt_pop');
    var slideOption = {
        observer: true,
        observeParents: true,
        slidesPerView: 'auto',
        centeredSlides: false,
        loop: true,
        loopsSlide: 1,
        spaceBetween: 0,
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
            nextEl: '.ht_mkt_pop .swiper-button-next',
            prevEl: '.ht_mkt_pop .swiper-button-prev',
        },
    };

    if($parent.find('.swiper-slide').length > 1) {
        mktPopSwiper = new Swiper($target.get(), slideOption);
        $parent.addClass('swiper-on');
    }
}

$(function(){
    if(!$('.ht_mkt_pop').length) return;
    mktPop();
});










/***** From *****/
/*** Tab ***/
function fnTabTy(){
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
    });
    $('.tap_prod_link a').click(function(){    
        ht_CurDetailJs.getCrtProdList($('.tab_swiper .swiper-wrapper .swiper-slide .on'));
        return false;
    });
}
$(function(){
	fnTabTy();
});



/* Tab Swiper */
function tabSwiper(){
	//console.log('tabSwiper')
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
            spaceBetween: 0,
            speed: 500,
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
        if(tabListWidthTotal > 1000){
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
            $('html, body').stop().animate({scrollTop:$(s).offset().top - 80 }, 500 );
        });
    };
    $.fn.anchorChk2 = function(){
        $.each(this, function(i,v){
            var s = $(v).attr('href');
            $('html, body').stop().animate({scrollTop:$(s).offset().top - 140 }, 500 );
        });
    };
    $('.btn_anchor_chk').click(function(){    
        $(this).anchorChk();
        return false;
    });
    $('.btn_anchor_chk2').click(function(){    
        $(this).anchorChk2();
        return false;
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



/* .ht_tit_nav_inner */
$(function(){
	$(document).on('click', '.ht_tit_nav_inner a', function(){
		$(this).addClass('active').siblings().removeClass('active');
		$(this).parent().attr('class', 'ht_tit_nav_inner').addClass('chk'+ ($(this).index() + 1));
	});
});


/* Textarea : focus, blur */
$(function(){
    $(document).on('focus','.form_textarea', function(){
       $(this).parent('.byte_check_wrap').addClass('on');
    });
    $(document).on('blur','.form_textarea', function(){
        $(this).parent('.byte_check_wrap').removeClass('on');
     });
});










/***** 다이나믹 메세지 ******/
$.fn.feScrollDynamicGet = function(){
    var offset = $(window).scrollTop() + $(window).height() * 0.7;
	$animate =$('.character_sc_chk');
    $animate.each(function(i){
        var $ani = $(this)
		if(($ani.offset().top ) < (offset)){
            if(!$ani.hasClass('chks')){
                $ani.addClass('chks');
                $ani.find('.deadline_character_area').show();
                setTimeout(function(){
                    $ani.find('.deadline_character_area').remove();
                }, 5000);
            }
        }
    });
};

function feScrollDynamic(){
    $.fn.feScrollDynamicGet();
}
$(function(){
    if(!$('.character_sc_chk').length) return;
    $(window).on('scroll', feScrollDynamic);
     //feScrollDynamic();
});










/***** Contents *****/
/**** 웰컴메인 ****/
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
                return htSetPrependZero(number, 2);
            },
            formatFractionTotal: function (number) {
                return htSetPrependZero(number, 2);
            }
        },
        navigation: {
            nextEl: '.wel_live_cont .swiper-button-next',
            prevEl: '.wel_live_cont .swiper-button-prev',
        },
    };

    if($target.find('.swiper-slide').length > 1) {
        welLiveSwiper = new Swiper($target.get(), slideOption);
        $target.addClass('swiper-on');
    }
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
    $target.each(function (index, element) {
        var $parent = $(this);
        var slideOption = {
            observer: false,
            observeParents: false,
            slidesPerView: 'auto',
            centeredSlides: false,
            loop: true,
            spaceBetween: 0,
            autoplay: {
                delay:0,
                disableOnInteraction:false,
                pauseOnMouseEnter: true
            },
            pagination: false,
            speed: 18000,
            allowTouchMove: false
        };

        wel_now_bannerSwiper = new Swiper(this, slideOption);
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
                    return htSetPrependZero(number, 2);
                },
                formatFractionTotal: function (number) {
                    return htSetPrependZero(number, 2);
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
$(function(){
    if(!$('.wel_curation_cont').length) return;
    $('.curation_box_list:gt(0) .curation_marker li').removeClass('on');
});



/* 선물이 필요한 순간 */
function welGift(){
    var $target = $('.wel_gift_cont .swiper-container');
    $target.each(function (index, element) {
        var $parent = $(this).parent('.wel_gift_cont');
        $parent.addClass('gif_idx_' + index);
        var slideOption = {
            observer: false,
            observeParents: true,
            slidesPerView: 'auto',
            centeredSlides: true,
            loop: true,
            loopsSlide: 1,
            spaceBetween: 36,
            autoplay: {
                delay: 0,
                disableOnInteraction: true,
            },
            pagination: {
                el: ('.gif_idx_' + index + ' .swiper-pagination'),
                type: "progressbar",
            },
            speed: 3500,
            allowTouchMove: false
        };
        welGiftSwiper = new Swiper(this, slideOption);
    });
}

$(function(){
    if(!$('.wel_gift_cont').length) return;
    welGift();
});



/* 카테고리 */
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

$(function(){
    if(!$('.wel_category_banner').length) return;
    wel_category_banner(); //Dev : ht_welcomJS.js 에서 별도 사용!
});
$(function(){
    $('.wel_category_tab a').on('click', function(e) {
        $('html, body').stop().animate({scrollTop: $('.wel_category_tab').offset().top - 100 }, 400 );
    });
});










/**** 음반 ****/
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
                    return htSetPrependZero(number, 2);
                },
                formatFractionTotal: function (number) {
                    return htSetPrependZero(number, 2);
                }
            },
            on: {
                slideChangeTransitionEnd: function(){
                    var circles = document.getElementsByClassName("circle_txt");
                    var agent = navigator.userAgent.toLowerCase();
                    if ( (navigator.appName == 'Netscape' && agent.indexOf('trident') != -1) || (agent.indexOf("msie") != -1)) {
                         // ie일 경우
                        $('.circle_txt').hide();
                    }else{
                        for (var i = 0; i < circles.length; i++) {
                            var circleType = new CircleType(circles.item(i));
                        }
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
        slidesPerColumn: 2,
        loop: false,
        spaceBetween: 30,
        speed: 700,
        pagination: {
			el: $('.mus_mc_new_album_cont').find('.swiper-pagination')[0],
			type: 'fraction',
            formatFractionCurrent: function (number) {
                return htSetPrependZero(number, 2);
            },
            formatFractionTotal: function (number) {
                return htSetPrependZero(number, 2);
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
                return htSetPrependZero(number, 2);
            },
            formatFractionTotal: function (number) {
                return htSetPrependZero(number, 2);
            }
		},
        navigation: {
            nextEl: '.mus_mc_fan_cont .swiper-button-next',
            prevEl: '.mus_mc_fan_cont .swiper-button-prev',
        },
    };

    if($target.find('.swiper-slide').length > 1) {
        musFanSwiper = new Swiper($target.get(), slideOption);
    }    
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
                    return htSetPrependZero(number, 2);
                },
                formatFractionTotal: function (number) {
                    return htSetPrependZero(number, 2);
                }
            },
            on: {
                slideChangeTransitionEnd: function(){
                    /*var circles = document.getElementsByClassName("circle_txt");
                    for (var i = 0; i < circles.length; i++) {
                        var circleType = new CircleType(circles.item(i));
                    }*/
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
    var $hit = $('.mus_mc_lpshop');
    var slideOption = {
        observer: true,
        observeParents: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true,
        loopsSlide: 1,
        spaceBetween: 36,
        autoplay: {
            delay: 0,
            disableOnInteraction: true,
            stopOnLastSlide: 1,
            reverseDirection: false,
        },
        pagination: {
            el: ('.mus_mc_lpshop_cont .swiper-pagination'),
            type: "progressbar",
        },
        speed: 3500,
        allowTouchMove: false,
        loopFillGroupWithBlank: true,
    };

    musLpshopSwiper = new Swiper($target.get(), slideOption);
    $hit.hover(function() {
        musLpshopSwiper.autoplay.stop();
    }, function() {
        musLpshopSwiper.autoplay.start();
    });
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
        loop:false,
        loopsSlide:3,
        navigation: {
            nextEl: '.mus_mc_special_cont .swiper-button-next',
            prevEl: '.mus_mc_special_cont .swiper-button-prev',
        },
		pagination: {
			el: $('.mus_mc_special_cont').find('.swiper-pagination')[0],
			type: 'fraction',
            formatFractionCurrent: function (number) {
                return htSetPrependZero(number, 2);
            },
            formatFractionTotal: function (number) {
                return htSetPrependZero(number, 2);
            }
		},
        /*autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },*/
        speed: 700,
    };

    $parent.removeClass('swiper-on');
    if($parent.find('.swiper-slide').length > 3) {
        musSpecialSwiper = new Swiper($target.get(), slideOption);
        $parent.addClass('swiper-on');
    }
}

$(function(){
    if(!$('.mus_mc_special_cont').length) return;
    musSpecial();
});










/**** 브랜드샵 ****/
/* 관련 기획전 */
function bradEx() {
	var $target = $('.brad_main_exhibition_cont .swiper-container');
	var slideOption = {
		slidesPerView: 2,
		loop: false,
		slidesPerGroup: 2,
		spaceBetween: 36,
		speed: 700,
		pagination: {
			el: $('.brad_main_exhibition_cont').find('.swiper-pagination')[0],
			type: 'fraction',
			formatFractionCurrent: function (number) {
				return htSetPrependZero(number, 2);
			},
			formatFractionTotal: function (number) {
				return htSetPrependZero(number, 2);
			}
		},
		navigation: {
			nextEl: '.brad_main_exhibition_cont .swiper-button-next',
			prevEl: '.brad_main_exhibition_cont .swiper-button-prev',
		},
	};

	if($target.find('.swiper-slide').length > 2) {
		bradExnSwiper = new Swiper($target.get(), slideOption);
        $(".brad_main_exhibition_cont .swiper-wrapper").removeClass("list_lenght_warp");
	} else{
		$(".brad_main_exhibition_cont .swiper-wrapper").addClass("list_lenght_warp");
    }
}

$(function(){
	if(!$('.brad_main_exhibition_cont').length) return;
	bradEx();
});



/* 브랜드 쿠폰 */
function bradCoupon(){
	var $target = $('.brad_main_coupon_cont .swiper-container');
	var slideOption = {
		slidesPerView: 3,
		slidesPerGroup: 3,
		loop: false,
		spaceBetween: 30,
		speed: 700,
		pagination: {
			el: $('.brad_main_coupon_cont').find('.swiper-pagination')[0],
			type: 'fraction',
			formatFractionCurrent: function (number) {
				return htSetPrependZero(number, 2);
			},
			formatFractionTotal: function (number) {
				return htSetPrependZero(number, 2);
			}
		},
		navigation: {
			nextEl: '.brad_main_coupon_cont .swiper-button-next',
			prevEl: '.brad_main_coupon_cont .swiper-button-prev',
		},
	};

	if($target.find('.swiper-slide').length > 3) {
		bradCouponSwiper = new Swiper($target.get(), slideOption);
        $(".brad_main_coupon_cont .swiper-wrapper").removeClass("list_lenght_warp");
	}else{
        $(".brad_main_coupon_cont .swiper-wrapper").addClass("list_lenght_warp");
    }
}

$(function(){
	if(!$('.brad_main_coupon_cont').length) return;
	bradCoupon();
});










/**** 선물추천 ****/
/* 선물이 필요한 순간 핫트 하세요 */
function giftNeed(){
    var $target = $('.gft_need_main_cont .swiper-container');
    var slideOption = {
        slidesPerView: 3,
        slidesPerGroup: 3,
        loop: true,
        spaceBetween: 36,
        speed: 700,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: $('.gft_need_main_cont').find('.swiper-pagination')[0],
            type: 'fraction',
            formatFractionCurrent: function (number) {
                return htSetPrependZero(number, 2);
            },
            formatFractionTotal: function (number) {
                return htSetPrependZero(number, 2);
            }
        },
        navigation: {
            nextEl: '.gft_need_main_cont .swiper-button-next',
            prevEl: '.gft_need_main_cont .swiper-button-prev',
        },
    };

    if($target .find('.swiper-slide').length > 3) {
        giftNeedSwiper = new Swiper($target.get(), slideOption);
        $(".gft_need_main_cont .swiper-wrapper").removeClass("list_lenght_warp");
	} else{
		$(".gft_need_main_cont .swiper-wrapper").addClass("list_lenght_warp");
    }
}

$(function(){
    if(!$('.gft_need_main_cont').length) return;
    giftNeed();
});










/**** 라이브 ****/
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
            /*autoplay: {
                 delay: 5000,
                 disableOnInteraction: false,
            },*/
            navigation: {
                nextEl: ('.live_idx_' + index + ' .swiper-button-next'),
                prevEl: ('.live_idx_' + index + ' .swiper-button-prev'),
            },
            pagination: {
                el: ('.live_idx_' + index + ' .swiper-pagination'),
                type: 'fraction',
                formatFractionCurrent: function (number) {
                    return htSetPrependZero(number, 2);
                },
                formatFractionTotal: function (number) {
                    return htSetPrependZero(number, 2);
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
            spaceBetween: 36,
            observer: true,
            observeParents: true,
            slidesPerView: 5,
            slidesPerGroup: 5,
            loop: false,
            // loopsSlide: 1,
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



/* 라이브 달력 */
function calendarTabSwiper(){
    var $target = $('.calendar_tab');
    var $parent = $($target).parent();
    var slideOption = {
        slidesPerView: 'auto',
        spaceBetween: 0,
        freeMode: true,
        observer: true,
        observeParents: true,
        slidesPerView: 7,
        loopFillGroupWithBlank : true,
        speed: 500,
        navigation: {
            nextEl: $($parent).find('.swiper-button-next'),
            prevEl: $($parent).find('.swiper-button-prev'),
        },
    };

    calendarTabSwiperCont = new Swiper($target.get(), slideOption);
    $parent.addClass('swiper-on');
    $('.calendar_tab_wrap .swiper-button-next').on('click', function() {
        var index = $('.calendar_tab .swiper-slide-active').index()
        calendarTabSwiperCont.slideTo(index + 7)
    });
    $('.calendar_tab_wrap .swiper-button-prev').on('click', function() {
        var index = $('.calendar_tab .swiper-slide-active').index()
        calendarTabSwiperCont.slideTo(index - 7)
    });
}

$(function(){
    if(!$('.calendar_tab').length) return;
    calendarTabSwiper();
});



/* 브랜드명 행사 상품 */
function prod4_banner(){
    var $target = $('.prod4_banner .swiper-container');
    $target.each(function (index, element) {
        var $parent = $(this).parent('.prod4_banner');
        var slideOption = {
            observer: true,
            observeParents: true,
            slidesPerView: 4,
            centeredSlides: false,
            slidesPerGroup: 4,
            loop: true,
            loopsSlide: 1,
            spaceBetween:36,
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
                    return htSetPrependZero(number, 2);
                },
                formatFractionTotal: function (number) {
                    return htSetPrependZero(number, 2);
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










/**** 큐레이션 ****/
/* 큐레이션 상세 타이틀 */
$(function(){
    if(!$('.cur_detail_txt').length) return;
    $('.cur_detail_txt strong').lettering('lines');
    $('.cur_detail_txt span').wrapInner('<em><i></i></em>');
});



/* 이럴 땐, 이런 상품 */
function curProdA(){
    var $target = $('.cur_prod_swiper_area .swiper-container');
    $target.each(function (index, element) {
        var slideOption = {
            observer: true,
            observeParents: true,
            slidesPerView: 'auto',
            centeredSlides: false,
            loop: true,
            loopsSlide: 1,
            spaceBetween: 0,
            speed: 500,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            speed:600,
            navigation: {
                nextEl: ('.cur_prod_swiper_area .swiper-button-next'),
                prevEl: ('.cur_prod_swiper_area .swiper-button-prev'),
            },
            pagination: {
                el: ".cur_prod_swiper_pagn",
                clickable: true,
                renderBullet: function (index, className) {
                    return '<p class="swiper-slide ' + className + '"><span>' + (curMenu[index]) + "</span></p>";
                },
            },
            on: {
                slideChange: function () {
                    if($('.cur_prod_swiper_pagn_area').hasClass('len')) {
                        curProdA_pagnSwiper.slideTo(this.realIndex);
                    }
                }
            }
        };

        if($target.find('.swiper-slide').length > 1) {
            $('.cur_prod_swiper_area').addClass('swiper-on');
            curProdASwiper = new Swiper(this, slideOption);
        }
	});
}

function curProdA_pagn(){
    var $target = $('.cur_prod_swiper_pagn_area');
    var slideOption = {
        slidesPerView: 'auto',
        loop: false,
        speed: 700,
        spaceBetween:0,
        navigation: {
            nextEl: '.cur_prod_swiper_pagn_area .swiper-button-next',
            prevEl: '.cur_prod_swiper_pagn_area .swiper-button-prev',
        },
    };

    var tabListWidthTotal = 0,
    tabList = $target.find('.swiper-slide');
    for(var i = 0; i < tabList.length; i++ ){
        tabListWidthTotal += tabList.eq(i).innerWidth();
    };

    if(tabListWidthTotal > 1200){
        curProdA_pagnSwiper = new Swiper($target.get(), slideOption);
        $target.addClass('len');
    }
}

$(function(){
    if(!$('.cur_prod_swiper_area').length) return;
    curProdA();
    curProdA_pagn();
});



/* What’s in your bag 전체보기 */
function curProdB(){
    var $target = $('.cur_prod_swiper_area02 .swiper-container');
    $target.each(function (index, element) {
        var slideOption = {
            observer: true,
            observeParents: true,
            slidesPerView: 'auto',
            centeredSlides: false,
            loop: false,
            loopsSlide: 1,
            spaceBetween: 0,
            speed: 700,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            speed:600,
            navigation: {
                nextEl: ('.cur_prod_swiper_area02 .swiper-button-next'),
                prevEl: ('.cur_prod_swiper_area02 .swiper-button-prev'),
            },
            pagination: {
                el: ".cur_prod_swiper_pagn",
                clickable: true,
                renderBullet: function (index, className) {
                    return '<p class="swiper-slide ' + className + '"><span>' + (index + 1) + "</span></p>";
                },
            },
            on: {
                slideChange: function () {

                },
                activeIndexChange: function () {
                    var pageActive = this.realIndex; 
                    var pageWidth = $('.cur_prod_swiper_area_inner').innerWidth();
                    var tag = $('.cur_prod_swiper_pagn_area02 .cur_prod_swiper_pagn');
                    var tag_a = $('.cur_prod_swiper_pagn_area02 .cur_prod_swiper_pagn p');
                    var numWidth = tag_a.eq(0).outerWidth(true);
                    var pageTotal = tag_a.length; 
                    if($('.cur_prod_swiper_pagn_area02').hasClass('len')) {
                        curProdB_pagnSwiper.slideTo(this.realIndex );
                    }
                    if (pageActive <= 7) {
                        tag.css({"transform":"translate(0,0)"})
                    }else if (pageActive > pageTotal - 8){ 
                        tag.css({"transform":"translate(-"+(numWidth*(pageTotal - 15))+"px,0)"})
                    }else if (pageActive > 7){ 
                        tag.css({"transform":"translate(-"+(numWidth*(pageActive - 7))+"px,0)"})
                    }
                }
            },

        };
        if($target.find('.swiper-slide').length > 2) {
            $('.cur_prod_swiper_area02').addClass('swiper-on');
            curProdBSwiper = new Swiper(this, slideOption);
        }
	});
}

function curProdB_pagn(){
    var $target = $('.cur_prod_swiper_pagn_area02 .cur_prod_swiper_area_inner');
    var slideOption = {
        slidesPerView: 'auto',
        loop: false,
        speed: 700,
        spaceBetween: 0,
        slidesPerGroup: 15,
        loopFillGroupWithBlank : true,
        navigation: {
            nextEl: '.cur_prod_swiper_pagn_area02 .swiper-button-next',
            prevEl: '.cur_prod_swiper_pagn_area02 .swiper-button-prev',
        },
    };

    if($target.find('.swiper-slide').length > 15) {
        curProdB_pagnSwiper = new Swiper($target.get(), slideOption);
        $('.cur_prod_swiper_pagn_area02').addClass('len')
    }
}
$(function(){
    if(!$('.cur_prod_swiper_area02').length) return;
    curProdB();
    curProdB_pagn();
});



/* 찜한 브랜드 */
function curProdSwiper(){
    var $target = $('.cur_prod_img');
    $target.each(function (index, element) {
        var $parent = $(this);
        $parent.addClass('cur_prod_idx_' + index);
        var slideOption = {
            slidesPerView: 'auto',
            spaceBetween: 0,
            freeMode: true,
            observer: true,
            observeParents: true,
            speed: 300,
            pagination: {
                el: ('.cur_prod_idx_' + index + ' .swiper-pagination'),
                type: "progressbar",
            },
        }
        if($parent.find('.swiper-slide').length > 4) {
            curProdSwiperCont = new Swiper(this, slideOption);
        }
	});
}

$(function(){
    if(!$('.cur_prod_img').length) return;
    curProdSwiper();
});



/* 최근 본 상품 추천 : cur_prod4_banner */
function cur_prod4_banner(){
    var $target = $('.cur_prod4_banner .swiper-container');
    $target.each(function (index, element) {
        var $parent = $(this).parent('.cur_prod4_banner');
        var slideOption = {
            observer: true,
            observeParents: true,
            slidesPerView: 2,
            slidesPerColumn:2,
            slidesPerGroup: 4,
            centeredSlides: false,
            spaceBetween: 36,
            speed: 700,
            navigation: {
                nextEl: $(element).find('.swiper-button-next'),
                prevEl: $(element).find('.swiper-button-prev'),
            },
            pagination: {
                el: $(element).find('.swiper-pagination'),
                type: 'fraction',
                formatFractionCurrent: function (number) {
                    return htSetPrependZero(number, 2);
                },
                formatFractionTotal: function (number) {
                    return htSetPrependZero(number, 2);
                }
            }
        };
        if($parent.find('.swiper-slide').length > 4) {
            var cur_prod_b = new Swiper(this, slideOption);
        }
    });
}

$(function(){
	if(!$('.cur_prod4_banner').length) return;
	cur_prod4_banner();
});


/* 최근 본 상품 추천 : Thumb */
function curProdViewSwiper(){
    var $target = $('.cur_prod_view_list');
    $target.each(function (index, element) {
        var $parent = $(this).parent('.cur_prod_list_wrap');
        $parent.addClass('cur_view_idx_' + index);
        var slideOption = {
            slidesPerView: 12,
            spaceBetween: 10,
            observer: true,
            observeParents: true,
            centeredSlides: true,
            speed:600,
            loop:true,
            navigation: {
                nextEl: ('.cur_view_idx_' + index + ' .swiper-button-next'),
                prevEl: ('.cur_view_idx_' + index + ' .swiper-button-prev'),
            },
            touchRatio: 0,  //드래그 금지   
            on: {
                activeIndexChange: function () {
                    setTimeout(function(){
                        $('.cur_prod_view_list a').removeClass('on')
                        //$('.cur_prod_view_list .swiper-slide-active a').trigger('click');
                        $('.cur_prod_view_list .swiper-slide-active a').addClass('on')
                    }, 100);
                }
            },
        };

        if($target.find('.swiper-slide').length > 10) {
            curProdViewSwiperCont = new Swiper(this, slideOption);
            $($parent).addClass('swiper-on');
            $($parent).addClass('len');
        }       
	});
}

$(function(){
    if(!$('.cur_prod_view_list').length) return;
    curProdViewSwiper();
});



/* 큐레이션 탭 */
$(function(){
    if(!$('.cur_sticky_tab').length) return;
    $(window).on('scroll', function() {
        $('.cur_sticky_view').each(function (index, element) {
            if($(window).scrollTop() >= $(this).offset().top - 205) {
                $('.cur_sticky_tab a').removeClass('on');
                $('.cur_sticky_tab a').eq(index).addClass('on');
            } 
        });
    });
    $.fn.anchorCusChk = function(){
        $.each(this, function(i,v){
            $(v).closest('.cur_sticky_tab').find('a').removeClass('on');
            $(v).addClass('on');

            var s = $(v).attr('href');
            $('html, body').stop().animate({scrollTop:$(s).offset().top - 200 }, 500);
        });
    };
    $('.cur_sticky_tab a').on('click', function(e) {
        $(this).anchorCusChk();
        e.preventDefault();
    });
});










/*** 고객센터 FAQ ***/
function cusFaqBanner(){
    var $target = $('.cus_faq_banner');
    $target.each(function (index, element) {
        var $parent = $(this).parent('.cus_faq_cont');
        var slideOption = {
            centeredSlides: false,
            spaceBetween: 10,
            observer: true,
            observeParents: true,
            slidesPerView: 4,
            slidesPerGroup: 4,
            loopFillGroupWithBlank : true,
            loop: true,
            loopsSlide: 1,
            speed: 1000,
            navigation: {
                nextEl: $($parent).find('.swiper-button-next'),
                prevEl: $($parent).find('.swiper-button-prev'),
            },
            pagination: {
                el: $($parent).find('.swiper-pagination'),
                type: 'fraction',
                formatFractionCurrent: function (number) {
                    return htSetPrependZero(number, 2);
                },
                formatFractionTotal: function (number) {
                    return htSetPrependZero(number, 2);
                }
            }
        };

        if($parent.find('.swiper-slide').length > 4) {
            livReplaySwiperCont = new Swiper(this, slideOption);
            $parent.addClass('swiper-on');
        }
	});
}

$(function(){
    if(!$('.cus_faq_banner').length) return;
    cusFaqBanner();
});



/* 고객센터 */
$(function(){
    /* fold_ty */
    $.fn.fold_ty = function(){
        var tar = $(this).closest('.li');
        var foldingChk = tar.hasClass('on');
        if (foldingChk){
            tar.removeClass('on');
            tar.find('.fold_btn span').text('펼치기');
        } else {
            tar.siblings('.li').removeClass('on');
            tar.siblings('.li').find('.fold_btn span').text('펼치기');
            tar.addClass('on');
            tar.find('.fold_btn span').text('접기');
        }
    };
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
        loop: false,
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



/* 제품확대 :  .magnify */
//var $zoom;
$(function () {
    if(!$('.prod_view_img_cont').length) return;
    // Initiate magnification powers
    $zoom = $('.ht_zoom').magnify({
        afterLoad: function() {
            //console.log('Magnification powers activated!');
        }
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
            spaceBetween: 0,
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
    if(!$('.prod_detail_body').length) return;
    $prodTabLink =  $('.prod_detail_body .tab_box a');

    $(window).on('scroll', function() {
        $('.prod_detail_body .tab_content').each(function (index, element) {
            if($(window).scrollTop() >= $(this).offset().top - 205) {
                $prodTabLink.removeClass('on');
                $prodTabLink.eq(index).addClass('on');
            } 
        });
    });
    $.fn.anchorCusChk = function(){
        $.each(this, function(i,v){
            $(v).closest('.prod_detail_body .tab_box').find('a').removeClass('on');
            $(v).addClass('on');

            var s = $(v).attr('href');
            $('html, body').stop().animate({scrollTop:$(s).offset().top - 200 }, 500);
            $(s).find('.prod_fold').addClass('on');
        });
    };
    $prodTabLink.on('click', function(e) {
        $(this).anchorCusChk();
        e.preventDefault();
    });
}

$(function () {
    setProdDetailAnchor();
});










/*** Event ***/
/* Module B-3 : mdl004 */
function mdl4Banner(){
    var $target = $('.mdl004_banner .swiper-container');
    $target.each(function (index, ele) {
        var $parent = $(this).parent('.mdl004_banner');
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
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
                //pauseOnMouseEnter: true,
            },
            navigation: {
                nextEl: $(ele).find('.swiper-button-next'),
                prevEl: $(ele).find('.swiper-button-prev'),
            },
            pagination: {
                el: $(ele).find('.swiper-pagination'),
                type: 'fraction',
                formatFractionCurrent: function (number) {
                    return htSetPrependZero(number, 2);
                },
                formatFractionTotal: function (number) {
                    return htSetPrependZero(number, 2);
                }
            }
        };

        if($parent.find('.swiper-slide').length > 1) {
            mdl4BannerSwiper = new Swiper(this, slideOption);
            $parent.find('.option_box').css('display','flex');
        }
	});
}

$(function(){
    if(!$('.mdl004_banner').length) return;
    mdl4Banner();
    $('.mdl004_banner').find('.s1, .s2').lettering('lines');
});



/* Module B-5 : mdl005 */
function mdl_prod_banner(){
    var $target = $('.mdl_prod_banner .swiper-container');
    $target.each(function (index, element) {
        var $parent = $(this).parent('.mdl_prod_banner');
        var slideOption = {
            observer: true,
            observeParents: true,
            slidesPerView: 2,
            slidesPerGroup: 2,
            centeredSlides: false,
            spaceBetween:36,
            loop: true,
            loopsSlide: 1,
            speed: 700,
            loopFillGroupWithBlank:false,
            navigation: {
                nextEl: $(element).find('.swiper-button-next'),
                prevEl: $(element).find('.swiper-button-prev'),
            },
            pagination: {
                el: $(element).find('.swiper-pagination'),
                type: 'fraction',
                formatFractionCurrent: function (number) {
                    return htSetPrependZero(number, 2);
                },
                formatFractionTotal: function (number) {
                    return htSetPrependZero(number, 2);
                }
            }
        };

        if($parent.find('.swiper-slide').length > 2) {
            var mdl_prod_b = new Swiper(this, slideOption);
        }
    });
}

$(function(){
	if(!$('.mdl_prod_banner').length) return;
	mdl_prod_banner();
});



/*** Module C-3 : .md013 ***/
$(function(){
    if( $('.evt_step_wrap').length > 0) stepEvtCalc();  //출석 도장 이미지 너비값 계산
    
    function stepEvtCalc(){
        var colLength = $('.evt_step_wrap').find('.step_item_list').data('column');
        var wRate = 100 / colLength;
        wRate = Math.floor(wRate * 100) / 100;
        $('.evt_step_wrap').find('.step_item').css('width', wRate +'%');
    }
});



/* Module E-1 : md015 */
$(function(){
    if(!$('.mdl015').length) return;
    $(window).on('scroll', function() {
        $('.anchor_target').each(function (index, element) {
            if($(window).scrollTop() >= $(this).offset().top - $('.mdl015_tab').innerHeight() - 111) {
                $('.mdl015_tab a').removeClass('on');
                $('.mdl015_tab a').eq(index).addClass('on');
            } 
        });
    });
    $.fn.anchorEvtChk = function(){
        $.each(this, function(i,v){
            var s = $(v).attr('href');
            $('html, body').stop().animate({scrollTop:$(s).offset().top - $('.mdl015_tab').innerHeight() - 110}, 500);
        });
    };
    $('.mdl015_tab a').on('click', function(e) {
        $(this).anchorEvtChk();
        e.preventDefault();
    });
});



/* Module : 이벤트 종료 */
$(function(){
    if(!$('.mdl_contents_wrap .evt_end_msg').length) return;
	$(window).resize (resizeEvtEmp).resize();
	function resizeEvtEmp(){
		function scrollEvtEmp() {
		 	var locS =  $(window).scrollTop();
            var locA1 = $(window).height() / 4;
            if( locS < locA1) {
                $('.mdl_contents_wrap .evt_end_msg').removeClass('ch');
            } else {
                $('.mdl_contents_wrap .evt_end_msg').addClass('ch');
            }
		}
		$(window).scroll(function() {
			scrollEvtEmp();
		});
		$(window).resize(function() {
			scrollEvtEmp();  
		});
	}
});










/*** Scroll Event ***/
$.fn.feScrollGet = function(){
    var offset = $(window).scrollTop() + $(window).height() * 0.9;
	$animate = $('.ht_tit_big, .ht_tit_big02, .tab_ty, .tab_under, .ht_under_banner, .ht_belt_banner, .evt_products, .wel_cont, .ht_today_banner, .wel_today_time, .wel_now_banner, .wel_exehibition_banner, .wel_gift_cont, .wel_category_banner, .btn_gift_warp, .wel_quick_menu_cont, .mus_mc_reserved_cont, .mus_mc_order .contents_inner, .mus_mc_chart_cont, .mus_mc_new_album_cont, .mus_mc_fan_cont, .mus_mc_fansign .contents_inner, .mus_mc_lpshop_cont, .mus_mc_classic_msg ul, .mus_mc_special_cont, .mus_tab_box, .ht_tit_info, .sti_archive_list_wrap ul li, .tab-list ul li span, .sti_mian_wrap .best_brands_list_wrap ul li, .sti_mian_wrap .evt_list li');

    $animate.each(function(i){
        var $ani = $(this),
            ani = $ani;
            if(($ani.offset().top) < offset){
            if(!$ani.hasClass('ht_ani')){
                $ani.addClass('ht_ani');	
            }
        }else{
            if($ani.hasClass('ht_ani')){
            	$ani.removeClass('ht_ani');
            }
        }
    });
};

function feScrollFn(){
    $.fn.feScrollGet();
}

$(function(){
    if(!$('.wel_main_warp, .mus_main_warp, .sti_mian_wrap').length) return;
    $(window).on('scroll', feScrollFn);
    feScrollFn();
});










/*** 3과제 : Search - 내부처리 ***/
function setSearchInputNew(wrap, input) {
    wrap = wrap || '.form_ip_search';
    input = input || '.form_ip';

    var searchWrap, searchIp, clearBtn;

    if($(wrap).length > 0){
        $(wrap).each(function(){
            searchWrap = $(this);
            searchIp = $(this).find(input);
            clearBtn = $(this).find('.btn_ip_clear');

            if(searchIp.val().length > 0 ) searchWrap.addClass('value');

            clearBtn.off('click').on('click', function(){
                searchWrap = $(this).closest(wrap);
                searchWrap.find(input).val('').focus();
                searchWrap.removeClass('value');
            })

            searchIp.on({
                'propertychange change input paste': function () {
                    searchWrap = $(this).closest(wrap);
                    if($(this).val().length > 0 ) {
                        searchWrap.addClass('value');
                    } else{
                        searchWrap.removeClass('value');
                    }
                },
                'focusin': function () {
                    searchWrap = $(this).closest(wrap);

                    if (!searchWrap.hasClass('focus')) searchWrap.addClass('focus');
                },
                'focusout': function () {
                    searchWrap = $(this).closest(wrap);

                    if (searchWrap.hasClass('focus')) searchWrap.removeClass('focus');
                }
            });
        });
    }
}

$(function(){
    setSearchInputNew();
});










/*** Mobile Mode Check : 팝업 스크롤 여백 ***/
$(function(){
    function htMobile(){
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
    if (htMobile()){
        $('body').addClass('ht_mo');
    } 
});









