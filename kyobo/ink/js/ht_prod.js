/***** 제품상세  *****/
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




/* Fold Type */
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
/*
$('html').on({
    magnifystart: function() {
        console.log('\'magnifystart\' event fired');
    },
    magnifyend: function() {
        console.log('\'magnifyend\' event fired');
    }
});
*/


