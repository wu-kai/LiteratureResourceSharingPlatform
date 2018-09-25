$(document).ready(function () {
  let $ = layui.jquery;

  $('#edit').on('click',function(){
    layer.open({
      type:1,
      title: '',
      content: $('#edit-modal'),
      btn:['确认','取消'],
      area:['600px']
    });

  })
});