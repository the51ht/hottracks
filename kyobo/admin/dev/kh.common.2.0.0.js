jQuery(function($) {
    
    var allowKey = [13 /* enter */, 8 /* backspace */, 46 /* del */, 9 /* tab */, 37 /* left */, 39  /* right */, 16 /* control */, 17 /* shift */, 67 /* ctrl + c */, 86 /* ctrl + v */, 35 /* end */, 36, /* home */];
    
    // 숫자만 받기
    $(".i_num")
    .keydown(function(event) {
        var val = $(this).val();
        if((event.which >= 48 && event.which <= 57) || (event.which >= 96 && event.which <= 105)){
            // 숫자 무한 입력
        } else if (allowKey.indexOf(event.which) < 0){
            event.preventDefault();
        }
    })
    .change(function() {
        if(isNaN($(this).val()) || $(this).val().indexOf(".") >= 0){
            alert("숫자만 입력 가능합니다.");
            $(this).val("").focus();
        }else{
            $(this).val($.trim($(this).val()));
        }
    });
    
    // 백분율만 받기
    $(".i_rate")
    .keydown(function(event) {
        var val = $(this).val();
        if((event.which >= 48 && event.which <= 57) || (event.which >= 96 && event.which <= 105)){
            if (val.indexOf(".") >= 0){
                if(val.split(".")[1].length >= 2){
                    event.preventDefault();
                }
            }
        } else if (event.which == 46 || event.which == 110){
            if(val == "")    $(this).val("0");
            else if (val >= 100 || val.indexOf(".") > 0){
                event.preventDefault();
            }
        } else if (allowKey.indexOf(event.which) < 0){
            event.preventDefault();
        }
    })
    .change(function() {
        if(isNaN($(this).val())){
            alert("정률만 입력 가능합니다.");
            $(this).focus();
        }else if(parseInt($(this).val()) > 100){
            alert("최대 100%까지만 입력가능합니다.");
            $(this).focus();
        }
    });
    
    // 달력형식 받기
    $(".i_cal")
    .keydown(function(event) {
        var val = $(this).val();
        if((event.which >= 48 && event.which <= 57) || (event.which >= 96 && event.which <= 105)){
            // 숫자 무한 입력
        } else if (allowKey.indexOf(event.which) < 0){
            event.preventDefault();
        }
    })
    .blur(function() {
        if(isNaN($(this).val()) || $(this).val().indexOf(".") >= 0){
            alert("숫자만 입력 가능합니다.");
            $(this).focus().select();
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

// 이벤트찾기
function searchEvent(maxLength, categoryId, mallId) {
    if(_isEmpty(maxLength))    maxLength = 0;
    if(_isEmpty(mallId))       mallId = '00';
    var param = "?maxLength="+ maxLength + "&mallId=" + mallId;
    if(!_isEmpty(categoryId))  param += "&selectCategory="+categoryId;
    var win = window.open("/admin/event/popupSearchEvent"+param, "", "width=1000, height=600, scrollbars=yes");
    win.focus();
}

// 체크함수:문자열 바이트수
function Byte_Length(lvStr){
 var resultSize = 0;
 if (lvStr == null) return 0;
 for(var i=0; i<lvStr.length; i++){
     var c = escape(lvStr.charAt(i));
     if(c.length == 1) resultSize ++;
     else if(c.indexOf("%u") != -1) resultSize += 2;
     else if(c.indexOf("%") != -1) resultSize += c.length/3;
 }
 return resultSize;
}

// 체크함수:글자수
function checkLength(chkObj, printObj, maxLength){
    var str = new String($(chkObj).val());
    var _byte = 0;
    if(str.length != 0){
        for(var i = 0; i < str.length; i++){
            if(escape(str.charAt(i)).length > 4)    _byte += 2;
            else                                    _byte++;
            
            if(_byte > maxLength){
                alert('제한 글자 수를 초과하였습니다');
                $(chkObj).val(str.substr(0, i-1));
                
                if(escape(str.charAt(i)).length > 4)    _byte -= 2;
                else                                    _byte--;
                
                break;
           }
        }
    }
    $(printObj).html(Byte_Length($(chkObj).val()));
}

//체크함수:공란체크
function __chkSpace(str) {
    if(str && str.indexOf(" ") >= 0){
        return true;
    } else {
        return false;
    }
}

// 체크함수:특수 문자가 있나 없나
function __chkSpecial(str) {
    var special_pattern = /[`~!@#$%^&*|\\\'\";:\/?]/gi;
    if(special_pattern.test(str) == true){
        return true;
    } else {
        return false;
    }
}

function cutoff(price) {
    return Math.round(price / 10) * 10;
}

function upperNumber(price) {
    return Math.ceil(price / 10) * 10;
}

function discountNoCutPrice(price, rate) {
    var discountRate = Math.floor(rate * 10.0) / 10.0;
    var minusPrice = Math.round(price * (discountRate / 100));
    return price - minusPrice;
}

function formatDate(s, format){
    var d = new Date(s);
    if(format == null){
        return d.getFullYear() + "-" + lpad((d.getMonth() + 1), 2, '0') + "-"+ lpad(d.getDate(), 2, '0')
        + " " + lpad(d.getHours(), 2, '0') + ":" + lpad(d.getMinutes(), 2, '0') + ":" + lpad(d.getSeconds(), 2, '0');
    } else if(format == "yyyy.MM.dd"){
        return d.getFullYear() + "." + lpad((d.getMonth() + 1), 2, '0') + "."+ lpad(d.getDate(), 2, '0');
    } else if(format == "yyyy-MM-dd"){
        return d.getFullYear() + "-" + lpad((d.getMonth() + 1), 2, '0') + "-"+ lpad(d.getDate(), 2, '0');
    } else if(format == "yyyyMMdd"){
        return d.getFullYear() + lpad((d.getMonth() + 1), 2, '0') + lpad(d.getDate(), 2, '0');
    }
}

function formatNumber(val){
    if(val == null)    return '-';
    
    val = $.trim(val+"");
    if(val == '')      return val;
    if(isNaN(val))     return val;
    
    var rv = "", idx = 0;
    for(var i = val.length-1 ; i >= 0 ; i--){
        rv = ((idx != 0 && idx%3 == 0) ? val.substring(i, i+1) + "," : val.substring(i, i+1)) + rv;
        idx++;
    }
    
    return rv;
}

function productImageUrl(imgUrl, size){
    if(imgUrl == null || imgUrl == ""){
        return 'http://image.kyobobook.co.kr/newimages/giftshop_new/common/images/no_image2.gif';
    }else{
        return 'http://image.kyobobook.co.kr/newimages/giftshop_new/goods/' + size + '/' + imgUrl;
    }
}

function lpad(str, len, df){
    if (df == null)    df = "";
    var ret = str;
    for(var i = str/10 + 1; i < len; i++){
        ret = df + ret;
    }
    return ret;
} 

//쿠키 생성
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

/**
 * 공란여부체크
 * @param text
 * @param action
 * @param hndl
 */
function _isEmpty(text){
    return (text == undefined || text == null || text == "");
}

/**
 * 엘리먼트에 이벤트 추가
 * @param obj
 * @param action
 * @param hndl
 */
function _addEvent(obj, action, hndl){
    if(obj && action && hndl){
        if(obj.addEventListener)    obj.addEventListener(action, hndl);
        else                        obj.attachEvent("on"+action, hndl);
    }
}

/**
 * 접근기록
 */
function _history(){
    var obj = document.getElementById("gnbMenuBox");
    if(obj){
        var anchors = obj.getElementsByTagName("a");
        var handler = function(e){
            var href = this.href;
            var title = this.innerText;
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
        };
        
        for(var i = 0; i < anchors.length; i++){
            _addEvent(anchors[i], "click", handler);
        }
    }
}

/**
 * 이미지경로
 * @param url
 * @param type
 * @param size
 * @returns {String}
 */
function _imgUrl(url, type, size){
    var common = "http://image.kyobobook.co.kr/newimages/giftshop_new/work/";
    var product = "http://image.kyobobook.co.kr/newimages/giftshop_new/goods/"+size+"/";
    var brand = "http://image.kyobobook.co.kr/newimages/giftshop_new/work/brand/";
    var noimage = "http://image.kyobobook.co.kr/newimages/giftshop_new/common/images/no_image2.gif";
    if(url){
        if(type){
            if(type == "product")    return product + url;
            else if(type == "brand") return brand + url;
            else                     return common + url;
        }else{
            return common + url;
        }
    }else{
        return noimage;
    }
}

/**
 * 음반경로
 * @param url
 * @param type
 * @param size
 * @returns {String}
 */
function _imgRecordUrl(rcrdCd, sellPrdtGbn, size, adultYn, ssl){
    var path;
    
    if(ssl && ssl == "Y")    path = "https://simage.kyobobook.co.kr/newimages/";
    else                     path = "http://image.kyobobook.co.kr/newimages/";
    if(!rcrdCd)              path += "giftshop_new/common/images/no_image2.gif";
    else if(adultYn == "Y"){
        if(sellPrdtGbn == "D")    path += "/giftshop_new/common/images/dvd/img_19product.jpg";
        else                      path += "/giftshop_new/common/images/music/img_19product.jpg";
    }
    
    else{
        path += "music/";
        if(!size)    path += "midi";
        else         path += size;
        path += "/" + rcrdCd.substring(1, 5).split("").reverse().join("") + "/" + rcrdCd + ".jpg";
    }
    
    return path;
}

/**
 * 하위 노드 전체 삭제
 * @param obj
 */
function _removeChild(obj){
    if(obj){
        while(obj.firstChild){
            obj.removeChild(obj.firstChild);
        }
    }
}
/**
 * 엘리먼트 내 텍스트 추가
 * @param obj
 * @param text
 */
function _appendText(obj, text){
    if(obj && text)    obj.appendChild(document.createTextNode(text));
}

/**
 * 엘리먼트 텍스트 변경
 * @param obj
 * @param text
 */
function _setText(obj, text){
    if(obj){
        _removeChild(obj);
        _appendText(obj, text);
    }
}

/**
 * 간단한 엘리먼트 생성
 * @param elsName
 * @param text
 * @param clsName
 */
function _createSimpleElement(elsName, text, clsName, attrs, checked){
    var obj = document.createElement(elsName);
    if(text)    _appendText(obj, text);
    if(clsName){
        for (var i = 0; i < clsName.split(" ").length;i ++){
            kh_element.classList.add(obj, clsName.split(" ")[i]);
        }
    }
    if(attrs){
        for(var key in attrs){
            obj.setAttribute(key, attrs[key]);
        }
    }
    if(checked){
    	obj.checked = true;
    } else {
    	obj.checked = false;
    }
    
    return obj;
}

/**
 * 간단한 INPUT 생성
 * @param type
 * @param name
 * @param value
 * @param clsName
 * @param title
 * @returns
 */
function _createSimpleInput(type, name, value, clsName, title, attrs){
    var obj = _createSimpleElement("input", null, clsName, attrs);
    obj.type = type;
    if(name)     obj.name = name;
    if(value)    obj.value = value;
    if(title)    obj.title = title;
    return obj;
}

/**
 * 간단한 ANCHOR 생성
 * @param href
 * @param text
 * @param clsName
 * @param title
 * @param clickHndl
 * @returns {___obj1}
 */
function _createSimpleAnchor(href, text, clsName, title, clickHndl){
    var obj = _createSimpleElement("a", text, clsName);
    obj.href = href;
    if(title)      obj.title = title;
    if(clickHndl)  _addEvent(obj, "click", clickHndl);
    return obj;
}

/**
 * 간단한 옵션 항목 추가
 * @param value
 * @param text
 * @param clsName
 * @param selected
 * @returns {___obj0}
 */
function _createSimpleOption(value, text, clsName, selected){
    var obj = _createSimpleElement("option", text, clsName);
    obj.value = value;
    if(selected)    obj.selected = "selected";
    return obj;
}

/**
 * 간단한 IMAGE 생성
 * @param type
 * @param name
 * @param value
 * @param clsName
 * @param title
 * @returns
 */
function _createSimpleImg(name, src, clsName, title, attrs){
    var obj = _createSimpleElement("img", null, clsName, attrs);
    obj.name = name;
    obj.src = src;
    if(title){
        obj.setAttribute("title", title);
        obj.setAttribute("alt", title);
    }
    if(clsName){
        for (var i = 0; i < clsName.split(" ").length;i ++){
            kh_element.classList.add(obj, clsName.split(" ")[i]);
        }
    }
    obj.setAttribute("onerror", "this.src='http://image.kyobobook.co.kr/newimages/giftshop_new/common/images/no_image2.gif';");
    return obj;
}

/**
 * admin용 button생성 - _createSimpleAnchor 확장
 * @param href
 * @param text
 * @param clsName
 * @param title
 * @param clickHndl
 * @returns {___obj1}
 */
function _createButton(href, text, clsName, title, clickHndl){
    var obj = _createSimpleElement("span", null, "button");
    obj.appendChild(_createSimpleAnchor(href, text, clsName, title, clickHndl));
    return obj;
}

/**
 * 엑셀다운로드
 * @param id
 */
function _downloadExcel(title, html) {
    var data_type = 'data:application/vnd.ms-excel;charset=utf-8';
    var table_html = encodeURIComponent(html);
  
    var a = document.createElement('a');
    a.href = data_type + ',%EF%BB%BF' + table_html;
    a.download = title + '.xls';
    a.click();
}

/**
 * 상품검색
 * @param maxLength
 * @param categoryId
 * @param mallId
 */
function searchProduct(maxLength, categoryId, mallId) {
    if (_isEmpty(maxLength))    maxLength = 0;
    if (_isEmpty(mallId))       mallId = '00';
    var param = "?maxLength=" + maxLength + "&mallId=" + mallId;
    if (!_isEmpty(categoryId)) {
        param += "&selectCategory=" + categoryId;
        param += "&listProductGbn=";
    }
    
    var win = window.open("/admin/product/popupListInit"+param, "", "width=1024, height=800, scrollbars=yes");
    win.focus();
}

/**
 * 음반 상품 검색 공통 팝업
 * @param multiYn
 * @param callBack
 * @param sellPrdtGbn : R : 음반, D : DVD, 값 미설정이면 전체
 * @return
 */
function searchRecordProduct(multiYn, callBack, sellPrdtGbn){
    if(_isEmpty(multiYn))        multiYn = "N";
    if(_isEmpty(callBack))       callBack = "";
    if(_isEmpty(sellPrdtGbn))    sellPrdtGbn = "";
    
    var win = window.open("/admin/product/recordMasterSelect?multiYn=" + multiYn + "&callBack=" + callBack, "", "width=1024, height=800, scrollbars=yes");
    win.focus();
}


/**
 * 페이징 생성
 * @param pageHolder
 * @param hndl
 * @returns
 */
function _getPager(pageHolder, hndl){
    var obj = document.createElement("div");
    obj.classList.add("paging");
    
    if(pageHolder && pageHolder.totalPages > 0){
        // first
        var anchorF = document.createElement("a");
        anchorF.href = "#1";
        anchorF.classList.add("first");
        anchorF.appendChild(document.createTextNode("처음"));
        _addEvent(anchorF, "click", hndl(1));
        obj.appendChild(anchorF);
        
        // prev
        var page = pageHolder.currentPage;
        var pageSize = pageHolder.pageSize;
        
        var startPage = parseInt(Math.ceil(parseFloat(page) / parseFloat(pageSize) - 1)) * pageSize + 1;
        if(startPage > 1){
            var anchorP = document.createElement("a");
            anchorP.href = "#" + (startPage - pageHolder.pageSize);
            anchorP.classList.add("prev02");
            anchorP.appendChild(document.createTextNode("이전"));
            _addEvent(anchorP, "click", hndl(startPage - pageHolder.pageSize));
            obj.appendChild(anchorP);
        }
        
        var i = startPage;
        var ul = document.createElement("ul");
        for(; i < startPage + pageHolder.pageSize && i <= pageHolder.totalPages; i++){
            var li = document.createElement("li");
            var anchorNum = document.createElement("a");
            anchorNum.href = "#" + i;
            anchorNum.appendChild(document.createTextNode(i));
            
            if(i == page){
                li.classList.add("active");
                _addEvent(anchorNum, "click", function (e){ e.preventDefault(); });
            }else {
                anchorNum.setAttribute("title", i + "페이지로 이동");
                _addEvent(anchorNum, "click", hndl(i));
            }
            
            li.appendChild(anchorNum);
            ul.appendChild(li);
        }
        obj.appendChild(ul);
        
        if(i <= pageHolder.totalPages){
            var anchorN = document.createElement("a");
            anchorN.href = "#" + i;
            anchorN.classList.add("next02");
            anchorN.appendChild(document.createTextNode("다음"));
            _addEvent(anchorN, "click", hndl(i));
            obj.appendChild(anchorN);
        }
        
    }
    
    return obj;
}

function _validBarcode(barcodeVal){
    if (barcodeVal == "")                 return false;
    if (Byte_Length(barcodeVal) != 13)    return false;
    
    var barcode = new Array(12);
    var vTemp1 = 0; // 홀수 자리
    var vTemp2 = 0; // 짝수 자리
    var vTemp3 = 0; // CheckBit
    for (var i=0; i<13; i++) {
        barcode[i] = barcodeVal.substr(i,1);
        // 홀수자리
        if (i==0 || i==2 ||i==4 ||i==6 ||i==8 ||i==10) {
            vTemp1 = vTemp1 + Number(barcodeVal.substr(i,1));
        }
        // 짝수자리
        if (i==1 || i==3 ||i==5 ||i==7 ||i==9 ||i==11) {
            vTemp2 = vTemp2 + Number(barcodeVal.substr(i,1));
        }
    }
    vTemp3 = (10 -(((vTemp2 * 3) + vTemp1)%10));
    if (vTemp3==10) {vTemp3 = 0;}
    return (barcodeVal == barcodeVal.substr(0,12) + vTemp3);
}

//버전별 미지원 기능 추가
kh_element = {
 classList:{
     contains:function(obj, className){
         if(obj.classList)    return obj.classList.contains(className);
         else{
             if(obj.getAttribute("class")){
                 var classList = obj.getAttribute("class").split(" ");
                 for(var i = 0; i <  classList.length; i ++){
                     if(classList[i] == className)    return true;
                 }
             }
             return false;
         }
     }
   , add:function(obj, className){
         if(obj.classList){    obj.classList.add(className); }
         else if(!kh_element.classList.contains(obj, className)){
             var str = "";
             if(obj.getAttribute("class")){
                 var classList = obj.getAttribute("class").split(" ");
                 for(var i = 0; i <  classList.length; i ++){
                     if(str != "")    str += " ";
                     str += classList[i];
                 }
             }
             
             if(str != "")    str += " ";
             str += className;
             obj.setAttribute("class", str);
         }
     }
   , remove:function(obj, className){
         if(obj.classList){    obj.classList.remove(className); }
         else if(kh_element.classList.contains(obj, className)){
             if(obj.getAttribute("class")){
                 var classList = obj.getAttribute("class").split(" ");
                 var str = "";
                 for(var i = 0; i <  classList.length; i ++){
                     if(classList[i] != className){
                         if(str != "")    str += " ";
                         str += classList[i];
                     }
                 }
                 if(str != "")    obj.setAttribute("class", str);
                 else             obj.removeAttribute("class");
             }
       }
   }
 }
};