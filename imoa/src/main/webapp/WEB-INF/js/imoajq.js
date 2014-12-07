jQuery(function($){

	// 아이모아 아이콘 메뉴 토글
	$(".gnb1 > h1 > a").bind("click" , function(){
		var iconMenu = $(".gnb1Inner");
		iconMenu.slideToggle(200);
		$(".gnb2Inner").hide();
		return false;
	});

	// 아이모아 슬라이드 아이콘 메뉴 옵션
	 $('.slider_gnb').bxSlider({
	 	slideWidth: 72,
	 	slideMargin: 25,
	 	minSlides: 1,
	 	maxSlides: 8,
		infiniteLoop: false,
		hideControlOnEnd: true,
		pager: false
	 });

	$(".photo_slider").bxSlider({
		minSlides: 1,
		maxSlides: 1,
		slideWidth: 671,
		pager: false
	});

	 // 아이모아 아이콘 메뉴 서브
	 var icon_menu = $(".slider_gnb a[href*='target']"),
	 	 icon_subMenu = $(".gnb1Inner div[id*='target']");

	 $(".gnb1Inner > .sub_menu").hide();
	 icon_menu.on("mouseover" , function(){
	 	var iconMenuID = $(this).attr("href"),
	 		iconMenuSub = $(iconMenuID);
	 		console.log(iconMenuID);
	 		icon_subMenu.hide();
	 		iconMenuSub.show();
	 		icon_menu.removeClass("on");
	 		$(this).addClass("on");
	 });
	 $(".header, .gnb1Inner, .gnb2Inner").on("mouseleave" , function(){
	 	$(".gnb1Inner").hide();
	 	$(".gnb2Inner").hide();
	 });

	// 마이앱 보기 GNB
	$(".gnb2 > h1 > a").bind("click" , function(){
		var innerBox = $(".gnb2Inner");
		innerBox.slideToggle(200);
		$(".gnb1Inner").hide();
		return false;
	});
	$(".gnb2_1depth > li > a").bind("mouseover focus" , function(){
		// console.log("A");
		var subMenu = $(this).next("ul");
		$(".gnb2_1depth > li > a").removeClass("on");
		$(this).addClass("on");
		$(".gnb2_1depth > li > ul").hide();
		subMenu.show();
		subMenu.mouseover(function(){
			$(this).parent().addClass("on");
		});
	});
	
	$(".tbl_type01 td:first-child, .tbl_type01 th:first-child").addClass("fst");
	$(".tbl_type01 td:last-child, .tbl_type01 th:last-child").addClass("lst");

	$(".carte_wrap table td:first-child, .carte_wrap table th:first-child").addClass("fst");
	$(".carte_wrap table td:last-child, .carte_wrap table th:last-child").addClass("lst");

	//부가기능 BTN
	$(".btn_pack.orange").click(function(){
		$(this).find(".add_fn").toggle();
	});

	//출력버튼 레이어 BTN
	$(".add_fn").hide();
	$(".btn_pack.print").click(function(){
		$(this).find(".add_fn").toggle();
	});

	/* 기능성 tab */
	var $tab = $('ul.tabType li');
    $('.tab_content').hide(); 
	$('.tab_content:first').show();  
	$('ul.tabType li:first').addClass('on'); 
	
	$tab.click(function() {
		$tab.removeClass('on');
		$(this).addClass('on');
		$('.tab_content').hide(); 
		var activeTab = $(this).find('a').attr('href');
		$(activeTab).fadeIn(500); 	
		return false;
	});	

	$(".btn_toggle").on("click" , function(){
		$(".educational_wrap").toggle();
		if (this.text == "상세닫기") {
			$(this).text("상세열기");
		}else{
			$(this).text("상세닫기");
		};
	});
	

	// main tab
	$(".tab_cont").hide();
	$(".tab_cont:first").show();
	var tabAnchor = $(".login_tab a[href*='tab']"),
		tabContent = $(".contents div.tab_cont[id*='tab']");

	// sub tab
	$(".sub_tab_cont").hide();
	$(".sub_tab_cont").eq(0).show();
	$(".sub_tab_cont").eq(2).show();
	var subTabAnchor = $(".sub_tab a[href*='sub_tab']");
		subContent = $(".sub_tab_cont[id*='sub_tab']");

		// main tab click
		tabAnchor.on("click" , function(){
			var menuID = $(this).attr("href"),
				tgCont = $(menuID);
				tabContent.hide();
				tgCont.fadeIn();
				tabAnchor.removeClass("on");
				$(this).addClass("on");
				$(".sub_tab_cont").eq(0).show();
				$(".sub_tab_cont").eq(2).show();
				subTabAnchor.removeClass("on_sub");
				subTabAnchor.eq(0).addClass("on_sub");
				subTabAnchor.eq(2).addClass("on_sub");
				return false;
		});

		// sub tab click
		subTabAnchor.on("click" , function(){
			var sub_tabID = $(this).attr("href"),
				sub_tg_con = $(sub_tabID);
				subContent.hide();
				sub_tg_con.fadeIn();
				subTabAnchor.removeClass("on_sub");
				$(this).addClass("on_sub");
				return false;
		});

	$.fn.faqList = function(){
		this.each(function(){				
			var faqQ = $('.faqBox').find('>dt>a');
			var faqA = $('.faqBox').find('>dd');
			faqA.hide();
			faqQ.click(function(){
				var target = $(this);
				target.toggleClass('on');
				target.parent('dt').find('+dd').slideToggle();
			});
		})
	}

});

$(document).ready(function () {
	$('.faqBox').faqList();
});
