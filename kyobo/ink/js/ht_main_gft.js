

/**** 선물추천 ****/
/* 선물이 필요한 순간 핫트 하세요 */
function giftNeed(){
    var $target = $('.gft_need_main_cont .swiper-container');
    var slideOption = {
        slidesPerView: 3,
        slidesPerGroup: 3,
        loop: false,
        spaceBetween: 36,
        speed: 700,
        pagination: {
            el: $('.gft_need_main_cont').find('.swiper-pagination')[0],
            type: 'fraction',
            formatFractionCurrent: function (number) {
                return KyoboBookPub.ink.setPrependZero(number, 2);
            },
            formatFractionTotal: function (number) {
                return KyoboBookPub.ink.setPrependZero(number, 2);
            }
        },
        navigation: {
            nextEl: '.gft_need_main_cont .swiper-button-next',
            prevEl: '.gft_need_main_cont .swiper-button-prev',
        },
    };
    if($target .find('.swiper-slide').length > 3) {
        giftNeedSwiper = new Swiper($target.get(), slideOption);
    }
}

$(function(){
    if(!$('.gft_need_main_cont').length) return;
    giftNeed();

    if($(".gft_need_main_cont .swiper-wrapper > li").length < 4){
        $(".gft_need_main_cont .swiper-wrapper").addClass("list_lenght_warp");
    }else{
        $(".gft_need_main_cont .swiper-wrapper").removeClass("list_lenght_warp");
    }
});



/* 선물이 고민된다면, 핫트에 물어보세요 */
$(function(){
    $('.gft_question_chk input').click(function(){ 
        var chk = $(this).is(':checked');
        if(chk){
            $(this).closest('.gft_question_chk').addClass('on');
            $(this).closest('.gft_question_chk').find('input').prop('disabled', true);
            $(this).prop('disabled', false);

        }else{
            $(this).closest('.gft_question_chk').removeClass('on');
            $(this).closest('.gft_question_chk').find('input').prop('disabled', false);
        }
    }); 
});


/* 선물추천 - 팝업 */
function btnPopAddListOp(v){
    $('body').css('overflow','hidden');
    var s = $(v).attr('value');
    $('#' + s + '').addClass('on');
}
function btnPopAddListCl(){
    $('body').css('overflow','');
    $('.pop_view_add').addClass('off');
    setTimeout(function(){
        $('.pop_view_add').removeClass('off').removeClass('on');
    }, 600);
}


