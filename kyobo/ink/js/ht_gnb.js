/* HT GNB */
function setHtGnb() {
    var $ht_gnb = $('.gnb_hottracks_area');

    /* 1Depth */
    $('.ht_gnb_tab a').click(function(e){
        $ht_gnb.find('.ht_gnb_cont').removeClass('chk2').removeClass('chk3'); //곰돌이 아이콘 이미지 초기화
        $ht_gnb.find('.simplebar-content-wrapper').stop().animate({scrollTop:0}, 100);
        $ht_gnb.find('.ht_gnb_box').hide();
        $ht_gnb.find('.gnb_menu_area').hide();
        $ht_gnb.find('.gnb_menu a').removeClass('active');

        /* 1Depth 메뉴 활성화 */
		$(this).parent().parent().find('a').removeClass('active');
        $(this).addClass('active');

        var tag = $(this).attr('href');
        $(tag).show();
        $(tag).find('.ht_gnb_cont').addClass('chk2'); //곰돌이 아이콘 2Depth

        e.preventDefault();
    });

    /* 2Depth */
    $('.gnb2dep a').click(function(e){
        $ht_gnb.find('.ht_gnb_cont').removeClass('chk2').removeClass('chk3'); //곰돌이 아이콘 이미지 초기화
        $ht_gnb.find('.gnb_menu_area').hide();
        $ht_gnb.find('.gnb_menu a').removeClass('active');

        /* 2Depth 메뉴 활성화 */
        $(this).addClass('active');
        if($(this).hasClass('ht_gnb_arrow')) {
            var tag = $(this).attr('href');
            $(tag).show();
            $(this).closest('.ht_gnb_cont').addClass('chk3'); //곰돌이 아이콘 3Depth
            $ht_gnb.find('.simplebar-content-wrapper').stop().animate({scrollTop:0}, 100);
            e.preventDefault();
        } else {
            $(this).closest('.ht_gnb_cont').addClass('chk2'); //확인용 곰돌이 아이콘 2Depth
        } 
    });

    /* 3Depth */
    $('.gnb3dep a').click(function(e){
        $ht_gnb.find('.ht_gnb_cont').removeClass('chk2').removeClass('chk3'); //곰돌이 아이콘 이미지 초기화
        $ht_gnb.find('.gnb4dep .gnb_menu_area').hide();

        /* 3Depth 메뉴 활성화 */
		$(this).parent().parent().find('a').removeClass('active');
        $(this).addClass('active');

        if($(this).hasClass('ht_gnb_arrow')) {
            var tag = $(this).attr('href');
            $(tag).show();
            $ht_gnb.find('.simplebar-content-wrapper').stop().animate({scrollTop:0}, 100);
            e.preventDefault();
        } else {
            $(this).closest('.ht_gnb_cont').addClass('chk3'); //확인용 곰돌이 아이콘 3Depth
        }
    });
}


$(function(){
    setHtGnb()
});




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
	$('.tab_link').attr('aria-controls', 'tabAnbCategoryHotTracks').click(function(e){
        setHtGnbOp();
	});
});

