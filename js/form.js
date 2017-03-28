$(function(){
	//switch 开关
	var $switch = $("[name=switch]");
	var $switchSpan = $switch.wrap("<span class='switch_off'></span>").parent();
	var $switchEm = $switch.after("<em class='btn_off'></em>").siblings();
	switchBtn($switch);
	
	//radio 按钮
	var $radio = $("input:radio");
	var $radioSpan = $radio.wrap("<span class='radio_off'></span>").parent();
	radioBtn($radio);
	
	//checkbox 按钮
	var $checkbox = $("[name=checkbox]");
	var $checkboxSpan = $checkbox.wrap("<span class='checkbox_off'></span>").parent();
	checkboxBtn($checkbox);
	
	//selset 下拉菜单
	var $select = $("select");
	selectBtn($select,$("#submit"))
})

//switch 开关
function switchBtn(obj){
	obj.each(function(){
		var $this = $(this);
		$this.parent().on("click",function(){
			if($this.is(":checked")){
				obj.siblings().removeClass("btn_on");
//				$em.css("right","-30px");
				obj.parent().removeClass("switch_on");
				$this.prop("checked",false);
			}else{
				obj.siblings().addClass("btn_on");
//				$em.css("right","60px");
				obj.parent().addClass("switch_on");
				$this.prop("checked",true);
			}
		})
	})
}

//radio 按钮
function radioBtn(obj){
	obj.each(function(){
		var $this = $(this);
		var $input = $("input[name=" + $this.attr('name') + "]");
		$this.parent().on("click",function(){
			$this.prop("checked",true);
			$input.parent().removeClass("radio_on");
			$(this).addClass("radio_on");
		})
	})
}

//checkbox 按钮
function checkboxBtn(obj){
	obj.each(function(){
		var $this = $(this);
		var index = $(this).index();
		$this.parent().on("click",function(){
			if($this.is(":checked")){
				$(this).removeClass("checkbox_on");
				$this.prop("checked",false);
			}else{
				$(this).addClass("checkbox_on");
				$this.prop("checked",true);
			}
		})
		$this.parent().next().on("click",function(){
			$this.parent().trigger("click")	
		})
	})
	
}

//selset 下拉菜单
function selectBtn(obj,hand){
	obj.each(function(){
		var $this = $(this);
		var $width = $(this).width();
		var $div = $this.wrap("<div class='divSelect'></div>").parent();
		var $divMain = $div.prepend("<span></span><i></i><ul></ul>");
		$("span",$div).width($width);
		var $ul = $("ul",$div);
		$("option",$this).each(function(){
			var $li = $("<li>" + $(this).text() + "</li>")
			$ul.append($li);
		});
		$("span,i",$div).on("click",function(e){
			e.stopPropagation();
			$(".divSelect ul").slideUp();
			if($("li",$ul).length > 5){
				$ul.css({
					height : "150",
					overflow : "auto"
				});
			}
			$(this).siblings("ul").stop(true,false).slideDown();
		});
		$("li",$ul).on("click",function(){
			var index = $(this).index();
			$(this).parent().siblings("span").text($(this).text());
			$(this).addClass("curr").siblings().removeClass("curr");
			$(this).parent().slideUp();
			$("option",$this).eq(index).prop("selected",true).siblings("option").prop("selected",false);
		});
		$("li",$ul).eq(0).trigger("click");
		$(document).on("click",function(){
			$(".divSelect ul").slideUp();
		});
	});
	hand.on("click",function(){
		var $province = $("#province").val();
		var $city = $("#city").val();
		var $area = $("#area").val();
		var html = "省：" + $province + "市：" + $city + "区/县：" + $area;
		console.log(html);
	});
};
