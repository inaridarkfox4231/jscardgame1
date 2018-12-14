// 描画処理関連

function drawAllCards(ctx){
  // すべてのカードを描画する
  for(i = 0; i < 5; i++){
    for(j = 0; j < 4; j++){
      var pos = i + 5 * j;
      if(card_state[pos] == 0){
        ctx.drawImage(back, 10 + 70 * i, 10 + 70 * j); // 裏の時
      }else{
        ctx.drawImage(cards[card_list[pos]], 10 + 70 * i, 10 + 70 * j); // 表の時
      }
    }
  }
}

function drawReverseCard(ctx){
  // 反転中のカードを描画する
  ctx.drawImage(blank, data["left"], data["top"]); // 該当マスをリセット
  tmp = count / 10;
  if(count == 10){ tmp = 1; }
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
  // Transformリセット
  ctx.setTransform(1, 0, 0, 1, 0, 0);
}

// 描画処理
function draw(){
  var ctx = getctx();
  if(state != FINISHED){
    drawAllCards(ctx);
  }
  if(state == REVERSE){
    // 反転中のカードを描画
    count += 1;
    drawReverseCard(ctx);
  }else if(state == JUDGE){
    // 合ってるかどうかとかそういうの描画、まあその辺
    count += 1;
    if(is_correct == 1){
      console.log("正解");
    }else if(is_correct == 0){
      console.log("はずれ");
    }
  }
}
