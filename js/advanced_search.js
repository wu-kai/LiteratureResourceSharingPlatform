$(document).ready(function () {
  let $ = layui.jquery;
  let $lis = $('.advanced_search_box ul li');
  let $contents = $('.advanced_search_box .advanced_search_content>div');

  $lis.on('click', function () {
    let id = $(this).data('id');
    $(this).addClass('active').siblings().removeClass('active');
    $contents.eq(id).addClass('active').siblings().removeClass('active')
  });


  let laydate = layui.laydate;
  let laypage = layui.laypage;
  let layer = layui.layer;

  let timeArray = [
    'time01',
    'time02',
    'time21',
    'time22',
    'time11',
    'time12',
    'time31',
    'time32',
  ];
  _.each(timeArray, function (d) {
    laydate.render({
      elem: '#' + d //指定元素
    });
  });


  laypage.render({
    elem: 'paging',
    count: 100,
    groups: 10,
    layout: ['prev', 'page', 'next', 'count', 'skip'],
    theme: 'common_paging'
  });


  $('.choose').on('click',function(){
    layer.open({
      type:1,
      title: '国际标准分类',
      content: $('#modal1'),
      btn:['确认','取消']
    });

  })
});