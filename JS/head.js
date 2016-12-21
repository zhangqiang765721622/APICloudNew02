//VIP服务
function VIP_show() {
	var vip = document.getElementById("VIP");
	vip.style.display = "block";
}

function VIP_hidden() {
	var vip = document.getElementById("VIP");
	vip.style.display = "none";
}
//开发者
function develop_show() {
	var develop = document.getElementById("develop");
	develop.style.display = "block";
}

function develop_hidden() {
	var develop = document.getElementById("develop");
	develop.style.display = "none";
}
//APP
function APP_show() {
	var APP = document.getElementById("APP");
	APP.style.display = "block";
}

function APP_hidden() {
	var APP = document.getElementById("APP");
	APP.style.display = "none";
}
//顶部导航栏
window.onscroll = function() {

	function $(id) {
		return document.getElementById(id);
	}
	var scrollTop = document.body.scrollTop;
      console.log(scrollTop);
      //导航变化
       if(scrollTop <50){
      	$("fixed").style.backgroundColor="";
      	$("logo_img").src="img/logo-light.png";
      	$("btn1").style.border = "1px solid white";
      	$("btn1").style.border="radius 5px";
	    $("btn1").style.color = "white";
	    $("btn1").onmouseover = function() {
				$("btn1").style.border = "1px solid #9BC200";
				$("btn1").style.color = "#9BC200";
			}
			$("btn1").onmouseleave = function() {
				$("btn1").style.border = "1px solid white";
				$("btn1").style.color = "white";
			}
        }
//      $("menu").className="menu menuColor1"

  
      if(scrollTop > 50 && scrollTop < 730){
      	$("fixed").style.backgroundColor="rgba(51,73,88,0.7)";
      	$("logo_img").src="img/logo-light.png";
      	$("btn1").style.border = "1px solid white";
      	$("btn1").style.border="radius 5px";
	    $("btn1").style.color = "white";
	    $("btn1").onmouseover = function() {
				$("btn1").style.border = "1px solid #9BC200";
				$("btn1").style.color = "#9BC200";
			}
			$("btn1").onmouseleave = function() {
				$("btn1").style.border = "1px solid white";
				$("btn1").style.color = "white";
			}
        }
//       $("menu").className="menu menuColor2"
//       $("menu").style.color = "white";
      
      
      if(scrollTop >=730){
      	$("fixed").style.backgroundColor="rgba(51,73,88,0.7)";
      	$("logo_img").src="img/logo-dark.png";
      	$("btn1").style.border = "1px solid white";
      	$("btn1").style.border="radius 5px";
	    $("btn1").style.color = "white";
      	$("btn1").onmouseover = function() {
				$("btn1").style.border = "1px solid #9BC200";
				$("btn1").style.color = "#9BC200";
			}
			$("btn1").onmouseleave = function() {
				$("btn1").style.border = "1px solid #666666";
				$("btn1").style.color = "#666666";
			}
        }
//      $("menu").className="menu menuColor3"
//      $("menu").style.color = "#666666";
      
      
	//大山
	if(scrollTop > 2400 && scrollTop < 3000) {
		$("API").style.backgroundPosition = "0 -300px";
		$("API").style.transition = "background-position 1s";
	} else {
		$("API").style.backgroundPosition = "0 -150px";
	}
}

//视频
var video = document.getElementById("videoPlay")
video.onclick = function() {
	if(video.paused) {
		video.play();
	} else {
		video.pause();
	}
}

var play_btn = document.getElementById("play_btn");
var play_btn_img = document.getElementById("play_btn_img");
var disabled_div = document.getElementById("disabled_div");
var close_video = document.getElementById("close_video");
var close_btn = document.getElementById("close_btn");

play_btn.onmouseover = function() {
	play_btn_img.style.cursor = "pointer";

	play_btn.onclick = function() {
		disabled_div.style.display = "block";
		close_video.style.display = "block";
	}

	close_btn.onmouseover = function() {
		close_video.style.border = "3px solid rgba(255,255,255,0.3)";
		close_video.style.cursor = "pointer";
		close_video.className = "close_video in"
	}
	close_btn.onmouseout = function() {
		close_video.style.border = "none";
		close_video.className = "close_video out"
	}

	close_btn.onclick = function() {
		disabled_div.style.display = "none";
	}
}