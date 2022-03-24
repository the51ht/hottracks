/***** jang 작업 *****/

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
        /*autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },*/
        speed: 900,
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