$(document).ready(function () {
  let $lis = $('.data_center_box ul li');
  let $contents = $('.data_center_box .data_center_content>div');

  $lis.on('click', function () {
    let id = $(this).data('id');
    $(this).addClass('active').siblings().removeClass('active');
    $contents.eq(id).addClass('active').siblings().removeClass('active')
  });


  let laydate = layui.laydate;
  let laypage = layui.laypage;

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
});