
//抢购倒计时
function timer(){
	var time=(new Date(2016,11,28,10,0,0))-(new Date());
	var dd=parseInt(time/1000/60/60/24);
	var hh=parseInt(time/1000/60/60%24);
	var mm=parseInt(time/1000/60%60);
	var ss=parseInt(time/1000%60);
	document.getElementById('timer').innerHTML=dd+":"+hh+":"+mm+":"+ss;
	setTimeout('timer()',1000);
	if (new Date>=time) {
        document.getElementById('timer').innerHTML = "<h2>00:00:00</h2>";
    }
}
    clearTimeout('timer()',1000);
	


//轮播	
dianji(1);
function dianji(num,over){

	for(i=1;i<=7;i++){
		var sel='sel'+i;
		var id='id'+i;
		document.getElementById(id).className='';
		document.getElementById(sel).style.display='none';
	}
	var sel='sel'+num;
	var id='id'+num;
	document.getElementById(id).className='active';
	document.getElementById(sel).style.display='block';
	num++;
	if(num>=8){
		num=1;
	}
	if(over===1){
		return false;	
	}
	time=setTimeout(
		function() {
			dianji(num);
	},1000);
}
function stopz(num){
	
	dianji(num,1);
	clearTimeout(time);
}
function starts(num){
	setTimeout(function() {
		dianji(num);
	},1000);
}




//点击跳转页面	
$('.jd li').hover(function(){
	var i=$(this).index();
	$('.jd li').attr('class','');
	$(this).attr('class','first');
	$('.jq div').css('display','none');
	$('.jq div').eq(i).css('display','block');
	});
	

	
	
//搜索框 表单中的获取焦点和失去焦点 onfocus(获取焦点) onblue(失去焦点)
$(function(){
	$(".text").focus(function(){
		var defaultVal = this.defaultValue;
		var textVal = $(this).val();
		if(textVal == defaultVal){
			$(this).val("");
			$(this).addClass("textFocus");
		};
	})
$(".text").blur(function(){
		var defaultVal = this.defaultValue;
		var textVal = $(this).val();
		if(textVal == ""){
			$(this).val(defaultVal);
			$(this).removeClass("textFocus");
		}
	})	
})





//新人福利：跳转页面
$('.cuxiao li').hover(function(){
	var a=$(this).index();
	$('.cuxiao li').attr('class','');
	$(this).attr('class','chu');
	$('.full div').css('display','none');
	$('.full div').eq(a).css('display','block');
})