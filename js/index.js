window.onload=function(){


//视频播放效果
var play=document.querySelector("section .section .sec2 .right span:nth-child(3)");
var video=document.querySelector("section .section .sec2 .right .video")
var close=document.querySelector("section .section .sec2 .video .close i")
play.onclick=function(){
	video.style="display:block";
}
close.onclick=function(){
	video.style="display:none";
}

//城建项目展示轮播效果

var prev=document.querySelector(".tupian .tpbox span:nth-of-type(1)")
var next=document.querySelector(".tupian .tpbox span:nth-of-type(2)")
var lunbo=document.querySelector(".tupian .tpbox .box")
console.log(prev)
console.log(next)
console.log(lunbo)
var num=0;
prev.onclick=function(){
	num++;
	if(num>=2){
		num=2;
	}
	
	lunbo.style.marginLeft = -1172*num+"px";
}
next.onclick=function(){
	num--;
	if(num<=0){
		num=0;
	}
	lunbo.style.marginLeft = -1172*num+"px";
}









}