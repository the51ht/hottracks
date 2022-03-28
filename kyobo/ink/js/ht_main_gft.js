

/**** 선물추천 ****/
/* 선물이 필요한 순간 핫트 하세요 */
function gftNeed(){
    var $target = $('.gft_need_cont  .swiper-container');
    var slideOption = {
        observer: true,
        observeParents: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true,
        loopsSlide: 1,
        spaceBetween: 20,
        /*autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },*/
        speed: 700,
		pagination: false,
    };
    gftNeedSwiper = new Swiper($target.get(), slideOption);
}

$(function(){
    if(!$('.gft_need_cont').length) return;
    gftNeed();
});



/* 선물이 고민된다면, 핫트에 물어보세요 */
function gftQuestion(){
    var $target = $('.gft_question_cont .swiper-container');
    var slideOption = {
        observer: true,
        observeParents: true,
        slidesPerView: 'auto',
        centeredSlides: false,
        //loop: true,
        loopsSlide: 1,
        spaceBetween:0,
        /*autoplay: {
            delay:5000,
            disableOnInteraction: false,
        },*/
        speed: 700,
		pagination: {

		},
    };
    gftQuestionSwiper = new Swiper($target.get(), slideOption);
}

$(function(){
    if(!$('.gft_question_cont').length) return;
    gftQuestion();
});

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


