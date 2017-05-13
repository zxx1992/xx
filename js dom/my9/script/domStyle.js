//通过style属性来检索样式信息。但是dom style只能检索内嵌样式，不能用来检索外部外部css文件里声明的样式信息
function check(){
  var para=document.getElementById("example");
  alert(para.style.color);
  alert(para.style.fontsize);
  para.style.color='red';//也可以用来设置样式信息                       //css样式属性名字的连字符，在dom 里面，全部改为camel记号表示，比如
                                                    // background-color==backgroundColor
}

//寻找元素的下一个元素节点函数
function getNextElement(node){
  if(node.nodeType==1){
    return node;
  }
  if(node.nextSibling){
    return getNextElement(node.nextSibling);
  }
  return null;
}

var header=document.getElementsByTagName('h1');
for(var i=0;i<header.length;i++){
  var eleLast=getNextElement(header[i].nextSibling);
  eleLast.style.color="red";
}