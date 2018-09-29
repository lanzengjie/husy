//向下滑动头部部分隐藏
 function gundong(){
    	var hc=document.getElementsByClassName("h-content")[0]
    	if(document.documentElement.scrollTop <150 ){
    		hc.style.display = "block";
    	}else{
    		hc.style.display = "none";
    		hc.style.overflow = "hidden"
    		//document.getElementsByClassName("h-nav")[0].style.height = '70px';
    		document.getElementsByTagName("header")[0].style.height = '100px'
    		document.getElementsByTagName("header")[0].style.boxShadow = '0px 5px 15px 0px rgba(0, 0, 0, 0.1)'
    	//console.log(document.documentElement.scrollTop)
    	}
    	}