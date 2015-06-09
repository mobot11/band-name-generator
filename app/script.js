$(function() {
  $('button').on('click', function(){
    $.get('/adjective', function(data){
      $('#adjective').html(data.adjective);
    })
    $.get('/verbs', function (data){
      $('#verb').html(data.verb);
    })
    $.get('/nouns', function (data){
      $('#noun').html(data.noun);
    })
  });
})
