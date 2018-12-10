// 描画処理関連

function drawAllCards(ctx){
  // すべてのカードを描画する
  for(i = 0; i < 5; i++){
    for(j = 0; j < 4; j++){
      ctx.drawImage(back, 10 + 70 * i, 10 + 70 * j);
    }
  }
}

function drawInit(){
  var ctx = getctx();
  ctx.drawImage(backGround, 0, 0);
  drawAllCards(ctx);
}
