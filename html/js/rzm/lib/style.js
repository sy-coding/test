/********************************************************************************************
** $(document).ready
********************************************************************************************/
$(document).ready(function() {
	if($('#header .btnQuickH').length) {//페이지 타이틀에 붙어있는 GNB
		quickGnb();
	}


	/* 하단 버튼 여백 추가  20200609*/
	function setBotBtn(){
		var btH = $('.myDataWrap .btnwrap12.pa').innerHeight();
	 $('.contents').css('padding-bottom', btH);
	}

	setBotBtn();

	/* MY데이터 플로팅 메뉴 */
	$('body').on('click', '#mdFloatingBtn', function(e) {e.stopPropagation();
		var menu = $(this).closest('#mdFloating').find('.menu');
		var parent = $(this).closest('#mdFloating');

		parent.toggleClass('active');
		if (parent.hasClass('active')) {
			menu.show();
			//
		} else {
			menu.hide();
			return;
		}
		$(document).one('click',function() {
		menu.hide();
		parent.removeClass('active');

		});

	});



	/* 팝업 유동 height */
	Lheight = $(document).height() - 150;
	$('.layerPopWrap .popCont').css('max-height', Lheight);
	$('.app_down .popCont, .layerPopWrap.full .popCont').css('max-height', '100%');

	/* 상품상세 구매시청 하기 영역 */
	if($('.prdBuyWrap').length) {
		$('.btnGoTop').css('bottom', '60px');
		$('#wrap, #wrap02').css('padding', '50px 0 265px');
		$('#footer').css('height', '225px');
	}

/*  201022 마데카솔 페이지 영역 */
	if($('.crdBuyWrap').length) {
		$('.btnGoTop').css('bottom', '60px');
		$('#wrap, #wrap02').css('padding', '50px 0 265px');
		$('#footer').css('height', '225px');
	}

	/* 탑으로가기*/
	if($('.btnGoTop').length) {
		$(window).scroll(function() {
			var $scrollT = $(window).scrollTop();
			if($scrollT > 200) {
				$('.btnGoTop').fadeIn();
			}else{
				$('.btnGoTop').hide();
			}
		});
		$('.btnGoTop').click(function() {
			$('html, body').animate({
				scrollTop : 0
			}, 100);
		});
	}

	if($('label.dgSelectBx').length) {//디자인셀렉트박스
		$('label.dgSelectBx').click(function(){
			$('> select', this).focus();
		});
	}

	if($('label.srchSelect02').length) {//상세 검색 셀렉트 박스
		$('label.srchSelect02').click(function(){
			$('select', this).focus();
		});
	}

	/* 디자인 셀렉트 박스 */
	if($('[class^="designSelect"]').length) {
		$('[class^="designSelect"]').each(function() {
			var $this = $(this);
			var $select = $('select', $this);
			var $valTxt = $select.prev();
			var $chVal = $('option:selected', $select).text();
			$valTxt.text($chVal);
		});

		$('[class^="designSelect"] select').change(function() {
			$this = $(this);
			$valTxt = $this.prev();
			$chVal = $('option:selected', $this).text();
			$valTxt.text($chVal);
		});
	}

	/* 상세검석영역 셀렉트박스 */
	if($('.listSrchDetail [class^="srchOptBx"]').length) {
		$('.listSrchDetail [class^="srchOptBx"]').each(function() {
			var $this = $(this);
			var $select = $('select', $this);
			var $valTxt = $select.prev();
			var $chVal = $('option:selected', $select).text();
			$valTxt.text($chVal);
		});

		$('.listSrchDetail [class^="srchOptBx"] select').change(function() {
			$this = $(this);
			$valTxt = $this.prev();
			$chVal = $('option:selected', $this).text();
			$valTxt.text($chVal);
		});
	}

	if($('#gnb').length) {//전체메뉴
		gnbFn();
	}

	if($('.myCreditList').length) {//조회하기 서브메인
		myCreditList();
	}
	if($('.dgSelect').length) {//조회하기 서브메인
		dgSelect();
	}
	if($('.searchTab').length) {//검색탭
		searchTab();
	}

	if($('[class^="tabWrap"]').length) {//탭
		tabWrapFn($('[class^="tabWrap"]'));
	}

	//탭메뉴 가변으로 변경(180409 추가)
	var tabLength = $('[class^="tabWrap_t"] li').length;
	$('[class^="tabWrap_t0"]').each(function(){
		$(this).removeClass();
		$(this).addClass("tabWrap_t0"+(tabLength-1));
	});

	//탭메뉴 가변으로 변경(180416 추가)
	var tabBoxLength = $('.tabFixBox .tabWrapVrScroll li').length;
	if(tabBoxLength <= 3){
		$('.tabFixBox [class^="tabWrapVr"]').css('margin','0 auto');
	}else{
		$('.tabFixBox [class^="tabWrapVr"]').css('margin','0');
	}

	//숫자만 입력
	$("input[id=coupon]").keyup(function(){$(this).val( $(this).val().replace(/[^0-9]/g,"") );} );

	//activeC('.certificateList button');
	$('#wrap, #wrap02').on('click', '.certificateList button', function() {
		$('.certificateList button').parent().removeClass('_active');
		$(this).parent().addClass('_active');
	});

	/* tooltip */
	$('#wrap, #wrap02').on('click', '.btnTtip, .btnTtipHide', function(e) {
		e.stopPropagation();
		e.preventDefault();
		$boolean = true;
		$this = $(this);
		$thisWrap = $this.parent();
		$tipWrap = $thisWrap.next();

		if($this.hasClass('btnTtipHide')) {
			$this.parents('.tooltipWrap').hide();
			return;
		}

		if($tipWrap.is(':hidden')) {
			$('.tooltipWrap').hide();
			$tipWrap.show();
			// s: 20190104 추가
			if($('#wrap').length && $tipWrap.length && $tipWrap.find('.innerTip').length){
				var wrapSize = $('#wrap').outerHeight()
				  , tipTop = $tipWrap.offset().top
				  , tipSize = $tipWrap.find('.innerTip').outerHeight();

				if(wrapSize < tipTop + tipSize){
					$tipWrap.find('.innerTip').css({'overflow-x':'scroll','height':tipSize - (tipTop + tipSize - wrapSize) - 20});
					$tipWrap.find('.btnTtipHide').css({'float':'right','position':'relative','bottom':'auto','right':'auto','margin-right':'20px'});
				}
			}
			// e: 20190104 추가
		}else{
			$tipWrap.hide();
		}
		$(document).one('click', function(e) {

			if($boolean == true){
				e.preventDefault();
			}
			$('.tooltipWrap').hide();

		});
	});

	/* Qna! */
	$('#wrap, #wrap02').on('click', '.QnAList a, .QnAList button', function() {
		$this = $(this);
		$parent = $this.parent();
		$next = $parent.next();

		if(!$parent.hasClass('on')) {
			$('.QnAList dt').removeClass('on');
			$('.QnAList dd').hide();
			$parent.addClass('on');
			$next.show().attr('tabindex', 0).focus(); // 180614 수정
		}else{
			$parent.removeClass('on');
			$next.hide();
		}
	});
	/* 꼭알아두세요! */
	$('#wrap, #wrap02, #popupWrap').on('click', '[class^="tipWrap"] button, .hideBx button', function() {
		$this = $(this);
		$next = $this.next();
		// 180419 수정
		if($next.is(':hidden')) {
			if($this.parent().hasClass('tipWrap04')||$this.parent().hasClass('tipWrap03')) {
				$('.tipWrap04 button').removeClass('on').next().hide();
				$('.tipWrap03 button').removeClass('on').next().hide();
			}
			$this.addClass('on');
			$next.show();
		}else{
			$this.removeClass('on');
			$next.hide();
		}
	});

	/* folding list */
	$('#wrap, #wrap02').on('click', '[class^="foldList"] button', function() {
		$this = $(this);
		$foldList = $this.parents('[class^="foldList"]');
		$next = $this.next();

		if($next.is(':hidden')) {
			$foldList.find('button').removeClass('active').next().hide();
			$this.addClass('active');
			$next.show();
		}else{
			$this.removeClass('active');
			$next.hide();
		}
	});

	/* 메인하단 포커스 이동 (180618 추가) */
	$('.mainLayerBot .contsBx').append('<div class="mLyClose" style="position:absolute;top:5px;right:10px;width:1px;height:1px;line-height:0;font-size:1px;color:transparent">닫기로 이동</div>');
	$('.mainLayerBot .mLyClose').attr('tabindex', 0).focus(function(){
		$('.mainLayerBot .titS').focus();
	});

	// 카드이미지 사이즈 (180618 추가)
	$(".issueCardList .cardImg img").each(function(i) {
		var leng = $(".issueCardList .cardImg img").length;

		for(i=0; i<=leng; i++){
			var imgWidth = this.naturalWidth;
			var imgHeight = this.naturalHeight;
			if (imgWidth >= 455) {
				$(this).css('width','70%');
			}else{
				$(this).css('width','50%');
			}
		}
	});

	/* 신용명세서 */
	$('#wrap, #wrap02').on('click', '.sectWrapMore [class^="titsWrap"] > a', function(e) {
		$this = $(this);
		$moreList = $this.parent().parent();
		$next = $this.parent().next('ul');

		if($next.is(':hidden')) {
			$('.sectWrapMore > li').removeClass('_active');
			$moreList.addClass('_active');
			$('.sectWrapMore .infoListWrap').hide();
			$next.show();
		}else{
			$moreList.removeClass('_active');
			$next.hide();
		}
		e.preventDefault();
	});

	/* 상담내역 */
	$('#wrap, #wrap02').on('click', '.inqReply .inqInfoBox', function(e) {
		var $this = $(this);
		var $next = $this.next();

		if($next.is(':hidden')) {
			$this.addClass('active');
			$next.show().next().show();
		}else{
			$this.removeClass('active');
			$next.hide().next().hide();
		}
	});

	/* 보호하기 상세 조회 */
	$('#wrap, #wrap02').on('click', '.listSrchBox .btnDetailSrch', function(e) {
		var $this = $(this);
		var $thisParent = $this.parent();
		var $next = $thisParent.next();

		if($next.is(':hidden')) {
			$this.addClass('active');
			$next.show();
		}else{
			$this.removeClass('active');
			$next.hide();
		}
	});

	/* 크레딧 어드바이저 신용상태 탭 */
	$('#wrap, #wrap02').on('click', '.warningTab li button', function(e) {
		var $this = $(this);
		var $parent = $this.parent();
		var $warp = $this.parents('.warningTab');


		if(!$parent.hasClass('on')) {
			$warp.find('li').removeClass('on');
			$parent.addClass('on');
		}
	});

	/* 구매보고서 내역 상세 보기 */
	$('#wrap, #wrap02').on('click', '.sectDetail .btnListMore', function() {
		var $this = $(this);
		var $listWrap = $this.prev();

		if($listWrap.is(':hidden')) {
			$listWrap.show();
			$this.addClass('active').find('span').text('닫기');
		}else{
			$listWrap.hide();
			$this.removeClass('active').find('span').text('상세보기');
		}
	});

	/* 쇼핑할인쿠폰 */
	$('#wrap, #wrap02').on('click', '.cuponGuide .listMoreBtn02', function() {
		var $this = $(this);
		var $listWrap = $this.next();

		if($listWrap.is(':hidden')) {
			$('.cuponGuide button').removeClass('active').next().hide();
			$listWrap.show();
			$this.addClass('active');
		}else{
			$listWrap.hide();
			$this.removeClass('active');
		}
	});

	/* 좌우 슬라이드 형식 버튼 */
	$('#wrap, #wrap02').on('click', '.btnSwich', function() {
		var $this = $(this);

		if($this.hasClass('active')) {
			$this.removeClass('active');
		}else{
			$this.addClass('active');
		}
	});

	/* 인풋요소 포커스시 빨간색 라인처리 */
	$('#wrap, #wrap02, #popupWrap').on('focusin focusout', '[class^="inpBx"] input[type="text"], [class^="inpBx"] input[type="password"], [class^="inpBx"] input[type="number"], [class^="inpBx"] select, [class^="inpBx"] input[type="tel"]', function(e) {
		var $this = $(this);
		var $span = $this.parent();

		if($span.hasClass('focus')) {
			$span.removeClass('focus');
		}else{
			$span.addClass('focus');
		}
	});

	/* input 클릭시 입력값 삭제 (180522 추가) */
	$('input, textarea').on('focus', function(){
		txt = $(this).attr('placeholder');
		$(this).attr('placeholder', '');
	});
	$('input, textarea').on('blur', function(){
		$(this).attr('placeholder', txt);
		$('.inpCardNumber, .registration_number, .inpBxCardDate span, .inpBxCardPw span').removeClass('focus'); // ios 포커스 제거
	});

	/* 주민번호 입력 포커스시 라인처리 */
 	$('#wrap, #wrap02, #popupWrap').on('focusin focusout', '.registration_number input', function() {
		var $this = $(this);
		var $span = $this.parent();

		if($span.hasClass('focus')) {
			$span.removeClass('focus');
		}else{
			$span.addClass('focus');
		}
	});

	/* 카드번호 입력 포커스시 라인처리 */
 	$('#wrap, #wrap02, #popupWrap').on('focusin focusout', '.inpCardNumber', function() {
		var $span = $(this);

		if($span.hasClass('focus')) {
			$span.removeClass('focus');
		}else{
			$span.addClass('focus');
		}
	});

	/* 명의보호, 금융사기방지, 가족명의보호 설정 */
	$('#wrap, #wrap02').on('click', '[class*="ptcSetBtn"] button', function() {
		var $this = $(this);
		var $parent = $this.parents();
		var $ptcSetBtn = $this.parents('[class*="ptcSetBtn"]');

		if(!$parent.hasClass('active')) {
			$('li', $ptcSetBtn).removeClass('active');
			$parent.addClass('active');
		}
	});

	/* 메인 하단 레이어팝업 */
	$('.mainLayerBot > button').off('touchstart click').on('touchstart click', function(e) {
		var $this = $(this);
		var $wrap = $this.parent('.mainLayerBot');
		var $conts = $this.next();
		var $banLsit = $this.next().find('.banList');/* 180905 추가 */
		var $minH = $(window).height() - 90;
		var $maskHtml = '<div class="mask" style="z-index:4;"></div>';
		var $wh = $(window).height() -295;/* 180905 추가 */

		if ($conts.is(':hidden')) {
			e.preventDefault();
			$('#header').css('z-index', '4');
			$wrap.before($maskHtml);
			$('.mask').fadeIn();
			$this.addClass('on');
			$conts.css('max-height', $minH).slideDown();

			$banLsit.css('max-height', $wh);;/* 180905 추가 */
			$('#wrap').css({'position':'fixed'});

			// 카드/대출 정보 조회를 위해 RZMZWHZWH01001VM 에 있는 함수 호출
			if (typeof searchMyCreditStatement == "function") {
				searchMyCreditStatement();
			}

		} else if ($conts.is(':visible')) {
			e.preventDefault();
			$('#header').css('z-index', '5');
			$('.mask').remove();
			$this.removeClass('on');
			$conts.slideUp();
			$('#wrap').css({'position':'relative'});
		}
	});

	/*
	$('.mainLayerBot > button').off('click').on('click', function(e) {
		var $this = $(this);
		var $wrap = $this.parent('.mainLayerBot');
		var $conts = $this.next();
		var $minH = $(window).height() - 90;
		var $maskHtml = '<div class="mask" style="z-index:4;"></div>';

		console.log("click");
		if($conts.is(':visible')) {
			e.preventDefault();
			$('#header').css('z-index', '5');
			$('.mask').remove();
			$this.removeClass('on');
			$conts.slideUp();
			$('#wrap').css({'position':'relative'});
		}
	});
	*/
	/* 메인 하단 레이어팝업 (180611 수정) */
/* 	$('.mainLayerBot > button.titS').on('mouseenter touchstart keydown', function(e) {
		e.preventDefault();
		var $this = $(this);
		var $wrap = $this.parent('.mainLayerBot');
		var $conts = $this.next();
		var $minH = $(window).height() - 90;
		var $maskHtml = '<div class="mask" style="z-index:4;"></div>';

		if($this.hasClass('on')) {
			$('#header').css('z-index', '5');
			$('.mask').remove();
			$this.removeClass('on');
			$conts.slideUp();
			$('#wrap').css({'position':'relative'});
		}else{
			$('#header').css('z-index', '4');
			$wrap.before($maskHtml);
			$('.mask').fadeIn()
			$this.addClass('on');
			$conts.css('max-height', $minH).slideDown();
			$('#wrap').css({'position':'fixed'});
		}
	}); */

	/* 조회하기>커플 신용보고서 열람 */
	$('#wrap, #wrap02').on('click', '[class*="reportWrap"] button.more', function() {
		$this = $(this);
		$prev = $this.prev('dl');
		$dd = $('dd', $prev);

		if($this.hasClass('on')) {
			$this.removeClass('on').find('span').text('더보기');
			$dd.hide();
			// 대출정보 4개 노출
			if($prev.hasClass('viewInfo03')) {
				$dd.eq(0).show();
				$dd.eq(1).show();
				$dd.eq(2).show();
				$dd.eq(3).show();
			}else{
				$dd.eq(0).show();
				$dd.eq(1).show();
				$dd.eq(2).show();
			}
		}else{
			$this.addClass('on').find('span').text('닫기');
			$dd.show();
		}
	});
});

/********************************************************************************************
** 공통
********************************************************************************************/
/* 서브화면 헤더 퀵 gnb  */
var quickGnb = function() {
	var $btnOpen = $('#header .btnQuickH button');
	var $quickWrap = $('#header .quickGnb');
	var $maskHtml = '<div class="mask js_quickGnb"></div>';

	$('a', $quickWrap).each(function() {//폴딩구조 메뉴에 js_folding클래스 추가
		$this = $(this);
		if($this.next().length) {
			$this.addClass('js_folding');
		}
	});

	$('#wrap, #wrap02').on('click', '.mask.js_quickGnb', function() {$btnOpen.click();});
	$btnOpen.click(function() {
		var $this = $(this);
		//$('.quickGnb .innerList > ul > li:first-child > a').addClass('on').next().show();
		if($quickWrap.is(':hidden')) {// 헤더 빠른 메뉴 열기/닫기
			$this.addClass('on').find('span').text('나의 신용정보 메뉴 닫기');
			$('#header').before($maskHtml);
			$('.mask').fadeIn();
			$quickWrap.slideDown();
		}else{
			$this.removeClass('on').find('span').text('나의 신용정보 메뉴 열기');
			$('.mask').fadeOut('slow', function () {$(this).remove();});
			$quickWrap.slideUp();
			//$('.innerList > ul > li > a', $quickWrap).removeClass('on').next().hide();
		}
	});

	$('.innerList > ul > li > a', $quickWrap).click(function(e) {
		var $this = $(this);
		var $li = $('.innerList > ul > li', $quickWrap);

		if(!$this.hasClass('js_folding')) {return;}
		e.preventDefault();
		if($this.next().is(':hidden')) {
			$('> a', $li).removeClass('on').next().hide();
			$this.addClass('on').next().show();
		}else{
			$this.removeClass('on').next().hide();
		}
	});
}

/* 전체메뉴 */
var gnbFn = function() {
	var $quickWrap = $('#header .quickGnb');
	var $btnQuickH = $('#header .btnQuickH button');
	var $btnOpen = $('#header .btnGnb');
	var $wrap = $('#gnb');
	var $maskHtml = '<div class="mask js_maskGnb"></div>';
	var $isSlide = false;

	$('.gnbList a', $wrap).each(function() {//폴딩구조 메뉴에 js_folding클래스 추가
		$this = $(this);
		if($this.next().length) {
			$this.addClass('js_folding');
		}
	});

	$wrap.on('click', '.gnbList a', function(e) {
		var $this = $(this);
		var $thisWrap = $this.parent().parent();
		var $next = $this.next();

		if(!$next.length) {return;}
		e.preventDefault()

		if($next.is(':hidden')) {
			$('> li a', $thisWrap).removeClass('on').next().hide();
			$this.addClass('on');
			$next.show();
		}else{
			if($thisWrap.hasClass('depth01')) return false;
			$this.removeClass('on');
			$next.hide();
		}
		//2018-05-16
		if($(this).next().children().children().hasClass("default")){
			$(this).next().children().children().next().eq(0).show();
		}
	});

/* 2018-06-22 */
	$('.btnGnb').on('click', function(e) {//전체메뉴 열기
		e.preventDefault();

		mask(); //2018-06-28

		$('#gnb .depth02 > li:first-child > a').addClass('on').next().show();
		$('.gnbInner').css('display','block');

		if(!$(this).next().hasClass('mask')){
			$('#wrap').css({'position':'fixed'});
			$mask = $wrap.before($maskHtml);
			$('.mask').fadeIn('fast');
		}

		$wrap.animate({
			opacity : 100,
			right : 0
		}, 600, function() {
			$('#gnb .btnHome').focus();
		});
	});


	/* 2018-06-28 */
	 function mask(){
		var htmls = '<div class="mask_dim">';
		$(htmls).appendTo("body");
		$(".mask_dim").css({
			"width":"100%", "height":"100%", "position":"fixed",
			"top":"0px", "left":"0px", "z-index":"100"
		});

		setTimeout(function(){
			$(".mask_dim").remove();
			//console.log("마스크가 제거됐습니다");
		},900);
	}
	/* 2018-06-28 */

	$('#gnb .gnbClose').on('click', function(e) {//전체메뉴 닫기
		e.preventDefault();

		$('#wrap').css({'position':'relative'});
		$('.mask').fadeOut('400', function() {$(this).remove();});

		$wrap.animate({
			opacity : 0,
			right : '-90%'
		}, 400, function() {
			//$('.gnbInner').css('display','none'); 2018-06-28
			$('.btnGnb').focus();
		});

		$('.gnbList a', $wrap).removeClass('on').next().hide();
		$('.depth01 > li:first-child > a', $wrap).addClass('on').next().show();
		$('#gnb .depth02 > li:first-child > a').removeClass('on').next().hide();
	});

	$('#gnb .gnbClose.last').on('focusout', function(){
		$('#gnb .btnHome').focus();
	});
/* 2018-06-22 */

	$('#wrap, #wrap02').on('click', '.mask.js_maskGnb', function(e) {$('.gnbClose', $wrap).click();});



/* 2018-06-22 */
	/*$wrap.bind('transitionend', function() {//슬라이드 애니메이션중 중복 이벤트 방지
		$isSlide = false;
	});*/
/* 2018-06-22 */
}

/* tabwrap */
var tabWrapFn = function(wrap) {
	var $wrap = wrap;
	var $tabItem = $('li button', $wrap);

	$tabItem.click(function() {
		$this = $(this);
		$thisWrap = $this.parents('[class^="tabWrap"]');
		$tabCont = $('[class*="tabCont"]');

		if(!$this.parent().hasClass('on')) {
			$('li', $thisWrap).removeClass('on');
			$this.parent().addClass('on');
		}

		if($tabCont) {
			var $idx = $this.parent().index();
			$tabCont.hide().eq($idx).show();
		}

	});
}

/* slide type menu */
var slideTabFn = function(wrap, options) {
	var options = options || {};
	var $wrap = $(wrap),
		$wrapChild = $('> ul', $wrap),
		$item = $('li', $wrap);
	var $plusW = options.plusW || 0;
	var $totalW = 0;

	var setFn = function() {
		$item.each(function() {
			var $this = $(this);
			var $thisW = $this.outerWidth(true);
			var $calW = Math.ceil($thisW) + $plusW;

			// 180518 수정
			if(/iPhone|iPad|iPod/i.test(navigator.userAgent)){
				var $calW = Math.ceil($thisW) + $plusW + 20;
			}

			$totalW += $calW;
			$this.data('width', $calW).css('width', $calW);
			if($(this).index() == $item.length - 1) {$wrapChild.css('width', $totalW);}
		});
	}

	setFn();

	var swipeFn = new Swiper($wrap, {
		direction: 'horizontal'
		, slidesPerView: 'auto'
		, scrollbarHide : false
		, freeMode: true
	});

	return {
		slideTo : function(idx) {
			swipeFn.slideTo(idx);
		}
	}
}

/* 배너 슬라이드 */
var bannerFn = function(wrap, options) {
	var options = options || {};
	var $wrap = $(wrap);
	var $swipe_wrapper = $('.swiper-wrapper', $wrap);
	var $swipe_slide = $('.swiper-slide', $swipe_wrapper);
	var $controllBox = $('.controllBox', $wrap);
	var $btnPlay = $('> button', $controllBox);
	var $customW = options.customW;
	var $percentW = options.percentW;

	var $pageNav = options.pageNav ? {
		el : '.swiperNav'
		, clickable : true
		, bulletClass : 'navNum'
		, bulletActiveClass : 'active'
		, renderBullet: function (index, className) {
			return '<button type="button" class="' + className + '"><em>' + (index + 1) + '</em></button>';
		}
	} : {};

	var $dirNav = options.dirNav ? {
		nextEl : '.swipeNext'
		, prevEl : '.swipePrev'
	} : {};

	var $autoPlay = options.autoPlay || false
		, $delay = options.autoDelay || 3000
		, $autoOpt = $autoPlay ? {delay : $delay} : false;

	var initFn = function(target) {
		var $target = target;

		$($target.slides).css('height', 'auto');

		if(options.slidesPerView == 'auto') {
			if($percentW) {
				var calcW = $($target.$el).outerWidth() * ($percentW / 100);
				$($target.slides).css('width', calcW);
				$($target.$wrapperEl).css('width', calcW * $target.slides.length);
				target.update();
			}else{
				$($target.$wrapperEl).css('width', $($target.slides).outerWidth() * $target.slides.length);
			}
		}else{
			$($target.slides).css('width', $($target.$el).outerWidth());
			$($target.$wrapperEl).css('width', $($target.$el).outerWidth() * $target.slides.length);
		}
		if(options.setMaxH) {
			setMaxHFn($target);
		}
	}

	var setMaxHFn = function(target) {
		var $target = target;
		$($target.slides).css('height', $($target.$el).outerHeight());
	}

	var playFn = function(target) {
		var $this = target;

		if(swipeFn.autoplay.running) {
			$autoPlay = false;
			$this.text('재생').addClass('play');
			swipeFn.autoplay.stop();
		}else{
			$autoPlay = true;
			$this.text('정지').removeClass('play');
			swipeFn.autoplay.start();
		}
	}

	/* 배너컨텐츠 포커스 멈춤 (180618 추가) */
	$('#bannerSlide li a').focus(function(){
		$autoPlay = false;
		$this.text('재생').addClass('play');
		swipeFn.autoplay.stop();
	});

	$controllBox.on('click', ' > button', function() {
		var $this = $(this);
		playFn($this);
	});

	var swipeFn = new Swiper($wrap, {
		loop : options.loop || false
		, slidesPerView: options.slidesPerView || '1'
		, speed : 800
		, autoplay : $autoOpt
		, pagination: $pageNav
		, navigation : $dirNav
		/* s: 20190215 수정 */
		, slideActiveClass : 'swiper-slide-active on'
		, on : {
			init : function() {
				initFn(this);
			}
			, slideChangeTransitionStart : function() {
				if(options.slideChangeTransitionStart){options.slideChangeTransitionStart(this);}
			}
			, transitionEnd : function() {
				$swipe_slide.attr('aria-hidden', 'true').eq(this.realIndex).attr('aria-hidden', 'false');
				if($autoPlay) {this.autoplay.start();}
				if(options.transitionEnd){options.transitionEnd(this);}
			}
			, resize : function() {
				initFn(this);
				this.update();
			}
		}
		/* e: 20190215 수정 */
	});

}

/********************************************************************************************
** 조회하기
********************************************************************************************/
var myCreditList = function(){
	var $target = $('.myCreditList > ul >li > button');
	$target.click(function(e){
		var $targetBx = $(this).next('.conBx');

		if($targetBx.is(':hidden') && !$targetBx.is(':animated')){
			$target.removeClass('_active');
			$(this).addClass('_active');
			$('.myCreditList > ul >li .conBx').hide();
			$targetBx.slideDown('fast');
		}else{
			$(this).removeClass('_active');
			$targetBx.slideUp('fast');
		}
		e.preventDefault();
	});
}

/* 디자인셀렉트박스 */
var dgSelect = function(){
	var $target = $('.dgSelect > button'),
	$next = $target.next(),
	$targetOtp= $('.dgSelectOtp ul li a');

	$target.click(function(e){
		if($next.is(':hidden')) {
			$target.addClass('_active');
		}else{
			$target.removeClass('_active');
		}
		e.preventDefault();
	});

	$targetOtp.click(function(e){
		if(!$(this).parent().hasClass('_active')) {
			$('.dgSelectOtp ul li').removeClass('_active');
			$(this).parent().addClass('_active');
			$target.find('span').text($(this).text());
			$target.removeClass('_active');
		}
		e.preventDefault();
	});
}

var searchTab = function(){
	var $target = $('.searchTab li a');
	$target.click(function(){
		$targetP = $(this).parent('li');
		if(!$targetP.hasClass('on')){
			$('.searchTab li').removeClass('on');
			$targetP.addClass('on');
		}
	});
}

/********************************************************************************************
** 나의지키미 - 메인 게이지 스크립트
********************************************************************************************/
var gageGraphFn = function(canvasId, options) {
	var options = options|| {};
	var canvas = document.getElementById(canvasId),
	context = canvas.getContext('2d'),
	canvasW = options.canvasW || 300,
	canvasH = options.canvasH || 300,
	canvasM = options.canvasM || 0,
	lineW = 12,
	innerLine = lineW/2,
	radius = canvasW/2 - (canvasM + innerLine),
	centerPointX = canvasW / 2,
	centerPointY = canvasH / 2,
	pi = Math.PI,
	startRadian = 0.80,
	endRadian = 2.20,
	gradeN = 10,
	increRadian = (endRadian - startRadian) / gradeN,
	tickW = 0.002,
	startAngle = pi * startRadian,
	angleCont = 0,
	endCont = 70,
	gradient = context.createLinearGradient(0, 160, 100, 0),
	gradient2 = context.createLinearGradient(110, 0, 160, 160),
	userGrade = options.userGrade == 0 ? 3 : options.userGrade,
	userCont = (endCont / gradeN) * (10 - (userGrade -1)),
	imgGradUri = options.imgGradUri,
	$img = new Image(),
	alpha = 0;
	if(imgGradUri) {$img.src = imgGradUri;}


	var devicePixelRatio = window.devicePixelRatio || 1,
	backingStoreRatio = context.webkitBackingStorePixelRatio ||
	context.mozBackingStorePixelRatio ||
	context.msBackingStorePixelRatio ||
	context.oBackingStorePixelRatio ||
	context.backingStorePixelRatio || 1,
	ratio = devicePixelRatio / backingStoreRatio;

	var contStyle = {
		bg : {
			lineCap : 'round'
			, strokeStyle : '#eee'
		}
		, tick : {
			lineCap : 'butt'
			, strokeStyle : 'rgba(255, 255, 255, 0.7)'
		}
		, gage : {
			lineCap : 'round'
		}
	}; // 각요소의 스타일

	gradient.addColorStop(0.1, '#fd5858');
	gradient.addColorStop(0.7, '#f6cc4b');
	gradient.addColorStop(1, '#92ce67');

	gradient2.addColorStop(0.1, '#f9cb4a');
	gradient2.addColorStop(0.45, '#5bce7e');
	gradient2.addColorStop(1, '#4fc1db');


	// style의 width, height 지정
	canvas.style.width = canvasW + 'px';
	canvas.style.height = canvasW + 'px';
	// attribute에 ratio 값을 곱한 width, height 지정
	canvas.width = canvasW * ratio;/* canvas의 width값을 수정할 수 있음 */
	canvas.height = canvasH * ratio;/* canvas의 height값을 수정할 수 있음 */
	context.scale(ratio, ratio);

	var  bgDraw = function() {
		context.beginPath();
		context.lineCap = contStyle.bg.lineCap;
		context.strokeStyle = contStyle.bg.strokeStyle;
		context.shadowColor = "rgba(0, 0, 0, 0)";
		context.lineWidth = lineW;
		context.arc(centerPointX, centerPointY, radius, startAngle, pi * endRadian, false);
		context.stroke();
		context.closePath();
	}

	var tickDraw = function() {
		context.lineCap = contStyle.tick.lineCap;
		context.strokeStyle = contStyle.tick.strokeStyle;
		context.lineWidth = lineW;
		for(var i=1; i < 10; i++) {
			var tickPot = startRadian + (increRadian*i);
			context.beginPath();
			context.arc(centerPointX, centerPointY, radius, pi*tickPot, pi*(tickPot + tickW), false);
			context.stroke();
		}
		context.closePath();
	}

	var gageDraw = function() {
		context.lineCap = contStyle.gage.lineCap;
		context.lineWidth = lineW;
		context.shadowColor = "rgba(0, 0, 0, 0)";
		if(angleCont > 35) {
			context.beginPath();
			context.strokeStyle = gradient;
			context.arc(centerPointX, centerPointY, radius, startAngle, pi * (0.02*35 + startRadian), false);
			context.stroke();
			context.beginPath();
			context.strokeStyle = gradient2;
			context.arc(centerPointX, centerPointY, radius, pi * (0.02*35 + startRadian), pi * (0.02*angleCont + startRadian), false);
			context.stroke();
		}else{
			context.beginPath();
			context.strokeStyle = gradient;
			context.arc(centerPointX, centerPointY, radius, startAngle, pi * (0.02*angleCont + startRadian), false);
			context.stroke();
		}


		context.closePath();
	}

	var aniGage = function() {
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.globalAlpha = 100;
		bgDraw();
		gageDraw();
		// tickDraw(); /*201223 스코어개편수정*/
		gradeInfoTxt();
		drawCircle();

		if(imgGradUri) {
			drawImage();
		}
	}

	var gradeInfoTxt = function() {
		var fontS = 13;
		var handRadius = radius + lineW +5;
		var numberals = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

		context.font = fontS + 'px NanumSquareRound';
		context.fillStyle = '#585858';
		$.each(numberals, function(i, val) {
			var angles = pi * (startRadian + (increRadian*i) +(increRadian/2)) ;
			var numberalWidth = context.measureText(val).width/* measureText() : 캔버스에 그려진 텍스트의 사이지값 반환 */;
			var xPos = canvasW/2 + Math.cos(angles) * (handRadius) - (numberalWidth/2);
			var yPos = canvasH/2 + Math.sin(angles) * (handRadius) + (fontS/2);
			context.beginPath();
			context.fillText(val, xPos, yPos);
		});
		context.closePath();
	}

	var drawCircle = function() {
		var xPos = canvasW/2 + Math.cos(pi * (0.02*angleCont + startRadian)) * radius;
		var yPos = canvasH/2 + Math.sin(pi * (0.02*angleCont + startRadian)) * radius;
		context.beginPath();
		context.lineWidth = 0;
		context.fillStyle = "#fff";
		context.shadowBlur = 10;
		context.shadowColor = "rgba(0, 0, 0, 0.5)";
		context.arc(xPos, yPos, 10, pi*0, pi*2, false);
		context.fill();
		context.closePath();
	}

	var drawImage = function() {
		context.beginPath();
		context.drawImage($img, 155, 55, 79, 38);
		context.closePath();
	}

	function animate() {
		angleCont += 1;
		if(angleCont > userCont) {
			angleCont = 0;
			return;
		}
		aniGage();
		window.requestAnimationFrame(animate);
	}

	animate();
}

/********************************************************************************************
** AI 명의보호
********************************************************************************************/
/*  인증패턴 분석 화면 */
var swipeGLayout = function(mwarp, gwrap) {
	/* 메뉴슬라이드 */
	var $mwrap = $(mwarp);
	var $totalW = 0;
	var $mwarpLength;
	var $dirIndex = 0;

	var initFn01 = function(target) {
		var $target = target;
		$mwarpLength = $($target.slides).length;

		$($target.slides).each(function(i) {
			var $this = $(this);
			var $thisW = $this.outerWidth(true);
			var $calW = Math.ceil($thisW) + 2;

			$totalW += $calW;
			$this.data('width', $calW).css('width', $calW);

			if(i == $mwarpLength - 1) {
				$($target.$wrapperEl).css('width', $totalW);
				$target.update();
			}
		});
		$target.update();
	}

	var swipeFn01 = new Swiper($mwrap, {
		direction: 'horizontal'
		, slidesPerView: 'auto'
		, scrollbarHide : false
		, freeMode: true
		, on : {
			init : function() {
				initFn01(this);
			}
		}
	});

	$(swipeFn01.slides).click(function() {
		var $this = $(this);
		var $thisIdx = $this.index();
		$dirIndex = $thisIdx;
		swipeFn01.slideTo($dirIndex, 800);
		swipeFn02.slideTo($dirIndex, 0);
		$(swipeFn01.slides).removeClass('active').eq($dirIndex).addClass('active');
	});

	$('.swipePrev', $mwrap).click(function() {
		$dirIndex = $dirIndex - 1;

		if($dirIndex < 0) {$dirIndex = $dirIndex +1; return;}
		swipeFn01.slideTo($dirIndex, 800);
		swipeFn02.slideTo($dirIndex, 0);
		$(swipeFn01.slides).removeClass('active').eq($dirIndex).addClass('active');
	});

	$('.swipeNext', $mwrap).click(function() {
		$dirIndex = $dirIndex + 1;

		if($dirIndex >= $mwarpLength) {$dirIndex = $dirIndex -1; return;}
		swipeFn01.slideTo($dirIndex, 800);
		swipeFn02.slideTo($dirIndex, 0);
		$(swipeFn01.slides).removeClass('active').eq($dirIndex).addClass('active');
	});

	/* 그래프 슬라이드 */
	var $gwrap = $(gwrap);

	var initFn02 = function(target) {
		var $target = target;

		$($target.slides).css('width', $($target.$el).outerWidth());
		$($target.$wrapperEl).css('width', $($target.$el).outerWidth() * $target.slides.length);
		graphHFn($target);
		$target.update();
	}

	var graphHFn = function(target) {
		var $target = target;
		$gwrap.css('height', $($target.slides).eq($dirIndex).outerHeight());
	}

	var swipeFn02 = new Swiper($gwrap, {
		on : {
			init : function() {
				initFn02(this);
			}
			,transitionStart :function() {
				$dirIndex = this.realIndex;
				swipeFn01.slideTo($dirIndex, 0);
				$(swipeFn01.slides).removeClass('active').eq($dirIndex).addClass('active');
				graphHFn(this);
			}
			, transitionEnd : function() {
				$(swipeFn01.slides).attr('aria-hidden', 'true').eq($dirIndex).attr('aria-hidden', 'false');
			}
			, resize : function() {
				initFn02(this);
				this.update();
			}
		}
	});
}

/* 위치기반 인증패턴 */
var locateCertify = function(mwarp, mapbox) {
	/* 지도 박스 */
	var $mapbox = $(mapbox);

	/* 메뉴슬라이드 */
	var $mwrap = $(mwarp);
	var $totalW = 0;
	var $mwarpLength;
	var $dirIndex = 0;

	var initFn01 = function(target) {
		var $target = target;
		$mwarpLength = $($target.slides).length;

		$($target.slides).each(function(i) {
			var $this = $(this);
			var $thisW = $this.outerWidth(true);
			var $calW = Math.ceil($thisW) + 2;

			$totalW += $calW;
			$this.data('width', $calW).css('width', $calW);

			if(i == $mwarpLength - 1) {
				$($target.$wrapperEl).css('width', $totalW);
				$target.update();
			}
		});
		$target.update();
	}

	var swipeFn01 = new Swiper($mwrap, {
		direction: 'horizontal'
		, slidesPerView: 'auto'
		, scrollbarHide : false
		, freeMode: true
		, on : {
			init : function() {
				initFn01(this);
			}
		}
	});

	$(swipeFn01.slides).click(function() {
		var $this = $(this);
		var $thisIdx = $this.index();
		$dirIndex = $thisIdx;
		swipeFn01.slideTo($dirIndex, 800);
		$(swipeFn01.slides).removeClass('active').eq($dirIndex).addClass('active');
		$('> div', $mapbox).removeClass().addClass('map' + ($dirIndex + 1));
	});

	$('.swipePrev', $mwrap).click(function() {
		$dirIndex = $dirIndex - 1;

		if($dirIndex < 0) {$dirIndex = $dirIndex +1; return;}
		swipeFn01.slideTo($dirIndex, 800);
		$(swipeFn01.slides).removeClass('active').eq($dirIndex).addClass('active');
		$('> div', $mapbox).removeClass().addClass('map' + ($dirIndex + 1));
	});

	$('.swipeNext', $mwrap).click(function() {
		$dirIndex = $dirIndex + 1;

		if($dirIndex >= $mwarpLength) {$dirIndex = $dirIndex -1; return;}
		swipeFn01.slideTo($dirIndex, 800);
		$(swipeFn01.slides).removeClass('active').eq($dirIndex).addClass('active');
		$('> div', $mapbox).removeClass().addClass('map' + ($dirIndex + 1));
	});

}

/********************************************************************************************
** NICE지키미 MAIN
********************************************************************************************/
var mainLayoutFn = function(wrap, options) {
	var options = options || {};
	var $wrap = $(wrap);
	var $swipe_wrapper = $('.swiper-wrapper', $wrap);
	var $swipe_slide = $('.swiper-slide', $swipe_wrapper);
	var $winW = $(window).height();

	var increNum = 0;
	var $grade = options.m01.grade || 4;
	var $avegScore = options.m03.avegScore || 0;
	var $avegScore02 = Math.floor($avegScore/100);
	var $avegScore03 = $avegScore%100;

	var initFn = function(target) {
		var $target = target;
		$($target.slides).css('width', $($target.$el).outerWidth());
		$($target.$wrapperEl).css('width', $($target.$el).outerWidth() * $target.slides.length);
		//$($target.slides).css({'height': $($target.$v).innerHeight()});
		$('.swiper-slide').css('height', '410px');

		/* 해당영역 상단 여백 각 디바이스별 높이 대응 */
		var mgin = ($winW - (90 + $($target.$wrapperEl).outerHeight()))/2;
		//console.log(mgin);
		if(mgin > 40) {
			$($target.$el).css({
				'margin-top' : mgin/2 - 30 ,
				'padding-top' : mgin/2 + 20
			});
		}
	}

	/* 180528 수정 */
	var swipeFn = new Swiper($wrap, {
		speed : 800
		,initialSlide: 0
		, autoplay: { // 자동롤링
			delay: 6000,
			disableOnInteraction : false,
			autoplayDisableOnInteraction: true
		  }
		, pagination : {
			el : '.swiperNav'
			, clickable : true
			, bulletClass : 'navNum'
			, bulletActiveClass : 'active'
			, renderBullet: function (index, className) { // 인디케이터 타이틀 등록 (180618 수정)
				var txt = $($('.btnWrap .btnLink').get(index)).text();
				return '<button type="button" class="' + className + '"><em>' + (index + 1) + '. ' + txt + '</em></button>';
			}
		}
		, on : {
			init : function() {
				initFn(this);
			}
			, slideChangeTransitionStart : function() {
				if(this.realIndex == 0) {
					$('#wrap').css({
						'background' : '#796be9',
						'background' : 'linear-gradient(to bottom right, #6fabf4 5%, #796be9 95%)',
						//'transition' : 'background 800ms ease'
					});
				}else if(this.realIndex == 1) {
					$('#wrap').css({
						'background' : '#ff7e7a',
						'background' : 'linear-gradient(to bottom right, #ffa087 5%, #ff7e7a 95%)',
						//'transition' : 'background 800ms ease'
					});
				}else if(this.realIndex == 2) {
					$('#wrap').css({
						'background' : '#ff8240',
						'background' : 'linear-gradient(to bottom right, #ffc45b 5%, #ff8240 95%)',
						//'transition' : 'background 800ms ease'
					});
				}else if(this.realIndex == 3) {
					$('#wrap').css({
						'background' : '#089ebe',
						'background' : 'linear-gradient(to bottom right, #72cfda 5%, #089ebe 95%)',
						//'transition' : 'background 800ms ease'
					});
				}else if(this.realIndex == 4) {/* 20180917 추가*/
					$('#wrap').css({
						'background' : '#009366',
						'background' : 'linear-gradient(to top right, #ac41d9 5%, #753fa5 95%)',
						//'transition' : 'background 800ms ease'
					});
				}
			}
			, slideChangeTransitionEnd : function() {
				$swipe_slide.attr('aria-hidden', 'true').eq(this.realIndex).attr('aria-hidden', 'false');
				$swipe_slide.find('.box_area').removeClass('active');
				$swipe_slide.find('.creditProtect .ring').hide();
				increNum = 0;
				//avegCount.reset();
				if(this.realIndex == 0) {
					$swipe_slide.find('.creditScoreBx').addClass('active');
				}else if(this.realIndex == 1) {
					gradeGraphMain.replay();
					$swipe_slide.find('.gageCanvas').addClass('active');
				}else if(this.realIndex == 2) {
					$swipe_slide.find('.monitoring').addClass('active');
				}else if(this.realIndex == 3) {
					$swipe_slide.find('.creditProtect').addClass('active');
					$swipe_slide.find('.creditProtect .ring').show();
				}else if(this.realIndex == 4) {/* 20180917 추가*/
					$swipe_slide.find('.event').addClass('active');
				}
			}
			, resize : function() {
				initFn(this);
				this.update();
			}
		}
	});

	// 정지, 재생 버튼
	$('.indicator > button').click(function() {
		if($(this).hasClass('btn_stop')){
			$(this).removeClass('btn_stop').addClass('btn_play').text('재생');
			swipeFn.autoplay.stop();
		}else{
			$(this).removeClass('btn_play').addClass('btn_stop').text('정지');
			swipeFn.autoplay.start();
		}
	});

	/* 메인컨텐츠 포커스 멈춤 (180618 추가) */
	$('#mainSlide li').attr('tabindex', 0).on('focus mouseenter',function(){
		$('#mainSlide li').attr('tabindex', -1);
		$('.indicator > button').removeClass('btn_stop').addClass('btn_play').text('재생');
		swipeFn.autoplay.stop();
	});

	var gradeGraphMain = new gradeMainFn('gradeGraphMain', {
		canvasW : 320
		, canvasH: 160
		, canvasM : 7
		, userGrade : $grade
		//, imgGradUri : '../../../img/rzm/main_gage_txt.png'
	});
}

/* 메인 게이지 스크립트 */
var gradeMainFn = function(canvasId, options) {
	var options = options|| {};
	var canvas = document.getElementById(canvasId),
	context = canvas.getContext('2d'),
	canvasW = options.canvasW || 300,
	canvasH = options.canvasH || 300,
	canvasM = options.canvasM || 0,
	lineW = 18,
	innerLine = lineW/2,
	radius = 90 - (canvasM + innerLine),
	centerPointX = canvasW / 2,
	centerPointY = canvasH / 2 + 15,
	pi = Math.PI,
	startRadian = 0.80,
	endRadian = 2.20,
	gradeN = 7,
	increRadian = (endRadian - startRadian) / gradeN,
	tickW = 0.01,
	startAngle = pi * startRadian,
	angleCont = 0,
	allGradeCount = 0,
	endCont = 70,
	gradient = context.createLinearGradient(0, 160, 100, 0),
	gradient2 = context.createLinearGradient(110, 0, 160, 160),
	userGrade = options.userGrade == 0 ? 3 : options.userGrade,
	userCont = (endCont / gradeN) * (7 - (userGrade -2)),
	imgGradUri = options.imgGradUri,
	$img = new Image(),
	alpha = 0;

	if(imgGradUri) {$img.src = imgGradUri;}

	var devicePixelRatio = window.devicePixelRatio || 1,
	backingStoreRatio = context.webkitBackingStorePixelRatio ||
	context.mozBackingStorePixelRatio ||
	context.msBackingStorePixelRatio ||
	context.oBackingStorePixelRatio ||
	context.backingStorePixelRatio || 1,
	ratio = devicePixelRatio / backingStoreRatio;

	var contStyle = {
		bg : {
			lineCap : 'round'
			, strokeStyle : '#ddd'
		}
		, bg02 : {
			lineCap : 'round'
			, strokeStyle : 'transparent'
		}
		, tick : {
			lineCap : 'butt'
			, strokeStyle : '#fff'
		}
		, gage : {
			lineCap : 'round'
		}
	}; // 각요소의 스타일

	gradient.addColorStop(0.1, '#fe657e');
	gradient.addColorStop(0.7, '#ce698e');
	gradient.addColorStop(1, '#836fa7');

	gradient2.addColorStop(0.1, '#836fa7');
	gradient2.addColorStop(0.45, '#5273b8');
	gradient2.addColorStop(1, '#4e72b8');



	// style의 width, height 지정
	canvas.style.width = 186 + 'px';
	canvas.style.height = 92 + 'px';
	// attribute에 ratio 값을 곱한 width, height 지정
	canvas.width = canvasW * ratio;/* canvas의 width값을 수정할 수 있음 */
	canvas.height = canvasH * ratio;/* canvas의 height값을 수정할 수 있음 */
	context.scale(ratio, ratio);

	var  bgDraw = function() {
		context.beginPath();
		context.lineCap = contStyle.bg.lineCap;
		context.strokeStyle = contStyle.bg.strokeStyle;
		context.shadowColor = "rgba(0, 0, 0, 0)";
		context.lineWidth = lineW;
		context.arc(centerPointX, centerPointY, radius, startAngle, pi * endRadian, false);
		context.stroke();
		context.closePath();
	}

	var tickDraw = function() {
		context.lineCap = contStyle.tick.lineCap;
		context.strokeStyle = contStyle.tick.strokeStyle;
		context.lineWidth = lineW;
		for(var i=1; i < 7; i++) {
			var tickPot = startRadian + (increRadian*i);
			context.beginPath();
			context.arc(centerPointX, centerPointY, radius, pi*tickPot, pi*(tickPot + tickW), false);
			context.stroke();
		}
		context.closePath();
	}

	var gageDraw = function() {
		context.lineCap = contStyle.gage.lineCap;
		context.lineWidth = lineW;
		if(angleCont > 35) {
			context.beginPath();
			context.strokeStyle = gradient;
			context.arc(centerPointX, centerPointY, radius, startAngle, pi * (0.02*35 + startRadian), false);
			context.stroke();
			context.beginPath();
			context.strokeStyle = gradient2;
			context.arc(centerPointX, centerPointY, radius, pi * (0.02*35 + startRadian), pi * (0.02*angleCont + startRadian), false);
			context.stroke();
		}else{
			context.beginPath();
			context.strokeStyle = gradient;
			context.arc(centerPointX, centerPointY, radius, startAngle, pi * (0.02*angleCont + startRadian), false);
			context.stroke();
		}
	}

	var gageDraw02 = function() {
		context.beginPath();
		context.strokeStyle = 'transparent';
		context.lineWidth = 3;
		context.arc(centerPointX, centerPointY, radius + 15, pi * (0.02*(allGradeCount - 7) + startRadian),pi * (0.02*allGradeCount + startRadian), false);
		context.stroke();
		context.closePath();
	}

	var aniGage = function() {
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.globalAlpha = 100;
		bgDraw();
		gageDraw();
		gageDraw02();
		tickDraw();
		drawCircle();

		if(imgGradUri) {
			drawImage();
		}
	}

	var drawCircle = function() {
		var txtW = context.measureText('?').width;
		var xPos = canvasW/2 + Math.cos(pi * (0.02*angleCont + startRadian)) * radius;
		var yPos = canvasH/2 + Math.sin(pi * (0.02*angleCont + startRadian)) * radius +15;

		context.beginPath();
		context.lineWidth = 0;
		context.fillStyle = "#fff";
		context.shadowBlur = 10;
		context.shadowColor = "rgba(0, 0, 0, 0.5)";
		context.arc(xPos, yPos, 18, pi*0, pi*2, false);
		context.fill();
		context.beginPath();
		context.shadowColor = "rgba(0, 0, 0, 0)";
		context.font = '900 1.8em NanumSquareRound';
		context.fillStyle = '#3675c1';
		context.fillText('?', xPos - (txtW/2), yPos + (18/2));
		context.closePath();
	}


	var animate = function() {
		angleCont += 1;
		allGradeCount += 1;


		if(userCont < 56 && angleCont > userCont) {
			if(allGradeCount > 56) {
				angleCont = 0;
				allGradeCount = 0;
				return;
			}else{
				angleCont = userCont;
			}
		}

		aniGage();
		window.requestAnimationFrame(animate);
	}

	animate();

	return {
		replay : function() {
			animate();
		}
	}
}


/********************************************************************************************
** 상품소개
********************************************************************************************/
/* 상품 특성 슬라이드 */
var prdAttrBxFn = function(wrap) {
	var $wrap = $(wrap),
	$wrapChild = $('> ul', $wrap),
	$item = $('li', $wrap);

	var initFn = function(target) {
		var $target = target;
		var $wrapW = $($target.el).outerWidth();
		var $maxW = 0;
		var $totalW = 0;

		$($target.slides).css('width', 'auto').each(function(i) {
			var $this = $(this);

			$absW = Math.max($maxW, $this.outerWidth());
			if(i == $($target.slides).length - 1) {
				$totalW = $absW * $($target.slides).length;
			}
		});

		if($totalW < $wrapW) {
			$($target.slides).css('width', $wrapW / $($target.slides).length);
			$target.allowTouchMove = false;
		}else{
			$($target.slides).css('width', $absW);
			$target.allowTouchMove = true;
		}
		$target.update();
	}

	var swipeFn = new Swiper($wrap, {
		direction: 'horizontal'
		, slidesPerView: 'auto'
		, scrollbarHide : false
		, freeMode: true
		, on : {
			init : function() {
				initFn(this);
			},
			resize : function() {
				initFn(this);
			}
		}
	});
}
/* 소개상세 */
var prdpallaraxFn = function() {
	var scrollT;

	var winH = $(window).height();
	var prdViewBxH = $('[class^="prdViewBx"]').outerHeight();
	var visualBx01 = $('.visualBx01');
	var visualBx01_h = visualBx01.outerHeight();
	var visualBx01_img = $('.visualImg', visualBx01);
	var visualBx01_txt = $('[class^="txt"]', visualBx01);
	var visualBx02 = $('.visualBx02');
	var visualBx02_h = visualBx02.outerHeight();
	var visualBx021 = $('.visualBx021');/* 190215 추가 */
	var visualBx021_h =  visualBx02.outerHeight();/* 190215 추가 */
	var visualBx03 = $('.visualBx03');
	var visualBx03_h = visualBx03.outerHeight();
	var visualBx04 = $('.visualBx04');
	var visualBx04_h = visualBx04.outerHeight();
	var visualBx041 = $('.visualBx041');
	var visualBx041_h = visualBx041.outerHeight();
	var visualBx042 = $('.visualBx042');/* 190215 추가 */
	var visualBx042_h = visualBx042.outerHeight();/* 190215 추가 */
	var visualBx05 = $('.visualBx05');
	var visualBx05_h = visualBx05.outerHeight();
	var visualBx06 = $('.visualBx06');
	var visualBx06_h = visualBx06.outerHeight();
	var visualBx07 = $('.visualBx07');
	var visualBx07_h = visualBx07.outerHeight();
	var bnnSafe = $('.bnn_safe');
	var bnnSafe_h = bnnSafe.outerHeight();
	var prdFloatBx = $('.prdFloatBx');
	var prdFloatBx_h = prdFloatBx.outerHeight();
	var processBx = $('.processBx');
	var processBx_h = processBx.outerHeight();
	var processBx_li = $('li', processBx);
	var ptcStView = $('.ptcStView');
	var ptcStView_h = ptcStView.outerHeight();
	var stateView = $('.stateView', ptcStView);
	var ptcSetBtn = $('.ptcSetBtn', ptcStView);
	var ptcStInfo_h = $('.infoBx', ptcStView).outerHeight();
	var handImg = $('.handImgBx span', ptcStView);
	var ptcStView02 = $('.ptcStView02');
	var ptcStView02_h = ptcStView02.outerHeight();
	var stateView02 = $('.stateView', ptcStView02);
	var ptcSetBtn02 = $('.ptcSetBtn02', ptcStView02);
	var ptcStInfo02_h = $('.infoBx', ptcStView02).outerHeight();
	var handImg02 = $('.handImgBx span', ptcStView02);
	var creditBx01 = $('.creditSerBx02 > .creditBxImg01');
  var creditBx01_h = creditBx01.outerHeight();
	var creditBx02 = $('.creditSerBx03 > .creditBxImg01');
  var creditBx02_h = creditBx02.outerHeight();
	var creditBx03 = $('.creditSerBx04 .creditBxImg01');
  var creditBx03_h = creditBx03.outerHeight();
	var creditBx04 = $('.creditSerBx05 .creditBxImg01');
  var creditBx04_h = creditBx04.outerHeight();

	if(ptcSetBtn.length || ptcSetBtn02.length) {
		$('button', '[class^="ptcSetBtn"]').click(function(e) {e.stopPropagation();});
	}

	$('[class*="tabWrapVr"] a').click(function(e) {e.preventDefault();
		var $this = $(this);
		var target = $($this.attr('href'));
		var targetOffset = target.offset().top;

		$('html, body').animate({scrollTop: targetOffset - 94}, 800);
	});

	var initFn = function() {
		scrollT = $(window).scrollTop();
		/* start : 탭 */
		if($('.prdDetailTab [class^="tabFixBox"]').length) {
			if(prdViewBxH <= scrollT) {//탭 상단 고정
				$('.prdDetailTab [class^="tabFixBox"]').css({
					'position' : 'fixed',
					'top' : '50px',
					'left' : 0,
					'right' : 0
				});
			}else{
				$('.prdDetailTab [class^="tabFixBox"]').css({
					'position' : 'static'
				});
			}
		}

		$('.prdDetailTab [class^="tabFixBox"] a').each(function(i) {
		if(i > 0) {
			var $offsetT = $($(this).attr('href')).offset().top - 95;
			if($offsetT <= scrollT) {
				$('.prdDetailTab [class^="tabFixBox"] li').removeClass('on').eq(i).addClass('on');
			}
		}else{
			var $offsetT = $($('.prdDetailTab [class^="tabFixBox"] a').eq(1).attr('href')).offset().top - 95;
			if($offsetT > scrollT) {
				$('.prdDetailTab [class^="tabFixBox"] li').removeClass('on').eq(0).addClass('on');
			}
		}
	});
		/* end : 탭 */

		/* start : prdFloatBx */
		if(!prdFloatBx.hasClass('active') && prdFloatBx.length) {
			var offsetTprdFloatBx = prdFloatBx.offset().top + prdFloatBx_h;
			if(offsetTprdFloatBx - winH <= scrollT) {
				prdFloatBx.addClass('active');
			}
		}
		/* end : prdFloatBx */

		/* start : processBx */
		if(!processBx.hasClass('active') && processBx.length) {
			var offsetTprocessBx = processBx.offset().top + processBx_h;
			if(offsetTprocessBx - winH <= scrollT) {
				processBx.addClass('active');
				processBx_li.each(function(i) {
					var $this = $(this);
					setTimeout(function() {
						//$this.slideDown(800);
						$this.css({
							'opacity' : '1',
							'transition' : 'opacity 800ms ease'
						});
					}, i * 800);

				});
			}
		}
		/* end : processBx */

		/* start : ptcStView */
		if(!$('li', ptcSetBtn).eq(0).hasClass('active') && ptcStView.length) {
			var offsetTptcStView = ptcStView.offset().top + (ptcStView_h - ptcStInfo_h);
			if(offsetTptcStView - winH <= scrollT) {
				handImg.addClass('active').on('transitionend', function() {
					$('> div', stateView).removeClass().addClass('stateCopy01').find('strong').text('차단상태');
					$('li', ptcSetBtn).removeClass('active').eq(0).addClass('active');
				});
			}
		}
		if(!$('li', ptcSetBtn02).eq(0).hasClass('active') && ptcStView02.length) {
			var offsetTptcStView02 = ptcStView02.offset().top + (ptcStView02_h - ptcStInfo02_h);
			if(offsetTptcStView02 - winH <= scrollT) {
				handImg02.addClass('active').on('transitionend', function() {
					$('> div', stateView02).removeClass().addClass('stateCopy01').find('strong').text('차단상태');
					$('li', ptcSetBtn02).removeClass('active').eq(0).addClass('active');
				});
			}
		}
		/* end : ptcStView */

		/* start : visualBx01 */
		if(!visualBx01_txt.hasClass('active') && visualBx01.length) {
			var offsetTvisual01 = visualBx01.offset().top + visualBx01_h;

			if(offsetTvisual01 - winH <= scrollT) {
				visualBx01_img.css({
					'left' : '50%',
					'bottom' : '0',
					'transition-property' : 'left bottom',
					'transition-duration' : 800+'ms',
					'transition-timing-function' : 'ease'
				}).on('transitionend', function() {
					visualBx01_txt.addClass('active');
				});
			}
		}
		/* end : visualBx01 */

		/* start : visualBx02 */
		if(!visualBx02.hasClass('active') && visualBx02.length) {
			var offsetTvisual02 = visualBx02.offset().top + visualBx02_h;

			if(offsetTvisual02 - winH <= scrollT && !visualBx02.hasClass('active')) {
				visualBx02.addClass('active');
			}
		}
		if(!visualBx021.hasClass('active') && visualBx021.length) {

			var offsetTvisual021 = visualBx021.offset().top + visualBx021_h;

			if(offsetTvisual021 - winH <= scrollT && !visualBx021.hasClass('active')) {
				visualBx021.addClass('active');
			}
		}
		/* end : visualBx02 */

		/* start : visualBx03 */
		if(!visualBx03.hasClass('active') && visualBx03.length) {
			var offsetTvisual03 = visualBx03.offset().top + (visualBx03_h / 2);

			if(offsetTvisual03 - winH <= scrollT) {
				visualBx03.addClass('active');
			}
		}
		/* end : visualBx03 */

		/* start : visualBx04 */
		if(!visualBx04.hasClass('active') && visualBx04.length) {
			var offsetTvisual04 = visualBx04.offset().top + visualBx04_h;

			if(offsetTvisual04 - winH <= scrollT) {
				visualBx04.addClass('active');
			}
		}
		/* end : visualBx04 */

		/* start : visualBx041 */
		if(!visualBx041.hasClass('active') && visualBx041.length) {
			var offsetTvisual041 = visualBx041.offset().top + visualBx041_h;

			if(offsetTvisual041 - winH <= scrollT) {
				visualBx041.addClass('active');
			}
		}
		/* end : visualBx04_1 */

		/* start : visualBx042 */
		if(!visualBx042.hasClass('active') && visualBx042.length) {
			var offsetTvisual042 = visualBx042.offset().top + visualBx042_h;

			if(offsetTvisual042 - winH <= scrollT) {
				visualBx042.addClass('active');
			}
		}
		/* end : visualBx042 */

		/* start : visualBx05 */
		if(!visualBx05.hasClass('active') && visualBx05.length) {
			var offsetTvisual05 = visualBx05.offset().top + visualBx05_h;

			if(offsetTvisual05 - winH <= scrollT) {
				visualBx05.addClass('active');
			}
		}
		/* end : visualBx05 */

		/* start : visualBx06 */
		if(!visualBx06.hasClass('active') && visualBx06.length) {
			var offsetTvisual06 = visualBx06.offset().top + visualBx06_h;

			if(offsetTvisual06 - winH <= scrollT) {
				visualBx06.addClass('active');
			}
		}
		/* end : visualBx06 */

		/* start : visualBx07 */
		if(!visualBx07.hasClass('active') && visualBx07.length) {
			var offsetTvisual07 = visualBx07.offset().top + visualBx06_h;

			if(offsetTvisual07 - winH <= scrollT) {
				visualBx07.addClass('active');
			}
		}
		/* end : visualBx07 */

		/* start : visualBx08 */
		if(!bnnSafe.hasClass('active') && bnnSafe.length) {
			var offsetTbnnSafe = bnnSafe.offset().top + bnnSafe_h;

			if(offsetTbnnSafe - winH <= scrollT) {
				bnnSafe.addClass('active');
			}
		}
		/* end : visualBx08 */

		/* start : creditSerBx02 */
		if(!creditBx01.hasClass('active') && creditBx01.length) {
			var offsetcreditBx01 = creditBx01.offset().top + creditBx01_h;
			if(offsetcreditBx01 - winH <= scrollT) {
				creditBx01.addClass('active');
			}
		}
	   /* end : creditSerBx02 */

		/* start : creditSerBx03 */
		if(!creditBx02.hasClass('active') && creditBx02.length) {
 			var offsetcreditBx02 = creditBx02.offset().top + creditBx02_h;
 			if(offsetcreditBx02 - winH <= scrollT) {
 				creditBx02.addClass('active');
 			}
 		}
		/* end : creditSerBx03 */

	 /* start : creditSerBx04 */
		if(!creditBx03.hasClass('active') && creditBx03.length) {
 			var offsetcreditBx03 = creditBx03.offset().top + creditBx03_h;
 			if(offsetcreditBx03 - winH <= scrollT) {
 				creditBx03.addClass('active');
 			}
 		}
		/* end : creditSerBx04 */

		/* start : creditSerBx05 */
		if(!creditBx04.hasClass('active') && creditBx04.length) {
 			var offsetcreditBx04 = creditBx04.offset().top + creditBx04_h;
 			if(offsetcreditBx04 - winH <= scrollT) {
 					creditBx04.addClass('active');
 			}
 		}
		/* end : creditSerBx05 */

	}

	var phoneSlideFn = function(target) {

		/* start : #prdSlide01*/
		if($('#prdSlide01').length) {
			var prdSlide01 = new bannerFn('#prdSlide01', {
				loop : true
				, slidesPerView : 'auto'
				, transitionEnd : function(target) {
					var $target = target;

					var $slide = $($target.slides);
					var $realIdx = $target.activeIndex;

					/* s: 20190215 수정 */
					$('#prdSlide01 .swiper-slide').removeClass('on').eq($realIdx).addClass('on');
					/* e: 20190215 수정 */
				}
				,dirNav : true
			});
		}
		/* 종합신용지키미 우리집 실거래  슬라이드 */
		if($('#prdSlide02').length) {
			var blnLoop = true;
			if($('#prdSlide02').find('.swiper-slide').length < 3) blnLoop = false;

			var prdSlide02 = new bannerFn('#prdSlide02', {
				loop : blnLoop
				, slidesPerView : 'auto'
				, first : function(){
					$('#prdSlide02').prevAll(".prdGuide02").find('.subTit').html("<span class='subTit'>우리집이 올랐나~ 떨어졌나~<br><strong class='pCo03'>매매/전세/월세 실 거래 추이 확인</strong></span>");
				}
				, transitionEnd : function(target) {
					var $target = target;
					var $slide = $($target.slides);
					var $realIdx = $target.activeIndex;

					$('#prdSlide02 .swiper-slide').removeClass('on').eq($realIdx).addClass('on');
					if($realIdx==0){

						$('#prdSlide02').prevAll(".prdGuide02").find('.subTit').html("<span class='subTit'>우리집이 올랐나~ 떨어졌나~<br><strong class='pCo03'>매매/전세/월세 실 거래 추이 확인</strong></span>");
					}else{
						$('#prdSlide02').prevAll(".prdGuide02").find('.subTit').html("<span class='subTit'>깡통전세는 아닌지~ 거래 동향은 어떤지<br><strong class='pCo03'>전세비율,증감율 거래량을 분석해드립니다.</strong></span>");
					}

				}
				,dirNav : true
			});
		}
		/* 종합신용지키미 부동산대출관리 슬라이드 */
		if($('#prdSlide03').length) {
			var blnLoop = true;
			if($('#prdSlide03').find('.swiper-slide').length < 3) blnLoop = false;

			var prdSlideTit03 = '';
			var prdSlide03 = new bannerFn('#prdSlide03', {
				loop : blnLoop
				, slidesPerView : 'auto'
				, first : function(){
					$('#prdSlide03').nextAll(".btnwrap01").find('span').text("LTV, DSR 확인");
				}
				, transitionEnd : function(target) {
					var $target = target;
					var $slide = $($target.slides);
					var $realIdx = $target.activeIndex;

					$('#prdSlide03 .swiper-slide').removeClass('on').eq($realIdx).addClass('on');
					if($realIdx==3 || $realIdx == 6){
						prdSlideTit03 = "LTV, DSR 확인";
					}else if($realIdx==4){
						prdSlideTit03 = "부동산대출 관리";
					}else if($realIdx==5){
						prdSlideTit03 = "KB시세 확인";
					}
					$('#prdSlide03').nextAll(".btnwrap01").find('span').text(prdSlideTit03);
				}
				,dirNav : true
			});
		}

		/* s: 190603 스크립트 수정 */
		/* 자동차관리 슬라이드 */
		if($('#prdSlide04').length) {
			var blnLoop = true;
			if($('#prdSlide04').find('.swiper-slide').length < 3) blnLoop = false;

			var prdSlide04 = new bannerFn('#prdSlide04', {
				loop : blnLoop
				, slidesPerView : 'auto'
				, first : function(){

				  $('#prdSlide04').prevAll(".prdGuide02").find('.subTit').html("<span class='subTit'>내차 등록정보를 한 눈에 확인하고,<br><strong class='pCo03'>소유자 정보를 확인하세요</strong></span>");

				}
				, transitionEnd : function(target) {
					var $target = target;
					var $slide = $($target.slides);
					var $realIdx = $target.activeIndex;
					if($realIdx==0){
						$('#prdSlide04').prevAll(".prdGuide02").find('.subTit').html("<span class='subTit'>내차 등록정보를 한 눈에 확인하고,<br><strong class='pCo03'>소유자 정보를 확인하세요</strong></span>");
					}else{
						$('#prdSlide04').prevAll(".prdGuide02").find('.subTit').html("<span class='subTit'>저당권, 과태료, 압류, 각종 세급체납 등~<br><strong class='pCo03'>나도 모르게 내 차에 등록된 정보가 있는지 확인하세요</strong></span>");
					}

					}


				,dirNav : true
			});
		}
		/* e: 190603 스크립트 수정 */

		/* s: 개발영역 20190702 사업자 신용지키미 상품 슬라이드 추가 */
		if($('#prdSlide05').length) {
			var prdSlide01 = new bannerFn('#prdSlide05', {
				loop : true
				, slidesPerView : 'auto'
				, transitionEnd : function(target) {
					var $target = target;
					var $slide = $($target.slides);
					var $realIdx = $target.activeIndex;

					$('.prdSlide .swiper-slide').removeClass('on').eq($realIdx).addClass('on');
				}
				,dirNav : true
			});
		}
		/* e: 개발영역 20190702 사업자 신용지키미 상품 슬라이드 추가 */

	}
	/* e: 20190215 수정 */



	initFn(); /* //화면 로딩시 */
	phoneSlideFn(); // 20190215 phoneSlideFn(); 추가
	$(window).scroll(function() {
		initFn();
	});

}

/**
* param : btnCls
* param : moreSize
**/
function setOpenMoreBtn(btnCls, moreSize, dataCls) {

	var defaultMoreSize = 10;
	var defaultStdBtnCls = "btn_more";
	var defaultDataCls = "dataRow";
	var stdMoreSize = (moreSize == undefined ? defaultMoreSize : moreSize);
	var stdBtnCls = (btnCls == undefined ? defaultStdBtnCls : btnCls);
	var stdDataCls = (dataCls == undefined ? defaultDataCls : dataCls);
	var $btnObj = $("." + stdBtnCls);

	$("."+stdDataCls).hide();

	$btnObj.click(function(){
		var $parent = $(this).parent();
		var $rowObjs = $parent.find("."+stdDataCls+":hidden");
		var rowObjsSize = $rowObjs.length;
		var isLastMore = rowObjsSize <= stdMoreSize;

		$.each($rowObjs, function(idx, val) {
			if(idx < stdMoreSize) {
				$(this).slideDown();
			}
		});

		if(isLastMore) {
			$(this).hide();
		} else {
			$(this).show();
		}

	});

	$btnObj.trigger("click");
}
