//�׷��� ���̺�

function graphTable(){
	$('.graph-table table').css('display','none');
	$('.graph-table div.helpGuide').css('display','none');
	$('.graph-table .btn-botm input').addClass('open');

	function graphToggle(event){

		if($(this).parents('.graph-table').find('table').is(":hidden")){
			$(this).val('ǥ�ݱ�').removeClass("open").parents('.graph-table').find('table').show();
			$(this).val('ǥ�ݱ�').removeClass("open").parents('.graph-table').find('div.helpGuide').show();
			$("span.toggle").text('�󼼴ݱ�').removeClass("open").parents('.graph-table').find('table').show();
		} else {
			$(this).val('ǥ����').addClass("open").parents('.graph-table').find('table').hide();
			$(this).val('ǥ����').addClass("open").parents('.graph-table').find('div.helpGuide').hide();
			$("span.toggle").text('�󼼺���').addClass("open").parents('.graph-table').find('table').hide();
		}
		return false;
	}

	$(".graph-table .toggle").bind("click", graphToggle);
	$('.graph-table').prev().append('<span class="hidden">�׷��� ������ ���� ������ ���Ŀ� ǥ ������ �����˴ϴ�.</span>');
}

//��ư����
function spanButton(){
	$('span.button.mainBtn a').addClass("button").addClass("mainBtn").wrapInner('<span></span>').unwrap();
	$('span.button.subBtn a').addClass("button").addClass("subBtn").wrapInner('<span></span>').unwrap();
	$('span.button.midBtn a').addClass("button").addClass("midBtn").wrapInner('<span></span>').unwrap();
	$('span.button.lineBtn a').addClass("button").addClass("lineBtn").wrapInner('<span></span>').unwrap();
	$('span.button.grayBtn a').addClass("button").addClass("grayBtn").wrapInner('<span></span>').unwrap();
	$('span.button.slineBtn a').addClass("button").addClass("slineBtn").wrapInner('<span></span>').unwrap();
	$('span.button.sgrayBtn a').addClass("button").addClass("sgrayBtn").wrapInner('<span></span>').unwrap();
}

//���̺� tbl-list ���ټ� �ݿ�
function tbl_list(){
	var v_summary = $(".tbl-list, .tbl-board").attr("summary");
	var v_caption = ".tbl-list > caption, .tbl-board > caption";
	var v_hth = ".tbl-list thead th, .tbl-board thead th";
	var v_bth = ".tbl-list tbody th, .tbl-board tbody th";        //summaryüũ
	if(v_summary != true){
		var title = [];
		$(".tbl-list, .tbl-board").each(function(index, domEle){

			console.log(this);
			if ($(this).children("thead").length){
				$(this).find("thead tr th").each(function(){
					title.push($(this).text());
				});
				title = title.join(",")
				if($(this).hasClass('entbl')){
					 $(this).attr("summary","A "+title+" consisting of a table"); //����ȭ�鿡�� ���̺� entbl Ŭ������ �߰��ؼ� ����Ÿ��Ʋ�� ��ü�ؽ�Ʈ�� �߰�
				}else{
					if($(this).attr("summary") == undefined){
						$(this).attr("summary",title+" �� ������ ǥ�Դϴ�.");
					}
				};
				title = [];
			} else {
				$(this).find("th").each(function(){
					title.push($(this).text());
				});
				title = title.join(",")
				if($(this).hasClass('entbl')){
					 $(this).attr("summary","A "+title+" consisting of a table"); //����ȭ�鿡�� ���̺� entbl Ŭ������ �߰��ؼ� ����Ÿ��Ʋ�� ��ü�ؽ�Ʈ�� �߰�
				}else{
					if($(this).attr("summary") == undefined){
						$(this).attr("summary",title+" �� ������ ǥ�Դϴ�.");
					}
				};
				title = [];
			}
		});
	}
	//scopeüũ
	if($(v_hth).attr("scope") != true){
		$(v_hth).attr("scope","col");
	}
	if($(v_bth).attr("scope") != true){
		$(v_bth).attr("scope","row");
	}

}



//���� ���̺� ��ġ�� �ݱ�
function dtlView(){
	jQuery('.dtlView a').bind('click',function(){
		if(jQuery(this).parent().parent().next().css('display') == 'none'){
			jQuery('td.open a').text('���ĺ���');
			jQuery('td.open').attr('class','close');
			jQuery('.detailView.open').removeClass('open');
			jQuery(this).parent().parent().next().addClass('open');
			jQuery(this).parent().attr('class','open');
			jQuery(this).text('�ݱ�');
		}else{
			jQuery('td.open a').text('���ĺ���');
			jQuery('td.open').attr('class','close');
			jQuery('.detailView.open').removeClass('open');
		};
	});
}

//�󼼰˻����� ������
function tabMenu(){
	jQuery('.tabMenu li a').bind('click',function(){
			jQuery('.tabMenu li.on').removeClass('on');
			jQuery(this).parent().addClass('on');
	});

	 jQuery('.tab li a').bind('click',function(){
			jQuery('.tab li.on').removeClass('on');
			jQuery(this).parent().addClass('on');
	});
}

//�ſ����
function dic(){
	jQuery('.dic dd').hide();
	//jQuery('.dic dd:first').show();
	jQuery('.dic dt').bind('click',function(){
		if(jQuery(this).next().css('display') == 'none'){
			jQuery('.dic dd').slideUp(100);
			jQuery(this).next().slideDown(100);
		};
	});
}

//�󼼼��� ���̺� ����/�ݱ�
function detailWrap(){
	jQuery('.detailWrap').hide();
	jQuery('.setBtn a').bind('click',function(){
		if(jQuery('.detailWrap').css('display') == 'none'){
			jQuery('.detailWrap').show();
			jQuery('.setBtn img').attr('src',IMG_ROOT+'/img/bzw/report/btn_setting_on.gif');
			jQuery('.setBtn img').attr('alt','�󼼼��� �ݱ�');
			return false;
		}else{
			jQuery('.detailWrap').hide();
			jQuery('.setBtn img').attr('src',IMG_ROOT+'/img/bzw/report/btn_setting.gif');
			jQuery('.setBtn img').attr('alt','�󼼼��� ����');
			return false;
		};
	});
}

// �����Ϳ� FaQ & �ſ��㳻��
function tbl_board(){
	jQuery('.tbl-board .tit a').bind('click', function(){
		if(jQuery(this).parent().parent().next().css('display') == 'none'){
			jQuery('.detailView').hide();
			jQuery(this).parent().parent().next().show();
		}else{
			jQuery(this).parent().parent().next().hide();
		};
	});
}

// ������ ���� top5
function faq_top5(){
	jQuery('.faq-top5 .tit a').bind('click', function(){
		if(jQuery(this).parent().parent().next().css('display') == 'none'){
			jQuery('.detailView').hide();
			jQuery(this).parent().parent().next().show();
			jQuery('.faq-top5 .tit.on').removeClass('on');
			jQuery(this).parent().addClass('on');
		}else{
			jQuery(this).parent().parent().next().hide();
			jQuery(this).parent().removeClass('on');

		};
	});
}

function svcOpen(){
    $('.topMenu span.service').click(function(){
		var svc=$('.topMenu span.service');
		if(svc.hasClass("on")){
			$(this).removeClass("on");
			$(this).parent().find('.svcMenu').css("display","none");
			return false;
		}else{
			$(this).removeClass("on");
			$(this).addClass("on")
			$(this).parent().find('.svcMenu').css("display","block");
		return false;
		}
    });
}
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

	//���� �����Ͻ� ��� ����
	function sectionAnimating(active){
		//���� ���
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
		//�����Ǻ� ���
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

    // gnb dim ȿ��
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

    /*��� ��ü�޴�*/
    var btnAll = $(".allMenuBtn");
    var lnbMenu = $(".allMenuLnb li");
    var menuCon = $(".menuCon");
    var allMenuWrap = $(".allMenuWrap");
    var closeAllMenu = $(".closeAllMenu");

    allMenuWrap.hide();
    btnAll.click(function() {
      menuList.addClass('menuOff');
      allMenuWrap.show();
      gnbDim.show();
    });

    closeAllMenu.click(function() {
      menuList.removeClass('menuOff');
      allMenuWrap.hide();
      gnbDim.hide();
    });

    lnbMenu.each(function(i) {
      $(this).click(function() {
        lnbMenu.removeClass('on');
        $(this).addClass('on');
        menuCon.hide();
        $(".menuCon:eq(" + i + ")").show();
      });
    });
});



/* n�� ���񽺸� */
function svcMap(){
	var i=0;
	for(i=1;i<=10;i++){
		(function(i){
		$('.svc'+i).click(function(){
			$(this).parent().parent().parent().find('div').removeClass("on");
			$(this).parent().addClass("on");
			$('.resultArea').css("display","none");
			$('#svc'+i).css("display","block");
		return false;
		});
		})(i);
	}
}
/*���� tab*/
function tabIntro(){
	$('.tab31 a').click(function(){
			$(this).parent().parent().find('li').removeClass('on');
			$(this).parent().addClass('on');
			$('.hidden').remove();
			$('.tab31').append('<span class="hidden">���� ���õ� �� ������</span>');
			$('.history').hide();
			$('#his01').show();

			return false;
	});

	$('.tab32 a').click(function(){
			$(this).parent().parent().find('li').removeClass('on');
			$(this).parent().addClass('on');
			$('.hidden').remove();
			$('.tab32').append('<span class="hidden">���� ���õ� �� ������</span>');
			$('.history').hide();
			$('#his02').show();
			return false;
	});

	$('.tab33 a').click(function(){
			$(this).parent().parent().find('li').removeClass('on');
			$(this).parent().addClass('on');
			$('.hidden').remove();
			$('.tab33').append('<span class="hidden">���� ���õ� �� ������</span>');
			$('.history').hide();
			$('#his03').show();
			return false;
	});
}

//function choice(){
//	$('select.styled').customSelect(); // select ��Ÿ�� js
//}


/*����������޹�ħ tab*/
function privacy(){
	$('.menu31 a').click(function(){
			$(this).parent().parent().find('li').removeClass('on');
			$(this).parent().addClass('on');
			$('.hidden').remove();
			$('.menu31').append('<span class="hidden">���� ���õ� �� ������</span>');
			$('.tabArea').hide();
			$('#tabArea01').show();

			return false;
	});

	$('.menu32 a').click(function(){
			$(this).parent().parent().find('li').removeClass('on');
			$(this).parent().addClass('on');
			$('.hidden').remove();
			$('.menu32').append('<span class="hidden">���� ���õ� �� ������</span>');
			$('.tabArea').hide();
			$('#tabArea02').show();
			return false;
	});

	$('.menu33 a').click(function(){
			$(this).parent().parent().find('li').removeClass('on');
			$(this).parent().addClass('on');
			$('.hidden').remove();
			$('.menu33').append('<span class="hidden">���� ���õ� �� ������</span>');
			$('.tabArea').hide();
			$('#tabArea03').show();
			return false;
	});
}



function setting(){
    $(".settingArea .inputArea input").change(function(){
		$(this).parent().parent().parent().parent().find('div').removeClass("select");

        if($(this).is(":checked")){
			$(this).parent().parent().parent().addClass("select");
		}

    });

}
function clicktofavi(){
	//alert("��"+$("input[alt*=���ã��]").attr("src")+"/"+BASE_MENU_ID);
	var paramForm = JUtilForm.createForm("paramForm2");
	appendHidden(paramForm, 'MENU_ID', BASE_MENU_ID);
	var imgatr = $("input[alt*=���ã��]");
	var imgsrc = imgatr.attr("src");
	var imgmode = "";
	if(imgsrc.indexOf("_add.gif") != -1){
		appendHidden(paramForm, 'MODE', "C");
		imgmode = "C";
	}else{
		appendHidden(paramForm, 'MODE', "D");
		imgmode = "D";
	}
	if(imgmode == "D"){
		if(!confirm("���ã�⸦ �����Ͻðڽ��ϱ�?")) return false;
	}
	callAjax(paramForm, "BZWCMNMBR01003AM",function(data){
		if(imgmode == "C"){
			//imgatr.attr("src", imgsrc.replaceAll("_add.gif", "_del.gif"));
			imgatr.attr("src", IMG_ROOT+"/img/bzw/report/favi_del.gif");
			imgatr.attr("alt", "���ã�� ����");
    		Message.alert("���ã�⿡ �߰��Ǿ����ϴ�.\n�߰��Ͻ� ������ ������Ű�̿��� Ȯ�� �����մϴ�.");
		}else{
			imgatr.attr("src", IMG_ROOT+"/img/bzw/report/favi_add.gif");
			imgatr.attr("alt", "���ã�� �߰�");
    		Message.alert("���ã�Ⱑ �����Ǿ����ϴ�.");
		}
	});
}
function maxtofavi(){
	Message.alert("���ã��� �ִ� 12������ ��� �����մϴ�.\n������Ű�̸��ο��� ���� Ȯ�� �� ������ �����մϴ�.");
	return false;
}

//�޴���ġ Ȯ��: ��� bar�� ǥ��
function locationMenu(){
	var strMENU_ID = BASE_MENU_ID.substring(3, 6);

	if (strMENU_ID == "CRD"||strMENU_ID == "CAD"||strMENU_ID == "IFM"||strMENU_ID == "FMY"||strMENU_ID == "AST")
        $(".menu:eq(0)").addClass('on');
	else if (strMENU_ID == "MYZ")
        $(".menu:eq(1)").addClass('on');
	else if (strMENU_ID == "PCS"||strMENU_ID == "FCS"||strMENU_ID == "CRS"||strMENU_ID == "INQ")
        $(".menu:eq(2)").addClass('on');
	else if (strMENU_ID == "PNS"||strMENU_ID == "CDS"||strMENU_ID == "FPS"||strMENU_ID == "CSS"||strMENU_ID == "PSS"||strMENU_ID == "SSS"||strMENU_ID == "VVV"||strMENU_ID == "WSS"||strMENU_ID == "PRT")
        $(".menu:eq(3)").addClass('on');
}


$(document).ready(function() {

    // report Menu

    var snb = $('div#snb .report,div.sub');
    var sItem = snb.find('>ul>li');
    var ssItem = snb.find('>ul>li>ul>li');
    var focusItem = snb.find('>ul>li[class=active]>ul>li');


    var lastEvent = null;

    sItem.find('>ul').css('display','none');
    snb.find('>ul>li>ul>li[class=active]').parents('li').attr('class','active');
    snb.find('>ul>li[class=active]').find('>ul').css('display','block');

	//���콺 ���Խ� �����׸� remove
    $('.depth2 > li >a').on('mouseenter', function(){
    	ssItem.removeClass('active');
    	ssItem.removeClass('on');
    });

		// 20150928 �߰�
    $('.depth2 > li').on('mouseenter', function(){
    	try{
    		$(this).focus(function(){
    			alert("bbb");
    		});
    		var wdH = $(window).innerHeight(),
			dp3X = $(this).find('.depth3').offset(),
			dp3H = $(this).find('.depth3').innerHeight(),
			dp3Max = dp3X.top+dp3H;
    		ssItem.removeClass('on');
	       if(dp3Max >= wdH){
	    	   $(this).find('.depth3').css({'top':'auto','bottom':'0'});
		   }else{
		   	return false;
		   }
    	}catch(e){}
    });

    function snbToggle(event){
        var t = $(this);
        if (this == lastEvent) return false;
        lastEvent = this;
        setTimeout(function(){ lastEvent=null }, 200);

        if (t.next('ul').is(':hidden')) {
            sItem.find('>ul').slideUp(100);
            t.next('ul').slideDown(100);
        } else if(!t.next('ul').length) {
            sItem.find('>ul').slideUp(100);
        } else {
            t.next('ul').slideUp(100);
        }

        if (t.parent('li').hasClass('active')){
            t.parent('li').removeClass('active');
        } else {
            sItem.removeClass('active');
            t.parent('li').addClass('active');
        }
    }



    function snbFocus(event){
        var t = $(this);
        if (this == lastEvent) return false;
        lastEvent = this;
        setTimeout(function(){ lastEvent=null }, 200);

        if (t.next('ul').is(':hidden')) {
            sItem.find('>ul').slideUp(100);
            t.next('ul').slideDown(100);
        } else if(!t.next('ul').length) {
            sItem.find('>ul').slideUp(100);
        } else {
            t.next('ul').slideUp(100);
        }

        if (t.parent('li').hasClass('active')){
            t.parent('li').removeClass('active');
        } else {
            sItem.removeClass('active');
            t.parent('li').addClass('active');
        }
    }

    snb.find('>ul>li>ul').prev('a').click(snbToggle).focus(snbToggle).append('<span class="i"></span>');

    function depth3(){
        if (this == lastEvent) return false;
        lastEvent = this;
        setTimeout(function(){ lastEvent=null }, 200);

// modify start
		if ($(this).next('.onArrow').is(':hidden')) {
			var wHeight = $(window).height();
			var clickY = event.clientY;
			var totalHeight = wHeight - 100;
			var myPosition = wHeight - clickY;


			if(myPosition < 100){
				var dep3 = $(".report ul .active .depth2 li.on .depth3").height();
				var subTop = dep3 - 18 ;
				$('.depth3').css("border-color","red"); //test
				$('.depth3').css({top:-subTop});
				snb.find('>ul>li>ul>li>ul').hide().prev('.onArrow').hide();
				$(this).next('.onArrow').show().next('.depth3').show();
				return false;

			}else{
				snb.find('>ul>li>ul>li>ul').hide().prev('.onArrow').hide();
				$(this).next('.onArrow').show().next('.depth3').show();
				$('.depth3').css({top:-1});
				$('.depth3').css("border-color","blue"); //test

		}

//modify End
		}else {
			$(this).next('.onArrow').hide().next('.depth3').hide();
			$('.depth3').css({top:-'1px'});
		}
    };

		//$('.depth2>li').bind('focusin',function(){$(this).find('.depth3').css('display','block')}) //20150910 ����
		//$('.depth2>li>ul.depth3').bind('focusout',function(){$(this).css('display','none')}) //20150910 ����

	var imgatr = $("input[alt*=���ã��]");
	var imgsrc = imgatr.attr("src");// null;
	if(imgsrc != null){
		if(imgsrc.indexOf("_add.gif") != -1){
		    //$("input[src*=favi_add.gif]");
			var paramForm = JUtilForm.createForm("paramForm2");
			var strMENU_ID = BASE_MENU_ID;
			if(strMENU_ID == "" || strMENU_ID == null){
				strMENU_ID = "99";
			}
			appendHidden(paramForm, 'MENU_ID', strMENU_ID);
			appendHidden(paramForm, 'MODE', "R");

			callAjax(paramForm, "BZWCMNMBR01003AM",function(data){
				if(data.RES_CNT < 1 || data.RES_CNT == null || data.RES_CNT == ""){
					appendHidden(paramForm, 'MENU_ID', "");
					appendHidden(paramForm, 'MODE', "R");
					callAjax(paramForm, "BZWCMNMBR01003AM",function(data){
						if(data.RES_CNT > 11 && data.RES_CNT != null && data.RES_CNT != ""){
							imgatr.attr("onclick", "maxtofavi()");
						}else{
							imgatr.attr("onclick", "clicktofavi()");
						}
					});
				}else{
					imgatr.attr("onclick", "clicktofavi()");
					imgatr.attr("src", IMG_ROOT+"/img/bzw/report/favi_del.gif");
					imgatr.attr("alt", "���ã�� ����");
				}
			});
		}
	}

    function snbToggle(event){
        var t = $(this);
        if (this == lastEvent) return false;
        lastEvent = this;
        setTimeout(function(){ lastEvent=null }, 200);
        if (t.next('ul').is(':hidden')) {
            sItem.find('>ul').slideUp(100);
            t.next('ul').slideDown(100);
        } else if(!t.next('ul').length) {
            sItem.find('>ul').slideUp(100);
        } else {
            t.next('ul').slideUp(100);
        }

        if (t.parent('li').hasClass('active')){
            t.parent('li').removeClass('active');
        } else {
            sItem.removeClass('active');
            t.parent('li').addClass('active');
        }
    }

    function snbFocus(event){
		if (focusItem.hasClass('active')){
	    	ssItem.removeClass('active');
	    	ssItem.removeClass('on');
	    	$(this).addClass('active');
	    } else {
	    	ssItem.removeClass('active');
	        $(this).addClass('active');
	    }
    }

    snb.find('>ul>li>ul').prev('a').click(snbToggle).focus(snbToggle).append('<span class="i"></span>');
    snb.find('>ul>li>ul>li').focusin(snbFocus);

    $('#content').mousedown(function(event) {
    	ssItem.removeClass('active');
    	ssItem.removeClass('on');
    	$('.headerWrap').removeClass('on');
    	$('#gnb>ul>li').removeClass('on');
	});

    // FAQ
    var article = $('.faq .article, .shopNews .article');
    article.addClass('hide01');
    article.find('.a, .news_con').slideUp(100);

    function faqToggle(event){
        var myArticle = $(this).parents('.article:first');
        if (this == lastEvent) return false;
        lastEvent = this;
        setTimeout(function(){ lastEvent=null }, 200);

        if (myArticle.hasClass('hide01')) {
            article.addClass('hide01').removeClass('show');
            article.find('.a, .news_con').slideUp(100);
            myArticle.removeClass('hide01').addClass('show');
            myArticle.find('.a, .news_con').slideDown(100);
            return false;
        } else {
            myArticle.removeClass('show').addClass('hide01');
            myArticle.find('.a, .news_con').slideUp(100);
            return false;
        }
    }
    article.find('.trigger').click(faqToggle);

    $('.faq .hgroup .trigger , .shopNews .hgroup .trigger').click(function(){
        var hidden = $('.faq .article.hide01 , .shopNews .article.hide01').length;
        if(hidden > 0){
            article.removeClass('hide01').addClass('show');
            article.find('.a').slideDown(100);
        } else {
            article.removeClass('show').addClass('hide01');
            article.find('.a').slideUp(100);
        }
    });

		$("<span class=\"hidden\">����</span>").appendTo(".faq .article .q");
    $("<span class=\"hidden\">�亯</span>").appendTo(".faq .article .a");

 // ��ǰ������? - 0701 �߰� -
    var article = $('.inforkind .article, .shopNews .article');
    article.addClass('hide01');
    article.find('.a, .news_con').slideUp(100);

    function faqToggle(event){
        var myArticle = $(this).parents('.article:first');
        if (this == lastEvent) return false;
        lastEvent = this;
        setTimeout(function(){ lastEvent=null }, 200);

        if (myArticle.hasClass('hide01')) {
            article.addClass('hide01').removeClass('show');
            article.find('.a, .news_con').slideUp(100);
            myArticle.removeClass('hide01').addClass('show');
            myArticle.find('.a, .news_con').slideDown(100);
            return false;
        } else {
            myArticle.removeClass('show').addClass('hide01');
            myArticle.find('.a, .news_con').slideUp(100);
            return false;
        }
    }
    article.find('.trigger').click(faqToggle);

    $('.inforkind .hgroup .trigger , .shopNews .hgroup .trigger').click(function(){
        var hidden = $('.inforkind .article.hide01 , .shopNews .article.hide01').length;
        if(hidden > 0){
            article.removeClass('hide01').addClass('show');
            article.find('.a').slideDown(100);
        } else {
            article.removeClass('hide01').addClass('hide01');
            article.find('.a').slideUp(100);
        }
    });


 // Sub Menu
   /* var sub = $('div.sub');
    var subItem = sub.find('>ul>li');

    for(i=0; subItem.length > i ;i++){
        if(subItem.eq(i).find('>a').next().length){
            subItem.eq(i).find('>a').append('<span class="i"></span>');
        };
    };

        subItem.find('>a').focus(function(){
            subItem.removeClass('active');
            $(this).parent().addClass('active');
            $('.depth2').hide();
            $(this).next().show();
        });*/


 //�׷��� ���̺�
	graphTable();

	$('.nshopMain .visualWrap .visualBanner .anythingControls .btn').remove();


	//���̺� tbl-list ���ټ� �ݿ�
	tbl_list();
	// �󼼰˻����� ������
	tabMenu();

	//��ư����
	spanButton();

	//�ſ����
	dic();

	// design Select Box
	//choice();

	//���� ���̺� ��ġ�� �ݱ�
	dtlView();

	//N�� ���񽺸�
	svcMap();

	//gnb();

	//���񽺴�����
	svcOpen();

	//�󼼼��� ���̺� ����/�ݱ�
	detailWrap();


	// �����Ϳ� FaQ & �ſ��㳻��
	tbl_board();

	/*����tab*/
	tabIntro();

	// ������ ���� top5
	faq_top5();

	//���ܼ��� ����
	setting();


	//�������� ��� ��
	privacy();

	//��ܸ޴���
	locationMenu();

    //����� �̹��� Ŭ��
    jQuery('.thumImg a').on('click',function(){
        jQuery('.thumImg a').removeClass('active');
        jQuery(this).addClass('active');
        var idx = jQuery(this).index();
        var soc =  jQuery('#orgImgSrc'+idx).val();
        var soa =  jQuery('#orgImgAlt'+idx).val();
        jQuery('.sampleArea img').attr('src',soc);
        jQuery('.sampleArea img').attr('alt',soa);
    });

  //�·� �̵�
    $('.thumArea .prev').on('click',function(){
    	$(".thumImg > li > a").each(function(idx){
    		if (idx >5) {
		        jQuery('.thumImg').animate({left:'0px'},500);
    		}
    	});
    });

    //��� �̵�
    $('.thumArea .next').on('click',function(){
    	$(".thumImg > li > a").each(function(idx){
    		if (idx >5) {
		        jQuery('.thumImg').animate({left:'-816px'},500);
    		}
    	});
    });

	/* n�� ���� */
    function nTab(event){
        $(".allProd .nTab h3").removeClass('active');
        $(".allProd .nTab .tabView").hide();
        $(this).parent("h3").addClass('active');
        $(this).parent("h3").next('.tabView').show();
        return false;
    };
    $('.allProd .nTab h3 > a').click(nTab).focus(nTab);

    $(".nprodList dd .service .detailView").css('display','none');
    $('.nprodList dd .service .more a').click(function() {
        $(this).parent(".more").parent(".svcInfo").next('.detailView').show();
        return false;
    });

    $('.nprodList dd .service .detailView .close a').click(function() {
        $(this).parent(".close").parent(".detailView").hide();
        return false;
    });

    //�������� ����
    jQuery('input[name="pay"]').bind('click',function(){
        var chkId = jQuery(this).attr('id');
//        alert(chkId);
        jQuery('.nPay .payChk p').hide();
        jQuery('#txt'+chkId).show();
    });


    // //���̵�޴� ����
    // jQuery('#sideMenu .folding a').on('click',function(){
		// jQuery('.folding').animate(({right:'0px'}),250);
    //     jQuery('#sideMenu .open').delay(250).animate(({right:'0px'}),250,function(){
    //         jQuery('#sideMenu').animate(({right:'0px'}),250);
    //     });
    // });
    // //���̵�޴� �ݱ�
    // jQuery('#sideMenu .open .funcBtn a').on('click',function(){
    //     jQuery('#sideMenu').animate(({right:'-77px'}),250,function(){
    //         jQuery('#sideMenu .open').animate(({right:'-43px'}),250);
    //         jQuery('.folding').delay(250).animate(({right:'77px'}),250);
    //     });
    // });
    // 160905 �����ټ����� ����
    //���̵�޴� ����
    jQuery('#sideMenu .folding a').on('click', function() {
        jQuery('.folding').animate(({
            right: '0px'
        }), 250, function(){
          $(this).hide();
        });
        jQuery('#sideMenu .open').delay(250).show().animate(({
            right: '0px'
        }), 250, function() {
            jQuery('#sideMenu').animate(({
                right: '0px'
            }), 250);
        });
    });
    //���̵�޴� �ݱ�
    jQuery('#sideMenu .open .funcBtn a').on('click', function() {
        jQuery('#sideMenu').animate(({
            right: '-77px'
        }), 250, function() {
            jQuery('#sideMenu .open').animate(({
                right: '-43px'
            }), 250).hide();
            jQuery('.folding').delay(250).animate(({
                right: '77px'
            }), 250,function(){
              console.log('aa');
            }).show();
        });
    });
    // //160905 �����ټ����� ����

    //���ú� ��ǰ ����Ʈ
    jQuery('.todayView .up a').on('click',function(){
        var topHei = jQuery('.todayImg ul').position().top;
        var totLangth = '-' + ((jQuery('.todayImg ul li').length-3)*110+1);
        topHei = topHei - 110;
        if(topHei > totLangth){
            jQuery('.todayImg ul').animate(({top:topHei}),500);
        };
    });
    jQuery('.todayView .down a').on('click',function(){
        var topHei = jQuery('.todayImg ul').position().top;
        topHei = topHei + 110;
        if(topHei < 1){
            jQuery('.todayImg ul').animate(({top:topHei}),500);
        };
    });

});

// ȸ��Ұ� ��â ����
function openWindow(){
	window.open("http://www.niceinfo.co.kr");
};
// �������� ��â ����
function openWindow2(){
	window.open("http://as82.kr/nice/");
};

// �������� �Ľſ���ȸ  ��ȸ���ſ뺸�� ����ȸ
function noneMemmberNCS(param){
	if(LOGIN_YN == "N"){
		var paramForm = JUtilForm.createForm("paramForm");
		ExtLayerPop.load(paramForm,param,'BZWCPUCPU16001VP');
	}else{
		if(confirm("���Բ����� ȸ������ �α��εǾ� �ִ� �����Դϴ�. ��ȸ������ ���� �̿��� ���ؼ��� �α׾ƿ� �� �̿� �ٶ��ϴ�. �α׾ƿ� �Ͻðڽ��ϱ�?")){
			MAIN_MENU_ID = "BZWCSCCSC00";
			doLogout();
		}
	}
};
function selfCertSuccess(form, fun){
//	var resid1 = $("#paramForm").find("[name=res1]").val();
//	var resid2 = $("#paramForm").find("[name=res2]").val();
//	var userNm = $("#paramForm").find("[name=userNm]").val();
	var paramForm = JUtilForm.createForm("paramForm2");
//	appendHidden(paramForm, 'resId1', $("#resId1").val());
//	appendHidden(paramForm, 'resId2', $("#resId2").val());
//	appendHidden(paramForm, 'userNm',  $("#user_name").val());

	callAjax(form, "BZWOCCNSE05002AM",function(data){
		if(data.sucYn == "N"){
			alert(data.result);
			return;
		}
		if(data.RESULT_CD =="00" ){
			appendHidden(paramForm, 'userNm', data.userNm);
			appendHidden(paramForm, 'resId', data.resId);
			appendHidden(paramForm, 'noneMbrid', data.noneMbrid);
			changeMenu(paramForm, "BZWOCCNCS05", "BZWOCCNCS05001VM", "BZWOCCNCS05001VM");
			callMenu(paramForm);
		}else{
			alert("��ȿ�� ������ �����ϴ�.");
			return;
		}
	});
	fun();
};

function selfCertError(){
	Message.alert("���������� �����߽��ϴ�.","",function(){
	});
	return false;
};
//function getResid(resid1, resid2, name) {
//	appendHidden($("#paramForm"), 'res1', resid1);
//	appendHidden($("#paramForm"), 'res2', resid2);
//	appendHidden($("#paramForm"), 'userNm', name);
//}

// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

//2015-08-12: JY
$(document).ready(function(){

	$(".btnFunc li a").click(function(){
		if($(".btnFunc li.next").hasClass("on")){
			$(".prevVer").show();
		}else{
			$(".prevVer").hide();
		}
	});

	//���񽺰��̵� guideSlide
	var liWidth = $(".stepWrap>ul>li").outerWidth();
	$(".btnStep li").click(function(){
		var idx =$(this).index();
		$(this).siblings("li").removeClass("on");
		$(this).addClass("on");
		$(this).parent(".btnStep").next().children().stop(true,true).animate({marginLeft:-idx*liWidth},500);
		return false;
	});

	$(".guideSlide .next").click(function(){
		var _leng = $(this).parent().children(".btnStep").children("li").length;
		var _ulMar = -(liWidth*(_leng-1));

		if(!$(".stepWrap>ul").is(":animated")){
			var _marL = parseInt($(this).siblings(".stepWrap").children().css("margin-left"));
			if(_marL>_ulMar){
				$(this).siblings(".stepWrap").children().stop(true,true).animate({marginLeft:"-=800px"},500);
			}
			var _numIdx= -(_marL/liWidth);
			var i = $(this).siblings(".btnStep").children(':last-child').index();
			if(_numIdx<i){
				$(this).siblings(".btnStep").find("li").removeClass("on");
				$(this).siblings(".btnStep").find("li").eq(_numIdx+1).addClass("on");
			}
		}
	});

	$(".guideSlide .prev").click(function(){
		if(!$(".stepWrap>ul").is(":animated")){
			var _marL = parseInt($(this).siblings(".stepWrap").children().css("margin-left"));
			if(_marL<0){
				$(this).siblings(".stepWrap").children().stop(true,true).animate({marginLeft:"+=800px"},500);
			}
			var _numIdx= -(_marL/liWidth);
			if(_numIdx>0){
				$(this).siblings(".btnStep").find("li").removeClass("on");
				$(this).siblings(".btnStep").find("li").eq(_numIdx-1).addClass("on");
			}
		}

	});
	$(".guideTab li a").click(function(){
		$(".guideTab li").removeClass("on");
		$(this).parent("li").addClass("on");
		var _addC = $(this).parent("li").index()+1;

		$(this).parents(".step").removeClass("tab01").removeClass("tab02").removeClass("tab03");
		$(this).parents(".step").addClass("tab0"+_addC);
		return false;
	});

	$(".agreeArea .tab li").click(function(){
		var viewTab = $("a",this).attr("href");
		$(".tabArea").hide();
		$(viewTab).show();
		return false;
	});
});
