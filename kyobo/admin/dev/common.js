jQuery(function($) {
    $("#btnSearchVendor").click(function() {
    	window.open("/admin/vendor/popupSearchVendor", "", "width=800, height=600, scrollbars=yes");
    });
    
    $("#btnSearchBrand").click(function() {
        var maxLength = 1;
        if(!isEmpty($(this).attr("maxLength"))) {
            maxLength = $(this).attr("maxLength");
        }
        
        var mallId = '';
        if(!isEmpty($(this).attr("mallId"))) {
            mallId = $(this).attr("mallId");
        } else {
            mallId = '00';
        }
        
        var param = "?maxLength=" + maxLength;
        param += "&mallId=" + mallId;
        
        window.open("/admin/vendor/popupSearchBrand" + param, "", "width=800, height=600, scrollbars=yes");
    });
    
    $('input.inputNumberText').keypress(function(event) {
        if (event.which != 13) { 
            if (event.which != 8) {
            	if (event.which < 48 || event.which > 57) {
                    event.preventDefault();
                }
            }
        }
    });
    
    $('input.upperNumber').blur(function(event) {
    	var amt = $(this).val();
    	$(this).attr('value', upperNumber(amt));
    });
    
    $('input.inputNumberTextWithMinus').keypress(function(event) {
        if (event.which != 13 && event.which != 45) { 
            if (event.which != 8) {
            	if (event.which < 48 || event.which > 57) {
                    event.preventDefault();
                }
            }
        }
    });
    
	
	$('input.inputNumber').live("keypress", function(event) {
		if (event.which != 13 ) {
            if(event.which != 8) {
            	if (event.which < 48 || event.which > 57) {
                    event.preventDefault();
                }
            }
        }
    });
    
    $('.inputRateText').keypress(function(event) {
        if (event.which != 46) {
            if (event.which < 48 || event.which > 57) {
                event.preventDefault();
            }
        }
    });
});

function Fn_ToggleMenu(){
    var item = $("#head");
    if (item.hasClass("show")){
        item.removeClass("show");
    }else{
        item.addClass("show");
    }
}

function searchProduct(maxLength, categoryId, mallId) {
    if(isEmpty(maxLength)){
        maxLength = 0;
    }
    
	if (mallId == undefined) {
        mallId = '00';
    }
	
	var param = "?maxLength=" + maxLength + "&mallId=" + mallId;
	if(isEmpty(categoryId) == false) {
		param += "&selectCategory=" + categoryId;
		param += "&listProductGbn=";
	}

    window.open("/admin/product/popupListInit"+param, "", "width=1024, height=800, scrollbars=yes");
}


/**
 * 음반상품의 이미지 기본 경로 정보를 반환함.
 * @param rcrdCd
 * @param type
 * @return
 */
function getRecordImagePath(rcrdCd, type){
	var arr = [];
	var type = type || "midi";
	
	for(var i=5 ; i > 1 ; i--){
		arr.push(rcrdCd.substring(i, i-1));
	}

	return "http://image.kyobobook.co.kr/newimages/music/" + type + "/" + arr.join("") + "/" + rcrdCd + ".jpg";
}


/**
 * 음반상품의 이미지 태그문자열 반환
 * @param rcrdCd
 * @param type
 * @return
 */
function getRecordImageTag(rcrdCd, type){
	return "<img src='" + getRecordImagePath(rcrdCd, type) + "' width='50' height='50' onerror=\"this.src='/images/no_image.gif'\" />";
}

/**
 * 상품권 검색 팝업
 * @return
 */
function searchMusicCard(callBack){
    window.open("/admin/product/musicCardSelect?callBack=" + callBack, "", "width=1024, height=800, scrollbars=yes");
}


/**
 * 음반 상품 검색 공통 팝업
 * @param multiYn
 * @param callBack
 * @param sellPrdtGbn : R : 음반, D : DVD, 값 미설정이면 전체
 * @return
 */
function searchRecordProduct(multiYn, callBack, sellPrdtGbn){
    if(isEmpty(multiYn)){ multiYn = "N"; }
    if(isEmpty(callBack)){ callBack = ""; }
    if(isEmpty(sellPrdtGbn)){ sellPrdtGbn = ""; }	
    // 기존 소스 신규 작업
    //window.open("/admin/product/popupListRecordProduct?multiYn=" + multiYn + "&callBack=" + callBack + "&sellPrdtGbn=" + sellPrdtGbn, "", "width=1024, height=800, scrollbars=yes");
    window.open("/admin/product/recordMasterSelect?multiYn=" + multiYn + "&callBack=" + callBack, "", "width=1024, height=800, scrollbars=yes");
}

/**
 * 음원 검색 공통 팝업
 * @param multiYn
 * @param callBack
 * @return
 */
function searchMusicProduct(multiYn, callBack ){
	if(isEmpty(multiYn)){ multiYn = "N"; }
	if(isEmpty(callBack)){ callBack = ""; }
	window.open("/admin/product/popupListMusicProduct?multiYn=" + multiYn + "&callBack=" + callBack , "", "width=1024, height=800, scrollbars=yes");
}


/**
 * 음반 레이블 검색 공통 팝업
 * @param callBack
 * @param multiYn
 * @return
 */
function searchLabel(callBack){
    if(isEmpty(callBack)){ callBack = ""; }
    window.open("/admin/product/popupListRecordLabel?callBack=" + callBack, "", "width=1000, height=800, scrollbars=yes");
}

/**
 * 음반 매입처 검색 공통 팝업
 * @param callBack
 * @param multiYn
 * @return
 */
function searchSupplier(callBack){
    if(isEmpty(callBack)){ callBack = ""; }
    window.open("/admin/product/popupListRecordSupplier?callBack=" + callBack, "", "width=1000, height=800, scrollbars=yes");
}


/**
 * 음반 제작사 검색 공통 팝업
 * @param callBack
 * @param multiYn
 * @return
 */
function searchMaker(callBack){
    if(isEmpty(callBack)){ callBack = ""; }
    window.open("/admin/product/popupListRecordMaker?callBack=" + callBack, "", "width=1000, height=800, scrollbars=yes");
}

/**
 * 회원팝업 
 * 
 * @param userNum
 */
function openUserInfo(userNum) {
	window.open("/admin/user/updateUserInfoForm?decorator=popup&userNum=" + userNum, "", "width=1000, height=800, scrollbars=yes");
}

/**
 * 예치금 환불신청팝업
 * 
 * @param userNum
 * @param mallId
 */
function openRequestDeposit(userNum, mallId) {
    var url = '/admin/user/userRepaymentForm?userNum=' + userNum + '&mallId=' + mallId;
    var target = 'userRepaymentForm';
    window.open(url, target, 'width=450,height=400,scrollbars=yes');
}

/**
 * 주문상세팝업
 * @param orderNum
 */
function openOrderInfo(orderNum) {
	window.open("/admin/orderInfo/" + orderNum,'popupOrderInfo','width=900,height=710,scrollbars=yes');
}

function searchBrand(maxLength, display, mallId) {
    if(isEmpty(maxLength)){
        maxLength = 0;
    }
	
	if (mallId == undefined) {
        mallId = '00';
    }
	
    var param = "?maxLength=" + maxLength + "&mallId=" + mallId;

	if(isEmpty(display) == false) {
		param += "&display=" + display;
	}
	
    window.open("/admin/vendor/popupSearchBrand"+param, "", "width=800, height=600, scrollbars=yes")
}

function searchBanner(maxLength, mallId, closedPopup) {
	if(isEmpty(maxLength)){
        maxLength = 0;
    }
	
	if (mallId == undefined) {
        mallId = '00';
    }

	if (closedPopup == undefined) {
		closedPopup = true;
	}

    var param = "?decorator=popup&maxLength=" + maxLength + "&mallId=" + mallId + "&closedPopup=" + closedPopup;
	window.open("/admin/display/listBanner"+param, "", "width=1000,height=600, scrollbars=yes");
}

function searchEvent(maxLength, categoryId, mallId) {
    if(isEmpty(maxLength)){
        maxLength = 0;
    }
	
	if (mallId == undefined) {
        mallId = '00';
    }
    
    var param = "?maxLength="+ maxLength + "&mallId=" + mallId;

	if(isEmpty(categoryId) == false){
		param += "&selectCategory="+categoryId;
	}

	return window.open("/admin/event/popupSearchEvent"+param, "", "width=1000, height=600, scrollbars=yes");
}

function callAjax(pUrl, pData, pSuccessFunc, pErrorFunc)
{
	callAjaxAllParam("", pUrl, pData, "", "", "", "", pSuccessFunc, pErrorFunc)
}

function callAjaxAllParam(pType, pUrl, pData, pDataType, pTimeout, pAsync, pBeforeFunc, pSuccessFunc, pErrorFunc)
{
	if(isEmpty(pType))
		pType = "POST";
	if(isEmpty(pDataType))
		pDataType = "json";
	if(isEmpty(pTimeout))
		pTimeout = 60000;
	if(isEmpty(String(pAsync)))
		pAsync = false;
	if(isEmpty(pBeforeFunc))
		pBeforeFunc = beforeAjax; 
	if(isEmpty(pSuccessFunc))
		pSuccessFunc = successAjax; 
	if(isEmpty(pErrorFunc))
		pErrorFunc = errorAjax;
			
	$.ajax({
		type: pType
		, url: pUrl
		, data: pData
		, dataType: pDataType
		, timeout: pTimeout
		, async: pAsync
		, beforeSend: pBeforeFunc
		, success: pSuccessFunc
		, error: pErrorFunc
	});
}

function callFormAjax(pFormId, pBeforeFunc, pSuccessFunc, pErrorFunc, pUrl, pType, pDataType, pClearForm, pResetForm)
{
	if(isEmpty(pBeforeFunc))
		pBeforeFunc = beforeAjax;
	if(isEmpty(pSuccessFunc))
		pSuccessFunc = successAjax;
	if(isEmpty(pErrorFunc))
		pErrorFunc = errorAjax;
	if(isEmpty(pType))
		pType = "POST";
	if(isEmpty(pDataType))
		pDataType = "json";
	if(isEmpty(String(pClearForm)))
		pClearForm = false;
	if(isEmpty(String(pResetForm)))
		pResetForm = false;

	var options = {
		beforeSubmit: pBeforeFunc
		, success: pSuccessFunc
		, error: pErrorFunc
		
		, url: pUrl
		, type: pType
		, dataType: pDataType
		, clearForm: pClearForm
		, resetForm: pResetForm
	};
	$("#"+pFormId).ajaxSubmit(options);
}

function beforeAjax(){
	// do nothing
}

function successAjax(){
	// do nothing	
}

function errorAjax() {
	// do nothing
}

function isEmpty(val) {
	if(val == null || val == "" || val == undefined || val == "undefined")
		return true;

	return false;
}

function prepend(data) {
    if (data == undefined) {
        return true;
    } else  if (data.isLogin == undefined) {
        return true;
    } else if (data.isLogin) {
        return true;
    } else {
        alert(data.errorMessage);
    }
    
    return false;
}


function zeroFill (str, digit) {
    var resultStr = "";
    for(var i=0;i<digit-str.length;i++) {
        resultStr += "0";
    }
    resultStr += str
    return resultStr;
}

function cutoff(price) {
    return Math.round(price / 10) * 10;
}

function upperNumber(price) {
    return Math.ceil(price / 10) * 10;
}

function rateCutoff(input) {
    var rate = parseFloat(input.value);
    rate = Math.floor(rate * 10) / 10.0;
    input.value = rate;
}

function discountRate(sellPrice, discountPrice) {
    var discountRate = (sellPrice - discountPrice) / (sellPrice * 1.0) * 100.0;
    discountRate = Math.round(discountRate * 10);
    discountRate = discountRate / 10;

    return discountRate;
}

function discountPrice(price, rate) {
    var discountRate = Math.floor(rate * 10.0) / 10.0;
    var minusPrice = Math.round(price * (discountRate / 100));
    minusPrice = cutoff(minusPrice);

    return price - minusPrice;
}

function discount2Rate(sellPrice, discountPrice) {
    var discountRate = (sellPrice - discountPrice) / (sellPrice * 1.0) * 100.0;
    discountRate = Math.round(discountRate * 100);
    discountRate = discountRate / 100.0;

    return discountRate;
}

function discount2Price(price, rate) {
    var discountRate = Math.floor(rate * 100.0) / 100.0;
    var minusPrice = Math.round(price * (discountRate / 100));
    minusPrice = cutoff(minusPrice);

    return price - minusPrice;
}

function discountNoCutPrice(price, rate) {
    var discountRate = Math.floor(rate * 10.0) / 10.0;
    var minusPrice = Math.round(price * (discountRate / 100));

    return price - minusPrice;
}

function price_format(val){
    val = $.trim(val+"");
    if(val == ''){ return val; }
    if(isNaN(val)){ return val; }

    var rv = "", idx = 0;
    for(var i = val.length-1 ; i >= 0 ; i--){
        rv = ((idx != 0 && idx%3 == 0) ? val.substring(i, i+1) + "," : val.substring(i, i+1)) + rv;
        idx++;
    }
    
    return rv;
}

function include(arr, obj) {
    var returnValue = false;
    for (var i in arr) {
        var value = arr[i];
        if (value == obj) {
            returnValue = true;
        }
    }
    
    return returnValue;
}


/**
   $(document).ready(function(){
        $("#admin-id").keyup(function(e){
        	console.log("keydown "+isSizeOk($(this).val()) + "---" + $(this).val())
        })
      
    });
 */

function isSizeOk(str, size){
	var resultSize = 0;
	
	if(str == null){
	    resultSize =  0;
	}
	
	for(var i=0; i<str.length; i++){
		var charCode = str.charCodeAt(i);
		 
		if (charCode <= 0x00007F) {
		    resultSize +=  1;
		} else if (charCode <= 0x0007FF) {
		    resultSize +=  2;
		} else if (charCode <= 0x00FFFF) {
		    resultSize +=  3;
		} else {
		    resultSize +=  4;
		}
	}
	
	if( typeof(size) == 'undefined') return resultSize;
	if(parseInt(resultSize, 10) < parseInt(size,10) ) return true;
	else return false;
} 

function byteCheck(code){
	var code_byte = 0;
	
	for(var inx = 0; inx < code.length; inx++){
		var oneChar = escape(code.charAt(inx));
		if(oneChar.length == 1){
			code_byte ++;
		}else if(oneChar.indexOf("%u") != -1){
			code_byte += 2;
		}else if(oneChar.indexOf("%") != -1){
			code_byte += oneChar.length/3;
		}
	}
	
	return code_byte;
}

// 쿠키 생성
function setCookie(cName, cValue, cDay){
    var expire = new Date();
    expire.setDate(expire.getDate() + cDay);
    cookies = cName + '=' + escape(cValue) + '; path=/ '; // 한글 깨짐을 막기위해 escape(cValue)를 합니다.
    if(typeof cDay != 'undefined') cookies += ';expires=' + expire.toGMTString() + ';';
    document.cookie = cookies;
}

// 쿠키 가져오기
function getCookie(cName) {
    cName = cName + '=';
    var cookieData = document.cookie;
    var start = cookieData.indexOf(cName);
    var cValue = '';
    if(start != -1){
        start += cName.length;
        var end = cookieData.indexOf(';', start);
        if(end == -1)end = cookieData.length;
        cValue = cookieData.substring(start, end);
    }
    return unescape(cValue);
}

function _history(){
    var obj = document.getElementById("gnbMenuBox");
    if(obj){
        var anchors = obj.getElementsByTagName("a");
        var handler = function(e){
            var href = this.href;
            var title = this.innerText;
            if(href){
                if(href.indexOf("#") != 0){
                    var history = getCookie("__history");
                    if(history && history != "")    history = JSON.parse(history);
                    else                            history = {history:[]};
                    
                    // 최대 10개까지만
                    if(history.history.length == 0 || history.history[0].href != href){
                        if(history.history.length > 9)    history.history.pop();
                        
                        var dt = new Date();
                        history.history.unshift({title:title, href:href, time:dt.getHours()+":"+dt.getMinutes()});    // unshift:앞에넣기/shift:앞에빼기/push:뒤에넣기/pop:뒤에빼기
                        setCookie("__history", JSON.stringify(history), 1);
                    }
                }
            }
        };
        
        for(var i = 0; i < anchors.length; i++){
            if(anchors[i].attachEvent)    anchors[i].attachEvent("onclick", handler);
            else                          anchors[i].addEventListener("click", handler);
        }
    }
}