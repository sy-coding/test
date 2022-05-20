/*
 * @설 명 : 업무공통 Utility 스크립트 함수 정의.
 * @dependency : jQuery-1.8 이상 버전.
 * @===========================================================================
 * @변경이력:
 * @DATE AUTHOR DESCRIPTION
 * @---------------------------------------------------------------------------
 * @변경 이력은 이곳에 추가 합니다.
 * @2014.01.24  박철민 우편번호팝업관련 UTIL추가
 * @2015.07.10  지익호 메뉴 컴펌 추가 UTIL추가
 */

/**
 * 개발팀 지익호 추가 시작
 */

var initEnterEvent = function(frm){
	var enters = $(frm).find("input");
	enters.each(function(){
		var tClass = $(this).attr('class');
		if(tClass){
			var target = tClass.match(/enterTarget\:?([^\s]*)/);
			if(target){
				$(this).bind("keydown",function(e){
					if(e.keyCode ==  13){
						$(target[1]).click();
					}
				});
			}
		}
	});
};

var trimChk = function(frm,id ,msg){
	JSValidator.afterValidate(frm, id, function(obj) {
		var val = $(frm).find("#" + id).val();
		
		if(/^\s+$/.test(val)){
			Message.alert(msg);
			return false;
		}else{
		return true;
		}
	});
};

var agreementPopup = function(agreementCd){
	var form = JUtilForm.createForm("BZWCMNMYZ01VPForm");
	appendHidden(form, "agreementCd", agreementCd);
	JBizUtilWindow.windowOpen(form,"BZWCMNMYZ01","606","490","BZWCMNMYZ01", "no");
};


var menuControlGoodsInfo = function(menuId){
	if(confirm('신용관리 서비스를 신청하신 후 이용이 가능합니다. 상품소개 화면으로 이동하시겠습니까?')){
		goMenu(menuId);
	}
};

var menuControlMbrMdf = function(menuId){
	if(confirm('인증회원만 이용이가능합니다. 인증회원으로 전환하시겠습니까?')){
		goMenu(menuId);
	}
	
};

var menuControlNoLogin = function(menuId){
	if(confirm('로그아웃이 필요한 서비스 입니다. 로그아웃 하시겠습니까?')){
		MAIN_MENU_ID = menuId;
		doLogout();
	}
	
};



var menuControlNoLogin = function(menuId){
	if(confirm('로그아웃이 필요한 서비스 입니다. 로그아웃 하시겠습니까?')){
		MAIN_MENU_ID = menuId;
		doLogout();
	}
	
};

var menuControlMbrFaml = function(tp){
	if(tp == 'CREDIT'){
		Message.alert("가족구성원으로 동의하신 경우에만 이용이 가능한 메뉴 입니다.");
	}else 	if(tp == 'ONNM_PRTC'){
		Message.alert("가족구성원으로 동의하신 경우에만 이용이 가능한 메뉴 입니다.");
	}
};
var openSecurityAlarmPopCloseFun;
var openSecurityAlarmPop = function(fun){
	var form = JUtilForm.createForm("BZWLOGLOG05001VPForm");
	ExtLayerPop.load(form,"BZWMYZSUI01", 'BZWLOGLOG05001VP');
	openSecurityAlarmPopCloseFun = fun;
};

// 리뉴얼 지키미 보안알람 팝업 수정
var openSecurityAlarmPopMobile = function(){
	var form = JUtilForm.createForm("RZMLOGLOG05001VPForm");
	ExtLayerPop.load(form, BASE_MENU_ID, 'RZMLOGLOG05001VP');
	/*var form = $("#mainForm") ;
	ExtLayerPop.load(form,"RZMLOGLOG04", 'RZMLOGLOG05001VP');*/
};

//금사방 알람 수신 동의 팝업
var openFraudAlarmPopMobile = function(fun){
	var nToday = JUtilDate.getToday();
	var fraudMobPopDate = localStorage.fraudMobPopDate;
	if(fraudMobPopDate != nToday){
		var form = JUtilForm.createForm("RZMMYZSUI10002VPForm");
		ExtLayerPop.load(form,BASE_MENU_ID, 'RZMMYZSUI10002VP');
	}
};

//이메일 없는 회원 이메일 등록 팝업
var openMailAlarmPopMobile = function(fun){
	var nToday = JUtilDate.getToday();
	var emailPopDate = localStorage.emailPopDate;
	if(emailPopDate != nToday){
		var form = JUtilForm.createForm("RZMLOGLOG08001VPForm");
		ExtLayerPop.load(form,BASE_MENU_ID, 'RZMLOGLOG08001VP');
	}
};

function goCmnSvcMenu(svcCd, menuId, auth, isLogined){
	var form = JUtilForm.createForm("_mainForm");

	if (isLogined == "false") {
		goMenu("BZWLOGLOG01");
	}else if (auth == 'Y') {
		appendHidden(form, "serviceCd", svcCd);
		callAjax(form, "BZWMYZMYZ01004AM", function(data){
			goMenu(menuId);
		});
	} else {
		if (svcCd == 'SVC0000001') { // 신용지키미
			goMenu("BZWCRDZKM00");
		} else if (svcCd == 'SVC0000003') { // 명의도용지키미
			goMenu("BZWIFMZKM00");
		} else if (svcCd == 'SVC0000013') { // 가족신용지키미
			goMenu("BZWFMYZKM00");
		} else if (svcCd == 'SVC0000014') { // 가족명의지키미
			goMenu("BZWFMYZKM99");
		} else {
			goMenu("BZWZKMZKM01");
		}
	}
}


var Email = function(data){
	/*
	data = {
		email1 : "" //메일1
		,email2 : "" //메일2
		,email3 : "" //메일3
		[,require : false]
	}
	*/
	
	var require = data.require || false;
	
	$(data.email2).bind('change', function(event) {
		if(this.value == "ETC"){
			$(data.email3).show();
			if($(data.email3).parent().prop("tagName").toLowerCase() == "span") $(data.email3).parent().show();
		}else{
			$(data.email3).hide();
			if($(data.email3).parent().prop("tagName").toLowerCase() == "span") $(data.email3).parent().hide();
		}
	});
	$(data.email2).change();
	
	if(require){
		var id = $(data.email1).attr("id") || $(data.email2).attr("id") || $(data.email3).attr("id");
		var exptext = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

		if(id){
			 $(data.email1).parents("form:eq(0)").each(function(){
				 
				 JSValidator.afterValidate(this, id, function(obj) {
					 
					 var e1 = $(data.email1).val().replace(/\s+/gm,"");
					 var e2 = $(data.email2).val();
					 var e3 = $(data.email3).val().replace(/\s+/gm,"");
					 var chkEm = "";
					 if(e1  == ""){
						 Message.alert("이메일은 필수 입력 항목 입니다.");
						 $(data.email1).focus();
						 return false;
					 }else if( e2 == "이메일구분"){
						 Message.alert("이메일은 필수 입력 항목 입니다.");
						 $(data.email2).focus();
						 return false;
					 }else if(e2 == "ETC"){
						 chkEm = $(data.email1).val() +"@" + $(data.email3).val();
						 if(e3 == ""){
							 Message.alert("이메일은 필수 입력 항목 입니다.");
							 $(data.email3).focus();
							 return false;
						 }else if(exptext.test(chkEm)==false){
							 Message.alert("이메일형식이 바르지 않습니다.");
							 $(data.email3).focus();
							 return false;
						 }
					 }else if(e2 != "ETC"){
						 chkEm = $(data.email1).val() + "@" + $(data.email2).find("option:selected").text();
						 
						 if(exptext.test(chkEm)==false){
							 Message.alert("이메일형식이 바르지 않습니다.");
							 $(data.email1).focus();
							 return false;
						 }
					 }
					 
					// 글자수 체크
					var chkEmLen = chkEm.length; // 전체길이
					var em_max = 50; // 제한글자 수
						
					// 한글은 위에서 입력을 막고 있기 때문에 1byte씩으로만 확인
					if(chkEmLen > em_max){
						alert(em_max + "글자를 초과 입력할 수 없습니다.");
						$(data.email1).val('');
						$(data.email1).focus();
						if(e2 == "ETC"){
							$(data.email3).val('');
							$(data.email3).focus();
						}
						return false;
					}
					 
					 return true;
				 });
			});
		}
	}
};

var MobileNo = function (data){
	/*
	data = {
		mobileNo1: "" // 모바일1
		,mobileNo2: ""// 모바일2
		,mobileNo3: ""// 모바일3
		,cnfrmSendBtn : ""// 확인번호 발송 버튼
		,cnfrmDesc : "" //
		,cnfrmLi : "" // 컴펌 확인영역
		,mobileCnfrm : "" // 확인번호
		,cnfrmBtn : "" //확인
		,cnfrmYn : false //컴펌 여부
		,succFun : function(){}
		,closeFun : function(){}
		,sendYn : false //전송 여부
		,cnfrmYn : false //컴펌 여부
		,joinsiteId : 'JOIN100001' //컴펌 여부
	}
	*/
	var t = this;
	this.data =  data;
	
	data.sendYn = false;
	
	this.isEmpty = function(){
		var mobileNo2 =  $(data.mobileNo2).val().replace(/[^\d]/g,"");
		var mobileNo3 =  $(data.mobileNo3).val().replace(/[^\d]/g,"");
		
		if(mobileNo2 != ""){
			return false;
		}else if(mobileNo3 != ""){
			return false;
		}
		
		return true;
	};
	this.isCnfrm = function(){
		return this.data.cnfrmYn;
	};
	
	var chg = function(event) {
		
		$(data.cnfrmSendBtn).show();
		$(data.cnfrmLi).hide();
		$(data.cnfrmDesc).hide();
		$(data.mobileCnfrm).val("");
		data.cnfrmYn = false;
	};
	chg();
	this.init = chg;
	
	$(data.mobileNo1).bind('change',chg);
	$(data.mobileNo2).bind('change',chg);
	$(data.mobileNo3).bind('change',chg);
	
	$(data.cnfrmSendBtn).bind('click', function(event) {
        
		var mobileNo1 =  $(data.mobileNo1).val().replace(/[^\d]/g,"");
		var mobileNo2 =  $(data.mobileNo2).val().replace(/[^\d]/g,"");
		var mobileNo3 =  $(data.mobileNo3).val().replace(/[^\d]/g,"");
		var joinsiteId =  $(data.joinsiteId).val();

		var isChk = function(mn, s,e){
			var l = mn.length;
			return l >=s && l <= e;
		};
		var getTitle = function(sel){
			 var  $sel = $(sel);
			var titile = $sel.attr("title");
			if(!titile){
				var id = $sel.attr("id");
				titile = $("[for='"+id+"']").text();
			}
			if(!titile){
				titile = $sel.attr("name");
			}
			return titile;
		};
		
		if(!mobileNo1){
			Message.alert(getTitle(data.mobileNo1) + "을 선택해 주십니다.");
			$(data.mobileNo1).focus();
			return;
		}
		if(!isChk(mobileNo2, 3, 4)){
			Message.alert(getTitle(data.mobileNo2) + "을  입력해 주십니다.");
			$(data.mobileNo2).focus();
			return;
		}
		if(!isChk(mobileNo3,3,4)){
			Message.alert(getTitle(data.mobileNo3) + "을  입력해 주십니다.");
			$(data.mobileNo3).focus();
			return;
		}
		
		var mobileNo = mobileNo1+mobileNo2+mobileNo3;
		
		mobileNo = mobileNo.replace(/[^\d]/g,"");
		
		var tmpForm = JUtilForm.createForm("chkMobileFrom");
    	appendHidden(tmpForm, 'mobileNo', mobileNo);

		if(joinsiteId == 'JOIN200031'){
	    	appendHidden(tmpForm, 'joinsiteId',  joinsiteId);
    	}else{
        	appendHidden(tmpForm, 'joinsiteId',  'JOIN100001');
		}

		callAjax(tmpForm,"BZWCMNMBR01001AM", function(d){
			if( d.RESULT == "Y"){
				// 사용가능
				$(data.cnfrmLi).show();
				$(data.mobileCnfrm).focus();
				data.sendYn = true;
				Message.alert("확인번호가 발송되었습니다.");
			}else if( d.RESULT_CD == "01"){
				// 전송 실패
				Message.alert("입력하신 휴대폰 번호는 사용하실 수 없는 번호입니다.\r\n다른 휴대폰 번호를 입력해 주시기 바랍니다.\r\n추가 문의사항은 고객센터로 연락 부탁드립니다.");
			}else if( d.RESULT_CD == "02"){
				Message.alert("휴대폰 확인번호 발송은 일일 3회까지로 제한됩니다.");
			}else{
				Message.alert("입력하신 휴대폰 번호는 사용하실 수 없는 번호입니다.\r\n다른 휴대폰 번호를 입력해 주시기 바랍니다.\r\n추가 문의사항은 고객센터로 연락 부탁드립니다.");
				
			}
		},null,null,null,null,true);
	});
	
	$( data.cnfrmBtn ).bind('click', function(event) {
        if(!data.sendYn){
        	Message.alert("확인번호를 발송하셔야 합니다.");
        	return;
        }
		
		var possCnfrmVal =  $(data.mobileCnfrm).val();
		var mobileNo =  $(data.mobileNo1).val();
		mobileNo +=  $(data.mobileNo2).val();
		mobileNo +=  $(data.mobileNo3).val();
		
		var tmpForm = JUtilForm.createForm("chkMobileFrom");
		appendHidden(tmpForm, 'mobileNo', mobileNo);
		appendHidden(tmpForm, 'possCnfrmVal', possCnfrmVal);
		
		callAjax(tmpForm,"BZWCMNMBR01002AM", function(d){
			
			if( d.resultCode == "00"){
				$(data.cnfrmSendBtn).hide();
				$(data.cnfrmLi).hide();
				$(data.cnfrmDesc).show();
				data.cnfrmYn = true;
				
				(data.succFun || function(){})();
				
			}else if( d.resultCode == "01"){
				Message.alert("확인번호 발송시 연락처 정보와 불일치합니다.");
			}else if( d.resultCode == "02"){
				Message.alert("확인번호를 재확인 후 입력해 주시기 바랍니다.");
			}else if( d.resultCode == "03"){
				Message.alert("처리중 오류가 발생 하였습니다.\r\n 확인번호 발송을 다시 진행해 주십시오.");
			}else if( d.resultCode == "04"){
				Message.alert("확인번호 확인은 3회 가능합니다. 확인번호 발송을 다시 해주시기 바랍니다.");
			}else{
				Message.alert("그외 에러");
			}
		},null,null,null,null,true);
	});
};



/**
 * 개발팀 지익호 추가 종료
 */


bizUtils= function($) {
    return {
        table: {
            addSummaryAttr: function() {
                var $table = $("#content, #popContent, .layer-body").find("table").has("caption");
                //--------------------------------------------------------------------------------
                for(var i=0; i < $table.length; i++) {
                    var $obj = $table.eq(i);
                    var $th = $obj.find("th");
                    var rslt = "";
                    //--------------------------------------------------------------------------------
                    for(var j=0; j < $th.length; j++) {
                        rslt += $th.eq(j).text() + (((j+1) < $th.length) ? ", " : "");
                    }
                    //--------------------------------------------------------------------------------
                    rslt += "(으)로 이루어진 " + $obj.find("caption").text() + " 테이블 입니다.";
                    //--------------------------------------------------------------------------------
                    $table.eq(i).attr("summary", rslt);
                }
            }
        },

        /**
         * OS, URL등의 정보 추출에 대한 function 모음
         *
         * @class
         */
        info : {
            /**
             * 도메인 혹은 URL을 리턴한다.
             *
             * @param {int}
             *            pPara 1:도메인 정보만 2:full url
             * @return {String} url 정보
             */
            getBsibUrl : function(pPara){
                if( pPara == 1 ){
                    return location.host;
                }else if( pPara == 2 ){
                    return location.href;
                }
            },
            /**
             * 브라우저 이름/버전을 리턴한다.
             *
             * @param {int}
             *            pPara 1:브라우저 이름 2:버전
             * @return {String} 브라우저 정보
             */
            getBsibBrowser : function(pPara){
                var userAgent = navigator.userAgent.toLowerCase();
                var rbrowsers = [
                        [/firefox/, /firefox[ \/]([\w.]+)/]
                        ,[/chrome/, /chrome[ \/]([\w.]+)/]
                        ,[/safari/, /version[ \/]([\w.]+)/]
                        ,[/opera/, /version[ \/]([\w.]+)/]
                        , [/msie/, /msie ([\w.]+)/]
                        ];
                var name="";
                var version="";
                for(i=0; i<rbrowsers.length; i++){
                    var rbrowser = rbrowsers[i];
                    var match = rbrowser[0].exec(userAgent);
                    if(match){
                        name = match[0];
                        match = rbrowser[1].exec(userAgent);
                        version = match[1];
                        break;
                    }
                }
                var browser = {name:name, version:version};
                if( pPara == 1 ){
                    return name;
                }else if( pPara == 2 ){
                    return version;
                }
            },
            /**
             * OS 정보를 리턴한다.
             *
             * @param {int}
             *            pPara 1:종류 2:버전
             * @return {String} OS정보
             */
            getBsibOs : function(pPara){
                if( pPara == 1 ){
                    var av = navigator.appVersion;
                    if( av.indexOf("Win") !=-1 ){
                        return "Windows";
                    }else if( av.indexOf("Mac") !=-1 ){
                        return "MacOS";
                    }else if( av.indexOf("X11") !=-1 ){
                        return "UNIX";
                    }else if( av.indexOf("Linux") !=-1 ){
                        return "Linux";
                    }
                }else if( pPara == 2 ){
                    var ua = navigator.userAgent;

                    if(ua.indexOf("NT 6.1") != -1) return "Windows7";
                    else if(ua.indexOf("NT 6.0") != -1) return "Windows Vista/Server 2008";
                    else if(ua.indexOf("NT 5.2") != -1) return "Windows Server 2003";
                    else if(ua.indexOf("NT 5.1") != -1) return "Windows XP";
                    else if(ua.indexOf("NT 5.0") != -1) return "Windows 2000";
                    else if(ua.indexOf("NT") != -1) return "Windows NT";
                    else if(ua.indexOf("9x 4.90") != -1) return "Windows Me";
                    else if(ua.indexOf("Win16") != -1) return "Windows 3.x";
                    else if(ua.indexOf("Windows") != -1) return "Windows";
                    else if(ua.indexOf("Macintosh") != -1) return "Macintosh";
                    else if(ua.indexOf("iPhone") != -1) return "iPhone";
                    else if(ua.indexOf("iPod") != -1) return "iPod";
                    else if(ua.indexOf("iPad") != -1 ) return "iPad";
                    else if(ua.indexOf("Android") != -1) return "Android";
                    else if(ua.indexOf("BlackBerry") != -1) return "BlackBerry";
                    else if(ua.indexOf("Linux") != -1) return "Linux";
                    else if(ua.indexOf("Mac OS X 10.4") != -1) return "Tiger";
                    else if(ua.indexOf("Mac OS X 10.5") != -1) return "Leopard";
                    else if(ua.indexOf("Mac OS X 10.6") != -1) return "Snow Leopard";
                    else return "";
                }
            }
        },
        window : {
            windowOpen : function(form, url, width, height, winname, scroll, x, y, isGet) {
                JUtilWindow.windowOpen(form, url, winname, width, height, x, y, scroll, true, isGet);
            }
        },
        calendar : {
            /**
             * 오늘의 날짜를 YYYYMMDD 순으로 가져온다
             *
             */
            getToday : function(){
                /*var datToday=new Date();

                var date = datToday;

                var year  = date.getFullYear();
                var month = date.getMonth() + 1; // 1월=0,12월=11이므로 1 더함
                var day   = date.getDate();



                if (("" + month).length == 1) { month = "0" + month; }
                if (("" + day).length   == 1) { day   = "0" + day;   }

                return ("" + year + "" + month + "" + day);*/
                return JUtilDate.getToday();
            },

            /**
             * YYYYMMDD 날짜에 dash를 부여한다
             *
             * @param {String}
             *            YYYYMMDD형식 날짜
             */
            putDash : function(date){
                if(date.length != 8)
                    return date;

                var year = date.substring(0,4);
                var mon = date.substring(4,6);
                var day = date.substring(6,8);

                return year + "-" + mon + "-" + day;
            },
            /**
             * 글자수에 맞추어 앞에 0을 추가
             * 예) 세자릿수에 값이 1인 경우 001, 12인 경우 012
             *
             * @param {integer}
             *            숫자
             * @param {integer}
             *            자릿수
             */
            numformat : function(intNum, intLen){
                var strNum = intNum + "";
                var strTemp = "";
                for(var i = 0; i < (eval(intLen) - strNum.length); i++){
                    strTemp = "0" + strTemp;
                }
                strTemp = strTemp + strNum;
                return strTemp;
            },
            /**
             * Date형식의 날짜를 YYYY-MM-DD형식으로 반환
             *
             * @param {Object}
             *            날짜
             */
            getdate : function(datArg){
                var datD = datArg;
                var strTemp = "";
                strTemp = strTemp + datD.getFullYear() + "-";
                strTemp = strTemp + JBizUtilCalendar.numformat((datD.getMonth() + 1),2) + "-";
                strTemp = strTemp + JBizUtilCalendar.numformat(datD.getDate(),2);
                return strTemp;
            },
            /**
             * 날짜 형식 체크
             *
             * @param {Object}
             *            날짜
             */
            datcheck : function(objname){  //'날자 형식 체크
                var strTemp;
                var strLast = "";
                var strChk = 0;
                for(var i = 0; i < $(objname).val().length; i++){
                    strTemp = $(objname).val().substring(i,i+1);
                    if((strTemp >= "0") && (strTemp <= "9")) {
                        strLast = strLast + strTemp;
                    }
                }
                if (strLast.length == 6){
                    var yy = strLast.substring(0, 2);
                    var mm = strLast.substring(2, 4);
                    var dd = strLast.substring(4, 6);

                    if (yy > "50"){
                        $(objname).val("19" + yy + "-" + mm + "-" + dd);
                        return;
                    }
                    else{
                        $(objname).val("20" + yy + "-" + mm + "-" + dd);
                        return;
                    }
                }
                if($(objname).size() > 0){
                    if((strLast.substring(0,4) >= "1900") && (strLast.substring(0,4) <= "2100")){
                        strChk = 1;
                    }
                    if((strLast.substring(4,6) >= "01") && (strLast.substring(4,6) <= "12")){
                        strChk = strChk + 1;
                    }
                    if((strLast.substring(6,8) >= "01") && (strLast.substring(6,8) <= "31")){
                        if ((strLast.substring(6,8).length) == 2)
                        {
                            strChk = strChk + 1;
                        }
                    }
                    if(strChk == 3){
                        $(objname).val(strLast.substring(0,4) + "-" + strLast.substring(4,6) + "-" + strLast.substring(6,8));
                    }
                    else{
                        alert("날짜형이 잘못되었습니다.");
                        $(objname).val(JBizUtilCalendar.putDash(JBizUtilCalendar.getToday()));
                        $(objname).focus();
                    }
                }
            },
            /**
             * 날짜 입력란에 직접 입력 후 포커스 아웃 시 날짜 형식 체크
             *
             * @param {Object}
             *            form
             * @param {Object}
             *            날짜
             */
            setCheckDate : function(form, obj){
                $(form).find(obj).focusout(function() {
                    JBizUtilCalendar.datcheck(obj);
                });
            },
            /**
             * 조회기간을 세팅한다.
             * 지정한 날짜로부터 미래 혹은 과거로, 일수 혹은 달수만큼 기간을 지정해 준다.
             * 현재일을 포함하여 기간을 지정할 수도 있고 해당값을 +- 한 만큼 세팅할 수도 있다.
             * 시작일과 종료일 input box를 지정한다.
             * 초기에 기준일자가 없으면 현재를 기준으로 세팅한다.
             *
             * @param {Object}
             *            시작 input box
             * @param {Object}
             *            종료 input box
             * @param {String}
             *            일, 월 구분. 더하거나 뺄 값이 일이면 D, 월이면 M
             * @param {Integer}
             *            더하거나 뺄 숫자
             * @param {String}
             *            구분. 지정일로부터 이전이면 F, 지정일로부터 이후면 R(혹은 생략)
             * @param {String}
             *            현재일을 포함할 것이면 Y. 아니면 N 혹은 생략
             */
            setDates : function(startDateObj, endDateObj, gubun, variable, RfFlag, nowFlag){
                var date;
                if( variable == 0 ){
                    date = JBizUtilCalendar.putDash(JBizUtilCalendar.getToday());
                    $(startDateObj).val(date);
                    $(endDateObj).val(date);
                }
                else if(RfFlag == "F"){
                    //date = $(endDateObj).val();
                    //if( date == null || date == "")
                    //    date = JBizUtilCalendar.putDash(JBizUtilCalendar.getToday());

                    // 조회기간 버튼 클릭시 종료일(endDate)는 오늘 날짜가 되도록 수정 (2014-05-28, 문수환)
                    date = JBizUtilCalendar.putDash(JBizUtilCalendar.getToday());

                    var datD = new Date(date.substring(0,4),date.substring(5,7)-1,date.substring(8,10));
                    $(endDateObj).val(JBizUtilCalendar.getdate(datD));

                    if(gubun == "D"){
                        datD.setDate(datD.getDate() - variable);
                    }
                    if(gubun == "M"){
                        datD.setMonth(datD.getMonth() - variable);
                    }
                    if(nowFlag == "Y"){
                        datD.setDate(datD.getDate() + 1);
                    }
                    $(startDateObj).val(JBizUtilCalendar.getdate(datD));
                }else{
                    //date = $(startDateObj).val();
                    //if( date == null || date == "")
                    //    date = JBizUtilCalendar.putDash(JBizUtilCalendar.getToday());

                    // 조회기간 버튼 클릭시 시작일(startDate)은 오늘 날짜가 되도록 수정 (2014-05-28, 문수환)
                    date = JBizUtilCalendar.putDash(JBizUtilCalendar.getToday());

                    var datD = new Date(date.substring(0,4),date.substring(5,7)-1,date.substring(8,10));
                    $(startDateObj).val(JBizUtilCalendar.getdate(datD));

                    if(gubun == "D"){
                        datD.setDate(datD.getDate() + variable);
                    }
                    if(gubun == "M"){
                        datD.setMonth(datD.getMonth() + variable);
                    }
                    if(nowFlag == "Y"){
                        datD.setDate(datD.getDate() - 1);
                    }
                    $(endDateObj).val(JBizUtilCalendar.getdate(datD));
                }
            },
            /**
             * 조회기간 버튼 클릭 이벤트를 세팅한다.
             *
             * @param {Object}
             *            form
             * @param {Object}
             *            시작 input box
             * @param {Object}
             *            종료 input box
             * @param {Object}
             *            버튼 array. 2차원 배열로 입력한다 [["버튼", "월일구분", 숫자], ["#day1", "D", "1"],...] * '오늘'은 0입니다(주의)
             * @param {String}
             *            구분. 지정일로부터 이전이면 F, 지정일로부터 이후면 R(혹은 생략)
             * @param {String}
             *            현재일을 포함할 것이면 Y. 아니면 N 혹은 생략
             */
            setButtons : function(form, startDate, endDate, btnArray, RfFlag, nowFlag){
                var $form = $(form);
                for(var i=0; i<btnArray.length; i++){
                    $form.find(btnArray[i][0]).bind("click", {gubun:btnArray[i][1], variable:btnArray[i][2]}, function(event) {
                        JBizUtilCalendar.setDates(startDate, endDate, event.data.gubun, event.data.variable, RfFlag, nowFlag);
                    });
                }
            },
            
            setDate : function(obj, date){
                $(obj).val(date);
            }
        },
        crtCheck:{
          	/**
          	 * 휴대폰 인증번호 발송
          	 *  - 통신사_구분,휴대폰_번호,생년월일,성별,성명,콜백번호
          	 * @param teleComCls
          	 * @param mobileNo
          	 * @param birth
          	 * @param gender
          	 * @param flnm
          	 * @param callbackNo
          	 * @param callbackFunction
          	 * @returns
          	 */
            smsCrtCheck : function(teleComCls, mobileNo, birth, gender, flnm, callbackNo, callbackFunction) {
            	var paramForm = JUtilForm.createForm("frmCrtCheck");
            	appendHidden(paramForm, "TELECOM_CLS", teleComCls);
            	appendHidden(paramForm, "MOBILE_NO", mobileNo);
            	appendHidden(paramForm, "BIRTH", birth);
            	appendHidden(paramForm, "GENDER", gender);
            	appendHidden(paramForm, "FLNM", flnm);
            	appendHidden(paramForm, "CALLBACK_NO", callbackNo);
            	
            	appendHidden(paramForm, 'b_page_id', BROWSER_REQ_ID);
                appendHidden(paramForm, 'ib20_action', '/ib20/act/' + "CMNCMNCRT03001AM");
                appendHidden(paramForm, 'ib20_cur_mnu', BASE_MENU_ID);
                appendHidden(paramForm, 'ib20_cur_wgt', START_WIDGET_ID);
                
            	callAction(paramForm, function(data){
            		var result = data.MOBILE_CERT_RESULT;
            		if(result == '0000' || result == "0060"){ // 인증성공
//            			Message.alert("", "", function(){});
            			callbackFunction(true, data);
            		} else {
            			var msg = data.RESULT_MSG;
            			Message.alert(msg, "", function(){});
            		}
            	}, function(data){
            		Message.alert("인증번호 발송 중 오류가 발생하였습니다.", "", function(){});
            	});
            },
            /**
             * 휴대폰 인증번호 확인
             *  - SMS인증번호(OTP), 인증고유번호
             * @param smsCertNo
             * @param certUniqueNo
             * @param callbackFunction
             * @returns
             */
            smsCrtConfirm : function(smsCertNo, certUniqueNo, callbackFunction) {
            	var paramForm = JUtilForm.createForm("frmCrtCheck");
            	appendHidden(paramForm, "SMS_CERT_NO", smsCertNo);
            	appendHidden(paramForm, "CERT_UNIQUE_NO", certUniqueNo);
            	
            	appendHidden(paramForm, 'b_page_id', BROWSER_REQ_ID);
                appendHidden(paramForm, 'ib20_action', '/ib20/act/' + "CMNCMNCRT03002AM");
                appendHidden(paramForm, 'ib20_cur_mnu', BASE_MENU_ID);
                appendHidden(paramForm, 'ib20_cur_wgt', START_WIDGET_ID);
                
            	callAction(paramForm, function(data){
            		var result = data.MOBILE_CERT_RESULT;
            		if(result == "0000"){ // 인증성공
//            			Message.alert("", "", function(){});
            			callbackFunction(true, data);
            		} else { // 인증오류
            			var msg = data.RESULT_MSG;
            			Message.alert(msg, "", function(){});
            			return;
            		}
            	}, function(data){
            		Message.alert("인증번호 검증 중 오류가 발생하였습니다.", "", function(){});
            	});
            	return null;
            },
            
            /**
             * 주민 To CI
             * @param userResId 주민번호(13자리)
             * @param callbackSuc 성공 메소드
             * @param callbackErr 실패 메소드
             * @param currentWidgetId 현재 위젯 아이디
             */
            checkUser : function(userResId, callbackSuc, callbackErr, currentWidgetId) {

            	var frm_CheckUser = JUtilForm.createForm("frm_CheckUser");
            	appendHidden(frm_CheckUser, "cusCheck", "C");   						//개인 C, 외국인 F
            	appendHidden(frm_CheckUser, "userResId", userResId);   				//주민번호(13자리)
            	//appendHidden(frm_CheckUser, "inqCauCd", inqCauCd);   			//조회사유코드 (10:회원가입, 20:기존회원확인, 40:비회원확인, 90:기타사유)
            	//appendHidden(frm_CheckUser, "userName", userName);   			//성명
            	
            	
            	appendHidden(frm_CheckUser, 'b_page_id', BROWSER_REQ_ID);
                appendHidden(frm_CheckUser, 'ib20_action', '/ib20/act/' + "CMNCMNCRT04001AM");
                appendHidden(frm_CheckUser, 'ib20_cur_mnu', BASE_MENU_ID);
                appendHidden(frm_CheckUser, 'ib20_cur_wgt', (!currentWidgetId ? START_WIDGET_ID : currentWidgetId));
                
            	callAction(frm_CheckUser, callbackSuc, callbackErr);
               
            },
            
            /**
             * 외국인 실명확인
             * @param inqCauCd 조회사유코드 (10:회원가입, 20:기존회원확인, 40:비회원확인, 90:기타사유)
             * @param userResId 주민번호(13자리)
             * @param userName 성명
             * @param callbackSuc 성공 메소드
             * @param callbackErr 실패 메소드
             * @param currentWidgetId 현재 위젯 아이디
             */
            checkForeigner : function(inqCauCd, userResId, userName, callbackSuc, callbackErr, currentWidgetId) {

            	var frm_CheckUser = JUtilForm.createForm("frm_CheckUser");
            	appendHidden(frm_CheckUser, "cusCheck", "F");   						//개인 C, 외국인 F
            	appendHidden(frm_CheckUser, "inqCauCd", inqCauCd);   				//조회사유코드 (10:회원가입, 20:기존회원확인, 40:비회원확인, 90:기타사유)
            	appendHidden(frm_CheckUser, "userResId", userResId);   				//주민번호(13자리)
            	appendHidden(frm_CheckUser, "userName", userName);   			//성명
            	
            	appendHidden(frm_CheckUser, 'b_page_id', BROWSER_REQ_ID);
                appendHidden(frm_CheckUser, 'ib20_action', '/ib20/act/' + "CMNCMNLOG02001AM");
                appendHidden(frm_CheckUser, 'ib20_cur_mnu', BASE_MENU_ID);
                appendHidden(frm_CheckUser, 'ib20_cur_wgt', (!currentWidgetId ? START_WIDGET_ID : currentWidgetId));
                
            	callAction(frm_CheckUser, callbackSuc, callbackErr);
               
            },
            
            //본인인증 타입 선정 후 메인 프로세스 액션 호출
            callSelfCert : function(certType, sucFnc, errFnc, isMobile, mobileCo, menuPath) {
            	var article = '팝업설정이 차단되었습니다.\n팝업차단 해제 후 이용하시기 바랍니다.';
            	
            	var addCertDvCd = "";
            	
            	var resultMenuPath = "";
            	
            	if(certType == '01') {addCertDvCd = 'Phone';};
            	if(certType == '02') {addCertDvCd = 'Cert';};
            	if(certType == '03') {addCertDvCd = 'Card';};
            	if(certType == '04') {addCertDvCd = 'Ipin';};
            	if(certType == '05') {addCertDvCd = 'Off';};
            	 
            	if(FAKE_FLAG != "Y"){
            		//오프라인일 경우
                    if(addCertDvCd == 'Off'){
                    	var frm_selfCert = JUtilForm.createForm("frm_selfCert");
                    	appendHidden(frm_selfCert, "selfCertType", addCertDvCd);   			//본인인증 타입 (Phone, Cert, Card, Ipin, OffLine)
                    	
                    	appendHidden(frm_selfCert, 'b_page_id', BROWSER_REQ_ID);
                        appendHidden(frm_selfCert, 'ib20_action', '/ib20/act/' + "CMNCMNCRT01003AM");
                        appendHidden(frm_selfCert, 'ib20_cur_mnu', BASE_MENU_ID);
                        appendHidden(frm_selfCert, 'ib20_cur_wgt', START_WIDGET_ID);
                        
                        callAction(frm_selfCert, 
                    			function(data) {
                    					if(data.resultValue == "success"){
                    						//TO-DO 성공시 처리 구현 
                    						eval(sucFnc + '()');
                    					}else{
                    						//TO-DO 실패시 처리 구현
                    						Message.alert("에러메시지 : " + data.selfCertErrMessage);
                    					}
                    			}
                        );
                    }
                    //아이핀경우
                    else if(addCertDvCd == 'Ipin'){
                    	var frm_selfCert = JUtilForm.createForm("frm_selfCert");
                    	appendHidden(frm_selfCert, "selfCertType", addCertDvCd);   			//본인인증 타입 (Phone, Cert, Card, Ipin)
                    	
                    	appendHidden(frm_selfCert, 'b_page_id', BROWSER_REQ_ID);
                        appendHidden(frm_selfCert, 'ib20_action', '/ib20/act/' + "CMNCMNCRT01002AM");
                        appendHidden(frm_selfCert, 'ib20_cur_mnu', BASE_MENU_ID);
                        appendHidden(frm_selfCert, 'ib20_cur_wgt', START_WIDGET_ID);
                        
						if (menuPath != null && menuPath != undefined && menuPath != '' ){                    		
                    		resultMenuPath = menuPath;
                    	}
                        
						appendHidden(frm_selfCert, 'param_r1', resultMenuPath);
						appendHidden(frm_selfCert, 'param_r2', sucFnc);  
						appendHidden(frm_selfCert, 'param_r3', errFnc);
                    	
                        callAction(frm_selfCert, 
                    			function(data) {
                    					if(data.resultValue == "success"){
                    						//TO-DO 성공시 처리 구현
                    						//Message.alert("본인인증  EncData: " + data.selfCertEncData);
                    						
                    						window.name ="Parent_window";
                    						var form_ipin = JUtilForm.createForm("form_ipin");
                    						
                    						appendHidden(form_ipin, 'm', 'pubmain'); 								 	//인증받은 사용자 정보 암호화 데이타입니다.
                    						appendHidden(form_ipin, 'enc_data', data.selfCertEncData);  		//인증받은 사용자 정보 암호화 데이타입니다.
                    						
                    						// 긴급반영으로 인해 아래 3라인 임시 주석 처리
                                        	
                    						
                    					    //업체에서 응답받기 원하는 데이타를 설정하기 위해 사용할 수 있으며, 인증결과 응답시 해당 값을 그대로 송신합니다. 해당 파라미터는 추가하실 수 없습니다. 
                    						//appendHidden(form_ipin, 'param_r1', data.sResultURL);  
                    						
                    						//가상주민번호 서비스 팝업 페이지에서 사용자가 인증을 받으면 암호화된 사용자 정보는 해당 팝업창으로 받게됩니다. 
                    						//따라서 부모 페이지로 이동하기 위해서는 다음과 같은 form이 필요합니다. 
                    						var vnoform = JUtilForm.createForm("vnoform");
                    						
                    						appendHidden(vnoform, 'enc_data','');       //인증받은 사용자 정보 암호화 데이타입니다.
                    						
                    						$(vnoform).attr("method", "post");
                    						$(frm_selfCert).after(vnoform);
                    						
                    						if(isMobile != null && isMobile != undefined && isMobile != '' && isMobile == 'Y'){
                    							
                    							form_ipin.action = "https://cert.vno.co.kr/ipin.cb";
                    							form_ipin.target = "_self";
                    							form_ipin.submit();
                    							
                    	                	}else{
                    	                		var res = window.open('', 'popupIPIN2', 'width=450, height=550, top=100, left=100, fullscreen=no, menubar=no, status=no, toolbar=no, titlebar=yes, location=no, scrollbar=no');
                    	                		if(res == null){
                    	                			Message.alert(article); 
                    	                			return;
                    	                		}
                    	                		form_ipin.target = "popupIPIN2";
                        						form_ipin.action = "https://cert.vno.co.kr/ipin.cb";
                        						//form_ipin.action = data.processUrl; //"http://localhost:8080/cmn/jsp/crt/view/ipin_process.jsp";

                        						form_ipin.submit();
                        						
                        						
                    	                	}
                    						
                    						
                    					}else{
                    						//TO-DO 실패시 처리 구현
                    						Message.alert("에러메시지 : " + data.selfCertErrMessage);
                    					}
                    			}
                    	);
                    }
                    //휴대폰, 공인인증서, 카드일 경우
                    else{
                    	var frm_selfCert = JUtilForm.createForm("frm_selfCert");
                    	if(isMobile != null && isMobile != undefined && isMobile != '' && isMobile == 'Y'){
                    		appendHidden(frm_selfCert, "isMobile", "Mobile");   						//모바일여부
                    	}
                    	if(mobileCo != null && mobileCo != undefined && mobileCo != '' ){
                    		appendHidden(frm_selfCert, "mobileCo", mobileCo);   					//스크래핑인증시 통신사 구분(BZWOCCNCA04002VM)
                    	}
                    	appendHidden(frm_selfCert, "selfCertType", addCertDvCd);   			//본인인증 타입 (Phone, Cert, Card, Ipin)
                    	
                    	// 모바일웹/앱의 경우 인증을 호출하는 메뉴 구분 파라미터 추가
                    	if (menuPath != null && menuPath != undefined && menuPath != '' ){                    		
                    		resultMenuPath = menuPath;
                    	}
                    	appendHidden(frm_selfCert, "selfCertType", addCertDvCd);   			//본인인증 타입 (Phone, Cert, Card, Ipin)
                    	
                    	appendHidden(frm_selfCert, 'b_page_id', BROWSER_REQ_ID);
                        appendHidden(frm_selfCert, 'ib20_action', '/ib20/act/' + "CMNCMNCRT01001AM");
                        appendHidden(frm_selfCert, 'ib20_cur_mnu', BASE_MENU_ID);
                        appendHidden(frm_selfCert, 'ib20_cur_wgt', START_WIDGET_ID);
                        
                        if(BASE_MENU_ID == 'BZWMSRMSR01'){
                        	resultMenuPath = 'REGIST';
                        }else if(BASE_MENU_ID == 'BZWLOGLOG02'){
                        	resultMenuPath = 'ID';
                        }else if(BASE_MENU_ID == 'BZWLOGLOG08'){
                        	resultMenuPath = 'PWD';
                        }else if(BASE_MENU_ID == 'BZWMYZSUI06'){
                        	resultMenuPath = 'WITHDRAW';
                        }
                        
                        appendHidden(frm_selfCert, 'param_r1', resultMenuPath);
						appendHidden(frm_selfCert, 'param_r2', sucFnc);  
						appendHidden(frm_selfCert, 'param_r3', errFnc);
						
                        
                        appendHidden(frm_selfCert, "menuPath", menuPath);
                        
                    	callAction(frm_selfCert, 
                    			function(data) {
                    					if(data.selfCertErrMessage == ""){
                    						//TO-DO 성공시 처리 구현
                    						//Message.alert("본인인증  EncData: " + data.selfCertEncData);
                    						
                    						var form_chk = JUtilForm.createForm("frm_selfCert");
                    						
                    						appendHidden(form_chk, 'm', "checkplusSerivce");                    //필수 데이타로, 누락하시면 안됩니다. 
                    						appendHidden(form_chk, 'EncodeData', data.selfCertEncData);  //위에서 업체정보를 암호화 한 데이타입니다. 
                    						
                    						//appendHidden(form_chk, 'param_r1', data.sResultURL);
                    						
                    						if(isMobile != null && isMobile != undefined && isMobile != '' && isMobile == 'Y'){
                    							
    	                						form_chk.action = "https://nice.checkplus.co.kr/CheckPlusSafeModel/checkplus.cb";
    	                    					form_chk.target = "_self";
    	                    					form_chk.submit();
                    							
                    	                	}else{
                    	                		var res = window.open('', 'popupChk', 'width=500, height=550, top=100, left=100, fullscreen=no, menubar=no, status=no, toolbar=no, titlebar=yes, location=no, scrollbar=no');
                    	                		if(res == null){
                    	                			Message.alert(article); 
                    	                			return;
                    	                		}
                    	                		
                    	                		form_chk.action = "https://nice.checkplus.co.kr/CheckPlusSafeModel/checkplus.cb";
                        						//alert(data.contextPath + "/ib20/mnu/CMNCRT00000");  //CMNCMNCRT02001AM.jsp	-> CMNCMNCRT02001VM
                        						//form_chk.action = data.contextPath + "/ib20/mnu/CMNCRT00000";
                        						form_chk.target = "popupChk";
                        						form_chk.submit();
                    	                	}
                    						
                    						
                    					}else{
                    						//TO-DO 실패시 처리 구현
                    						Message.alert("에러메시지 : " + data.selfCertErrMessage);
                    					}
                    			}, null, null, false
                    	);
                    }
            	}else{
            		if(isMobile != null && isMobile != undefined && isMobile != '' && isMobile == 'Y'){
            			var form_chk = JUtilForm.createForm("frm_selfCert");
            			appendHidden(form_chk, "selfCertType", addCertDvCd);   			//본인인증 타입 (Phone, Cert, Card, Ipin)
                		appendHidden(form_chk, 'sucFnc', sucFnc);  
    					appendHidden(form_chk, 'errFnc', errFnc);
            			form_chk.action = window.location.protocol + '//' + window.location.host + "/ib20/mnu/CMNSAMPLE75",
            			form_chk.target = "_self";
    					form_chk.submit();
            		}else{
            			var form_chk = JUtilForm.createForm("frm_selfCert");
                		appendHidden(form_chk, "selfCertType", addCertDvCd);   			//본인인증 타입 (Phone, Cert, Card, Ipin)
                		appendHidden(form_chk, 'sucFnc', sucFnc);  
    					appendHidden(form_chk, 'errFnc', errFnc);
    					JBizUtilWindow.windowOpen(form_chk, "CMNSAMPLE75", '510', '630');
            		}
            		
            	}
            }
        },
        makeAddr:{
        	/**
             * 우편번호조회
             * @param focusFiled 팝업종료후 포커스 변수
             */
        	makeAddr : function(focusFiled) {
            	var frm_addr = JUtilForm.createForm("frm_addr");
            	appendHidden(frm_addr, "focusFiled", focusFiled);   		
            	JBizUtilWindow.windowOpen(frm_addr, "CMNCMNZIP01", "530", "670", null, "yes");
            }
        },
        niceUiUtil: {
            reload: function() {
            		try{
            		//표열기 닫기
            		graphTable();
            		}catch(e){}
            		try{
            		//테이블 접근성 반영
            		tbl_list();
            		}catch(e){}
            		try{
            		//열람 테이블 펼치기 닫기
            		dtlView();
            		}catch(e){}
            		try{
            		//상세검색조건 더보기
            		tabMenu();
            		}catch(e){}
            		try{
            		//신용사전
            		dic();
            		}catch(e){}
            		try{
            		//상세설정 테이블 열기/닫기
            		detailWrap();
            		}catch(e){}
            		try{
            		// 고객센터용 FaQ & 신용상담내역
            		tbl_board();
            		}catch(e){}
            		try{
            		// 고객센터 메인 top5
            		faq_top5();
            		}catch(e){}
            		try{
            		editCert();
            		}catch(e){}
            		try{
            			/*placeholder*/
            			placeHolder();	
            		}catch(e){}
            		try{
            			privacy();	
            		}catch(e){}
            		
            
            }
        },
        pgProc:{
        	/**
             * 결제 모듈
             * @param 
             */
        	callPg : function(pgForm, pgParam, isFlag) {
				if($('#pgIframeMonthForm').size() > 0){
					$('#pgIframeMonthForm').remove();
				}
                $(pgForm).after('<iframe name="pgIframeMonthForm" id="pgIframeMonthForm" src="about:blank" style="width:0;height:0;border:0px solid #fff;" allowtransparency="true" class="iframe"></iframe>');

        		//필수항목 체크 : 상품명, 결제금액, 구매번호, 할인가격, 할인요율
        		if(pgParam.good_name == undefined 	|| pgParam.good_name == null )	{ Message.alert('상품명이 없습니다. 확인 부탁 드립니다.'); return false;}
        		if(pgParam.price == undefined 			|| pgParam.price == null )				{ Message.alert('결제금액이 없습니다. 확인 부탁 드립니다.'); return false;}
        		if(pgParam.order_no == undefined 		|| pgParam.order_no == null )		{ Message.alert('구매번호가 없습니다. 확인 부탁 드립니다.'); return false;}
        		if(pgParam.buyer_name == undefined	|| pgParam.buyer_name == null )	{ Message.alert('구매자명이 없습니다. 확인 부탁 드립니다.'); return false;}
        		if(pgParam.buyer_addr == undefined	|| pgParam.buyer_addr == null )	{ Message.alert('구매자 주소가 없습니다. 확인 부탁 드립니다.'); return false;}
        		        		
        		//결제 태그에 선택된 항목을 확인
        		var parentform 				= $(pgForm);
                var pgType         			= parentform.find("input[name='radioPgType']:checked").val();                
                var pgCompany 				= parentform.find("input[name='pgCompany']").val();   		//INICIS(master), LGUPLUS(slave)
                var isMonth 					= parentform.find("input[name='isMonth']").val();   				//0:일반결제, 1:월결제
                var menuId 					= parentform.find("input[name='resultMenuId']").val();   		//이동될 메뉴아이디
                var startPgWidgetId 		= parentform.find("input[name='startPgWidgetId']").val();   	//시작 위젯 아이디
                var targetPgWidgetId 		= parentform.find("input[name='targetPgWidgetId']").val();   //타겟 위젯 아이디
                
                var target_name = "pgIframeForm";
                
                if(!isFlag && (pgType == undefined || pgType == null || pgType == "")) {Message.alert('결제수단을 선택해 주세요.'); return false;}
                
                //월결제경우 iframe 명을 pgIframeMonthForm 로 지정
                if(isMonth == '1'){
                	target_name = "pgIframeMonthForm";
                }

                //필수 항목 처리
                appendHidden(parentform, 'good_name', pgParam.good_name);   					//상품명
                appendHidden(parentform, 'price_t', pgParam.price);                      					//결제금액
                appendHidden(parentform, 'order_no', pgParam.order_no);                   			//구매번호
                appendHidden(parentform, 'buyer_name', pgParam.buyer_name);                   	//구매자명
                //appendHidden(parentform, 'buyer_email', "#@#");                   		//구매자이메일(15.09.07 오윤석팀장님 요청으로 삭제)
                //가상계좌 이면서 휴대폰번호가 존재할경우
                if(pgType == "VBank" && pgParam.buyer_hpp.length != 0){
                	appendHidden(parentform, 'buyer_hpp', pgParam.buyer_hpp);   
                }else{
                	appendHidden(parentform, 'buyer_hpp', "01012341234");                   		
                }
                appendHidden(parentform, 'buyer_addr', pgParam.buyer_addr);                   		//구매자주소
                appendHidden(parentform, 'request_time', JUtilDate.getTodayTimeFormat()); 	//요청시간
                appendHidden(parentform, 'RESULT_MENU', '/ib20/mnu/' + menuId);  	//공통결과페이지에서 해당 메뉴로 부모 창을 이동시킴
                appendHidden(parentform, 'hash', pgParam.hash);                   		//결제정보Hash
                
                if(isFlag == true && isFlag != "SH"){
                	//pgType = "All";
                	if(pgType == "")	pgType = "All";
                	isMonth = 0;
                	pgCompany = "INICIS";
                	appendHidden(parentform, 'isException', "CB"); 	//CB 거래여부
                }else if(isFlag == "SH" && pgType == "Card"){
                	pgType = "Card";
                	isMonth = 0;
                	pgCompany = "INICIS";
                	appendHidden(parentform, 'isException', "SH"); 	//신한여부
                }
                
                //선택 항목 처리
                if(pgParam.buyer_parent_email != undefined && pgParam.buyer_parent_email != null )	{ 
                	appendHidden(parentform, 'buyer_parent_email', pgParam.buyer_parent_email);
                }
                
                //시작 위젯 아이디
                if(startPgWidgetId != null && startPgWidgetId != undefined){
                	appendHidden(parentform, 'startPgWidgetId', startPgWidgetId);                   		
                }
                //타겟 위젯 아이디
                if(targetPgWidgetId != null && targetPgWidgetId != undefined){
                	appendHidden(parentform, 'targetPgWidgetId', targetPgWidgetId);                   	
                }
                
                //iframe 타겟 지정
                $(parentform).attr("target", target_name);                
                //************************************************************************************
                
                
                //공통 항목 처리
                appendHidden(parentform, 'pgCompany', pgCompany);                      	//PG사
                appendHidden(parentform, 'resultMenu', menuId);                   				//결과 후 이동페이지
                
            	
                //1. 이니시스 (전화결제, 상품권은 항상 이니시스)
                if(pgCompany == "INICIS" || pgType == "Tel"  || pgType == "Bcsh" || pgType == "PayCo" || pgType == "SSPay" || pgType == "LPay" || pgType == "All"){
                	
                	//1-1 이니시스 일반결제 진행 (1-2 월결제) 
                	if(isMonth == null || isMonth == undefined || isMonth == '0'){
	                       
	                    var gopaymethod = "";     //플러그인 화면 출력
	                    
	                    if(pgType == "Card")			{gopaymethod = "onlycard";}			//카드
	                    else if(pgType == "Hpp")		{gopaymethod = "onlyhpp";}		//휴대폰
	                    else if(pgType == "DBank")	{gopaymethod = "onlydbank";}	//계좌이체(뱅킹가입자)
	    				else if(pgType == "Tel")		{gopaymethod = "onlyphone";}		//전화
	    				else if(pgType == "Bcsh")		{gopaymethod = "onlygift";}		//상품권 운영아이디 사용시 계약된 상품권만 나옴
	    				else if(pgType == "PayCo")	{
	                    	gopaymethod = "onlypayco";
	                    	appendHidden(parentform, 'isException', "EZ"); 					
	                    }																					// 간편결제(PayCo)
	                    //20180102 간편결제 추가 - 김성훈 대리
	    				else if(pgType == "SSPay")	{
	                    	gopaymethod = "onlyssp";
	                    	appendHidden(parentform, 'isException', "EZ"); 					
	                    }																					// 간편결제(삼성페이)
	    				else if(pgType == "LPay")	{
	                    	gopaymethod = "onlylpay";
	                    	appendHidden(parentform, 'isException', "EZ"); 					
	                    }	                    															// 간편결제(엘페이)
	    				else if(pgType == "All")		{gopaymethod = "";}				//CB매출일 경우 사용자가 결제 수단 선택
	                    
	                    appendHidden(parentform, 'acceptmethod', "SKIN(ORIGINAL):HPP(1)"); 
	                	appendHidden(parentform, 'gopaymethod', gopaymethod);        
	                	
	                    $(parentform).attr("action", "/ib20/mnu/CMNCRT00001");  //CMNCMNPAG01001VM 로 이동
	                    
	                    $(parentform)[0].submit();
	                    
                	}
                	//1-2 이니시스 월결제 (isMonth = 0:일반결제, 1:월결제)
                	else if(isMonth == '1'){
                		
                		if(pgParam.good_name == undefined 	|| pgParam.good_name == null )	{ Message.alert('상품명이 없습니다. 확인 부탁 드립니다.'); return false;}
                		if(pgParam.price == undefined 			|| pgParam.price == null )				{ Message.alert('결제금액이 없습니다. 확인 부탁 드립니다.'); return false;}
                		if(pgParam.order_no == undefined 		|| pgParam.order_no == null )		{ Message.alert('구매번호가 없습니다. 확인 부탁 드립니다.'); return false;}
                		if(pgParam.offer_period == undefined 	|| pgParam.offer_period == null )	{ Message.alert('제공기간이 없습니다. 확인 부탁 드립니다.'); return false;}
                		if(pgParam.print_msg == undefined 	|| pgParam.print_msg == null )		{ Message.alert('결제일 알림 메세지가 없습니다. 확인 부탁 드립니다.'); return false;}
                		 
                		var peroid = pgParam.offer_period;
                		peroid = peroid.replace(":", "");
                		
                         appendHidden(parentform, 'offer_period', peroid);           								//제공기간(2012082920120929)
                         appendHidden(parentform, 'request_time', JUtilDate.getTodayTimeFormat()); 	//요청시간
                         appendHidden(parentform, 'print_msg', pgParam.print_msg); 							//결제일 알림 메시지
                         appendHidden(parentform, 'pgType', pgType); 												//PGType = Card_Month, Hpp_Month
                         
	                    $(parentform).attr("action", "/ib20/mnu/CMNCRT00005");  								//CMNCMNPAG01004VM 로 이동

	                    $(parentform)[0].submit();
	                    
                	}
                    
                }
                
                //3. NICEPAY
                else if(pgCompany == "NICEPAY"){
                     
                	if(isMonth == null || isMonth == undefined || isMonth == '0'){
	                     var payMethod = '';
	                	
	                     if(pgType == "Card")			{payMethod = "CARD";}				//카드
	                     else if(pgType == "Hpp")		{payMethod = "CELLPHONE";}		//휴대폰
	                     else if(pgType == "DBank")	{payMethod = "BANK";}				//계좌이체(뱅킹가입자)
	                     else if(pgType == "VBank")	{payMethod = "VBANK";}			//가상계좌
	                     
	                     appendHidden(parentform, 'payMethod', payMethod);             	//나이스페이 결제수단 (CARD:카드, CELLPHONE:휴대폰, BANK:계좌이체)
	                     appendHidden(parentform, 'isNicePay', 'true');             				//나이스페이 일 경우 inc_resource.jsp에서 초기화 함
	                     appendHidden(parentform, 'offer_period', pgParam.offer_period);           			//제공기간(2012082920120929)
	                     $(parentform).attr("target", target_name);
	                     $(parentform).attr("action", "/ib20/mnu/CMNCRT00002");   	//CMNCMNPAG01002VM 로 이동

	                     $(parentform)[0].submit();
	                     
                	}
                	//isMonth = 0:일반결제, 1:월결제
                	else if(isMonth == '1'){
                		if(pgParam.good_name == undefined 	|| pgParam.good_name == null )	{ Message.alert('상품명이 없습니다. 확인 부탁 드립니다.'); return false;}
                		if(pgParam.price == undefined 			|| pgParam.price == null )				{ Message.alert('결제금액이 없습니다. 확인 부탁 드립니다.'); return false;}
                		if(pgParam.order_no == undefined 		|| pgParam.order_no == null )		{ Message.alert('구매번호가 없습니다. 확인 부탁 드립니다.'); return false;}
                		if(pgParam.offer_period == undefined 	|| pgParam.offer_period == null )	{ Message.alert('제공기간이 없습니다. 확인 부탁 드립니다.'); return false;}
                		if(pgParam.print_msg == undefined 	|| pgParam.print_msg == null )		{ Message.alert('결제일 알림 메세지가 없습니다. 확인 부탁 드립니다.'); return false;}
                		
                		 appendHidden(parentform, 'offer_period', pgParam.offer_period);           			//제공기간(2012082920120929)
                         appendHidden(parentform, 'request_time', JUtilDate.getTodayTimeFormat()); 	//요청시간
                         appendHidden(parentform, 'print_msg', pgParam.print_msg); 							//결제일 알림 메시지
                         appendHidden(parentform, 'pgType', pgType); 													//PGType = Card_Month, Hpp_Month
                         
	                    $(parentform).attr("action", "/ib20/mnu/CMNCRT00006");  //CMNCMNPAG01005VM 로 이동

	                    $(parentform)[0].submit();
                	}
                }
   
        	},
        	
        	
        	
			callMobilePg : function(pgForm, pgParam) {

				// 결제 태그에 선택된 항목을 확인
				var parentform        = $(pgForm);
				var pgType            = parentform.find("input[name='pgType']").val();
				var pgCompany         = parentform.find("input[name='pgCompany']").val();			// NICEPAY / INICIS
				var isMonth           = parentform.find("input[name='isMonth']").val();				// 0:일반결제, 1:월결제
				var menuId            = parentform.find("input[name='resultMenuId']").val();		// 이동될 메뉴아이디
				var startPgWidgetId   = parentform.find("input[name='startPgWidgetId']").val();		// 시작 위젯 아이디
				var targetPgWidgetId  = parentform.find("input[name='targetPgWidgetId']").val();	// 타겟 위젯 아이디
				var notiInicisMenuId  = parentform.find("input[name='notiInicisMenuId']").val();	// 계좌이체용 이니시스 노티 메뉴아이디
				var notiNicepayMenuId = parentform.find("input[name='notiNicepayMenuId']").val();	// 계좌이체용 나이스페이 노티 메뉴아이디
				var buyer_hpp         = "01012341234";		// 회원 휴대폰 번호. 개인정보 타사 전송 금지로 임의의 값을 지정함.
				var deviceType        = parentform.find("input[name='DEVICE_TYPE']").val();			// 웹/앱 구분 플래그

				//필수항목 체크 : 상품명, 결제금액, 구매번호, 할인가격, 할인요율
				if (pgParam.good_name    == undefined || pgParam.good_name    == null) {Message.alert("상품명이 없습니다. 확인 부탁 드립니다."); return false;}
				if (pgParam.price        == undefined || pgParam.price        == null) {Message.alert("결제금액이 없습니다. 확인 부탁 드립니다."); return false;}
				if (pgParam.order_no     == undefined || pgParam.order_no     == null) {Message.alert("구매번호가 없습니다. 확인 부탁 드립니다."); return false;}
				if (pgParam.buyer_name   == undefined || pgParam.buyer_name   == null) {Message.alert("구매자명이 없습니다. 확인 부탁 드립니다."); return false;}
				if (pgParam.buyer_addr   == undefined || pgParam.buyer_addr   == null) {Message.alert("구매자 주소가 없습니다. 확인 부탁 드립니다."); return false;}
				if (pgParam.offer_period == undefined || pgParam.offer_period == null) {Message.alert("제공기간이 없습니다. 확인 부탁 드립니다."); return false;}
				if (pgParam.price < 100)			{ Message.alert('100원 미만 결제는 불가합니다.'); return false;}

				// 월결제인 경우 필요한 파라미터 확인
				if (isMonth == "1") {
					if (pgParam.print_msg    == undefined || pgParam.print_msg == null)    {Message.alert("결제일 알림 메세지가 없습니다. 확인 부탁 드립니다."); return false;}
				}

				if (pgType == undefined || pgType == null || pgType == "") {
					Message.alert('결제수단을 선택해 주세요.');
					return false;
				}

				if (pgCompany == "NICEPAY") {
					/*************************
					 * NICEPAY 일 경우
					 *************************/

					var payMethod = '';

					if (pgType == "Card" || pgType == "CARD") {
						// 신용카드
						payMethod = "CARD";
						pgType = "CARD";
					} else if (pgType == "Hpp" || pgType == "HPP") {
						// 휴대폰
						payMethod = "CELLPHONE";
						pgType = "HPP";
					} else if (pgType == "DBank" || pgType == "DBANK" || pgType == "TRANS") {
						// 계좌이체(뱅킹가입자)
						payMethod = "BANK";
						pgType = "TRANS";
					} else if (pgType == "VBank" || pgType == "VBANK") {
						// 무통장 입금(가상계좌)
						payMethod = "VBANK";
					}

					if (isMonth == null || isMonth == undefined || isMonth == '0') {
						/********************************
						 * NICEPAY 일반 결제(년상품 결제)
						 ********************************/

						var selectCardCode    = "";		// 신용카드 종류 코드
						var selectQuota       = "";		// 신용카드 할부 개월수 코드
						var directRcptType    = "";		// 계좌이체 결제 현금영수증 발급 유형
						var directRcptNoType  = "";		// 계좌이체 결제 현금영수증 번호 유형
						var directRcptNo      = "";		// 계좌이체 결제 현금영수증 번호

						// 결제 수단이 무통장입금(가상계좌)이면서 회원 휴대폰번호가 존재 할 경우
						if ((pgType == "VBank" || pgType == "VBANK") && pgParam.buyer_hpp.length != 0) {
							buyer_hpp = pgParam.buyer_hpp;
						}

						// 결제 수단이 신용카드인 경우 카드종류 코드와 할부 개월수 코드 설정
						if (pgType == "CARD") {
							selectCardCode = parentform.find("#selectCardCode option:selected").val();
							selectQuota    = parentform.find("#selectQuota option:selected").val();
						}

						// 결제 수단이 계좌이체인 경우 현금영수증 정보 설정
						if (pgType == "DBANK") {
							directRcptType   = parentform.find("#rcptType option:selected").val();
							directRcptNoType = parentform.find("input[name='rcptNoType']").val();
							directRcptNo     = parentform.find("input[name='rcptNo']").val();
						}

						var url = "/ib20/mnu/CMNNCEPAG11?price_t=" + pgParam.price
								+ "&offer_period=" + pgParam.offer_period
								+ "&resultMenu=" + menuId
								+ "&notiNicepayMenuId=" + notiNicepayMenuId
								+ "&startPgWidgetId=" + startPgWidgetId
								+ "&targetPgWidgetId=" + targetPgWidgetId
								+ "&pgType=" + pgType
								+ "&order_no=" + pgParam.order_no
								+ "&good_name=" + pgParam.good_name
								+ "&pgCompany=" + pgCompany
								+ "&buyer_name=" + pgParam.buyer_name
								+ "&buyer_hpp=" + buyer_hpp
								+ "&buyer_addr=" + pgParam.buyer_addr
								+ "&payMethod=" + payMethod
								+ "&isNicePay=true"
								+ "&RESULT_MENU=/ib20/mnu/" + menuId
								+ "&ISMOBILE=Y"
								+ "&isNicePay=true"
								+ "&PAY_TYPE=" + pgType
								+ "&pgType=" + pgType
								+ "&selectCardCode=" + selectCardCode
								+ "&selectQuota=" + selectQuota
								+ "&directRcptType=" + directRcptType
								+ "&directRcptNoType=" + directRcptNoType
								+ "&directRcptNo=" + directRcptNo
								+ "&hash=" + pgParam.hash
								+ "&deviceType=" + deviceType;

						window.open(url, "_self");

					} else if (isMonth == '1') {
						/********************************
						 * NICEPAY 월결제
						 ********************************/
						var url = "/ib20/mnu/CMNNCEPAG21?price_t=" + pgParam.price
								+ "&resultMenu=" + menuId
								+ "&notiNicepayMenuId=" + notiNicepayMenuId
								+ "&startPgWidgetId=" + startPgWidgetId
								+ "&targetPgWidgetId=" + targetPgWidgetId
								+ "&pgType=" + pgType
								+ "&order_no=" + pgParam.order_no
								+ "&good_name=" + pgParam.good_name
								+ "&pgCompany=" + pgCompany
								+ "&buyer_name=" + pgParam.buyer_name
								+ "&buyer_hpp=01012341234"
								+ "&buyer_addr=" + pgParam.buyer_addr
								+ "&payMethod=" + payMethod
								+ "&isNicePay=true"
								+ "&RESULT_MENU=/ib20/mnu/" + menuId
								+ "&ISMOBILE=Y"
								+ "&hash=" + pgParam.hash
								+ "&deviceType=" + deviceType;

						window.open(url, "_self");
					}

				} else if (pgCompany == "INICIS" || pgType == "DGCL" || pgType == "Bcsh") {
					/*************************
					 * INICIS 일 경우
					 *************************/

					if (isMonth == null || isMonth == undefined || isMonth == '0') {
						/********************************
						 * INICIS 일반 결제(년상품 결제)
						 ********************************/

						var gopaymethod = "";

						if (pgType == "Card" || pgType == "PAYCO" || pgType == "SSPAY" || pgType == "KAKAOPAY" || pgType == "LPAY") {gopaymethod = "wcard";}		// 신용카드, 페이코, 삼성페이
						else if(pgType == "Hpp")   {gopaymethod = "mobile";}	// 휴대폰
						else if(pgType == "DBank") {gopaymethod = "bank";}		// 계좌이체(뱅킹가입자)
						else if(pgType == "Bcsh")  {gopaymethod = "culture";}	// 문화상품권
						else if(pgType == "DGCL")  {gopaymethod = "dgcl";}		// 스마트문상

						var url = "/ib20/mnu/CMNINSPAG11?price_t=" + pgParam.price
								+ "&good_name=" + pgParam.good_name
								+ "&pgCompany=" + pgCompany
								+ "&gopaymethod=" + gopaymethod
								+ "&order_no=" + pgParam.order_no
								+ "&resultMenu=" + menuId
								+ "&notiInicisMenuId=" + notiInicisMenuId
								+ "&startPgWidgetId=" + startPgWidgetId
								+ "&targetPgWidgetId=" + targetPgWidgetId
								+ "&buyer_name=" + pgParam.buyer_name
								+ "&buyer_email=" + ""
								+ "&buyer_hpp="
								+ "&buyer_addr=" + pgParam.buyer_addr
								+ "&buyer_parent_email="
								+ "&pgType=" + pgType
								+ "&deviceType=" + deviceType;

						window.open(url, "_self");

					} else if (isMonth == '1') {
						/********************************
						 * INICIS 월결제
						 ********************************/
						/*
						appendHidden(parentform, 'good_name', pgParam.good_name);					// 상품명
						appendHidden(parentform, 'price_t', pgParam.price);							// 결제금액
						appendHidden(parentform, 'order_no', pgParam.order_no);						// 구매번호
						appendHidden(parentform, 'offer_period', pgParam.offer_period);				// 제공기간(2012082920120929)
						appendHidden(parentform, 'request_time', JUtilDate.getTodayTimeFormat());	// 요청시간
						appendHidden(parentform, 'print_msg', pgParam.print_msg);					// 결제일 알림 메시지
						appendHidden(parentform, 'pgType', pgType); 								// PGType = Card_Month, Hpp_Month
						appendHidden(parentform, 'RESULT_MENU', '/ib20/mnu/' + menuId); 
						appendHidden(parentform, 'PAY_TYPE', pgType);
						appendHidden(parentform, 'ISMOBILE', "Y");

						if (parentform.find("input[name='isAppSuc']").val() == "Y") { //앱에서 넘어오는 경우는 새창 X

							var url = "/ib20/mnu/CMNCRT00011?price_t=" + pgParam.price
									+ "&resultMenu=" + menuId
									+ "&notiNicepayMenuId=" + notiNicepayMenuId
									+ "&startPgWidgetId=" + startPgWidgetId
									+ "&targetPgWidgetId=" + targetPgWidgetId
									+ "&pgType=" + pgType
									+ "&order_no=" + pgParam.order_no
									+ "&good_name=" + pgParam.good_name
									+ "&pgCompany=" + pgCompany
									+ "&buyer_name=" + pgParam.buyer_name
									+ "&buyer_hpp=01012341234"
									+ "&buyer_addr=" + pgParam.buyer_addr
									+ "&payMethod=" + payMethod
									+ "&isNicePay=true"
									+ "&RESULT_MENU=/ib20/mnu/" + menuId
									+ "&ISMOBILE=Y"
									+ "&hash=" + pgParam.hash;

							window.open(url, "_self");

						} else {
							$(parentform).attr("action", "/ib20/mnu/CMNCRT00011");		//CMNCMNPAG02004VM.jsp 로 이동
							$(parentform).attr("target", "_blank");
							$(parentform)[0].submit();
						//}
						*/
					}
				} else if (pgCompany == "NAVER") {
					
					var url = "/ib20/mnu/CMNCRT00020?price_t=" + pgParam.price
					+ "&good_name=" + pgParam.good_name
					+ "&pgCompany=" + pgCompany					
					+ "&order_no=" + pgParam.order_no
					+ "&resultMenu=" + menuId					
					+ "&startPgWidgetId=" + startPgWidgetId
					+ "&targetPgWidgetId=" + targetPgWidgetId
					+ "&buyer_name=" + pgParam.buyer_name
					+ "&buyer_email="
					+ "&buyer_hpp="
					+ "&buyer_addr=" + pgParam.buyer_addr
					+ "&buyer_parent_email="
					+ "&pgType=" + pgType
					+ "&deviceType=" + deviceType
					+ "&goods_cd=" + pgParam.goods_cd;

					window.open(url, "_self");
					
				} else {
					Message.alert("결제사 확인이 필요합니다.");
				}
			},
        	
        	test : function(){
        		alert('테스트 함수');
        	}
        },
        MLReport:{
        	//라이센스
        	license : window.location.protocol + '//' + window.location.host + "/resource/product/mlreport/DW4PCT9W6TR5QQ2.txt",
        	//체크버전
        	version : '2.17.927.5245',
        	/**
        	 * MLReport 버전 체크
        	 * @param version
        	 * @returns
        	 */
        	checkVersion : function(version){
        		if(version != this.version){
        			alert("MLReport. 다운로드 페이지로 이동합니다.");
        			goMenu('BZWCSCZSG23');
        		}
        	},
        	
        	/**
        	 * MLReport 설치여부 확인 
        	 * @returns
        	 */
        	install : function(){
        		var install = MLReportJS.Installed();
        		if(!install){
        			alert("MLReport가 설치되지 않았습니다. 다운로드 페이지로 이동합니다.");
        			goMenu('BZWCSCZSG23');
        		}
        	},
        	/**
        	 * MLReport 미리보기 호출
        	 * @returns
        	 */
        	preview : function() {
        		fn_previewProc();
            },
            report : function(callback){
            	callback();
            }
        },
        slProc : {
        	login : function(slForm, slParam, resultMenuPath, sucFnc, errFnc ) {
        		if(slParam.socLoginType != "APPLE") {
        			var article = '팝업설정이 차단되었습니다.\n팝업차단 해제 후 이용하시기 바랍니다.';
        			var login_form = JUtilForm.createForm("BZWLOGLOG10Form");
        			var mediaType = slParam.mediaType || "A";
        			var snsId = slParam.snsId || "";
        			var mobType = slParam.mobType || "";
        			appendHidden(login_form, "socLoginType", slParam.socLoginType);
        			appendHidden(login_form, 'param_r1', resultMenuPath);
        			appendHidden(login_form, 'param_r2', sucFnc);  
        			appendHidden(login_form, 'param_r3', errFnc);
             		appendHidden(login_form, 'param_r4', mediaType);
             		appendHidden(login_form, 'param_r5', snsId);
             		appendHidden(login_form, 'param_r6', mobType);
             	
             		if(slParam.linkMenu) {
             			appendHidden(login_form, 'linkMenu', slParam.linkMenu);  
             			appendHidden(login_form, 'linkParams', slParam.linkParams);
             		}
             	
             		var res = window.open('', 'popupSocLogin', 'width=450, height=550, top=100, left=100, fullscreen=no, menubar=no, status=no, toolbar=no, titlebar=yes, location=no, scrollbar=no');
             		if(res == null){
             			Message.alert(article); 
             			return;
             		}
        		
             		login_form.target = "popupSocLogin";
             		login_form.action = "/ib20/mnu/CMNSOCLOG01";
				
             		login_form.submit();
        		}
        		else {
        			var login_form = JUtilForm.createForm("BZWLOGLOG10Form");
        			//if(sucFnc == "sucFunc") {
        				var mediaType = slParam.mediaType || "A";
        				var snsId = slParam.snsId || "";
        				var mobType = slParam.mobType || "";
        				var nonce = slParam.nonce || "";
        			
        				var url = "/ib20/mnu/CMNSOCLOG02?socLoginType=" + slParam.socLoginType
        				+ "&param_r1=" + resultMenuPath
        				+ "&param_r2=" + sucFnc					
        				+ "&param_r3=" + errFnc
        				+ "&param_r4=" + mediaType					
        				+ "&param_r5=" + snsId
        				+ "&param_r6=" +mobType
        				+ "&param_r7=" +nonce;
        				
        				if(slParam.linkMenu) {
        					url = url+"&linkMenu="+slParam.linkMenu
        					+"&linkParams="+slParam.linkParams;
                     	}

        				window.open(url, "_self");
        			
        		}
        	},
        	moblogin : function(slForm, slParam, resultMenuPath,sucFnc,errFnc ) {
        		var mediaType = slParam.mediaType || "A";
        		var snsId = slParam.snsId || "";
        		var mobType = slParam.mobType || "";
				var url = "/ib20/mnu/CMNSOCLOG01?socLoginType=" + slParam.socLoginType
				+ "&param_r1=" + resultMenuPath					
				+ "&param_r2=" + sucFnc
				+ "&param_r3=" + errFnc
				+ "&param_r4=" + mediaType
				+ "&param_r5=" + snsId
				+ "&param_r6=" + mobType
				;
				
				if(slParam.linkMenu) {
					url = url+"&linkMenu="+slParam.linkMenu
					+"&linkParams="+slParam.linkParams;
             	}

				window.open(url, "_self");
        	},
        	logout : function(){
        		
        	}
        }
    };
}(jQuery);

/*********** 리뉴얼 모바일 지키미 스크립트 수정 / 추가 *************/

/*
 * 3분 카운트 함수
 */
var setTime = 180;
var timerId;
function msg_time(){
	var m = ((Math.floor(setTime / 60) < 10) ? "0" : "") + Math.floor(setTime / 60) + ":" + (((setTime % 60) < 10) ? "0" : "") + (setTime % 60);
	document.all.confNumTime.innerHTML = m;
	setTime--;
	if(setTime < 0){
		alert("입력시간이 초과되었습니다.");
		clearInterval(timerId);
		$("#mobileCnfrm").attr("disbled", true);
	}
}

// 타이머 멈추기
function msg_stop_time(){
	clearInterval(timerId);
}

/*
 * 리뉴얼 지키미 모바일 웹 변경사항 
 * 1.휴대폰 번호 입력 방식 변경
 * 2.인증 유효시간 3분 
 */
var MobileNo_rzm = function (data){
	/*
	data = {
		mobileNo: "" // 모바일
		,cnfrmSendBtn : ""// 확인번호 발송 버튼
		,cnfrmDesc : "" //
		,cnfrmLi : "" // 컴펌 확인영역
		,mobileCnfrm : "" // 확인번호
		,cnfrmBtn : "" //확인
		,cnfrmYn : false //컴펌 여부
		,succFun : function(){}
		,closeFun : function(){}
		,sendYn : false //전송 여부
		,cnfrmYn : false //컴펌 여부
		,joinsiteId : 'JOIN100001' //컴펌 여부
	}
	*/
	this.data =  data;	
	data.sendYn = false;
	data.cnfrmYn = false;
	
	this.isEmpty = function(){
		var mobileNo =  $(data.mobileNo).val().replace(/[^\d]/g,"");
		
		if(mobileNo != ""){
			return false;
		}
		
		return true;
	};
	
	this.isCnfrm = function(){
		return this.data.cnfrmYn;
	};
	
	this.preCnfrm = function(){
		$(data.cnfrmSendBtn).hide();
		$(data.cnfrmLi).hide();
		$(data.cnfrmDesc).show();
		data.sendYn = true;
		data.cnfrmYn = true;
	};
	
	var chg = function(event) {		
		$(data.cnfrmSendBtn).show();
		$(data.cnfrmLi).hide();
		$(data.cnfrmDesc).hide();
		$(data.mobileCnfrm).val("");
		data.cnfrmYn = false;
	};
	chg();
	this.init = chg;
	
	$(data.mobileNo).bind('change',chg);
	
	$(data.cnfrmSendBtn).bind('click', function(event) {
		var mobileNo =  $(data.mobileNo).val().replace(/[^\d]/g,"");
		var joinsiteId =  $(data.joinsiteId).val();
		clearInterval(timerId);

		var isChk = function(mn){
			return /^01([016789]?)[\d]{7,8}$/.test(mn);
		};
		var getTitle = function(sel){
			 var  $sel = $(sel);
			var titile = $sel.attr("title");
			if(!titile){
				var id = $sel.attr("id");
				titile = $("[for='"+id+"']").text();
			}
			if(!titile){
				titile = $sel.attr("name");
			}
			return titile;
		};
		
		if(!isChk(mobileNo)){
			//Message.alert(getTitle(data.mobileNo) + "을  입력해 주시기 바랍니다.");
			Message.alert("유효하지 않은 휴대폰 번호입니다.");
			$(data.mobileNo).focus();
			return;
		}		
		
		var tmpForm = JUtilForm.createForm("chkMobileFrom");
    	appendHidden(tmpForm, 'mobileNo', mobileNo);

		if(joinsiteId == 'JOIN200031'){
	    	appendHidden(tmpForm, 'joinsiteId',  joinsiteId);
    	}else{
        	appendHidden(tmpForm, 'joinsiteId',  'JOIN100001');
		}

		callAjax(tmpForm,"BZWCMNMBR01001AM", function(d){
			if( d.RESULT == "Y"){
				// 사용가능
				$(data.cnfrmLi).show();
				//2020.10.06 사파리 input 중복선택 오류 방지
				//$(data.mobileCnfrm).focus();
				data.sendYn = true;
				Message.alert("인증번호가 발송되었습니다.");
				$(data.cnfrmSendBtn).text("인증번호 재전송");
				setTime = 180;
				$(data.mobileCnfrm).attr("disbled", false);
				timerId = setInterval("msg_time()", 1000);
			}else if( d.RESULT_CD == "01"){
				// 전송 실패
				Message.alert("입력하신 휴대폰 번호는 사용하실 수 없는 번호입니다.\r\n다른 휴대폰 번호를 입력해 주시기 바랍니다.\r\n추가 문의사항은 고객센터로 연락 부탁드립니다.");
			}else if( d.RESULT_CD == "02"){
				Message.alert("휴대폰 인증번호 발송은 일일 3회까지로 제한됩니다.");
			}else{
				Message.alert("입력하신 휴대폰 번호는 사용하실 수 없는 번호입니다.\r\n다른 휴대폰 번호를 입력해 주시기 바랍니다.\r\n추가 문의사항은 고객센터로 연락 부탁드립니다.");				
			}
		},null,null,null,null,true);
	});
	
	$( data.cnfrmBtn ).bind('click', function(event) {
        if(!data.sendYn){
        	Message.alert("인증번호를 발송하셔야 합니다.");
        	return;
        }
		
		var possCnfrmVal =  $(data.mobileCnfrm).val();
		var mobileNo =  $(data.mobileNo).val();
		
		var tmpForm = JUtilForm.createForm("chkMobileFrom");
		appendHidden(tmpForm, 'mobileNo', mobileNo);
		appendHidden(tmpForm, 'possCnfrmVal', possCnfrmVal);
		
		callAjax(tmpForm,"BZWCMNMBR01002AM", function(d){
			
			if( d.resultCode == "00"){
				$(data.cnfrmSendBtn).hide();
				$(data.cnfrmLi).hide();
				$(data.cnfrmDesc).show();
				data.cnfrmYn = true;				
				
				clearInterval(timerId);
				(data.succFun || function(){})();				
			}else if( d.resultCode == "01"){
				Message.alert("인증번호 발송시 연락처 정보와 불일치합니다.");
			}else if( d.resultCode == "02"){
				Message.alert("인증번호를 재확인 후 입력해 주시기 바랍니다.");
			}else if( d.resultCode == "03"){
				Message.alert("처리중 오류가 발생 하였습니다.\r\n 인증번호 발송을 다시 진행해 주십시오.");
			}else if( d.resultCode == "04"){
				Message.alert("인증번호 확인은 3회 가능합니다. 인증번호 발송을 다시 해주시기 바랍니다.");
			}else{
				Message.alert("그외 에러");
			}
		},null,null,null,null,true);
	});
};

var Email_rzm = function(data){
	/*
	data = {
		email1 : "" //메일1
		,email2 : "" //메일2
		,email3 : "" //메일3
		,msg1 : "" //
		[,require : false]
	}
	*/
	
	var require = data.require || false;
	
	$(data.email2).bind('change', function(event) {
		if(this.value == "ETC"){
			$(data.email3).show();
			if($(data.email3).parent().prop("tagName").toLowerCase() == "span") $(data.email3).parent().show();
		}else{
			$(data.email3).hide();
			if($(data.email3).parent().prop("tagName").toLowerCase() == "span") $(data.email3).parent().hide();
		}
	});
	$(data.email2).change();
	
	if(require){
		var id = $(data.email1).attr("id") || $(data.email2).attr("id") || $(data.email3).attr("id");
		var msgId = $(data.msg1).attr("id");
		var exptext = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

		if(id){
			 $(data.email1).parents("form:eq(0)").each(function(){
				 
				 JSValidator.afterValidate(this, id, function(obj) {
					 
					 var e1 = $(data.email1).val().replace(/\s+/gm,"");
					 var e2 = $(data.email2).val();
					 var e3 = $(data.email3).val().replace(/\s+/gm,"");
					 var chkEm = "";
					 if(e1  == ""){
						 $(data.msg1).text("이메일은 필수 입력 항목 입니다.");
						 $(data.msg1).show();
						 $(data.email1).focus();
						 return false;
					 }else if( e2 == "이메일구분"){
						 $(data.msg1).text("이메일은 필수 입력 항목 입니다.");
						 $(data.msg1).show();
						 $(data.email2).focus();
						 return false;
					 }else if(e2 == "ETC"){
						 chkEm = $(data.email1).val() +"@" + $(data.email3).val();
						 if(e3 == ""){
							 $(data.msg1).text("이메일은 필수 입력 항목 입니다.");
							 $(data.msg1).show();
							 $(data.email3).focus();
							 return false;
						 }else if(exptext.test(chkEm)==false){
							 $(data.msg1).text("이메일형식이 바르지 않습니다.");
							 $(data.msg1).show();
							 $(data.email3).focus();
							 return false;
						 }
					 }else if(e2 != "ETC"){
						 //chkEm = $(data.email1).val() + "@" + $(data.email2).val();
						 chkEm = $(data.email1).val() + "@" + $(data.email2).find("option:selected").text();
						 if(exptext.test(chkEm)==false){
							 $(data.msg1).text("이메일형식이 바르지 않습니다.");
							 $(data.msg1).show();
							 $(data.email1).focus();
							 return false;
						 }
					 }
					 
					// 글자수 체크
					var chkEmLen = chkEm.length; // 전체길이
					var em_max = 50; // 제한글자 수
						
					// 한글은 위에서 입력을 막고 있기 때문에 1byte씩으로만 확인
					if(chkEmLen > em_max){
						alert(em_max + "글자를 초과 입력할 수 없습니다.");
						$(data.email1).val('');
						$(data.email1).focus();
						if(e2 == "ETC"){
							$(data.email3).val('');
							$(data.email3).focus();
						}
						return false;
					}
					 
					 return true;
				 });
			});
		}
	}
};

/*
 * 체크박스 전체 선택 및 그 하위 체크박스
 * */
var setCheckAll = function($checkAll, $checks){
	//전체 선택 클릭시 그 하위 체크박스는 전체 선택을 따라감
	$checkAll.bind("change", function(){
		$checks.prop("checked", $(this).prop("checked"));
	});
	
	// 하위 체크박스가 모두 선택시에 전체선택 체크 , 그 외 체크 해제
	$checks.bind("change", function(){
		$checkAll.prop("checked", ( $checks.filter(":visible").length <= $checks.filter(":visible").filter(":checked").length) );
	});
}

var JBizUtilTable 	= bizUtils.table;
var JBizUtilInfo  = bizUtils.info;
var JBizUtilWindow = bizUtils.window;
var JBizUtilCalendar = bizUtils.calendar;
var JBizUtilCrtCheck = bizUtils.crtCheck;
var JBizUtilMakeAddr = bizUtils.makeAddr;
var JBizUtilPgProc = bizUtils.pgProc;
var JBizUtilNiceui = bizUtils.niceUiUtil;
var JBizUtilReport = bizUtils.MLReport;

var JBizUtilSlProc = bizUtils.slProc;