
function positionChange(){
	if(!document.getElementById) return false;
	if(!document.getElementById('message')) return false;
	var ele=document.getElementById('message');
	addClass(ele,message);
    

    //动画：setTimeout(),clearTimeout();
    moment=setTimeout('positionChange()',5000);//这里不适用var关键字，目的是为了让clearTimeout()在函数以外的地方
                                               // 也可以执行
}
clearTimeout(moment);
function addClass(element,value){
	if(!element.className){
		element.className=value;
	}else{
		var newClassName=element.className;
		newClassName+="";
		newClassName+=value;
		element.className=newClassName;
	}
}

window.onload=positionChange;