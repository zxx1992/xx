function stripeTable(){
  if(!document.getElementsByTagName) return false;
  var tables=document.getElementsByTagName('table');
  for(var i=0;i<tables.length;i++){
    var odd=false;
    var rows=tables[i].getElementsByTagName('tr');
    for(var j=0;j<rows.length;j++){
    if(odd==true){
      // rows[j].style.backgroundColor='#948F8F';可以改为
      // addClass(row[j],'info');  addClass是一个函数，这句代码的意思就是给row[j]元素添加一个info的class属性，从而实现表现层跟行为层的分离
      odd=false;
    }else{
     
      odd=true;
      }
    }
  }
}


// 这里将函数抽象化：就是把某种很具体的东西改进为一种较为通用的东西，我们来改上面的函数
function stripeTable(tag,theclass){
  if(!document.getElementsByTagName) return false;
  var tables=document.getElementsByTagName('tag');
  for(var i=0;i<tables.length;i++){
    var odd=false;
    var rows=tables[i].getElementsByTagName('tr');
    for(var j=0;j<rows.length;j++){
    if(odd==true){
      // rows[j].style.backgroundColor='#948F8F';可以改为
     addClass(row[j],theclass); 
      // addClass是一个函数，这句代码的意思就是给row[j]元素添加一个info的class属性，从而实现表现层跟行为层的分离
      odd=false;
    }else{
     
      odd=true;
      }
    }
  }
}

stripeTable("table","info");//来直接调用
// window.onload=stripeTable;
//jquery超赞
$(function(){
  $('tr:odd').addClass('odd');
  $('tr:even').addClass('even');

  $('tbody>tr:odd').addClass('odd');
  $('tbody>tr:even').addClass('even');
})