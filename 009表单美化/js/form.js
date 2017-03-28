$(function(){
	var $radio = $("[name=radio]");
	
	
	$radio.each(function(){
		
		var $this = $(this);
	
		var $span = $(this).addClass("hidden").wrap('<span class="radio_off"></span>').parent();
		
		$span.on("click",function(){
			/*if($(this).hasClass("radio_on")){
				$this.prop("checked",false);
				$(this).removeClass("radio_on");
			}else {
				$this.prop("checked",true);
				$(this).addClass("radio_on");
			}*/
			
			$this.trigger("click");

			if($this.is(":checked")){  //true
				$this.prop("checked",true).attr("value","on");
				$(this).addClass("radio_on");
				
			}else {
				$this.prop("checked",false).attr("value","off");
				$(this).removeClass("radio_on");
			}
			
			
			
		});
		
		
	});
	
	
	var $radio1 = $("[name=sex]");
	$radio1.each(function(){
		var $this = $(this);
		var $span = $(this).addClass("hidden").wrap('<span class="formRadio"></span>').parent();
		if($this.is(":checked")){
			$span.addClass("formRadio_curr");
		}else {
			$span.removeClass("formRadio_curr");
		}
		
		
		
		$span.on("click",function(){
			
			$(this).children("input").prop("checked",true);
			
			$(".formRadio").removeClass("formRadio_curr");
			$(this).addClass("formRadio_curr");
			
		});
		
		
		
		
	});
	
	
	//模拟select
	var $select = $("select");
	
	$select.each(function(){
		var $this = $(this);
		var _this = this;
		
		var $width = $(this).width();
		
		
		var $wrap = $this.addClass("hidden").wrap('<div class="divSelect"></div>').parent();
		$wrap.prepend('<span></span><i></i><ul></ul>');
		
		var $span = $("span",$wrap).width($width);
		var $Ul = $("ul",$wrap);

		
		$("option",$this).each(function(){
			var oLi = '<li>' + $(this).text() + '</li>';
			$Ul.append(oLi);
		});
		
		
		$("span,i",$wrap).on("click",function(e){
			e.stopPropagation();
			$(".divSelect ul").slideUp();
			
			if($("li",$Ul).length > 5){
				$Ul.css({
					height : "150",
					overflow : "auto"
				});
			}
			$(this).siblings("ul").stop(true,false).slideDown();
		});
		
		
		$("li",$Ul).on("click",function(){
			var index = $(this).index();
			
			$("option",$this).eq(index).prop("selected",true).siblings("option").prop("selected",false);
			
			
			$(this).addClass("curr").siblings().removeClass("curr");
			$("span",$wrap).text($(this).text());
			$(this).parent().slideUp();
			
	
		});
		$("li",$Ul).eq(0).trigger("click");
		
		$(document).on("click",function(){
			
			$(".divSelect ul").slideUp();
			
		});
		
		
		
		
		
	});
	
	
	
	
	
	
	
	
	
	
	$("#btn").on("click",function(){
		var province = $("#province").val();
		var city     = $("#city").val();
		var county   = $("#county").val();
		
		var html = "省：" + province + "市：" + city + "区/县：" + county;
		
		console.log(    html      )
		
		
	});
	
	

	
	
	
	
})
