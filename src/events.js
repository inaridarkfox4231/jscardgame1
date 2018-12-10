// キーイベント関連

$('#Enterbutton').click(function(){ init(); })

$(window).keyup(function(e){
  if(e.keyCode == K_ENTER){ enterkeyprocess(); }
})

// カードの相対位置を返す関数
function calc_cardpos(x, y){
  var rx = (x - 1) % 70, ry = (y - 1) % 70;
  var qx = Math.floor((x - 1) / 70), qy = Math.floor((y - 1) / 70);
  if(rx < 9 || ry < 9){ return -1; }
  return qx + 5 * qy;
}

// クリックした位置のカードをひっくり返す（はず）
$('#board').click(function(e){

  // ここに「state == REVERSE ならreturn」って書けばいい
  if(state == REVERSE){ return; } // カード反転中

  var x = e.clientX - $(this).offset().left;
  var y = e.clientY - $(this).offset().top;
  console.log('マウスの位置は(%d, %d)です', x, y);
  // ここで(x, y)からカードの位置を計算する、カードがない位置であれば-1を返す。
  // カードの位置はたとえば20枚だとして0～19でパラメトライズされている。
  var pos = calc_cardpos(x, y);

  // posによる分岐
  if(pos < 0){ return; } // クリックした位置にカードはありませんでした
  if(pos >= 4){ return; } // 今のところ、4以降の場所にカードがないので。

  // 100ミリ秒単位でreverseアニメを始める
  // コールバック関数の引数は、このように繰り返しミリ秒を指定してからその後ろに書く
  reverse_anim = setInterval(reverse, 50, pos);
  state = REVERSE; // カード反転中にする

/*
  // posからカードの左上隅の座標を取り出す
  var left = 10 + 70 * (pos % 5);
  var top = 10 + 70 * (Math.floor(pos / 5));
  var kind = card_list[pos]; // posの位置にあるカードに書かれた数
  //console.log('pos = %d left = %d top = %d kind = %d', pos, left, top, kind);

  // カードをひっくり返す
  var ctx = getctx();
  card_state[pos] = 1 - card_state[pos];
  if(card_state[pos] == 0){
    ctx.drawImage(back, left, top);
  }else{
    ctx.drawImage(cards[kind], left, top);
  }
*/
})

// ひっくり返すには、setTransformで(1,0,0,1,10,10)から(-1,0,0,1,70,10)まで
// 10分割で1秒かけてやればいいんだけど結構面倒だよ・・？→0.5秒に変更
// (10, 10)のやつはね。たとえば(80, 10)のやつだとあそこが80と150になるし・・
