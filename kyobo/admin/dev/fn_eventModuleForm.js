/**
 * FUNCTION : eventMasterForm.jsp
 * 
 * MEMO
 * 템플릿 내용
 * 
 */
/* NVL Function */
function chkVal(value){
    if (value == null || value == undefined || value == 'undefined'){
        return "";
    }else{
        return value;
    }
}
/* 0. 이미지 찾기 */
function findEventImage(id){
    window.open('/admin/imageUploadForm?id=' + id, '_popup', 'width=600,height=200');
}
 
/* 0. 이미지 업로드 */
function setUploadImage(uploadImage, id) {
    var imageUrl = imageServerUri + uploadImage;
    $("img#"+id+"Img").attr("src", imageUrl);
    $("input#"+id).val(uploadImage);
}

/* 0. 이미지 삭제 */
function removeEventImage(id){
    var imageUrl = imageServerUri + "<ui:variable key='no.image' prepare='http://'/>";
    $("img#"+id+"Img").attr("src", imageUrl);
    $("input#"+id).val("");
}

//==================== 이벤트 사은품 ==================== //
// 1. 사은품 이벤트
//    - [추가]
function addFreeGift(){
    window.open('/admin/product/popupListFreeGift', '_popup', 'width=1000,height=500');
}

//    - 단일 사은품 등록
function setFreeGift(freeGift) {
    var rtnCode = getFreeGift(freeGift);
    switch(rtnCode){
    case -1:alert(freeGift.name + '은(는) 사용할 수 없는 사은품입니다.');break;
    case -2:alert(freeGift.name + '은(는) 이미 추가한 사은품 입니다.');break;
    }
}

//    - 복수 사은품 등록
function setFreeGifts(freeGifts) {
    var nonArray = new Array();
    var dupArray = new Array();
    
    for (var i = 0; i < freeGifts.length; i++) {
        var rtnCode = getFreeGift(freeGifts[i]);
        
        switch(rtnCode){
        case -1:nonArray.push('['+freeGifts[i].id+']'+freeGifts[i].name);break;
        case -2:dupArray.push('['+freeGifts[i].id+']'+freeGifts[i].name);break;
        }
    }
    var msg = '';
    if(nonArray.length > 0){
        msg += '[사용불가 사은품]\n';
        for(var i = 0; i < nonArray.length; i++){
            msg += nonArray[i] + '\n';
        }
    }
    if(dupArray.length > 0){
        msg += '[중복 사은품]\n';
        for(var i = 0; i < dupArray.length; i++){
            msg += dupArray[i] + '\n';
        }
    }
    if(msg != '')    alert(msg);
}
//    - 사은품 등록
function getFreeGift(freeGift) {
    var id = freeGift.id;
    var isDuplicated = false;
    
    if (freeGift.statusCode != "C0331") {
        return -1;
    }else if ($("tr#freeGift"+freeGift.id).length > 0) {
        return -2;
    }else{
    console.log($("tr#freeGift"+freeGift.id).length);
    	var i = $("#freeGiftTbody tr td [name=chkFree]").length+1
    	if($("#freeGiftTbody tr td[num="+i+"]").length==1){i++;}
        var freeGiftStr = '';
        freeGiftStr += '<tr id="freeGift'+freeGift.id+'">';
        freeGiftStr += '    <td num="'+i+'"><input type="checkbox" name="chkFree" value="'+freeGift.id+'"/></td>';
        freeGiftStr += '    <td><input type="hidden" name="freeGiftId'+i+'" value="'+freeGift.id+'"/>'+freeGift.id+'</td>';
        freeGiftStr += '    <td class="left" id="productName">'+freeGift.name+'</td>';
        freeGiftStr += '    <td><input type="text" name="freeGiftCount'+i+'" value="'+freeGift.laveCount+'" size="10"/></td>';
        freeGiftStr += '    <td>0</td>';
        freeGiftStr += '    <td>';
        freeGiftStr += '        <span class="button"><input type="button" onclick="removeFreeGift(\''+freeGift.id+'\')" value="삭제" title="['+freeGift.name+']을(를) 삭제하고 모든 상품에서 적용취소합니다."/></span>';
        freeGiftStr += '    </td>';
        freeGiftStr += '</tr>';
        
        $("#freeGiftTbody").append(freeGiftStr);
    }
    
    return 1;
}
// 2. 사은품 삭제
function removeFreeGift(key){
    // 해당 키값 배열 생성
    // AJAX > 이벤트 사은품 삭제
    // 메인 상품 삭제
    // 해당 상품을 리스트에서 삭제한다.
    // 총 상품 개수를 보여줌
    var freeGiftIds = [];
    if(key == null){
        $('input[name="chkFree"]:checked').each(function(){
            freeGiftIds.push($(this).val());
        });
    }else{
        freeGiftIds.push(key);
    }
    if(freeGiftIds.length > 0){
	    for(var i= 0; i<freeGiftIds.length; i++){
	        if(cancFreeGift('A', freeGiftIds[i], null)){
	        	console.log("1111");
	        	if($('tr#freeGift'+freeGiftIds[i]).attr("class")=="saved"){
		        	$.ajax({
				        async:false,
				        url:"/admin/event/deleteFreeGift",
				        data:{"eventId":eventId,"freeGiftId":freeGiftIds[i]},
				        dataType:'json',
				        success:function(result){
				        	$('tr#freeGift'+freeGiftIds[i]).remove();
				        	return true;
				        },
				        error: function(result){
				            alert('작업이 실패 하였습니다.재시도 해주시기 바랍니다.');
				            return false;
				        }
				    });
	        	}else{
		        	$('tr#freeGift'+freeGiftIds[i]).remove();
	        	}
	        }else{
	        	console.log("2222");
	        }
	    }
    }
}
// 4. 사은품 상품 적용 취소
function cancFreeGift(type, key, sellPrdtBcode){
    var freeGiftIds = [];
    var sellPrdtBcodes = [];
    var result = true;
    if(key == null){
        $('input[name="chkFree"]:checked').each(function(){
            freeGiftIds.push($(this).val());
        });
    }else{
        freeGiftIds.push(key);
    }
    if(type == "S"){
        $("tbody#productListTbody input[name='chkPrdt']:checked").each(function(){
            sellPrdtBcodes.push($(this).val());
        });
    }else if(sellPrdtBcode != null){
        sellPrdtBcodes.push(sellPrdtBcode);
    }
    
    $.ajax({
        async:false,
        url:"/admin/event/cancelEventFreeGift",
        data:{"eventId":eventId,"freeGiftIds":freeGiftIds.join(","),"sellPrdtBcodes":sellPrdtBcodes.join(",")},
        dataType:'json',
        success:function(result){
        	result = true;
        	if(type == "A"){
                $('tbody#productListTbody tr').each(function(){
                    for(var i = 0; i<freeGiftIds.length; i++){
                        $(this).find("p#freeGift"+freeGiftIds[i]).remove();
                    }
                });
            }else if(sellPrdtBcodes.length > 0){
                for(var i = 0; i<sellPrdtBcodes.length; i++){
                    for(var j = 0; j<freeGiftIds.length; j++){
                        $('tbody#productListTbody tr#tr'+sellPrdtBcodes[i]).find("p#freeGift"+freeGiftIds[j]).remove();
                    }
                }
            }
        },
        error: function(result){
            alert('작업이 실패 하였습니다.재시도 해주시기 바랍니다.');
            result = false;
        }
    });
    return result;
}
// 3. 사은품 상품 적용
function applyFreeGift(type, key){
    var freeGiftIds = [];
    var sellPrdtBcodes = [];
    console.log("???");
    if(key == null){
        $('input[name="chkFree"]:checked').each(function(){
            freeGiftIds.push($(this).val());
        });
    }else{
        freeGiftIds.push(key);
    }
    if(type == "S"){
        $("tbody#productListTbody input[name='chkPrdt']:checked").each(function(){
            sellPrdtBcodes.push($(this).val());
        });
    }
    $.ajax({
        url:"/admin/event/applyEventFreeGiftByModuleProduct",
        data:{"eventId":eventId,"mallId":mallId,"moduleSeq":moduleSeq,"freeGiftIds":freeGiftIds.join(","),"sellPrdtBcodes":sellPrdtBcodes.join(",")},
        dataType:'json',
        success:function(result){
            $('tbody#productListTbody tr').each(function(){
                if(type == "A" || $(this).find("input[name='chkPrdt']").is(":checked")){
                    var sellPrdtBcode = $(this).find("input[name='sellPrdtBcode']").val();
                    for(var i= 0; i<freeGiftIds.length; i++){
                        if($(this).find("p#freeGift"+freeGiftIds[i]).length<1){        // 중복검사
                            var keyName = $('tr#freeGift'+freeGiftIds[i]).find('td#productName').text();
                            var idSeq = $("#freeGiftTd p").length;
                            console.log("????");
                            // 사은품 추가
                            var tdStr = '';
                            tdStr += '<p id="freeGift'+freeGiftIds[i]+'" title="'+keyName+'">';
                            tdStr += keyName.substring(0, 7)+"..";
                            tdStr += '<input type="hidden" name="productFreeGiftId'+idSeq+'" value="'+ sellPrdtBcode + 'x' + freeGiftIds[i] +'"/>';
                            tdStr += '<span class="small button"><input type="button" value="X" onclick="cancFreeGift(\'P\', \''+freeGiftIds[i]+'\', \''+sellPrdtBcode+'\')"/></span>';
                            tdStr += '</p>';
                            
                            $(this).find("td#freeGiftTd").append(tdStr);
                        }
                    }
                }
            });
        },
        error: function(result){
            alert('작업이 실패 하였습니다.재시도 해주시기 바랍니다.');
        }
    });
}
// 8. 리스트 전체 선택
function chkAll(type){
    if(type == "P"){
        $("input[name='chkPrdt']").attr('checked', $('input[name="chkPrdtAll"]').is(':checked'));
        
        $("tbody#productListTbody tr").removeClass("error");
        if($('input[name="chkPrdtAll"]').is(':checked')){
            $("tbody#productListTbody tr").addClass("checked");
        }else{
            $("tbody#productListTbody tr").removeClass("checked");
        }
    }
}
// 10. 상품 할인율, 할인가, 수수료율 단일 수정
function changeVal(bcode, type){
    var tr = $("tr#tr"+bcode);
    console.log("???")
    if(type == "R" || type == "P"){
        var sellPrice = eval(tr.find("input[name='prdtSellPrice']").val());
        var dscntRate = eval(tr.find("input[name='eventDscntRate']").val());
        var dscntPrice = eval(tr.find("input[name='eventDscntPrice']").val());
        if(type == "R"){
            if(dscntRate < 0 || dscntRate > 100){
                alert('입력 값이 올바르지 않습니다.');
                tr.find("input[name='eventDscntRate']").val(tr.find("input[name='eventDscntRate']").attr("orgValue")).removeClass("mod");
                tr.find("input[name='eventDscntPrice']").val(tr.find("input[name='eventDscntPrice']").attr("orgValue")).removeClass("mod");
                tr.find("input[name='eventDscntRate']").focus();
            }else{
                tr.find("input[name='eventDscntPrice']").val(parseInt(Math.round(sellPrice*(100-dscntRate)/1000))*10).addClass("mod");
            }
        }else if (type == "P"){
            if(dscntPrice < 0 || dscntPrice > sellPrice){
                alert('입력 값이 올바르지 않습니다.');
                tr.find("input[name='eventDscntRate']").val(tr.find("input[name='eventDscntRate']").attr("orgValue")).removeClass("mod");
                tr.find("input[name='eventDscntPrice']").val(tr.find("input[name='eventDscntPrice']").attr("orgValue")).removeClass("mod");
                tr.find("input[name='eventDscntRrice']").focus();
            }else{
                dscntPrice = parseInt(Math.round(dscntPrice/10)*10);
                tr.find("input[name='eventDscntPrice']").val(dscntPrice).addClass("mod");
                tr.find('input[name="eventDscntRate"]').val((1-dscntPrice/sellPrice)*100).addClass("mod");
            }
        }
    }else if(type == "C"){
        var chgeRate = eval(tr.find("input[name='chgeRate']").val());
        if(chgeRate < 0 || chgeRate > 100){
            alert('입력 값이 올바르지 않습니다.');
            tr.find("input[name='chgeRate']").val(tr.find("input[name='chgeRate']").attr("orgValue"));
            tr.find("input[name='chgeRate']").focus();
        }
    }
}