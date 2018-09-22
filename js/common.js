$(document).ready(function(){
  let $all_classify = $('.all_classify');
  let $classify_list = $('.classify_list');
  let $classify_item = $('.classify_list .classify_item');
  let $classify_item1 = $('.classify_list .classify_item1');
  let $classify_item2 = $('.classify_list .classify_item2');
  let $classify_sub_list = $('.classify_sub_list');
  let $classify_sub_list1 = $('.classify_sub_list1');
  let $classify_sub_list2 = $('.classify_sub_list2');
  let $not_classify = $('.not_classify');

  $all_classify.on('mouseover',function(){
    $classify_list.show();
  });

  $all_classify.on('mouseleave',function(){
    $classify_list.hide();
    $classify_sub_list.hide();
  });

  $classify_item.on('mouseover',function(){
    $classify_list.show();
  });

  $classify_item.on('mouseleave',function(){
    $classify_list.hide();
  });

  $classify_item1.on('mouseover',function(){
    $classify_sub_list1.show();
    $classify_sub_list2.hide();
  });

  $classify_item2.on('mouseover',function(){
    $classify_sub_list2.show();
    $classify_sub_list1.hide();
  });

  $classify_sub_list.on('mouseleave',function(){
    $classify_sub_list.hide();
    $classify_list.hide();
  });
});