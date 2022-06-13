jQuery(function($) {
    $.datepicker.setDefaults({
        dateFormat: "yymmdd"
        , showButtonPanel: true
        , showMonthAfterYear: true
        , changeYear: true
        , monthNames: ['년 1월','년 2월','년 3월','년 4월','년 5월','년 6월','년 7월','년 8월','년 9월','년 10월','년 11월','년 12월']
        , dayNamesMin: ['일','월','화','수','목','금','토']
    });
    
    $('button.ui-datepicker-current').live('click', function() {
        $.datepicker._curInst.input.datepicker('setDate', new Date()).datepicker('hide');
    });
    
});