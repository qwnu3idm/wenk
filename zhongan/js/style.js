function tab(a, b, c, d) { // a-切换div 点击触发  b-切换div 变换的Div   a-class 点击变换的名   b-class 变换的Div名
	var $tab_a = $(a)
	var $tab_b = $(b)
	var $tab_a_class = c
	var $tab_b_class = d

	$tab_a.click(function() {
		$(this).addClass($tab_a_class).siblings().removeClass($tab_a_class);
		var i = $tab_a.index(this);
		if($tab_a.eq(i).hasClass($tab_a_class)) {
			$tab_b.eq(i).addClass($tab_b_class).siblings().removeClass($tab_b_class);
		}
	})
}

function taas(a, b, c, d, e) { // a-切换div 点击触发  b-切换div 变换的Div   a-class 点击变换的名   b-class 变换的Div名
	var $tab_a = $(a)
	var $tab_b = $(b)
	var $tab_a_class = c
	var $tab_b_class = d
	var $s = $(e)
	var offbtnStatus = true; 
	$tab_a.click(function() {
		var i = $tab_a.index(this);
		if(offbtnStatus){
			offbtnStatus = false;
			if($(this).hasClass($tab_a_class)) {
				$(this).removeClass($tab_a_class);
				$tab_b.eq(i).removeClass($tab_b_class);
				$tab_b.eq(i).slideUp(1300, function() {
					$s.eq(i).removeClass($tab_b_class);
					offbtnStatus = true;
				});
			} else {
				$(this).addClass($tab_a_class);
				$tab_b.eq(i).addClass($tab_b_class);
				$s.eq(i).addClass($tab_b_class);
				$tab_b.eq(i).slideDown(1300, function() {
					offbtnStatus = true;
				});
			}
		}
	})
}

taa(".lidiv",".flexguangao","aclick","aclick")
function taa(a, b, c, d) { // a-切换div 点击触发  b-切换div 变换的Div   a-class 点击变换的名   b-class 变换的Div名
	var $tab_a = $(a)
	var $tab_b = $(b)
	var $tab_a_class = c
	var $tab_b_class = d
	var offbtssnSsstatus = true; 
	$tab_a.click(function() {
		var i = $tab_a.index(this);
		if(offbtssnSsstatus){
			offbtssnSsstatus = false;
			if($(this).hasClass($tab_a_class)) {
				$(this).removeClass($tab_a_class);
				$tab_b.eq(i).removeClass($tab_b_class);
				$tab_b.eq(i).animate({right:"-=147px"},"slow",function(){
					offbtssnSsstatus = true;
				});
			} else {
				$(this).addClass($tab_a_class);
				$tab_b.eq(i).addClass($tab_b_class);
				$tab_b.eq(i).animate({right:"+=147px"},"slow",function(){
					offbtssnSsstatus = true;
				});
			}
		}
	})
}


var pmn=true
function jgk(a){
	if(pmn){
		pmn=false
		$(".tisk").html(a);
	 	$(".tisk").fadeIn(1);
	 	$(".tisk").fadeOut(3500,function(){
	 		pmn=true;
	 	});
	}
}


$(".ssl").click(function(){
	$(".posvbv").show();
	 $(".sjflexnav").animate({right:'0'});
})
$(".posvbv").click(function(){
	$(".posvbv").hide();
	 $(".sjflexnav").animate({right:'-120px'});
})