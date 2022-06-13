$(function(){
    if(!$('.disp-side-menu, .module-side-menu').length) return;
    $('.disp-side-menu a span, .module-side-menu a span').wrapInner('<em></em>');
});