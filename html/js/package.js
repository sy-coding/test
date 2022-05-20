/*
 * @설 명 : 공통 패키지.
 * @dependency : jQuery-1.8 이상 버전.
 * @===========================================================================
 * @변경이력:
 * @DATE AUTHOR DESCRIPTION
 * @---------------------------------------------------------------------------
 */

/** YES */
var YES = 'Y';
/** NO */
var NO = 'N';
/** 로케일 정보. */
var LOCALE = 'ko';
/** 서비스 모드(LOCAL, DEVELOPE, TEST, STAGING, PRODUCT, UNKNOWN) */
var SERVICE_MODE = 'PRODUCT';

/** 유효성 검사 여부(false : 항목의 validation 검증을 생략한다.) */
var IS_VALID = true;
/** 마우스 기능 제한(false : 오른쪽 버튼 무시) */
var IS_INT_MOUSE = false;
/** 특수키 기능 제한(false : Ctrl + R, Ctrl + N, F5, Ctrl + V) */
var IS_INT_KEY = false;


var WAI_TEST = false;
/** 보안모듈 설치 화면인지 여부. */
var IS_SECURE_ON = false;
/** 요청 브라우저 아이디 */
var BROWSER_REQ_ID = '';

/** 자동 로그아웃시간 설정(서버 설정값을 따른다)(분) */
var LOGOUT_SESSION_TIME = 1;
var LOGOUT_USER_TIME = 1;

/** Window OS 여부 */
var IS_WIN = (navigator.userAgent.indexOf("Win") != -1);
/** Mac OS 여부 */
var IS_MAC = (navigator.userAgent.indexOf("Mac") != -1);
/** UNIX OS 여부 */
var IS_UNIX = (navigator.userAgent.indexOf("X11") != -1);

/** MSIE 여부 */
var IS_IE = (navigator.userAgent.indexOf('MSIE') != -1);
var IS_IE11 = (navigator.userAgent.indexOf('Trident') != -1);
/** Netscape 여부 */
var IS_NAV = (navigator.userAgent.indexOf('Netscape') != -1);
/** Chrome 여부 */
var IS_CROME = (navigator.userAgent.indexOf('Chrome') != -1);
/** Safari 여부 */
var IS_SAFARI = (navigator.userAgent.indexOf('Safari') != -1);
/** Opera 여부 */
var IS_OPERA = (navigator.userAgent.indexOf('Opera') != -1);
/** Firefox 여부 */
var IS_FIREFOX = (navigator.userAgent.indexOf('Firefox') != -1);

/** 현재 브라우저 버전 */
var BROWSER_VER = function (ua, brow) {
	var rv = -1;
	var re = null;
	if (brow == 'MSIE')
		re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
	else
		re = new RegExp(brow + "/([0-9]{1,}[\.0-9]{0,})");

	if (re.exec(ua) != null)
		rv = parseFloat(RegExp.$1);

	return rv;
}(navigator.userAgent, IS_IE ? 'MSIE' : IS_NAV ? 'Netscape' : IS_CROME ? 'Chrome' : IS_SAFARI ? 'Safari' : IS_OPERA ? 'Opera' : IS_FIREFOX ? 'Firefox' : 'UnKnown');

/** 로그아웃까지 남은시간 레이어 */
var LAYER_REMAIN_TIME = '.layerRemainTime';
/** 로그아웃까지 남은시간이 1분이 됐을 경우 보여줄 시간 ID */
var LAYER_ALERT_CLOCK = '.layerAlertClock';
/** 로그아웃까지 남은시간 진행바 ID */
var LAYER_PROCE_CLOCK = '.layerProceClock';
/** 로그아웃까지 남은시간 보여줄 시간 ID */
var REMAIN_TIME_CLOCK = '.remainTimeClock';

/** Page wrap DIV */
var PAGE_WRAP = '#wrap';
/** Header wrap DIV */
var TOP_WRAP = '#header';
/** Lnb wrap DIV */
var LEFT_WRAP = '#lnb';
/** Right wrap DIV */
var RIGHT_WRAP = '';
/** Footer wrap DIV */
var BOTTOM_WRAP = '#footer';
/** Content wrap DIV */
var CONTENT_WRAP = '#content';
/** Layer wrap DIV */
var LAYER_WRAP = '#layerWrap';

/** Top Form ID */
var TOP_FORM = 'topForm';
/** Left Form ID */
var LEFT_FORM = 'leftForm';
/** Right Form ID */
var RIGTH_FORM = 'rightForm';
/** Bottom Form ID */
var BOTTOM_FORM = 'bottomForm';
/** Content Form ID */
var CONTENT_FORM = 'contentForm';
/** Content2 Form ID */
var CONTENT_FORM2 = 'contentForm2';
/** Content3 Form ID */
var CONTENT_FORM3 = 'contentForm3';
/** Content4 Form ID */
var CONTENT_FORM4 = 'contentForm4';
/** Content5 Form ID */
var CONTENT_FORM5 = 'contentForm5';
/** Content6 Form ID */
var CONTENT_FORM6 = 'contentForm6';
/** Content7 Form ID */
var CONTENT_FORM7 = 'contentForm7';
/** Content8 Form ID */
var CONTENT_FORM8 = 'contentForm8';
/** Speed Main Form ID */
var SPEED_MAIN_FORM = 'speedMainForm';
/** Speed Form ID */
var SPEED_FORM = 'speedForm';
/** Speed2 Form ID */
var SPEED_FORM2 = 'speedForm2';
/** Speed3 Form ID */
var SPEED_FORM3 = 'speedForm3';
/** Speed4 Form ID */
var SPEED_FORM4 = 'speedForm4';
/** Speed5 Form ID */
var SPEED_FORM5 = 'speedForm5';
/** Layer Form ID */
var LAYER_FORM = 'layerForm';
/** Layer2 Form ID */
var LAYER_FORM2 = 'layerForm2';
/** Layer3 Form ID */
var LAYER_FORM3 = 'layerForm3';
/** Layer4 Form ID */
var LAYER_FORM4 = 'layerForm4';
/** Layer5 Form ID */
var LAYER_FORM5 = 'layerForm5';

/** 로그인한 사용자 아이디(또는 비회원은 성명) */
var USER_ID = '';
/** 시티 행원 여부 */
var IS_CITI_EMP = 'N';
/** 현재 사용자 보안브라우저 사용여부 여부 */
var USE_SECU_BROWSER = 'N';
/** 현재 메뉴 ID */
var BASE_MENU_ID = '';
/** 현재 위젯 ID */
var BASE_WIDGET_ID = '';
/** 매체 구분 - P : PC , M : Mobile , T : Tablet. */
var MEDIA_TYPE = '';
/** 현재 위젯 명 **/
var CURRENT_WIDGET_NAME = '';

var START_WIDGET_ID = '';

/** 로딩바 DIV */
var LODING_DIV = 'lodingImgWrap';
/** 로딩바 이미지 */
var LODING_IMG = 'loading_bar.gif';

var CHANGE_WIDGET_ELEMENT_ID = "ib20_change_wgt";

var CURRENT_WIDGET_ELEMENT_ID = "ib20_cur_wgt";

var ACTION_ELEMENT_ID = "ib20_action";

var ACTION_TYPE_ELEMENT_ID = "action_type";

var START_WIDGET_ID = '';

var SECURE_TYPE = '';

var CMN_LOGIN_YN = '';

var D_NAME = '';

var ENCODE = "euc-kr";
/** 제품 설치 대상 여부 */
var IS_PROCESS_INSTALL = false;


var DEF_ERR_PGE = '';	// 현재 사이트 디폴트 에러페이지

var CURRENT_SITE_ID = ''; // 현재 사이트 ID
var LOGOUT_MENU_ID = ''; // 각 사이트별 로그아웃 메뉴 아이디
var MAIN_MENU_ID = '';	 // 각 사이트별 로그아웃 후 이동할 메인 메뉴 아이디
var LOGIN_YN = '';	 // 로그인 여부

var IS_AUTO_TIMER = true;

var PREFIX_URL = 'www';
var isFrame = ''; // 프레임 여부

var keyCallback = null;
var checkId = null;


var ORG_MENU_ID = null;
/**
 * 확장 모듈 name space
 *
 * @class
 */
ext = {};
