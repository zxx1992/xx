  //循序渐进，预留退路，所以我们不应该利用dom，js为网页添加主要的信息。
//利用DOM技术动态的收集或创建一些有用的辅助信息，并将它们动态的呈现在网页上 在这里我们把html里面不可见的title属性值呈现出来。

//利用html定义表（dl）abbr标签的属性值和节点值是最合适的，
// 还是谷歌好用，赞
  function displayB(){
  //测试部分
  if(!document.getElementsByTagName) return false;
  if(!document.createElement) return false;
  if(!document.createTextNode) return false;

      var block = document.getElementsByTagName('blockquote');
      // if(abbr.length<1){return false;}
      
      // var defs = new Array();                               //用来保存abbr标签里的文本以及title属性的值
      for(var i=0;i<block.length;i++){
        // if(block[i].childNodes.length<1) continue;            //这里是为IE准备的预留退路，因为IE不支持abbr,
        //这里需要检查block里面是否有cite属性
        if(!block[i].getAttribute('cite')){continue;}   
                                                           // 他在统计abbr元素的子节点个数时会返回0，所以知己知彼
        var url = block[i].getAttribute('cite');
        //查找all元素节点；观察文本发现，文献节选由一段或多段文本构成，所以blockquote元素肯定包含一个或多个p元素，

        var eleAll=block[i].getElementsByTagName('*');
        if(eleAll.length<1) {continue;}
        var eleLast=eleAll[eleAll.length-1];

        var link=document.createElement('a');

        var link_text = document.createTextNode('source'); 
        link.appendChild(link_text);
         link.setAttribute('href',url);                                        //文本节点都是最后一个子节点；zan
        // defs[key] = Title;                                   
         //再用上标包装一下
        var superS=document.createElement('sup');
        superS.appendChild(link);                                                    //title,key两个变量都是需要保存到defs中的值，所以我们采用这种语句实现：把其中之一用作 数组元素
        eleLast.appendChild(superS);                                                     // 的下标，另一个用作数组元素的zhi
      }
     
    
  }

  window.onload = displayB;