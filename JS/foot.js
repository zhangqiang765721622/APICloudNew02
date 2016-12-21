//友情提示
var jiantou = document.getElementById("jiantou");
var websit = document.getElementById("websit");
var img_sanjiao = document.getElementById("img_sanjiao");

img_sanjiao.onmouseover = function() {
	jiantou.style.cursor = "pointer";
}
jiantou.onclick = function() {
		//	alert("onclick");
		if(jiantou.src.search("right") > 0) {
			jiantou.src = "img/arrow_down.png";
			websit.style.display = "block";
		} else if(jiantou.src.search("down") > 0) {
			jiantou.src = "img/arrow_right.png";
			websit.style.display = "none";
		}
	}
	//手机
//function $(id) {
//	return document.getElementById(id);
//}
//
//$("iphone1").onmouseover = function() {
//	this.className = "iphone1";
//}
//
//$("iphone1").onmouseout = function() {
//	this.className = "iphone1out";
//}
//$("iphone2").onmouseover = function() {
//	this.className = "iphone2";
//}
//
//$("iphone2").onmouseout = function() {
//	this.className = "iphone2out";
//}
//$("iphone3").onmouseover = function() {
//	this.className = "iphone3";
//}
//
//$("iphone3").onmouseout = function() {
//	this.className = "iphone3out";
//}
//$("iphone4").onmouseover = function() {
//	this.className = "iphone4";
//}
//
//$("iphone4").onmouseout = function() {
//	this.className = "iphone4out";
//}
//$("iphone5").onmouseover = function() {
//	this.className = "iphone5";
//}
//
//$("iphone5").onmouseout = function() {
//	this.className = "iphone5out";
//}
//$("iphone6").onmouseover = function() {
//	this.className = "iphone6";
//}
//
//$("iphone6").onmouseout = function() {
//	this.className = "iphone6out";
//}
//$("iphone7").onmouseover = function() {
//	this.className = "iphone7";
//}
//
//$("iphone7").onmouseout = function() {
//	this.className = "iphone7out";
//}
//$("iphone8").onmouseover = function() {
//	this.className = "iphone8";
//}
//
//$("iphone8").onmouseout = function() {
//	this.className = "iphone8out";
//}
//$("iphone9").onmouseover = function() {
//	this.className = "iphone9";
//}
//
//$("iphone9").onmouseout = function() {
//	this.className = "iphone9out";
//}
//
//@keyframes tutu {
//	0 % {
//		transform: translateY(60 px);
//	}
//	25 % {
//		transform: translateY(20 px);
//	}
//	50 % {
//		transform: translateY(0 px);
//	}
//	75 % {
//		transform: translateY(20 px);
//	}
//	100 % {
//		transform: translateY(0 px);
//	}
//}

//.iphone1 {
//	position: relative;
//	animation: tutu 1.5 s;
//}
//.iphone1out {
//	position: relative;
//}
//
//.iphone2 {
//	position: relative;
//	animation: tutu 1.5 s;
//}
//.iphone2out {
//	position: relative;
//
//}
//.iphone3 {
//	position: relative;
//	animation: tutu 1.5 s;
//}
//.iphone3out {
//	position: relative;
//
//}
//.iphone4 {
//	position: relative;
//	animation: tutu 1.5 s;
//}
//.iphone4out {
//	position: relative;
//
//}
//.iphone5 {
//	position: relative;
//	animation: tutu 1.5 s;
//}
//.iphone5out {
//	position: relative;
//
//}
//.iphone6 {
//	position: relative;
//	animation: tutu 1.5 s;
//}
//.iphone6out {
//	position: relative;
//
//}
//.iphone7 {
//	position: relative;
//	animation: tutu 1.5 s;
//}
//.iphone7out {
//	position: relative;
//
//}
//.iphone8 {
//	position: relative;
//	animation: tutu 1.5 s;
//}
//.iphone8out {
//	position: relative;
//
//}
//.iphone9 {
//	position: relative;
//	animation: tutu 1.5 s;
//}
//.iphone9out {
//	position: relative;
//
//}