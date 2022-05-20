/**
 * TAB MENU 'ACTIVE' 표기
 */
function setActiveTabParentMnu() {

	var mnuPairMap = {
			"BZW2CSORM03": "BZW2CSORM02", // 장기연체
			"BZW2CSPIM11": "BZW2CSPIM04", // 신상정보관리
			"BZW2CSPIM09": "BZW2CSPIM08", // 상환능력정보
			"BZW2CSMCI14": "BZW3CSMCI04", // 가족단기연체 NICE
			"BZW2CSMCI13": "BZW3CSMCI04", // 가족단기연체 신용정보원
			"BZW2CSCRM06": "BZW2CSCRM04", // 카드이용실적(카드사별)
			"BZW2CSBCM02":"BZW2CSBCM01", //신용개설내역
			"BZW2CSPIM04":"BZW2CSPIM01", //신상정보관리 변경이력
			"BZW2CSPIM11":"BZW2CSPIM01" //신상정보관리 주소정보 변경
	};
	var mnuAObj = $("a[data-menu='"+ mnuPairMap[BASE_MENU_ID] +"'");

	//4depth 인경우에만 li tag active 처리
	if(mnuAObj.parent().parent().hasClass("depth03")) {
		mnuAObj.parent().addClass("active");
	}

	mnuAObj.addClass("bld700");

}

/**
 * DOUCMENT READY
 * ( LNB, TOOLTIP, TAP, VEN DIAGRAM )
 */
$(document).ready(function() {

	setSelectBoxStyle();
	/* lnb 스크립트 */
	$('.lnbInner>li>a , .lnbInner .tree_on>a').on('click', function(e) {
			e.stopPropagation();
			var check = $(this).parent().attr("class");
			$('.lnbInner .depth03').slideUp();
			$('.lnbInner .tree_on>a').removeClass("active");
		if (check.indexOf('sub') != -1) {
				$('.lnbInner>li>a').next().slideUp();
				$('.lnbInner>li>a').removeClass("active");
				$('.lnbInner .depth03').slideUp();
		}
		if ($(this).next().css('display') == "none") {
			$(this).next().slideDown();
			var check = $(this).parent().attr("class");
			$(this).addClass("active");
		}

		return false;

	});

		//lnb 높이 컨텐츠의 영향 삭제
	//	var contentH = $('.inquiry').innerHeight();
	//	$('#snb').css('height', contentH);
	//	$('.inquiry').css('height', contentH);



	// 벤다이어그램 중앙 세로 정렬
	 var h01 = $('.inquiry .suretyArea .diagramCont');
	 var h02 = $('.inquiry .suretyArea .diagramList').innerHeight();
	 h01.css('height', h02);

	 var boxSize = $('.inquiry .listWrap>li').length;
	 var checker = Math.ceil(boxSize/2);

	 if(checker){

	  for (var i = 0; i < checker; i++) {
	   arr1 = $('.inquiry .listWrap>li:even').eq(i).innerHeight();
	   arr2 = $('.inquiry .listWrap>li:odd').eq(i).innerHeight();
	   var max = Math.max(arr1,arr2);
	   $('.inquiry .listWrap>li:even').eq(i).css({'height':max});
	   $('.inquiry .listWrap>li:odd').eq(i).css({'height':max});
	  }
	 }

	/* tooltip */
	$('#content').on('click', '.btnTtip, .btnTtipHide', function(e) {
		e.stopPropagation();

		$this = $(this);
		$thisWrap = $this.parent();
		$tipWrap = $thisWrap.next();
       	$className = $this.attr('class');

		if ($this.hasClass('btnTtipHide')) {
			$this.parents('.tooltipWrap').hide();
			return;
		}
		if ($tipWrap.is(':hidden')) {
			$('.tooltipWrap').hide();
			$tipWrap.show();

		    if($className == "btnTtip" || $className == "btnTtip bgWhite"){

				$this.closest(".titleBox").next().find(".btnTtipHide").attr("tabIndex" ,"0").focus();
				$this.closest(".tit").next().find(".btnTtipHide").attr("tabIndex" ,"0").focus();
			}

			$('.titleBox a').removeClass("on");
			$this.addClass('on');
		} else {
			$tipWrap.hide();

			$this.removeClass('on');

		}

		$(document).one('click', function() {
			$('.tooltipWrap').hide();
			$('.titleBox a').removeClass("on");
		});

	});

	// tab메뉴 여부 확인
	var isTabMnu = true;
	$("#snb").find("a").each(function(idx, value) {
		var mnuId = $(this).data("menu");

		if(BASE_MENU_ID == mnuId) {
			isTabMnu = false;
			return false;
		}
	});

	if(isTabMnu) setActiveTabParentMnu();
});

/**
 * SELECT BOX STYLE
 */

/* s: 개발영역 20201111 */
function setSelectBoxStyle() {

	/* select 스타일  */
  $('.selectWrap  select').each(function() {

	var $this = $(this),
	numberOfOptions = $(this).children('option').length;

	$this.addClass('s-hidden');

	$this.wrap('<div class="selectBox"></div>');

	$this.after('<div href="#void" class="styledSelect"><span></span></div>');

	var $styledSelect = $this.next('.styledSelect').find('span');


	$styledSelect.text($this.children('option:selected').text());
	var $list = $('<ul />', {
	  'class': 'options'
	}).insertAfter($styledSelect);


	for (var i = 0; i < numberOfOptions; i++) {
	  $('<li />', {
		text: $this.children('option').eq(i).text(),
		rel: $this.children('option').eq(i).val()
	  }).appendTo($list);
	}

	var $listItems = $list.children('li');

	$styledSelect.closest(".styledSelect").click(function(e) {

	  e.stopPropagation();


	  $('.styledSelect').each(function() {
			$(this).find("span").removeClass('active').next('ul.options').hide();
	 	});
		  $(this).find("span").closest(".styledSelect").toggleClass('active');
		  $(this).find("span").next('ul.options').toggle();


			 $(this).find($('ul li')).attr("tabIndex","0").focus();
			 $(this).find($('ul li:first-child')).focus();
	});


	$listItems.click(function(e) {
	  e.stopPropagation();

	  $styledSelect.text($(this).text()).removeClass('active');
	  $styledSelect.closest(".styledSelect").removeClass('active');
	  $this.val($(this).attr('rel'));
	  $list.hide();

	});

   // 추가 20181207
	$('.options li').keydown(function(event) {
		event.stopPropagation();
		if (event.keyCode == '13') {
			  event.preventDefault();
			  $styledSelect.text($(this).text()).removeClass('active');
			   $('.styledSelect ul li').removeAttr("tabIndex");
			  $list.hide();
	   }
	});

	$(document).click(function() {

	  $styledSelect.closest(".styledSelect").removeClass('active');
	  $list.hide();
	});



  /* 텝인덱스 부여 */

   $('.styledSelect').keydown(function(event) {

		  if (event.keyCode == '13') {
			  event.preventDefault();
			  $(this).find($('.options')).show();
			  $(this).find($('ul li')).attr("tabIndex","0");
			  $(this).find($('ul li:first-child')).focus();
		 }

	});

setSelectBoxScrollBar();

  });
  //* e: 개발영역 20201111 */
  /* 텝인덱스 부여 */
  $('.styledSelect').attr("tabindex" , "0");
	  $('.styledSelect').keydown(function(event) {

		  if (event.keyCode == '13') {
			  event.preventDefault();
			   $('.options').show();
			   $('.styledSelect ul li').attr("tabIndex","0");
			   $('.styledSelect ul li:first-child').focus();
		 }

	});


}
/* e: 개발영역 20201111 */


/**
 * SELECT BOX 컨텐츠 리스트 STYLE
 */
function setSelectBoxScrollBar() {
	$('#content .selectBox .options').niceScroll({
		cursorcolor: "#c3c1c2",
		cursorwidth: 10,
		cursorheight: 5,
		cursorminheight: 32,
		scrollspeed: 40,
		cursorborderadius: '10',
		mousescrollstep: 40,
		cursoropacitymin: 0,
		cursoropacitymax: 1,
		background: "#fff",
		autohidemode: true,
		zindex: 99999
	});
}

/**
 * WRAP  내용 열고 , 닫기 이벤트
 */
function setWrapOpenAndClose() {// 20181031 수정
	/* 내용 열고 , 닫기 */
	$('#wrap').on('click', '.arrDown', function() {
		$this = $(this);
		$parent = $this.parent();
		$next = $parent.next();

		if (!$parent.hasClass('on')) {
			$this.find('a span').text("닫기");
			$parent.addClass('on');
			$next.show();
		} else {
			$parent.removeClass('on');
			$this.find('a span').text("펼치기");
			$next.hide();
		}
	});
}

/**
* 그래프 테이블 조회 이벤트
**/
function showGraphTableInfo() {
	$(".tabWrap  > li").click(function() {

		var $this = $(this);
		var $idx = $this.index();
		var $parent = $this.parents();

		$parent.children('li').removeClass("on");
		$this.addClass("on");
		$parent.nextAll('.tabCont').hide();
		$parent.nextAll('.tabCont').hide().eq($idx).show();

	});
}

/**
 *  좌우 슬라이드 형식 버튼
 **/
function setBtnSwitchStyle() {
	$('#wrap, #wrap02').on('click', '.btnSwich', function() {
		var $this = $(this);

		if ($this.hasClass('active')) {
			$this.removeClass('active');
		} else {
			$this.addClass('active');
		}
	});

}
