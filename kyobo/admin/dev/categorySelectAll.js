
$(document).ready(function(){
    if ($("#categorySelect").get(0) != undefined) {
		var maxLength = $("#categorySelect").attr("maxlength");		
		if(maxLength == undefined || maxLength == ""){
			maxLength = 0;
		}

		categorySelectLoad("00", maxLength);
    }
});

function categorySelectLoad(parentCateId, maxLength, divId, inputName, mallId) {
    if (maxLength == undefined || maxLength == "") {
        maxLength = 0;
    }
    
    if (divId == undefined || divId == '') {
        divId = 'categorySelect';
    }
    
    if (inputName == undefined || inputName == '') {
        inputName = 'selectCategory';
    }
    
	if (mallId == undefined) {
		mallId = '';
	}
	
    var params = 'parentCateId='+parentCateId;
    params += '&maxLength=' + maxLength;
    params += '&inputName=' + inputName;
    params += '&divId=' + divId;
	params += '&mallId=' + mallId;
    
	$('#' + divId).html('');
	//$('#' + divId).load('/product/listCategoryForSelect?' + params);
    $.ajax({
        type: 'GET'
        ,url: '/product/listCategoryForSelectAll'
        ,data: params
        ,dataType: 'html'
        ,success: function(html) {
        	$('#' + divId).html(html);
        }
    });
	
}
