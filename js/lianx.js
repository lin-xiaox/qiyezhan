window.onload=function(){

//表单点击改变提示文字的颜色
let inputs=document.querySelectorAll("input");
console.log(inputs);
inputs.forEach((item,index)=>{
	item.onclick = function(){
		inputs.forEach((item,index)=>{
			item.classList.remove("active")
		})
	item.classList.add('active');
}
})
let texts=document.querySelectorAll("textarea");
texts.forEach((item,index)=>{
	item.onclick = function(){
		texts.forEach((item,index)=>{
			item.classList.remove("active")
		})
	item.classList.add('active');
}
})






}



