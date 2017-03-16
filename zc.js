$(function(){
	$(".input1").focus(function(){
		var defaultVal = this.defaultValue;
		var textVal = $(this).val();
		if(textVal == defaultVal){
			$(this).val("");
			$(this).addClass("textFocus");
		};
	})
$(".input1").blur(function(){
		var defaultVal = this.defaultValue;
		var textVal = $(this).val();
		if(textVal == ""){
			$(this).val(defaultVal);
			$(this).removeClass("textFocus");
		}
	})	
})




$(function(){
	$(".input4").focus(function(){
		var defaultVal = this.defaultValue;
		var textVal = $(this).val();
		if(textVal == defaultVal){
			$(this).val("");
			$(this).addClass("textFocus");
		};
	})
$(".input4").blur(function(){
		var defaultVal = this.defaultValue;
		var textVal = $(this).val();
		if(textVal == ""){
			$(this).val(defaultVal);
			$(this).removeClass("textFocus");
		}
	})	
})





function huo(){
	$('#down1').css('visibility','visible');
	}
function shi(){
	$('#down1').css('visibility','hidden');
	}

function huode(){
	$('#down2').css('visibility','visible');
	}
function shiqu(){
	$('#down2').css('visibility','hidden');
	}
	
function huod(){
	$('#down3').css('visibility','visible');
	}
function shiq(){
	$('#down3').css('visibility','hidden');
	}
	
function hd(){
	$('#down4').css('visibility','visible');
	}
function sq(){
	$('#down4').css('visibility','hidden');
	}
	
function hod(){
	$('#down5').css('visibility','visible');
	}
function shq(){
	$('#down5').css('visibility','hidden');
	}