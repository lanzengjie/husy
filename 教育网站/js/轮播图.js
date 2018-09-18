var next=document.getElementById("next")

var a=1;
next.onclick=function next() {
       

let flex=document.getElementsByClassName("flex-viewport")[0]

	name=setInterval(function(){
		
		 let  flex_left=flex.offsetLeft;
		 
 let li_left=0 ;
	li_left=-690*a;
	let step=(li_left-flex_left)/100;
	
		flex_left+=step;
	flex.style.marginLeft=flex_left+"px";
	if(Math.abs(li_left-flex_left)<6){
		flex.style.marginLeft=flex_left+"px";
		clearInterval(name)
	}
},10)
}
var last=document.getElementById("last")

last.onclick=function () {
	a=0
        clearInterval(name);
	
let flex=document.getElementsByClassName("flex-viewport")[0]

	name=setInterval(function(){
		
		 let  flex_left=flex.offsetLeft;
 let li_left=0 ;
	li_left=-600*a;
	let step=(li_left-flex_left)/100;
	
		flex_left+=step;
	flex.style.marginLeft=flex_left+"px";
//	if(Math.abs(li_left-flex_left)<1){
//		flex.style.marginLeft=flex_left+"px";
//		clearInterval(name)
//	}
},10)
}
