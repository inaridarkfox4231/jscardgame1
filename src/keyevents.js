// キーイベント関連

$('#Enterbutton').click(function(){ init(); })

$(window).keyup(function(e){
  if(e.keyCode == K_ENTER){ enterkeyprocess(); }
})
