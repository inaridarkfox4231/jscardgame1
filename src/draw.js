// 描画処理関連

function drawAllCards(ctx){
  // すべてのカードを描画する
  ctx.drawImage(back, 10, 10);
  ctx.drawImage(back, 80, 10);
  ctx.drawImage(back, 10, 80);
}

function drawInit(){
  var ctx = getctx();
  ctx.drawImage(backGround, 0, 0);
  drawAllCards(ctx);
}
