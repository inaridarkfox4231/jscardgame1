// 各種の更新処理

// 初期化
function init(){
  drawInit();
  $('#heading').hide();
  $('#field').show();
  state = PLAY;
}

// Enterキー（タイトルで押す）
function enterkeyprocess(){
  if(state == TITLE){ init(); }
}

// カード反転操作
function reverse(pos, data){
  count += 1;
  // countに応じた描画処理
  tmp = count / 10;
  if(count == 10){ tmp = 1; }

  var ctx = getctx();
  ctx.setTransform(1, 0, 0, 1, 0, 0); // 初期化
  ctx.drawImage(blank, data["left"], data["top"]); // 該当マスをリセット
  // Transform処理（回転表現）
  if(count <= 5){
    ctx.setTransform(1 - 2 * tmp, 0, 0, 1, data["left"] + 60 * tmp, data["top"]);
  }else{
    ctx.setTransform(2 * tmp - 1, 0, 0, 1, data["left"] + 60 * (1 - tmp), data["top"]);
  }
  // cd_stが0でcountが5以下のときか、cd_stが1でcountが5より大の時に、裏。さもなくば、表。
  if((data["cd_st"] == 0 && count <= 5) || (data["cd_st"] == 1 && count > 5)){
    ctx.drawImage(back, 0, 0);
  }else{
    ctx.drawImage(cards[data["kind"]], 0, 0);
  }
  if(count == 10){
    count = 0;
    clearInterval(reverse_anim); // 繰り返し処理の終了（Timeoutを使う方法もある）
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    card_state[pos] = 1 - card_state[pos]; // 反転状況の修正
  }
}
