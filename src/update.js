// 各種の更新処理
function init(){
  drawInit();
  $('#Enterbutton').hide();
  $('#field').show();
  state = PLAY;
}

// Enterキー（タイトルで押す）
function enterkeyprocess(){
  if(state == TITLE){ init(); }
}
