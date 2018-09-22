$(document).ready(function(){
  let $input_box = $('.input_box');
  let $input = $('.input_box input');

  $input.on('focus',function(){
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
  });
  $input.on('blur',function(){
    $(this).parent().removeClass('active');
  })
});