$(function(){
  $(".sec-1").parallax('50%', 0.5)
})

$(function(){
  $(".sec-2").parallax('50%', 0.5)
})

$(function(){
  $(".sec-3").parallax('50%', 0.5)
})

const cursor=document.querySelector('.cursor');
document.addEventListener('mousemove',(e)=>{
  cursor.style.left=e.pageX+'px';
  cursor.style.top=e.pageY+'px';
})