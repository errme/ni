$(function(){	
	//二级下拉菜单
	$(".menu li").hover(function(){$(this).children("div").show();$(this).children("a").addClass("on");},function(){$(this).children("div").hide();$(this).children("a").removeClass("on")});
		//index
	$(".index .part2 .pic").hover(
		function(){
			$(this).children(".bg").fadeIn();									   
		},function(){
			$(this).children(".bg").hide();									   
		}
	)
	
	//搜索
	$(".input1").focus(function(){
		var a = $(this).val();
		$(this).addClass("input_hover");
		$(this).val("");
	}).blur(function(){
		$(this).removeClass("input_hover");
	});	
})