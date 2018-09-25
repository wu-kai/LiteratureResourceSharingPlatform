$(document).ready(function () {
  let isIndex = !!$('#index')[0];
  let isIndex1 = !!$('#index1')[0];
  let $all_classify = $('.all_classify');
  let $classify_list = $('.classify_list');
  let $classify_item = $('.classify_list .classify_item');
  let $classify_item1 = $('.classify_list .classify_item1');
  let $classify_item2 = $('.classify_list .classify_item2');
  let $classify_sub_list = $('.classify_sub_list');
  let $classify_sub_list1 = $('.classify_sub_list1');
  let $classify_sub_list2 = $('.classify_sub_list2');
  let $not_classify = $('.not_classify');
  let data_center = $('.common_navigation .data_center');
  let $database_list = $('.common_navigation .database_list');

  $all_classify.on('mouseover', function () {
    $classify_list.show();
  });

  $all_classify.on('mouseleave', function () {
    if (!isIndex) {
      $classify_list.hide();
    }
    $classify_sub_list.hide();
  });

  $classify_item.on('mouseover', function () {
    $classify_list.show();
  });

  $classify_item.on('mouseleave', function () {
    if (!isIndex) {
      $classify_list.hide();
    }
  });

  $classify_item1.on('mouseover', function () {
    $classify_sub_list1.show();
    $classify_sub_list2.hide();
  });

  $classify_item2.on('mouseover', function () {
    $classify_sub_list2.show();
    $classify_sub_list1.hide();
  });

  $classify_sub_list.on('mouseleave', function () {
    $classify_sub_list.hide();
    if (!isIndex) {
      $classify_list.hide();
    }
  });

  data_center.on('mouseover', function () {
    $database_list.show();
  });

  data_center.on('mouseleave', function () {
    $database_list.hide();
  });

  $database_list.on('mouseover', function () {
    $database_list.show();
  });

  $database_list.on('mouseleave', function () {
    $database_list.hide();
  })

});