$(function() {
	var playing = false;
	var winW;
	var winH;
	var $creditJikimiWrap = $("#wrap");
	var $sectionWrap = $(".sectionWrap");
	var $section = $(".section");
	var sectionActive = 0;



	function init(){
		var sectionMany = $section.length-1;
		$(document).mousewheel(function(event, delta) {
			if(!playing){
				if(delta == -1 && winH == $(window).scrollTop()+$(window).height() && sectionActive != sectionMany){
					playing = true;
					if(sectionActive < sectionMany){
						sectionActive = sectionActive+1;
					}else{
						sectionActive = sectionMany;
					}
					sectionAnimating(sectionActive);
				}

				if(delta == 1  && $(window).scrollTop() == 0 && sectionActive != 0){
					playing = true;
					if(sectionActive == 0){
						sectionActive = 0;
					}else{
						sectionActive = sectionActive-1;
					}
					sectionAnimating(sectionActive);
				}

			}

			headerState();

		});
		$(".nav a").click(function(e){
			e.preventDefault();
			var idx = $(this).closest("li").index();
			sectionAnimating(idx);
			headerState();
		})
	}

	//섹션 움직일시 모션 제어
	function sectionAnimating(active){
		//공통 모션
		$creditJikimiWrap.attr("class","wrap sectionType0"+(active+1));
		sectionActive = active;
		$(".nav a").blur();
		$section.css("z-index",9);
		$section.eq(active).css("z-index",10).addClass("active");
		$(".nav li").removeClass("on").eq(active).addClass("on");

		if (!$.browser.msie) {
			$sectionWrap.css({transform: 'translate(0px, -'+winH*active+'px)'})
			setTimeout(function(){
				playing = false;
				$(".section").filter(function( index ) {
					return index != active;
				}).removeClass("active");
				$("body,html").scrollTop(0);
			},100)
		}else{
			$sectionWrap.stop().animate({top:-winH*active},1000,function(){
				playing = false;
				$(".section").filter(function( index ) {
					return index != active;
				}).removeClass("active");
				$("body,html").scrollTop(0);
			})
		}
		sectionAni(active);

	}
	function sectionAni(active){
		//각섹션별 모션
		var $target = $section.eq(active);
		switch (active) {
			case 0 :
				$(".subway_line").css({opacity: 0});
				$(".bottom_rolling").css('display','block');
				$(".bottom_rolling2").css('display','none');
				break;
			case 1 :
				$(".subway_line").css({opacity: 0, "top": "-50px"}).stop().delay(300).animate({opacity: 1,"top": 0}, 500);

				$(".bottom_rolling").css('display','none');
				$(".bottom_rolling2").css('display','block');
				break;
			case 2 :
				break;
		}
	}

		/*20170818 추가*/
    /*슬라이드 배너 스크립트*/
    $('.bxslider1').bxSlider({
      speed: 400,
      auto: true,/*20170818 수정*/
      autoControls: true,
      infiniteLoop: true,
      slideMargin: 0,
      controls : true,
      randomStart: false,
      mode: 'fade'
    });

    $('.card_slider2').bxSlider({
      speed: 300,
      auto: true,
      infiniteLoop: true,
      slideWidth: 388,
      controls : false,
      autoHover : false,
      autoControls: true,
      mode: 'fade'
    });
    $('.card_slider').bxSlider({
      speed: 300,
      auto: true,
      infiniteLoop: true,
      slideWidth: 388,
      controls : false,
      autoHover : false,
      autoControls: true,
      mode: 'fade'
    });
    $(".bx-wrapper .bx-clone").attr({
      tabindex : "-1"
    });
    /*tab*/
    var mainTab = $(".mainTab h3");
    var maintabCon = $(".mainTapCon");
    $(maintabCon).hide();
    $(".mainTapCon1").show();
    $(mainTab).each(function(){
      $(this).on('click focusin', function() {
        $(mainTab).removeClass("on");
        $(this).addClass("on");
        $(maintabCon).hide();
        $(this).next(maintabCon).show();
      });
    });
    /*tabConList*/
    var tabCon = $(".tabConList li");
    var front = $(".conFront");
    var back = $(".conBack");
    $(back).hide();
    $(tabCon).each(function(){
      $(this).on('mouseenter focusin', function() {
        $(this).find(back).fadeIn(30);
      });
      $(this).on('mouseleave focusout', function() {
        $(this).find(back).fadeOut(30);
      });
    });
    /*전국민이 함께하는 정보보호 생활*/
    var onOffWrap = $(".mainCon4 ul");
    var onOffCon = $(".mainCon4 ul li");
    var hoverCon = $(".mainCon4 ul li").hover()
    var focusCon = $(".mainCon4 ul li").focusin()
    $(onOffCon).addClass("on")
    function ConE(){
      $(onOffCon).each(function(){
        $(onOffCon).on('mouseenter focusin', function() {
          $(onOffCon).removeClass("on")
          $(this).addClass("on")
        });
      });
    }
    ConE();
    $(onOffWrap).on('mouseenter focusin', function() {
      if (hoverCon) {
        ConE();
        $(this).addClass("on")
      }else if (focusCon) {
        ConE();
        $(this).addClass("on")
      }
        else {
          $(onOffCon).addClass("on")
          $(this).removeClass("on")
      }
    });
    $(onOffWrap).on('mouseleave focusout', function() {
      $(onOffWrap).removeClass("on")
      $(onOffCon).addClass("on")

    });

/*접근성 개선 시작*/

// gnb 서브메뉴 활성화//
var menu = $('.menu')
$(menu).on('focusin mouseenter', function() {
	$('#dim').css('display', 'block');
	$('.depth2').hide();
	$(this).children('.depth2').show();
	$(this).addClass('on');
});
$(menu).on('mouseleave', function() {
	$('#dim').css('display', 'none');
	$('.depth2').hide();
});
$('.menu4 .subMenu > li:last-child .depth3 ul > li > a').on('focusout', function() {
	$('.menu .subMenuWrap').hide();
	$('#dim').css('display', 'none');
});

// headerState
function headerState(){
	$('#gnb>ul>li').removeClass('on');
	$('.headerInner').attr('style', '');
	if(sectionActive != 0){
		$('.headerWrap').addClass('on');
	}else{
		$('.headerWrap').removeClass('on');
		if($('.allMenuWrap').is(':visible')){
			$('.headerWrap').addClass('on');
		}
	}
	$('.allMenuWrap').hide();
}


// header mouseleave
$('#header').mouseleave(function(event) {
	$(this).find('.headerWrap').removeClass('on');
	if($('.allMenuWrap').is(':visible') || sectionActive === 1 || sectionActive === 2){
		$(this).find('.headerWrap').addClass('on');
		$('.headerInner').attr('style', '');
		$('#gnb>ul>li').removeClass('on');
	}
});

// allmenu

	// gnb dim 효과
	var menuList = $('.menuList');
	var gnbMenu = $('.menuList > .menu');
	var gnbDim = $('#dim');

	$(gnbMenu).mouseenter(function() {
		gnbDim.show();
	}).mouseleave(function() {
		if ($(menuList).hasClass('menuOff')) {
			gnbDim.show();
		} else {
			gnbDim.hide();
		}
	});

	/*상단 전체메뉴*/
	var btnAll = $(".allMenuBtn");
	var lnbMenu = $(".allMenuCon h3");
	var menuCon = $(".menuCon");
	var allMenuWrap = $(".allMenuWrap");
	var closeAllMenu = $(".closeAllMenu");
	var gnbDim = $("#dim")
	var gnbDim2 = $("#dim2")
	allMenuWrap.hide();
	btnAll.click(function() {
		allMenuWrap.show();
		gnbDim.show();
		gnbDim2.show();
	});

	closeAllMenu.click(function() {
		menuList.removeClass('menuOff');
		allMenuWrap.hide();
		gnbDim.hide();
		gnbDim2.hide();
		//$(this).bb();
		$('#dim').css('display', 'block');
		$('.depth2').hide();
		$(this).children('.depth2').show();
	});

	lnbMenu.each(function(i) {
		$(this).click(function() {
			lnbMenu.removeClass('on');
			$(this).addClass('on');
			menuCon.hide();
			$(".menuCon:eq(" + i + ")").show();
		});
	});

	/*gnb 서브메뉴 활성화*/
	/*20170818 추가*/
	var menu = $('.menu > h2 > a');

	$(menu).on('focus mouseenter', function() {
				menu.removeClass('on');
				$(this).addClass('on');
				$('#dim').css('display', 'block');
				$('.depth2').hide();
				$(this).parent().parent().find('.depth2').show();
		});
	$(menu).on('mouseleave', function() {
		$('#dim').css('display', 'none');
		$('.depth2').hide();
		menu.removeClass('on');
	});



})
