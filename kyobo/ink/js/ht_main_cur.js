
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




/* 이럴 땐? 이런상품 */
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
        };

        if($parent.find('.swiper-slide').length > 1) {
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
