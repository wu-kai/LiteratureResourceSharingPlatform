$(document).ready(function(){
  let laypage = layui.laypage;

  laypage.render({
    elem: 'paging',
    count: 100,
    groups:10,
    layout:['prev', 'page', 'next','count','skip'],
    theme:'common_paging'
  });
});