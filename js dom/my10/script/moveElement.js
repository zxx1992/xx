function moveElement(elementId,final_x,final_y,interval){
	if(!document.getElementById) return false;
	if(!document.getElementById(elementId)) return false;
	var elem=document.getElementById(elementId);
	if(elem.movement){                                //至于某个特定元素有关的变量有关，可以给其设置属性
		clearTimeout(elem.movement);
	}
    
  if (!elem.style.left) {
    elem.style.left = "0px";
  }
  if (!elem.style.top) {
    elem.style.top = "0px";
  }
	var xpos=parseInt(elem.style.left);
	var ypos=parseInt(elem.style.top);                  //获取元素当前位置，并取整数


	if(xpos == final_x && ypos == final_y){
		return true;
	}
	if(xpos<final_x){
        var dist=Math.ceil((final_x-xpos)/10);
	       xpos+=dist;
	}
	if(xpos>final_x){
        var dist=Math.ceil((xpos-final_x)/10);
	       xpos-=dist;
	}
	if(ypos<final_y){
        var dist=Math.ceil((final_y-ypos)/10);
	        ypos+=dist;
	}
	if(ypos>final_y){
       var dist=Math.ceil((ypos-final_y)/10);
	        ypos-=dist;
	}
   elem.style.left=xpos+'px';
   elem.style.top=ypos+'px';
   var repeat="moveElement('"+elementId+"',"+final_x+","+final_y+","+interval+")";            //这里实现递归,?不太懂，还有引号问题
   elem.movement=setTimeout(repeat,interval);

}

// function moveElement(elementID,final_x,final_y,interval) {
//   if (!document.getElementById) return false;
//   if (!document.getElementById(elementID)) return false;
//   var elem = document.getElementById(elementID);
//   if (elem.movement) {
//     clearTimeout(elem.movement);
//   }
//   if (!elem.style.left) {
//     elem.style.left = "0px";
//   }
//   if (!elem.style.top) {
//     elem.style.top = "0px";
//   }
//   var xpos = parseInt(elem.style.left);
//   var ypos = parseInt(elem.style.top);
//   if (xpos == final_x && ypos == final_y) {
//     return true;
//   }
//   if (xpos < final_x) {
//     var dist = Math.ceil((final_x - xpos)/10);
//     xpos = xpos + dist;
//   }
//   if (xpos > final_x) {
//     var dist = Math.ceil((xpos - final_x)/10);
//     xpos = xpos - dist;
//   }
//   if (ypos < final_y) {
//     var dist = Math.ceil((final_y - ypos)/10);
//     ypos = ypos + dist;
//   }
//   if (ypos > final_y) {
//     var dist = Math.ceil((ypos - final_y)/10);
//     ypos = ypos - dist;
//   }
//   elem.style.left = xpos + "px";
//   elem.style.top = ypos + "px";
//   var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
//   elem.movement = setTimeout(repeat,interval);
// }