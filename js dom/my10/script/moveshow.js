function prepareSlideshow(){
	var pre=document.getElementById('preview');
	pre.style.position="absolute";
	pre.style.left="0px";
	pre.style.top="0px";

	var list=document.getElementById('linklist');
	var links=list.getElementsByTagName('a');
    // for(var i=0;i<links.length;i++){
    // 	links[i].onmouseover=function(){

    // 	}
    // }

    links[0].onmouseover=function(){
    	moveElement("preview",-100,0,10);
    }
     links[1].onmouseover=function(){
    	moveElement("preview",-200,0,10);
    }
     links[2].onmouseover=function(){
    	moveElement("preview",-300,0,10);
    }
    
}

window.onload=prepareSlideshow;