$(function(){
	ht_ShareJs.func(); //화면 기능
});

const ht_ConfigJs =  {
	mall_id : '01',
	imageServer : "http://image.kyobobook.co.kr/newimages/giftshop_new/",
};

const ht_ShareJs = {
	func : function(){
		/*$('.ht_kakao').click(function(){
			let htShare = ht_ShareJs.getInfo(this);
			let prdt_img_url = ( ht_CommonMoreUIJs.isEmpty($('.prod_view_img img').attr("src")) ?"":$('.prdtImg img').attr("src"));
			share_kakao(htShare.name, htShare.url , prdt_img_url ) ;
		});
		$('.ht_instar').click(function(){
			alert("WEB에서는 인스타 그램에 공유하지 못합니다. 앱을 이용해 주세요.");
		});
		$('.ht_facebook').click(function(){
			let htShare = ht_ShareJs.getInfo(this);
			sendToSns('facebook', htShare.name, htShare.url);
		});
		$('.ht_line').click(function(){
			let htShare = ht_ShareJs.getInfo(this);
			sendToSns('line', htShare.name, htShare.url);
		});
		$('.ht_url_copy').click(function(){
			let htShare = ht_ShareJs.getInfo(this);
			ht_ShareJs.copyStringToClipboard(htShare.url);
			
			alert ( "주소가 복사되었습니다. \'Ctrl+V\'를 눌러 붙여넣기 해주세요." );
		});*/
	},
	getInfo : function(selector){
		let shrUrl = $(selector).closest('.prod_share_area').data('url');
		let shrName = $(selector).closest('.prod_share_area').data('name');
		
		if(shrUrl == null || shrUrl == '')
			shrUrl = document.location.href;
		
		if(shrName == null || shrName == '')
			shrName = '핫트랙스로 놀러 오세요~';
		
		return {url : shrUrl, name : shrName};
	}, 
	copyStringToClipboard : function(string) {
		function handler (event){
			event.clipboardData.setData('text/plain', string);
			event.preventDefault();
			document.removeEventListener('copy', handler, true);
		}
	
		document.addEventListener('copy', handler, true);
		document.execCommand('copy');
	}
}

/**
 * 공용 함수 정의 ht_CommonJs.initQuickMenu();
 */
const ht_CommonJs =  {
	//도커 메뉴에서 햄버거 메뉴 호출작업
	initQuickMenu() {
		$('.docker_item .btn_docker_menu').unbind('click');
		$('.category_menu_top .btn_box img').unbind('click');
		$('.docker_item .btn_docker_menu').click(function(){
			$('.category_menu').show();	
		});
		$('.category_menu_top .btn_box img').click(function(){
			$('.category_menu').hide();	
		});
	},
} 
const ht_AjaxJs ={
	//에러정보 출력
	fnPrintError : function (request, status, error) { 
		console.log("ERROR : " + request.status + "<br>" + status + "<br>" + error );
	},
	//메세지 정보 출력
	fnPrintMsg : function (msg) { 
		console.log("Message : " + msg);
	},	
	//실제 HTML 소스 형태로 데이터를 가져와 뿌리는 함수
	getAjaxResultHtml: function(url, elementItem) {
	   $.ajax({
	       	type: 'GET'
	        ,url: url
	        ,async: false
            ,data: {}
	        ,dataType: 'html'
	        ,success: function(data) {
				elementItem.html(data);
	        }
	        ,error: function(request, status, error) {
				ht_AjaxJs.fnPrintError(request, status, error);
	        }
        }); 
	},
	//실제 HTML 소스 형태로 데이터를 가져와 뿌리는 함수
	getAjaxResultAppend: function(url, elementItem) {
	   $.ajax({
	       	type: 'GET'
	        ,url: url
	        ,async: false
            ,data: {}
	        ,dataType: 'html'
	        ,success: function(data) {
					elementItem.append(data);
	        }
	        ,error: function(request, status, error) {
				ht_AjaxJs.fnPrintError(request, status, error);
	        }
        }); 
	},
		
}

const ht_CommonMoreUIJs =  { 
	//기본적으로 more 버튼에 이벤트 핸들러를 정의 한다.
	setUIReadMore(selector, btnOpen, btnClose) {
		selector = selector || '.dialog_wrap';
		btnOpen = btnOpen || '[data-role=btn-more]';
		
		if ($(btnOpen).length > 0) {
			$(btnOpen).each(function (index) {
				$(this).off('click').on('click', function (event) {
					event.preventDefault();
					let loadItemsURL = $(this).data('action');
					let loadItemsTarget = $(this).data('target');
					let code = $(this).data('code');
					ht_CommonMoreUIJs.loadMoreItems($(this) , loadItemsURL, loadItemsTarget ,code);
				});
			});
		}
	},
	//특수 문자 사용으로 인해 URL 호출에 문제가 있을 경우 POST PARAM을 넣어 사용한다.
	setUIParamReadMore(selector, btnOpen, btnClose) {
		selector = selector || '.dialog_wrap';
		btnOpen = btnOpen || '[data-role=btn-param-more]';
		
		if ($(btnOpen).length > 0) {
			$(btnOpen).each(function (index) {
				$(this).off('click').on('click', function (event) {
					event.preventDefault();
					let loadItemsURL = $(this).data('action');
					let loadItemsTarget = $(this).data('target');
					let code = $(this).data('code');
					ht_CommonMoreUIJs.loadMoreItemsParam($(this) , loadItemsURL, loadItemsTarget ,code.replace(/[#]/g, ''));
				});
			});
		}
	},

	//아이템 타입에 따라 원하는 함수를 호출한다.
	//loadItemsURL : more 아이템의 수행 URL 정보 ( ex : /m/gift/category/best )
	//loadItemsTarget : 아이템을 출력해야할 id 
	//code : KeyCode
	loadMoreItemsParam: function(btnObj, loadItemsURL , loadItemsTarget, code) {
		let elementItem = $("#"+loadItemsTarget);
		//page 정보가 선언되지 않아도 되도록 처리
		if( this.isEmpty(elementItem.data('page')) )
			elementItem.data('page', 1);
		let pageNo = elementItem.data('page');			
		this.getParamMoreItemsHtml(btnObj, loadItemsURL,elementItem,code,pageNo);
	},
		
	//아이템 타입에 따라 원하는 함수를 호출한다.
	//loadItemsURL : more 아이템의 수행 URL 정보 ( ex : /m/gift/category/best )
	//loadItemsTarget : 아이템을 출력해야할 id 
	//code : KeyCode
	loadMoreItems: function(btnObj, loadItemsURL , loadItemsTarget, code) {
		let elementItem = $("#"+loadItemsTarget);
		//page 정보가 선언되지 않아도 되도록 처리
		if( this.isEmpty(elementItem.data('page')) )
			elementItem.data('page', 1);
		let pageNo = elementItem.data('page');			
		this.getMoreItemsHtml(btnObj, loadItemsURL,elementItem,code,pageNo);
	},
	hideAllButton: function(){
		$("[data-role=btn-param-more]").hide();
	},
	//실제 HTML 소스 형태로 데이터를 가져와 뿌리는 함수
	getParamMoreItemsHtml: function(btnObj , url, elementItem , code , pageNo) {
	   $.ajax({
	       	type: 'GET'
	        ,url: url
	        ,async: false
            ,data: { "prodTag": code.replace(/[#]/g, '') , "YESGO" : "YESGO" ,"pageNo" : pageNo  }
	        ,dataType: 'html'
	        ,success: function(data) {
				var list = $.parseHTML(data);
				if( data.trim().length == 0 )
				{
					//버튼이 더이상 눌리지 않도록 disable 처리 합니다.
					//btnObj.attr('disabled', true);
					btnObj.hide();
				}else{
					elementItem.append(data);
					elementItem.data('page', (pageNo + 1));
					let pageSize = $(list).filter('#pageSize').data('code');  //페이징 사이즈 조회
					let listSize = $(list).filter('#listSize').data('code');  //리스트 count 조회
					if( !ht_CommonMoreUIJs.isEmpty(pageSize) && !ht_CommonMoreUIJs.isEmpty(listSize) )
					{
						if(listSize < pageSize) btnObj.hide();						
					}
				}
	        }
	        ,error: function(request, status, error) {
				ht_AjaxJs.fnPrintError(request, status, error);
	        }
        }); 
	},
	//실제 HTML 소스 형태로 데이터를 가져와 뿌리는 함수
	getMoreItemsHtml: function(btnObj , url, elementItem , code , pageNo) {
	   $.ajax({
	       	type: 'GET'
	        ,url: url+"/"+code+"/"+pageNo
	        ,async: false
            ,data: {}
	        ,dataType: 'html'
	        ,success: function(data) {
				var list = $.parseHTML(data);
				if( data.trim().length == 0 )
				{
					//버튼이 더이상 눌리지 않도록 disable 처리 합니다.
					//btnObj.attr('disabled', true);
					btnObj.hide();
				}else{
					elementItem.append(data);
					elementItem.data('page', (pageNo + 1));
					let pageSize = $(list).filter('#pageSize').data('code');  //페이징 사이즈 조회
					let listSize = $(list).filter('#listSize').data('code');  //리스트 count 조회
					if( !ht_CommonMoreUIJs.isEmpty(pageSize) && !ht_CommonMoreUIJs.isEmpty(listSize) )
					{
						if(listSize < pageSize) btnObj.hide();						
					}
				}
	        }
	        ,error: function(request, status, error) {
				ht_AjaxJs.fnPrintError(request, status, error);
	        }
        }); 
	},
    /**
     * 문자열이 빈 문자열인지 체크하여 결과값을 리턴한다.
     * @param str       : 체크할 문자열
     */
    isEmpty: function (str){
        if(typeof str == "undefined" || str == null || str == "")
            return true;
        else
            return false ;
    }//바이트수 계산
	,getByte : function(s,b,i,c){
	    for(b=i=0;c=s.charCodeAt(i++);b+=c>>11?3:c>>7?2:1);
	    return b;
	}
	//문자옇 바이트만큼 자르기
	,getStringFromByteLength : function(str, length){
	    const contents = str;
	    let str_character;
	    let int_char_count = 0;
	    let int_contents_length = contents.length;
	
	    let returnValue = '';
	
	    for (k = 0; k < int_contents_length; k++) {
	        str_character = contents.charAt(k);
	        if (escape(str_character).length > 4)
	            int_char_count += 3;
	        else
	            int_char_count++;
	
	        if ( int_char_count > length ) {
	            break;
	        }
	        returnValue += str_character;
	    }
	    return returnValue;
	}
};

const ht_CommonPopUIJs =  {
	_dialogCount : 0,
	/**
	 * 레이어 팝업 설정 (jquery UI Dialog)
	 * @param selector {string} 레이어 팝업으로 생성할 컨테이너 셀렉터(default: '.dialog_wrap')
	 * @param btnOpen {string} 레이어 팝업을 띄우기 위한 버튼 셀렉터(default: [data-role=btn-dialog])
	 * @param btnClose {string} 레이어 팝업을 띄우기 위한 버튼 셀렉터(default: [data-role=btn-dialog-close])
	 */
	setUIDialog : function(selector, btnOpen, btnClose) {
		selector = selector || '.dialog_wrap';
		btnOpen = btnOpen || '[data-role=btn-dialog]';
		btnClose = btnClose || '[data-dialog-close]';

		if( $(selector).length > 0 ) {
			var dialogClass, containerId, dialogId, containerClasses;

			$(selector).each(function() {
				if ( $(this).parents('.ui-dialog').length > 0 ) return false;

				containerId = 'body';
				containerClasses = 'dialog_wrapper';
				dialogClass = '';

				// dialog multi class 추가
				if ($(this).data('class') !== undefined) {
					if (isNaN(parseInt($(this).data('class')))) {
						dialogClass = $(this).data('class');
					} else {
						dialogClass = 'auto';
					}
				}

				// resize시, popup 가운데 정렬 css제어를 위해 container append
				dialogId = containerId.replace('#', '') + 'Dialog' + this._dialogCount;
				$(containerId).append('<div id="' + dialogId + '" class="' + containerClasses + '"></div>');

				this._dialogCount++;

				// 팝업 기본 설정
				$(this).dialog({
					appendTo: containerId + ' #' + dialogId, // resize시, popup 가운데 정렬 css제어를 위해 container append
					autoOpen: false,
					minHeight: 'none',
					closeText: "닫기",
					modal: true,
					resize:false,
					resizable:false,
					draggable:false,
					position: null,
					classes: {
						'ui-dialog': dialogClass, // popup case multi class 추가
					},
					open: function( event, ui ) {
						var that = $(this);
						var papa = that.closest('.ui-dialog');
						var container = that.closest('.' + containerClasses);


						// 팝업 닫기 시, 기존 스크롤 위치로 이동위해 현재 스크롤값 저장(상단 이동 막기)
						if($('.ui-dialog-content:visible').length === 0){
							var scrollTop = $(document).scrollTop();
							$('body').css({'top': (scrollTop * -1),}).addClass('dialog_open');
						}

						// 팝업 2개 이상 노출 시 z-index 지정(팝업 위 팝업 미구현시 삭제)
						var zNum = 99;
						if ( $('.dialog_wrapper:visible').length > 0 ) {
							$('.dialog_wrapper:visible').each(function (){
								var dialog;
								dialog = $(this);
								zNum = Math.max(zNum, parseInt(dialog.css('z-index')));
							});
						}
						container.addClass('open').css('z-index', zNum+2);

                        // 팝업 내 swiper 업데이트
                        if ($(this).parent().find('.swiper-container').length > 0) {
                            $(this).parent().find('.swiper-container').each(function (event) {
                                updateDialogSwiper(this);
                            });
                        }
					},
					close: function( event, ui ) {
						var that = $(this);
						var container = that.closest('.dialog_wrapper')
						var scrollTopPos = $('body').css('top');

						// z-index style 삭제
						container.removeClass('open').removeAttr('style');

						// 팝업 닫기 시, 기존 스크롤 위치로 이동(상단 이동 막기)
						if( $('.ui-dialog-content:visible' ).length === 0 ) {
							$(containerId).removeClass('dialog_open').removeAttr('style');
							$(window).scrollTop(parseInt(scrollTopPos) * -1);
						}
					},
				});

				// floating 타입일 경우 modal false 처리
				if($(this).data('class') === 'dialog_floating'){
					$(this).dialog({modal: false});
				}

				if ($(btnOpen).length > 0) {
					$(btnOpen).each(function (index) {
						$(this).off('click').on('click', function (event) {
							var popTgId = $(this).data('target');

							event.preventDefault();
							dialogOnOff().popOpen(popTgId);
						});
					});
				}

				if ($(btnClose).length > 0) {
					$(btnClose).each(function (index) {
						$(this).off('click').on('click', function (event) {
							var openTgId, closeTgId;
							closeTgId = $(this).closest(selector).attr('id');

							event.preventDefault();
							dialogOnOff().popClose('#' + closeTgId);

							if ($(this).data('role') === 'btn-dialog') {
								openTgId = $(this).data('target');
								dialogOnOff().popOpen(openTgId);
							}
						});
					});
				}
			});
		}
	},
	
	uiBindReloading : function(selector, btnOpen, btnClose) {
		selector = selector || '.dialog_wrap';
		btnOpen = btnOpen || '[data-role=btn-dialog]';
		btnClose = btnClose || '[data-dialog-close]';

		if ($(btnOpen).length > 0) {
			$(btnOpen).each(function(index) {
				$(this).off('click').on('click', function(event) {
					var popTgId = $(this).data('target');
					event.preventDefault();
					dialogOnOff().popOpen(popTgId);
				});
			});
		}
		if ($(btnClose).length > 0) {
			$(btnClose).each(function(index) {
				$(this).off('click').on('click', function(event) {
					var openTgId, closeTgId;
					closeTgId = $(this).closest(selector).attr('id');
					event.preventDefault();
					dialogOnOff().popClose('#' + closeTgId);
					if ($(this).data('role') === 'btn-dialog') {
						openTgId = $(this).data('target');
						dialogOnOff().popOpen(openTgId);
					}
				});
			});
		}
	},
	
	/**
	 * 레이어팝업 open
	 * @param tgId {string} 팝업 타겟 id
	 * @param callback {string} 팝업 open 후 callback 함수
	 */
	popOpen: function(tgId, callback) {
		$(tgId).dialog('open');
		if (callback != null && typeof callback === "function") {
			callback.apply(null, [tgId]);
		}
	},
	
	/**
	 * 레이어팝업 open
	 * @param tgId {string} 팝업 타겟 id
	 * @param callback {string} 팝업 open 후 callback 함수
	 */
	popclose: function(closeTgId) {
		dialogOnOff().popClose('#' + closeTgId);
	},

	/**
	 * 단순 레이어팝업 close
	 * @param tgId {string} 팝업 타겟 id
	 */
	popClose: function(tgId) {
		$(tgId).dialog('close');
	},
	/**
	 * 레이어 팝업 On/Off(외부 호출용)
	 */
	dialogOnOff : function(){
		var control = {
			/**
			 * 레이어팝업 open
			 * @param tgId {string} 팝업 타겟 id
			 * @param callback {string} 팝업 open 후 callback 함수
			 */
			popOpen : function(tgId, callback){
				$(tgId).dialog('open');
				if ( callback != null && typeof callback === "function" ) {
					callback.apply ( null, [tgId]);
				}
			},

			/**
			 * 레이어팝업 close
			 * @param tgId {string} 팝업 타겟 id
			 */
			popClose : function(tgId) {
				$(tgId).dialog('close');
			},
		}

		return control;
	}
	/**
	 * TODO 공통 얼럿 팝업
	 */
	,fn_Alert : function(msg, title, okTxt, okFunc, cancelTxt, cancelFunc){
		if(title != null && title != ''){
			okTxt = '확인';
		}
		
	    var htmlStr = '';
	    
		htmlStr += '<div id="ht_lyAlert" class="dialog_wrap" data-class="dialog_alert" style="display:none;">';
		
	    if(title != null && title != ''){
	    	//타이틀
		    htmlStr += '<div class="dialog_header">';
		    htmlStr += '	<div class="dialog_title">'+ title +'</div>';
		    htmlStr += '</div>';
	    }
	    
	    //내용
	    htmlStr += '	<div class="dialog_contents"><div class="evt_pop_content">'+msg+'</div></div>';
	    
	    //버튼 영역
	    htmlStr += '	<div class="dialog_footer">';
	    
	    if(cancelTxt != null && cancelTxt != ''){
	   		htmlStr += '	<button type="button" class="btn_ip btn_black" id="ht_lyAlertCancel"><span class="text">'+ cancelTxt +'</span></button>';
	    }
	    
	    htmlStr += '        <button type="button" class="btn_ip btn_primary" id="ht_lyAlertOk"><span class="text">'+ okTxt +'</span></button>';
	    htmlStr += '	</div>';
		htmlStr += '</div>';
		
	    $("body").append(htmlStr);

		//팝업 셋팅
		KyoboBookPub.ink.setUIDialog("#ht_lyAlert", "none", "none");
		
		//팝업 오픈
		$("#ht_lyAlert").dialog('open');
		
		$("#ht_lyAlert #ht_lyAlertOk").on("click", function(){
			//팝업 닫기
			$("#ht_lyAlert").dialog('close');
			
			if(okFunc != null && typeof okFunc === "function"){
				okFunc();
			}
		});
	
		$("#ht_lyAlert #ht_lyAlertCancel").on("click", function(){
			//팝업 닫기
			$("#ht_lyAlert").dialog('close');
			
			if(cancelFunc != null && typeof cancelFunc === "function"){
				cancelFunc();
			}
		});
		
		//팝업 종료시 완전 삭제
		$("#ht_lyAlert").on("dialogclose", function(event) {
			setTimeout(function(){
				var pDivId = $("#ht_lyAlert").closest(".dialog_wrapper").attr("id");
			
				//다이얼로그 해제
				$("#ht_lyAlert").dialog("destroy");
				//팝업 삭제
				$("#ht_lyAlert,#" + pDivId).remove();		
			},200);
	 	});
	}
};

const ht_CommonQnAUIJs =  {
	rcrdCd : "",			//음반 고유 코드
	sellPrdtBcode : "",		//상품 코드
	prdtName : "",			//상품명
	productImageUrl : "",	//상품 이미지 URL
	target : "" ,			//문의 신규 수정 DIV 선정 
	fnInitQnAInfo: function (productImageUrl , prdtName ,sellPrdtBcode , rcrdCd , target  ) {
		//QnA 등록에 필요한 파라미터 가져옵니다.
		console.log("QnA 기본정보 세팅");
		ht_CommonQnAUIJs.productImageUrl = productImageUrl;
		ht_CommonQnAUIJs.prdtName = prdtName;
		ht_CommonQnAUIJs.sellPrdtBcode = sellPrdtBcode;
		ht_CommonQnAUIJs.rcrdCd = rcrdCd;
		ht_CommonQnAUIJs.target = target;
		
		ht_CommonQnAUIJs.goQnaListReload(ht_CommonQnAUIJs.sellPrdtBcode,0);
		//신규버튼 클리
		let btnOpen = '[data-role=btn-qnanew]';
		if ($(btnOpen).length > 0) {
			$(btnOpen).each(function (index) {
				$(this).off('click').on('click', function (event) {
					if(!chklogin()) return false;
					event.preventDefault();
					//등록폼을 호출합니다.
					ht_CommonQnAUIJs.fnPopupLoadQnANew();
				});
			});
		}
		//more 버튼 클릭 이벤트 생성
		$('.btn_qnamore').bind('click',function(){
			let cpage = $(this).data('cpage');
			let tpage = $(this).data('tpage');
			let code = $(this).data('prdtcode');
			if ( cpage < tpage) 
				ht_CommonQnAUIJs.goQnaListAppend(code, cpage);
		})
		
	},
	goQnaListReload: function(code , page) {
    	$(".all_qa_wrap").empty();
    	ht_CommonQnAUIJs.goQnaListAppend(code , page);
	},
	goQnaChangePage: function(page) {
		let code = $(".pagination").data('prdtcode');
    	$(".all_qa_wrap").empty();
    	ht_CommonQnAUIJs.goQnaListAppend( code , page);
	},
	goQnaListAppend: function(code , page) {
		if($.trim(page) == "")    page = 1;
    	ht_CommonQnAUIJs.loadMoreItems("all_qa_wrap", '/ht/gift/detail/qna/'+code+'?page=' + page );
	},
	//신규 등록 QnA 등록 폼을 띄웁니다.
	fnPopupLoadQnANew : function ( ) {
		let elementItem = $( ht_CommonQnAUIJs.target );
		$.ajax({
	       	type: 'GET'
	        ,url: "/ht/gift/detail/qnaForm"
	        ,async: false
            ,data: 
            { 
				"sellPrdtBcode"		: ht_CommonQnAUIJs.sellPrdtBcode,
				"rcrdCd"			: ht_CommonQnAUIJs.rcrdCd,
				"prdtName"			: ht_CommonQnAUIJs.prdtName,
				"productImageUrl"	: ht_CommonQnAUIJs.productImageUrl
            }
	        ,dataType: 'html'
	        ,success: function(data) {
        		elementItem.html(data);
        		ht_CommonPopUIJs.popOpen( ht_CommonQnAUIJs.target );        		//DIV POP UP창을 띄웁니다.
	        }
	        ,error: function(request, status, error) {
				if( request.responseText == "needLogin")
				{
					needLogin();
				}else{
					alert("시스템 오류 입니다. 관리자에게 문의하세요.");
				}

	        }
        }); 
	},
	//기존에 있던 QnA 수정 폼을 띄웁니다.
	fnModifyQnAForm  : function ( qnaCode) { 
		let elementItem = $(ht_CommonQnAUIJs.target);
		$.ajax({
	       	type: 'GET'
	        ,url: "/ht/gift/detail/modifyQnaForm/"+ht_CommonQnAUIJs.sellPrdtBcode +"/"+ qnaCode
	        ,async: false
            ,data: { "productImageUrl"	: ht_CommonQnAUIJs.productImageUrl }
	        ,dataType: 'html'
	        ,success: function(data) {
        		elementItem.html(data);
        		//DIV POP UP창을 띄웁니다.
        		ht_CommonPopUIJs.popOpen( ht_CommonQnAUIJs.target );
	        }
	        ,error: function(request, status, error) {
				ht_AjaxJs.fnPrintError(request, status, error);
	        }
        }); 
	},

	//기존에 있던 QnA 수정 폼을 띄웁니다.
	fnRemoveQnA : function (qnaCode) {
		if( confirm("해당 문의를 삭제 하시겠습니까?"))
		{
			$.ajax({
		       	type: 'GET'
		        ,url: "/ht/gift/detail/qna/remove/"+qnaCode
		        ,async: false
	            ,data: {}
		        ,dataType: 'json'
		        ,success: function(data) {
					alert("정상적으로 삭제되었습니다.");
					if(data.isSuccess == true ){
						ht_CommonQnAUIJs.goQnaListReload(ht_CommonQnAUIJs.sellPrdtBcode,0);
					}
		        }
		        ,error: function(request, status, error) {
					ht_AjaxJs.fnPrintError(request, status, error);
		        }
        	}); 
		} 
	},
	//기존 소스에서 등록 문구를 넣을때 적용하는 패턴
	changePre: function(i) {
		if (i == 2) {
			$("label#content_pre").hide();
			$("label#content_pre + textarea").focus();
		} else {
			if ($("label#content_pre + textarea").val() == "")
				$("label#content_pre").show();
		}
	},
	//기존 소스에서 등록 문구를 넣을때 적용하는 패턴
	keyup: function(object) {
		if (object.value.length > 100) {
			alert("제한 글자 수를 초과하였습니다.");
			object.value = object.value.slice(0, 100);
			$('#textLen').text(object.value.length);
		} else {
			$('#textLen').text(document.getElementById("prdtAskCont").value.length);
		}
	},
	//기존 소스에서 등록 문구를 넣을때 적용하는 패턴
	//메세지 정보 출력
	fnPopupSubmit: function() {
		var regExp = /^[_a-zA-Z0-9-]+(.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(.[a-zA-Z0-9-]+)*$/;
		var isTrue = regExp.test($("input[name=wrtorEmailAddr]").val());
		if ($("input[name=prdtQnaTitle]").val().length <= 0) {
			alert("제목을 써주세요.");
			return false;
		}
		if ($("input[name=wrtorEmailAddr]").val().length <= 0) {
			alert("이메일을 입력해주세요.");
			$(".valid_check").removeClass("fail");
			$("input[name=wrtorEmailAddr]").focus();
			return false;
		}else if (!isTrue) {
			alert("메일 주소의 형식이 올바르지 않습니다.");
			$(".valid_check").addClass("fail");
			$("input[name=wrtorEmailAddr]").focus();
			return false;
		}
		if ($("textarea[name=prdtAskCont]").val().length <= 0) {
			alert("문의글을 써주세요.");
			return false;
		}
		$.ajax({
			type: "POST"
			, url: "/ht/gift/detail/submitQna"
			, data: {
				sellPrdtBcode: $("input[name=sellPrdtBcode]").val()
				, prdtQnaSeq : $("input[name=prdtQnaSeq]").val()
				, prdtGrade: 0
				, prdtQnaTitle: $("input[name=prdtQnaTitle]").val()
				, writeUserName: $("input[name=writeUserName]").val()
				, wrtorEmailAddr: $("input[name=wrtorEmailAddr]").val()
				, prdtAskCont: $("textarea[name=prdtAskCont]").val()
				, procStatGbn: "R"
				, dispYn: true
				, mailSendYn: $("input[name='mailSendYn']:checked").val() == "on"?"Y":"N"
				, openYn: $("input[name='openYn']:checked").val() == "on"?true:false
				, rcrdCd: "${ext.rcrdCd}"
			}
			, dataType: 'json'
			, success: function(data) {
			    if(data){
			        var isSuccss         = data.isSuccess;
			        var errorMessages     = data.errorMessages;
			        if(isSuccss){
			            alert("정상적으로 등록되었습니다.");
			            ht_CommonPopUIJs.popClose('#popProductQna');
			            ht_CommonQnAUIJs.goQnaListReload(ht_CommonQnAUIJs.sellPrdtBcode, 0);
			        }else{
						alert("처리중 문제가 발생하였습니다.\n관리자에게 문의하셔요");
			            var messageStr ="";
			            for(var i=0; i<errorMessages.length; i++){
			                messageStr += errorMessages[i] + "\n";
			            }
			            console.log(messageStr);
			        }
			    }
	        }
	        ,error: function(request, status, error) {
				alert("처리중 문제가 발생하였습니다.\n관리자에게 문의하셔요.");
				ht_AjaxJs.fnPrintError(request, status, error);
	        }
		});
	},
	//새로 데이터를 가져올때 적용하는 이벤트 및 정보 등록
	setReloadAction : function(cpage,tpage,trows) {
		$('.qnatrow').html('('+trows+')');
		$('#qnatpage').html(tpage);
		$('#qnacpage').html(cpage);
		$('#btn_qnamore').data('cpage',cpage);
		$('#btn_qnamore').data('tpage',tpage);
		//QNA 내용보기 토글 이벤트 처리
		$('.review_comment_area').unbind('click');
		$('.review_comment_area').bind('click',function(){
			$(this).parent().find('.box_qa').toggle();
		})
		//QNA 삭제 버튼 이벤트 처리
		$('.qna_delete').unbind('click');
		$('.qna_delete').bind('click',function(){
			ht_CommonQnAUIJs.fnRemoveQnA($(this).data('code'));
		})
		//QNA 수정 버튼 이벤트 처리
		$('.qna_modify').unbind('click');
		$('.qna_modify').bind('click',function(){
			ht_CommonQnAUIJs.fnModifyQnAForm($(this).data('code'));
		})
	},

	//loadItemsURL : more 아이템의 수행 URL 정보 ( ex : /m/gift/category/best )
	//loadItemsTarget : 아이템을 출력해야할 정보 
	loadMoreItems: function(loadItemsTarget , loadItemsURL) {
		this.getMoreItemsHtml(loadItemsURL,$("."+loadItemsTarget));
	},
	//실제 HTML 소스 형태로 데이터를 가져와 뿌리는 함수
	getMoreItemsHtml: function(url, elementItem) {
	   $.ajax({
	       	type: 'GET'
	        ,url: url
	        ,async: false
            ,data: {}
	        ,dataType: 'html'
	        ,success: function(data) {
	        	elementItem.append(data);
	        }
	        ,error: function(request, status, error) {
				ht_AjaxJs.fnPrintError(request, status, error);
	        }
        }); 
	},
};

const ht_CommonRecobTmplJs ={
	fnRecobProdLoad: function ( loadItemsTarget, url, bcode) {
		let elementItem = $("#"+loadItemsTarget);
		$.ajax({
	       	type: 'POST'
	        ,url: url
	        ,async: false
            ,data: 
            	{ 
					"code": bcode,
            	}
	        ,dataType: 'html'
	        ,success: function(data) {
				//var prtNode = elementItem.parent();
				//var prvNode = prtNode.prev();
				
				//두줄 보기에서 같은 라인의 li의 대체 상품 template이 열려 있으면 닫는다.
				//if(!prtNode.parent().hasClass('row_dir') && prtNode.index()%2 > 0 && prvNode.children("article").hasClass('show_bubble')){
				//	prvNode.children("article").removeClass('show_bubble');
				//}
				elementItem.html(data);
				$("#popReplaceProd").dialog({
					autoOpen: true
				});
	        }
	        ,error: function(request, status, error) {
				ht_AjaxJs.fnPrintError(request, status, error);
	        }
        }); 
	},
	fnRecobProdLoadEvt: function ( loadItemsTarget, url, bcode) {
		let elementItem = $("#"+loadItemsTarget);
		$.ajax({
			type: 'POST'
				,url: url
				,async: false
				,data: {"code": bcode}
		,dataType: 'html'
			,success: function(data) {
				elementItem.html(data);
				$("#ht_popReplaceProd").dialog('open');
			}
		,error: function(request, status, error) {
			ht_AjaxJs.fnPrintError(request, status, error);
		}
		}); 
	}
};

/**
 * 재입고 알림 신청
 */
const ht_StockedInfoUIJs =  {
	//재입고 알림신청 화면
 	addstockedInfoRequest : function(sellPrdtBcode, rcrdCd, area){
 		if(typeof(isLogin) == "string"){ isLogin = isLogin == "true" ? true : false; }
 		
	    if (isLogin){
	    	if($("#stockedInfoRequestLayer").length){
	    		//팝업오픈
	       		KyoboBookPub.ink.dialogOnOff().popOpen("#stockedInfoRequestLayer");
	    	}else{
		        $(area).load("/ht/product/stockedInfoRequestForm?sellPrdtBcode="+ sellPrdtBcode +"&rcrdCd="+ rcrdCd, 
		        	function(){
		        		//팝업 셋팅
		        		KyoboBookPub.ink.setUIDialog("#stockedInfoRequestLayer", "none", "#stockedInfoRequestLayer [data-dialog-close]");
		        		//팝업 오픈
		        		KyoboBookPub.ink.dialogOnOff().popOpen("#stockedInfoRequestLayer");
		       		}
		       	);
	       	}
	    } else {
	        needLogin();
    	}
	}
	//재입고 알림 신청 완료 얼럿
	,stockedInfoRequestEnd : function(fn){
		 ht_CommonPopUIJs.fn_Alert(
		 	 "상품 재입고 시 알림톡으로 알려드립니다."
		 	,"재입고 알림 신청"
		 	,"확인"
		 	,function(){
		 		if(fn != null && typeof fn === "function"){
		 			fn();
		 		}
		}); 
	}
};

/**
 * sos 삭제
 */
const ht_sosUIJs =  {	
	//삭제
	delete : function(rtnSeq){
		ht_CommonPopUIJs.fn_Alert(
		 	 "접수된 문의를 삭제하시겠습니까?"
		 	,"알림"
		 	,"확인"
		 	,function(){
	 			//로딩바
				$("#loading").show();
				
		 		$.ajax({
		            type: "GET"
		            , url: "/ht/help/deleteSosCounsel"
		            , data: "rtnSeq=" + rtnSeq
		            , dataType: "json"
		            , success: function(data) {
		            	if(data.isDeleted){
		            		KyoboBookPub.ink.setToastMessage('정상적으로 삭제되었습니다.', 500);
		            		setTimeout(function(){
		                    	location.reload(true);	
		                    }, 600);
		            	}else{
		            		KyoboBookPub.ink.setToastMessage('삭제 중에 오류가 발생헀습니다.', 500);
		            	}
		            	
		            }
		            , error: function() {
		                alert("<fmt:message key='error.common.system'/>");
		            }
		        });
			}
			,"취소"
		); 
	}
};