
$(function(){
	
	$(".money_two>.btn").click(function(){
		$(".money_ul").show();
		$(".money_ul").slideDown();
	})
	
	$(".money_ul").hover(function(){
		$(".money_ul").show();
	},function(){
		$(".money_ul").slideUp();
	})
	
	
	
	$(".time_two>.btn").click(function(){
		$(".time_ul").show();
		$(".time_ul").slideDown();
	})
	
	$(".time_ul").hover(function(){
		$(".time_ul").show();
	},function(){
		$(".time_ul").slideUp();
	})
	
	
	
})
	






//	$(".money_ul>li").click(function(){
//		$(this).index()
//		$("#txt").val($(this).html());
//		$(".money_ul").hide();
//	})
	
