$(function(){

    $('.ht_gnb_tab a').click(function(e){
        $('.gnb_menu_area').hide();
        $('.gnb_menu a').removeClass('active');
        $('.ht_gnb_box').hide();
        $('.ht_gnb_cont').removeClass('chk2').removeClass('chk3');

		$(this).parent().parent().find('a').removeClass('active');
        $(this).addClass('active');

        var s = $(this).attr('href');
        $(s).show();
        $(s).find('.ht_gnb_cont').addClass('chk2');
        e.preventDefault();
    });

    $('.gnb2dep a').click(function(e){
        $('.ht_gnb_cont').removeClass('chk2');
        $('.gnb3dep .gnb_menu_area, .gnb4dep .gnb_menu_area').hide();
        $('.gnb_menu a').removeClass('active');

        $(this).addClass('active');
        if($(this).hasClass('ht_gnb_arrow')) {
            var s = $(this).attr('href');
            $(s).show();
            $(this).closest('.ht_gnb_cont').addClass('chk3');
        } else {
            alert('링크연결');
            $(this).closest('.ht_gnb_cont').addClass('chk2');
        }
        e.preventDefault();
    });
    $('.gnb3dep a').click(function(e){
        $('.gnb4dep .gnb_menu_area').hide();
        $('.ht_gnb_cont').removeClass('chk2').removeClass('chk3');
		$(this).parent().parent().find('a').removeClass('active');
        $(this).addClass('active');
        if($(this).hasClass('ht_gnb_arrow')) {
            var s = $(this).attr('href');
            $(s).show();
        } else {
            alert('링크연결');
        }
        e.preventDefault();
    });
});