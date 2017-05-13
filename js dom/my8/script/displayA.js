  //循序渐进，预留退路，所以我们不应该利用dom，js为网页添加主要的信息。
//利用DOM技术动态的收集或创建一些有用的辅助信息，并将它们动态的呈现在网页上 在这里我们把html里面不可见的title属性值呈现出来。

//利用html定义表（dl）abbr标签的属性值和节点值是最合适的，
  function displayA(){
  //测试部分
  if(!document.getElementsByTagName) return false;
  if(!document.createElement) return false;
  if(!document.createTextNode) return false;

      var abbr = document.getElementsByTagName('abbr');
      if(abbr.length<1){return false;}
      
      var defs = new Array();                                //用来保存abbr标签里的文本以及title属性的值
      for(var i=0;i<abbr.length;i++){
        if(abbr[i].childNodes.length<1) continue;            //这里是为IE准备的预留退路，因为IE不支持abbr,
                                                             // 他在统计abbr元素的子节点个数时会返回0，所以知己知彼
        var Title = abbr[i].getAttribute('title');
        var key = abbr[i].lastChild.nodeValue;               //文本节点都是最后一个子节点；zan
        defs[key] = Title;                                   
                                                               //title,key两个变量都是需要保存到defs中的值，所以我们采用这种语句实现：把其中之一用作 数组元素
                                                               // 的下标，另一个用作数组元素的zhi
      }
      var dl = document.createElement('dl');
      for(key in defs) {
        var Title = defs[key];                                      //zan 这里实现遍历采用for in循环，好处是他可以将某个数组的下标（键字）临时的赋值给一个变量；
    
        var dt = document.createElement('dt');
        var dt_text = document.createTextNode(key);      
        dt.appendChild(dt_text);
        var dd = document.createElement('dd');
        var dd_text = document.createTextNode(Title);
        dd.appendChild(dd_text);

    
        dl.appendChild(dt);
        dl.appendChild(dd);
       
          
      }  
      if(dl.childNodes.length<1) return false;
      var header=document.createElement('h2');
      var header_text=document.createTextNode('header_text');
      header.appendChild(header_text);

      document.body.appendChild(header);
      document.body.appendChild(dl);
  }

  window.onload = displayA;