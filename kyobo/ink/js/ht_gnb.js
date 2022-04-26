$(function(){
    /* 1Depth */
    $('.btn_anb').click(function(e){
        if($('.anb_wrap').hasClass('active')){
            $('.ht_gnb_cont').removeClass('chk2').removeClass('chk3'); // 곰돌이 아이콘 이미지 초기화

            $('.ht_gnb_tab a').removeClass('active');
            $('.gnb_menu a').removeClass('active');
            $('.ht_gnb_box').hide();
            $('.gnb3dep .gnb_menu_area, .gnb4dep .gnb_menu_area').hide();
    

            $('.ht_gnb_tab li').eq(0).find('a').addClass('active');
            $('#htGnbCate01').show();
            $('#htGnbCate01 .ht_gnb_cont').addClass('chk2');
        }else{

        }
    });


    /* 1Depth */
    $('.ht_gnb_tab a').click(function(e){
        $('.ht_gnb_cont').removeClass('chk2').removeClass('chk3'); // 곰돌이 아이콘 이미지 초기화

        $('.gnb_menu_area').hide();
        $('.ht_gnb_box').hide();

        /* 1Depth 메뉴 활성화 */
        $('.gnb_menu a').removeClass('active');
		$(this).parent().parent().find('a').removeClass('active');
        $(this).addClass('active');

        var s = $(this).attr('href');
        $(s).show();
        $(s).find('.ht_gnb_cont').addClass('chk2'); // 곰돌이 아이콘 2Depth
        e.preventDefault();
    });

    /* 2Depth */
    $('.gnb2dep a').click(function(e){
        $('.ht_gnb_cont').removeClass('chk2').removeClass('chk3'); // 곰돌이 아이콘 이미지 초기화

        $('.gnb3dep .gnb_menu_area, .gnb4dep .gnb_menu_area').hide();

        /* 2Depth 메뉴 활성화 */
        $('.gnb_menu a').removeClass('active');
        $(this).addClass('active');

        /* 확인용 */
        if($(this).hasClass('ht_gnb_arrow')) {
            var s = $(this).attr('href');
            $(s).show();
            $(this).closest('.ht_gnb_cont').addClass('chk3'); // 곰돌이 아이콘 3Depth
        } else {
            alert('링크연결');
            $(this).closest('.ht_gnb_cont').addClass('chk2'); // 확인용 곰돌이 아이콘 2Depth
        }
        e.preventDefault();
    });

    /* 3Depth */
    $('.gnb3dep a').click(function(e){
        $('.ht_gnb_cont').removeClass('chk2').removeClass('chk3'); // 곰돌이 아이콘 이미지 초기화
        $('.gnb4dep .gnb_menu_area').hide();
        
        /* 3Depth 메뉴 활성화 */
		$(this).parent().parent().find('a').removeClass('active');
        $(this).addClass('active');

        /* 확인용 */
        if($(this).hasClass('ht_gnb_arrow')) {
            var s = $(this).attr('href');
            $(s).show();
        } else {
            alert('링크연결');
            $(this).closest('.ht_gnb_cont').addClass('chk3'); // 확인용 곰돌이 아이콘 3Depth
        }
        e.preventDefault();
    });
});