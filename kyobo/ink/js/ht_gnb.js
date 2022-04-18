$(function(){

    $('.ht_gnb_tab a').click(function(e){
        $('.gnb_menu_area').hide();
        $('.gnb_menu a').removeClass('active');
        $('.ht_gnb_box').hide();

		$(this).parent().parent().find('a').removeClass('active');
        $(this).addClass('active');

        var s = $(this).attr('href');
        $(s).show();
        e.preventDefault();
    });

    $('.gnb2dep a').click(function(e){
        $(this).closest('.ht_gnb_cont').addClass('chk');
        $('.gnb3dep .gnb_menu_area, .gnb4dep .gnb_menu_area').hide();
        $('.gnb_menu a').removeClass('active');

        $(this).addClass('active');
        if($(this).hasClass('ht_gnb_arrow')) {
            var s = $(this).attr('href');
            $(s).show();
        } else {
            alert('링크연결');
        }
        e.preventDefault();
    });
    $('.gnb3dep a').click(function(e){
        $('.gnb4dep .gnb_menu_area').hide();
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