// 各種の更新処理

// 初期化
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

// カード反転操作
function reverse(pos){
  console.log(count);
  count += 1;
  // posからいろいろ計算する
  var left = 10 + (pos % 5) * 70;
  var top = 10 + Math.floor(pos / 5) * 70;
  var kind = card_list[pos];
  var cd_st = card_state[pos]; // 0なら裏、1なら表

  // countに応じた描画処理
  tmp = count / 10;
  if(count == 10){ tmp = 1; }
  if(count > 5){ cd_st = 1 - cd_st; } // countが5より大きい時はカードの裏（裏の場合は表）を描画する

  var ctx = getctx();
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.drawImage(blank, left, top);
  if(count <= 5){
    ctx.setTransform(1 - 2 * tmp, 0, 0, 1, left + 60 * tmp, top);
  }else{
    ctx.setTransform(2 * tmp - 1, 0, 0, 1, left + 60 * (1 - tmp), top);
  }
  if(cd_st == 0){
    ctx.drawImage(back, 0, 0);
  }else{
    ctx.drawImage(cards[kind], 0, 0);
  }
  if(count == 10){
    console.log("終了");
    count = 0;
    clearInterval(reverse_anim); // 繰り返し処理の終了（Timeoutを使う方法もある）
    state = PLAY;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    card_state[pos] = 1 - card_state[pos]; // 反転状況の修正
  }
}
