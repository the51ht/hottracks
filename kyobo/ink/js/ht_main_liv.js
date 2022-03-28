

/*** 라이브 메인 ***/
/* 라이브 다시보기 */
function livReplaySwiper(){
    var $target = $('.liv_replay_cont');
    $target.each(function (index, element) {
        var $parent = $(this);
        var slideOption = {
            spaceBetween: 20,
            observer: true,
            observeParents: true,
            slidesPerView:3,
            loop: true,
            loopsSlide:1,
            autoHeight: true,
            pagination: {
                el: $parent.find('.swiper-pagination')[0],
                type : 'bullets',
            },
            speed:400,
        };

        //if($parent.find('.swiper-slide').length > 3) {
            livReplaySwiperCont = new Swiper(this, slideOption);
        //}
	});
}

$(function(){
    if(!$('.liv_replay_cont').length) return;
    livReplaySwiper();
});




/* 라이브 달력 */
function calendarTabSwiper(){
    var $target = $('.calendar_tab');
    var slideOption = {
        slidesPerView: 'auto',
        spaceBetween:0,
        freeMode: true,
        observer: true,
        observeParents: true,
        slidesPerView:7,
        speed:300,
    };
    calendarTabSwiperCont = new Swiper($target.get(), slideOption);
}

$(function(){
    if(!$('.calendar_tab').length) return;
    calendarTabSwiper();
});




/* 미리 만나는 라이브 */
function livNewMsg(){
	var offsetPosition = $('.liv_list .li:first-child .alarm_chk02').offset();
	var y = offsetPosition.top - $('.liv_list').offset().top + 35;
	$('.liv_new_msg').css('top', y);
}
$(function(){
    if(!$('.liv_new_msg').length) return;
	livNewMsg();
	$(window).resize(function() {
		livNewMsg();
	});
});




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

