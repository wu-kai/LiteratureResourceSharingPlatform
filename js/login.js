$(document).ready(function(){
  let $input_box = $('.input_box');
  let $input = $('.input_box input');
  let $get_code = $('.get_code');

  $input.on('focus',function(){
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
  });
  $input.on('blur',function(){
    $(this).parent().removeClass('active');
  });

  let isCountDown = false;
  let timer = null;

  $get_code.on('click',function(){
    if(isCountDown){
      return;
    }else{
      let count = 10;
      let oldVal = $get_code.text();
      $get_code.text(count);
      isCountDown = true;
      timer = setInterval(function(){
        count--;
        $get_code.text(count);
        if(count === 0){
          clearInterval(timer);
          $get_code.text(oldVal);
          timer = null;
          isCountDown = false;
        }
      },1000)
    }
  })

});