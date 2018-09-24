$(document).ready(function () {
    let $more = $('.more');
    let $close = $('.operation .close');
    let $multiple = $('.operation .multiple');
    let $sure = $('.operation .sure');
    let $cancel = $('.operation .cancel');
    let $search_classify_list = $('.search_classify_list');

    let $result_search_sort = $('.result_search .search_sort');

    let $sort_list = $('.sort_list');

    let classifyList = {
        status: {
            showMore: false,
            isMultiple: true,
            data: ['包含作废1'],
            moreData: [],
        },
        china: {
            showMore: false,
            isMultiple: false,
            data: [
                '石英晶体、压电元件 (13)',
                '胶粘剂基础标准与通用方法 (7)',
                '通信网技术体制 (5)',
                '数字通信设备 (3)',
                '数据通信设备 (3)',
            ],
            moreData: [
                '石英晶体、压电元件 (13)',
                '胶粘剂基础标准与通用方法 (7)',
                '通信网技术体制 (5)',
                '数字通信设备 (3)',
                '数据通信设备 (3)',
                '石英晶体、压电元件 (13)',
                '胶粘剂基础标准与通用方法 (7)',
                '通信网技术体制 (5)',
                '数字通信设备 (3)',
                '数据通信设备 (3)',
                '石英晶体、压电元件 (13)',
                '胶粘剂基础标准与通用方法 (7)',
                '通信网技术体制 (5)',
                '数字通信设备 (3)',
                '数据通信设备 (3)',
            ],
        },
        international: {
            showMore: false,
            isMultiple: false,
            data: [
                '信息技术在银行中的应用 (23)',
                '频率控制和选择用压电器件与介质器件 (13)',
                '粘合剂和胶粘产品 (8)',
                '电和磁量值的测量 (4)',
            ],
            moreData: [
                '信息技术在银行中的应用 (23)',
                '频率控制和选择用压电器件与介质器件 (13)',
                '粘合剂和胶粘产品 (8)',
                '电和磁量值的测量 (4)',
                '信息技术在银行中的应用 (23)',
                '频率控制和选择用压电器件与介质器件 (13)',
                '粘合剂和胶粘产品 (8)',
                '电和磁量值的测量 (4)',
            ],
        },
        release: {
            showMore: false,
            isMultiple: false,
            data: [
                '丹麦标准化协会 (23)',
                '法国标准化协会 (23)',
                '德国标准协会 (23)',
                '俄罗斯标准化协会 (23)',
                '俄罗斯标准化协会 (23)',
                '国际电信联盟 (23)',
            ],
            moreData: [
                '丹麦标准化协会 (23)',
                '法国标准化协会 (23)',
                '德国标准协会 (23)',
                '俄罗斯标准化协会 (23)',
                '俄罗斯标准化协会 (23)',
                '国际电信联盟 (23)',
                '丹麦标准化协会 (23)',
                '法国标准化协会 (23)',
                '德国标准协会 (23)',
                '俄罗斯标准化协会 (23)',
                '俄罗斯标准化协会 (23)',
                '国际电信联盟 (23)',
            ],
        },
        draft: {
            showMore: false,
            isMultiple: false,
            data: [
                '丹麦标准化协会 (23)',
                '法国标准化协会 (23)',
                '德国标准协会 (23)',
                '俄罗斯标准化协会 (23)',
                '俄罗斯标准化协会 (23)',
                '国际电信联盟 (23)',
            ],
            moreData: [
                '丹麦标准化协会 (23)',
                '法国标准化协会 (23)',
                '德国标准协会 (23)',
                '俄罗斯标准化协会 (23)',
                '俄罗斯标准化协会 (23)',
                '国际电信联盟 (23)',
                '丹麦标准化协会 (23)',
                '法国标准化协会 (23)',
                '德国标准协会 (23)',
                '俄罗斯标准化协会 (23)',
                '俄罗斯标准化协会 (23)',
                '国际电信联盟 (23)',
                '丹麦标准化协会 (23)',
                '法国标准化协会 (23)',
                '德国标准协会 (23)',
                '俄罗斯标准化协会 (23)',
                '俄罗斯标准化协会 (23)',
                '国际电信联盟 (23)',
            ],
        }
    };

    let laypage = layui.laypage;
    let layer = layui.layer;

    function createSpan(arr) {
        let dom = '';
        _.each(arr, function (d) {
            dom += '<span>' + d + '</span>'
        });
        return $(dom);
    }

    function createSpanWithCheckBox(arr) {
        let dom = '';
        _.each(arr, function (d) {
            dom += '<span><input type="checkbox" name="" lay-skin="primary">' + d + '</span>';
        });
        return $(dom);
    }

    function render() {
        _.each($search_classify_list, function (dom, index) {
            let type = $(dom).parent().find('.operation').data('type');
            let data = classifyList[type].showMore ? classifyList[type].moreData : classifyList[type].data;
            let child = classifyList[type].isMultiple ? createSpanWithCheckBox(data) : createSpan(data);
            $(dom).empty().append(child);
        });
        layui.form.render();
    }

    render();

    _.each($more, function (dom, index) {
        $(dom).on('click', function () {
            let type = $(this).parent().parent().data('type');
            classifyList[type].showMore = true;
            render();
            $more.eq(index).hide();
            $close.eq(index).show();

        })
    });

    _.each($close, function (dom, index) {
        $(dom).on('click', function () {
            let type = $(this).parent().parent().data('type');
            classifyList[type].showMore = false;
            render();
            $more.eq(index).show();
            $close.eq(index).hide();
        })
    });

    _.each($multiple, function (dom, index) {
        $(dom).on('click', function () {
            let type = $(this).parent().parent().data('type');
            classifyList[type].isMultiple = true;
            render();
            $multiple.eq(index).hide();
            $sure.eq(index).show();
            $cancel.eq(index).show();

        })
    });

    _.each($sure, function (dom, index) {
        $(dom).on('click', function () {
            let type = $(this).parent().parent().data('type');
            console.log(type);
        })
    });

    _.each($cancel, function (dom, index) {
        $(dom).on('click', function () {
            let type = $(this).parent().parent().data('type');
            classifyList[type].isMultiple = false;
            render();
            $multiple.eq(index).show();
            $sure.eq(index).hide();
            $cancel.eq(index).hide();
        })
    });

    $sort_list.find('span').on('click', function () {
        let sort = $(this).data('sort');
        if (sort === 0) {
            $(this).data('sort', 1).addClass('ascending').siblings()
                .removeClass('ascending').removeClass('descending')
                .data('sort', 0);
        } else if (sort === 1) {
            $(this).data('sort', -1).addClass('descending').siblings()
                .removeClass('ascending').removeClass('descending')
                .data('sort', 0);
        } else if (sort === -1) {
            $(this).data('sort', 0).removeClass('ascending')
                .removeClass('descending').siblings().removeClass('ascending')
                .removeClass('descending').data('sort', 0);
        }
    });

    $result_search_sort.on('click', function () {
        let sort = $(this).data('sort');
        if (sort === 0) {
            $(this).data('sort', 1)
                .find('i').removeClass('fa-sort').removeClass('fa-sort-up')
                .addClass('fa-sort-down')
        } else if (sort === 1) {
            $(this).data('sort', -1)
                .find('i').removeClass('fa-sort').removeClass('fa-sort-down')
                .addClass('fa-sort-up')
        } else if (sort === -1) {
            $(this).data('sort', 0)
                .find('i').removeClass('fa-down').removeClass('fa-sort-up')
                .addClass('fa-sort')
        }
    })

    laypage.render({
        elem: 'paging',
        count: 100,
        groups:10,
        layout:['prev', 'page', 'next','count','skip'],
        theme:'common_paging'
    });

    $('.buy').on('click',function(){
        layer.open({
            type:1,
            title:false,
            content: $('#modal1'),
            btn:['继续添加','关闭','去购物车']
        });

    });
    $('.collect').on('click',function(){
        layer.open({
            type:1,
            title:false,
            content: $('#modal1'),
            btn:['继续添加','关闭','查看收藏列表']
        });

    })
});