// 네비게이션 메뉴 이동
function goMenuSvc(menuId, navType, alertYn){
	
	goMenu(menuId);

}



// 네비게이션에서 서비스 화면 연결 처리(AS-IS)
function connectServiceMenu(menuId, navType, alertYn) {

	goMenu(menuId);
}



//더보기 버튼 처리
function setMoreBtn(form,list,moreBtn,indexName,wid, callbackSuc) {
	var indexN = 'index';
	if(indexName!=null){
		indexN = indexName;
	}
	var currWid = BASE_WIDGET_ID;
	if(wid != null){
		currWid = wid;
	}
	
	// 더보기 이벤트
	var form1 = JUtilForm.createForm("moreBtnForm");
	appendHidden(form1, 'action_type', 'wgt');
	appendHidden(form1, 'ib20_action', '/ib20/wgt/'+currWid+'?ib20_cur_mnu='+BASE_MENU_ID);
	appendHidden(form1, indexN, 1);

	$("#"+moreBtn).bind('click',function(){
		var index = $(form1).find('input[name='+indexN+']');
		index.val(Number(index.val())+1);
		
		
		ajaxCall(form1, function(data) {
			var dom = $(data);
			console.log(dom.find('#'+list).html()) ;
			$(form).find('#'+list).append(dom.find('#'+list).html());
			var moreBtnHtml = dom.find('#'+moreBtn).html();
			if( moreBtnHtml == null || moreBtnHtml == '' ){
				$(form).find('#'+moreBtn).hide();
			}else{
				$(form).find('#'+moreBtn).html(dom.find('#'+moreBtn).html());
			}

			if (typeof callbackSuc === 'function') {
				callbackSuc();
			}

		}, function(data) {
			alert('더보기 실행중 오류가 발생하였습니다.');
		}, 'html');
	});

}


/* 더보기 버튼 처리 기존 폼 활용(파라미터 적용가)
 * <rzm:pageBtn> 태그 사용시 사용
 * index 가 태그에서 +1 되어 있기 때문에 ajaxCall 호출후 index +1
 * */
function setMoreBtn2(form,list,moreBtn,indexName,wid, callbackSuc) {
	var indexN = 'index';
	if(indexName!=null){
		indexN = indexName;
	}
	var currWid = BASE_WIDGET_ID;
	if(wid != null){
		currWid = wid;
	}

	$("#"+moreBtn).bind('click',function(){		
		ajaxCall(form, function(data) {
			var dom = $(data);

			$(form).find('#'+list).append(dom.find('#'+list).html());
			var moreBtnHtml = dom.find('#'+moreBtn).html();
			if( moreBtnHtml == null || moreBtnHtml == '' ){
				$(form).find('#'+moreBtn).hide();
			}else{
				$(form).find('#'+moreBtn).html(dom.find('#'+moreBtn).html());
			}
			
			var index = $(form).find('input[name='+indexN+']');
			index.val(Number(index.val())+1);

			if (typeof callbackSuc === 'function') {
				callbackSuc();
			}
			
		}, function(data) {
			alert('더보기 실행중 오류가 발생하였습니다.');
		}, 'html');
	});

}

/**
 * 더보기시 파라미터 추가
 * @param form
 * @param list
 * @param moreBtn
 * @param indexName
 * @param wid
 * @param params
 */
function setMoreBtnParams(form,list,moreBtn,indexName,wid,params){
	var indexN = 'index';
	if(indexName!=null){
		indexN = indexName;
	}
	var currWid = BASE_WIDGET_ID;
	if(wid != null){
		currWid = wid;
	}
	// 더보기 이벤트
	var form1 = JUtilForm.createForm("moreBtnForm");
	appendHidden(form1, 'action_type', 'wgt');
	appendHidden(form1, 'ib20_action', '/ib20/wgt/'+currWid+'?ib20_cur_mnu='+BASE_MENU_ID);
	appendHidden(form1, indexN, 1);
	for(var i = 0; i < params.length; i++){
		appendHidden(form1, params[i].split('::')[0], params[i].split('::')[1]);
	}

	$("#"+moreBtn).bind('click',function(){
		var index = $(form1).find('input[name='+indexN+']');
		index.val(Number(index.val())+1);
		ajaxCall(form1, function(data) {
			var dom = $(data);
			$(form).find('#'+list).append(dom.find('#'+list).html());
			var moreBtnHtml = dom.find('#'+moreBtn).html();
			if( moreBtnHtml == null || moreBtnHtml == '' ){
				$(form).find('#'+moreBtn).hide();
			}else{
				$(form).find('#'+moreBtn).html(dom.find('#'+moreBtn).html());
			}

			faqToggleDoc();

		}, function(data) {
			alert('더보기 실행중 오류가 발생하였습니다.');
		}, 'html');
	});

}

/**
 * 앱 호출
 * @action 액션
 * @param json 데이타
 * @callback 처리 후 호출할 함수명
 */
function sendToApp(action, param, callback) {
	
	var data = {
		action: action,
		param: param,
		callback: callback
	};
	
	var userAgent = navigator.userAgent.toLowerCase();
	
    try {
    	if ($("[name='_app_debug']") != undefined) {
			$("[name='_app_debug']").html("DATA : ")
				.append(JSON.stringify(data));
    	}

        if (userAgent.match('android')) {
    		window.android.bridge(JSON.stringify(data));
        } else {
            window.webkit.messageHandlers.bridge.postMessage(data);
        }

    } catch (e) {
    	if ($("[name='_app_debug']") != undefined) {
			$("[name='_app_debug']").append('</br> ERROR : ' + e);
    	}
    }
}

function connectAppServiceMenu(menuId) {

	goMenu(menuId);

}

function isDate(txtDate)
{
	var currVal = txtDate;
	if(currVal == '')
		return false;
	//Declare Regex 
	var rxDatePattern = /^(\d{4})(\d{2})(\d{2})$/;
	var dtArray = currVal.match(rxDatePattern); // is format OK?
	if (dtArray == null)
		return false;
	//Checks for yyyymmdd format.
	dtYear = dtArray[1];
	dtMonth = dtArray[2];
	dtDay= dtArray[3];
//	if(dtYear > )
	if (dtMonth < 1 || dtMonth > 12)
		return false;
	else if (dtDay < 1 || dtDay> 31)
		return false;
	else if ((dtMonth==4 || dtMonth==6 || dtMonth==9 || dtMonth==11) && dtDay ==31)
		return false;
	else if (dtMonth == 2)
	{
		var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
		if (dtDay> 29 || (dtDay ==29 && !isleap))
			return false;
	}
	return true;
}


// 알림목록 업데이트 (비동기)
function updatePushYn(){
	
	var pushForm = JUtilForm.createForm("pushTempForm");
	callAjax(pushForm, "RZMCMNPSH01001AM", function(data) {
	});
}

// 알림목록 업데이트 (동기)
function updatePushYnBlock(){
	var pushForm = JUtilForm.createForm("pushTempForm");
	callBlockAjax(pushForm, "RZMCMNPSH01001AM", function(data) {
	}, true);
}


// 빈 문자열 체크
function isEmpty(str){
	if(typeof str == "undefined" || str == null || str == ""){
		return true ;
	}else{
		return false ;
	}
	
}

/*
 * 앱 푸쉬 설정 획득 
 * */
function recievePushStatus(json){
	json = JSON.parse(json);
	if(json.deviceId){
		var tmpForm = JUtilForm.createForm("tmpForm");
		appendHidden(tmpForm, "deviceId", json.deviceId);
		appendHidden(tmpForm, "deviceCheckYn", "Y");
		//앱 푸쉬 설정
		callAjax(tmpForm, "RZMAPPPSH01001AM", function(data) {		
			var deviceUpdYn = data.deviceUpdYn || "N";
			var pushUpdYn	= data.pushUpdYn || "N";
			var adidYn	= data.adidYn || "N";
			
			var nToday = JUtilDate.getToday();
			var adidPopDate = localStorage.adidPopDate;
			
			if(adidPopDate == undefined || nToday > adidPopDate){
				//연체방지서비스에서는 ADID 동의 화면이 노출 안되게 처리
				if(BASE_MENU_ID == "RZA2MYOVR22" || BASE_MENU_ID == "RZA2MYOVR32" || BASE_MENU_ID == "RZA2MYOVR40"){
					adidYn = "Y";
				}
				
				if(pushUpdYn == "Y" || adidYn == "N" || deviceUpdYn == "Y"){
					var popForm = JUtilForm.createForm("popForm");
					appendHidden(popForm, "pushUpdYn", pushUpdYn);
					appendHidden(popForm, "adidYn", adidYn);
					appendHidden(popForm, "deviceUpdYn", deviceUpdYn);
					appendHidden(popForm, "deviceId", json.deviceId);
					
					ExtLayerPop.load(popForm,BASE_MENU_ID, 'RZMMYZSUI41001VP');
				}
			}
			
//			pushUpdYn="N"; // 앱내에서 앱알림 팝업 띄우지 않게 강제 설정(서버에서 띄우기로함)
//			deviceUpdYn="N"; // 앱내에서 앱업데이트 팝업 띄우지 않게 강제 설정(서버에서 띄우기로함)
//			sendToApp("set_push", {"deviceUpdYn" : deviceUpdYn, "pushUpdYn" : pushUpdYn } , "recievePushToken");
		});
	}
}

/*
 * 앱 푸쉬 설정
 * */
function recievePushToken(json){
	json = JSON.parse(json);

	var deviceId		= json.deviceId;
	var deviceUpdYn		= json.deviceUpdYn || "N";
	var pushUpdYn 		= json.pushUpdYn || "N";			// 푸쉬 알림 업데이트 여부 / Y일경우 알림을 업데이트 해야 한다.
	var pushConfirmYn 	= json.pushConfirmYn || "N";		// 푸쉬 알림 업데이트 선택 여부 / Y일경우 업데이트 처리를 한다.
	
	//alert(JSON.stringify(json));
	
	if( deviceId && deviceUpdYn == "Y") {

		var tmpForm1 = JUtilForm.createForm("tmpForm1");

		appendHidden(tmpForm1, "deviceId", 		deviceId);
		appendHidden(tmpForm1, "deviceUpdYn", 	deviceUpdYn);
		appendHidden(tmpForm1, "pushUpdYn",		"N");
		appendHidden(tmpForm1, "pushConfirmYn", 	"N");
		
		//DEVICE ID 등록 처리
		callAjax(tmpForm1, "RZMAPPPSH01002AM", function(data) {								

			if( pushUpdYn == "Y" && pushConfirmYn == "Y" ) {

				setTimeout(function() {
					var tmpForm2 = JUtilForm.createForm("tmpForm2");

					appendHidden(tmpForm2, "deviceId", 		deviceId);
					appendHidden(tmpForm2, "deviceUpdYn", 	"N");
					appendHidden(tmpForm2, "pushUpdYn",		pushUpdYn);
					appendHidden(tmpForm2, "pushConfirmYn", 	pushConfirmYn);
					
					//DEVICE ID 등록 처리
					callAjax(tmpForm2, "RZMAPPPSH01002AM", function(data) {								
						//alert(JSON.stringify(data));
					});
					
				}, 1000);
			}
			
		});
	} else {
		
		if( pushUpdYn == "Y" && pushConfirmYn == "Y" ) {

			var tmpForm2 = JUtilForm.createForm("tmpForm2");

			appendHidden(tmpForm2, "deviceId", 		deviceId);
			appendHidden(tmpForm2, "deviceUpdYn", 	"N");
			appendHidden(tmpForm2, "pushUpdYn",		pushUpdYn);
			appendHidden(tmpForm2, "pushConfirmYn", 	pushConfirmYn);
			
			//DEVICE ID 등록 처리
			callAjax(tmpForm2, "RZMAPPPSH01002AM", function(data) {								
				//alert(JSON.stringify(data));
			});
		}
		
	}
	
	
}
