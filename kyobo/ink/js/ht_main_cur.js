
/*** 큐레이션 메인 ***/
/*
function curScrollEvent() {
    var images = document.querySelectorAll('.curation_list_cont .lis');
    var imgStack = [0, 0];
    var colWidth = 100;
    for(var i = 0; i < images.length; i++) {
        var minIndex = imgStack.indexOf(Math.min.apply(0, imgStack));
        var x = colWidth * minIndex;
        var y = imgStack[minIndex];
        imgStack[minIndex] += (images[i].children[0].height + 20);
        images[i].style.transform = `translateX(${x}%) translateY(${y}px)`;
        if(i === images.length - 1) {
            document.querySelector('.curation_list_cont > ul').style.height = `${Math.max.apply(0, imgStack)}px`;
        }
    }
}

$(function(){
    if(!$('.curation_list').length) return;
    window.onload = function(){
        curScrollEvent();  
    }
    $(window).resize(function() {
        curScrollEvent();  
    });
});
*/
$(function(){
    $('.cur_view .btn_cur_view').click(function(){    
        return false;
    });
});



/* 찜한 브랜드 */
function curProdSwiper(){
    var $target = $('.cur_prod_img');
    $target.each(function (index, element) {
        var $parent = $(this);
        $parent.addClass('cur_prod_idx_' + index);
        var slideOption = {
            slidesPerView: 'auto',
            spaceBetween:0,
            freeMode: true,
            observer: true,
            observeParents: true,
            speed:300,
            pagination: {
                el: $($parent).find('.swiper-pagination'),
                type: "progressbar",
            },
        };

        if($parent.find('.swiper-slide').length > 4) {
            curProdSwiperCont = new Swiper(this, slideOption);
        }
	});
}

$(function(){
    if(!$('.cur_prod_img').length) return;
    curProdSwiper();
});





/* 최근 본 상품 추천 */
function curProdViewSwiper(){
    var $target = $('.cur_prod_view_list');
    $target.each(function (index, element) {
        var $parent = $(this);
        $parent.addClass('cur_view_idx_' + index);
        var slideOption = {
            slidesPerView: 'auto',
            spaceBetween:0,
            freeMode: true,
            observer: true,
            observeParents: true,
            speed:300,
        };

        if($parent.find('.swiper-slide').length > 1) {
            curProdViewSwiperCont = new Swiper(this, slideOption);
        }
	});
}

$(function(){
    if(!$('.cur_prod_view_list').length) return;
    curProdViewSwiper();
});



/* What’s in your bag : 팝업 */
$(function(){
    $('.cur_new02_li.on .fold_btn span').text('접기');
    $('.cur_new02_li .fold_btn').click(function(e){
        e.preventDefault();
        $(this).fold_ty();
    });
});


/* 코너메뉴 큐레이션4단배너 */
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


/* 코너메뉴 Tab Slide */
function prodView(){
    var prodViewThumb = new Swiper('.cur_tab_contents_warp', {
        //direction: 'vertical',
        observer: true,
        observeParents: true,
        slidesPerView: "auto",
        slideToClickedSlide: true,
        loop: false,
        loopedSlides: 1,
        speed: 400,
        loopAdditionalSlides: 1
    });
    
    var prodViewImg = new Swiper('.cur_prod_contents_warp', {
        /*autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },*/
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.tab_view_img_cont .swiper-button-next',
            prevEl: '.tab_view_img_cont .swiper-button-prev',
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        thumbs: {
            swiper: prodViewThumb
        },
        loop: true,
        speed: 400,
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
    if(!$('.tab_view_img_cont').length) return;
    if($('.cur_prod_contents_warp').find('.swiper-slide').length > 1) {
        $('.tab_view_img_cont').addClass('swiper-on');
        prodView();
    }
    $(window).resize(function() {
        prodView();
    });
});