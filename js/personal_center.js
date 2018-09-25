$(document).ready(function () {
  let $ = layui.jquery;
    let $lis = $('.personal_center_box ul li');
    let $contents = $('.personal_center_box .personal_center_content>div');
    let $order_type_item = $('.order_type_item');
    let $order_table = $('.order_table_box table');

    let $choose_file = $('.choose_file');
    let $my_search_list = $('.my_search_list');
    let $submit = $('.submit');

    let laydate = layui.laydate;
    let laypage = layui.laypage;
    let layer = layui.layer;

    $lis.on('click', function () {
        let id = $(this).data('id');
        $(this).addClass('active').siblings().removeClass('active');
        $contents.eq(id).addClass('active').siblings().removeClass('active')
    });

    let timeArray = [
        'time01',
        'time02',
    ];
    _.each(timeArray, function (d) {
        laydate.render({
            elem: '#' + d //指定元素
        });
    });

    $order_type_item.on('click',function(){
        let index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $order_table.eq(index).addClass('active').siblings().removeClass('active');
    });

    $choose_file.on('click',function(){
        $('input[type=file]').click();
    });

    $my_search_list.on('click',function(){
        layer.open({
            type:1,
            title: false,
            content: $('#my_search_list_modal'),
            btn:['关闭'],
            area:['900px']
        });
    });

    $submit.on('click',function(){
        layer.open({
            type:1,
            title: false,
            content: $('#submit_modal'),
            btn:[],
            area:['500px']
        });
    });

    laypage.render({
        elem: 'paging',
        count: 100,
        groups: 5,
        layout: ['prev', 'page', 'next', 'count', 'skip'],
        theme: 'common_paging'
    });

    laypage.render({
        elem: 'log_paging',
        count: 100,
        groups: 5,
        layout: ['prev', 'page', 'next', 'count', 'skip'],
        theme: 'common_paging'
    });
});