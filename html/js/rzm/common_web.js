// �׺���̼� �޴� �̵�
function goMenuSvc(menuId, navType, alertYn){
	
	goMenu(menuId);

}



// �׺���̼ǿ��� ���� ȭ�� ���� ó��(AS-IS)
function connectServiceMenu(menuId, navType, alertYn) {

	goMenu(menuId);
}



//������ ��ư ó��
function setMoreBtn(form,list,moreBtn,indexName,wid, callbackSuc) {
	var indexN = 'index';
	if(indexName!=null){
		indexN = indexName;
	}
	var currWid = BASE_WIDGET_ID;
	if(wid != null){
		currWid = wid;
	}
	
	// ������ �̺�Ʈ
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
			alert('������ ������ ������ �߻��Ͽ����ϴ�.');
		}, 'html');
	});

}


/* ������ ��ư ó�� ���� �� Ȱ��(�Ķ���� ���밡)
 * <rzm:pageBtn> �±� ���� ���
 * index �� �±׿��� +1 �Ǿ� �ֱ� ������ ajaxCall ȣ���� index +1
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
			alert('������ ������ ������ �߻��Ͽ����ϴ�.');
		}, 'html');
	});

}

/**
 * ������� �Ķ���� �߰�
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
	// ������ �̺�Ʈ
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
			alert('������ ������ ������ �߻��Ͽ����ϴ�.');
		}, 'html');
	});

}

/**
 * �� ȣ��
 * @action �׼�
 * @param json ����Ÿ
 * @callback ó�� �� ȣ���� �Լ���
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


// �˸���� ������Ʈ (�񵿱�)
function updatePushYn(){
	
	var pushForm = JUtilForm.createForm("pushTempForm");
	callAjax(pushForm, "RZMCMNPSH01001AM", function(data) {
	});
}

// �˸���� ������Ʈ (����)
function updatePushYnBlock(){
	var pushForm = JUtilForm.createForm("pushTempForm");
	callBlockAjax(pushForm, "RZMCMNPSH01001AM", function(data) {
	}, true);
}


// �� ���ڿ� üũ
function isEmpty(str){
	if(typeof str == "undefined" || str == null || str == ""){
		return true ;
	}else{
		return false ;
	}
	
}

/*
 * �� Ǫ�� ���� ȹ�� 
 * */
function recievePushStatus(json){
	json = JSON.parse(json);
	if(json.deviceId){
		var tmpForm = JUtilForm.createForm("tmpForm");
		appendHidden(tmpForm, "deviceId", json.deviceId);
		appendHidden(tmpForm, "deviceCheckYn", "Y");
		//�� Ǫ�� ����
		callAjax(tmpForm, "RZMAPPPSH01001AM", function(data) {		
			var deviceUpdYn = data.deviceUpdYn || "N";
			var pushUpdYn	= data.pushUpdYn || "N";
			var adidYn	= data.adidYn || "N";
			
			var nToday = JUtilDate.getToday();
			var adidPopDate = localStorage.adidPopDate;
			
			if(adidPopDate == undefined || nToday > adidPopDate){
				//��ü�������񽺿����� ADID ���� ȭ���� ���� �ȵǰ� ó��
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
			
//			pushUpdYn="N"; // �۳����� �۾˸� �˾� ����� �ʰ� ���� ����(�������� �������)
//			deviceUpdYn="N"; // �۳����� �۾�����Ʈ �˾� ����� �ʰ� ���� ����(�������� �������)
//			sendToApp("set_push", {"deviceUpdYn" : deviceUpdYn, "pushUpdYn" : pushUpdYn } , "recievePushToken");
		});
	}
}

/*
 * �� Ǫ�� ����
 * */
function recievePushToken(json){
	json = JSON.parse(json);

	var deviceId		= json.deviceId;
	var deviceUpdYn		= json.deviceUpdYn || "N";
	var pushUpdYn 		= json.pushUpdYn || "N";			// Ǫ�� �˸� ������Ʈ ���� / Y�ϰ�� �˸��� ������Ʈ �ؾ� �Ѵ�.
	var pushConfirmYn 	= json.pushConfirmYn || "N";		// Ǫ�� �˸� ������Ʈ ���� ���� / Y�ϰ�� ������Ʈ ó���� �Ѵ�.
	
	//alert(JSON.stringify(json));
	
	if( deviceId && deviceUpdYn == "Y") {

		var tmpForm1 = JUtilForm.createForm("tmpForm1");

		appendHidden(tmpForm1, "deviceId", 		deviceId);
		appendHidden(tmpForm1, "deviceUpdYn", 	deviceUpdYn);
		appendHidden(tmpForm1, "pushUpdYn",		"N");
		appendHidden(tmpForm1, "pushConfirmYn", 	"N");
		
		//DEVICE ID ��� ó��
		callAjax(tmpForm1, "RZMAPPPSH01002AM", function(data) {								

			if( pushUpdYn == "Y" && pushConfirmYn == "Y" ) {

				setTimeout(function() {
					var tmpForm2 = JUtilForm.createForm("tmpForm2");

					appendHidden(tmpForm2, "deviceId", 		deviceId);
					appendHidden(tmpForm2, "deviceUpdYn", 	"N");
					appendHidden(tmpForm2, "pushUpdYn",		pushUpdYn);
					appendHidden(tmpForm2, "pushConfirmYn", 	pushConfirmYn);
					
					//DEVICE ID ��� ó��
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
			
			//DEVICE ID ��� ó��
			callAjax(tmpForm2, "RZMAPPPSH01002AM", function(data) {								
				//alert(JSON.stringify(data));
			});
		}
		
	}
	
	
}
