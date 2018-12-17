// キーイベント関連

$('#Enterbutton').click(function(){ init(); })
$('#Resetbutton').click(function(){ reset(); })

$(window).keyup(function(e){
  if(e.keyCode == K_ENTER){ enterkeyprocess(); }
})

// クリック位置に対してカードの相対位置を返す関数（カードがなければ-1を返す）
function calc_cardpos(x, y){
  var rx = (x - 1) % 70, ry = (y - 1) % 70;
  var qx = Math.floor((x - 1) / 70), qy = Math.floor((y - 1) / 70);
  if(rx < 9 || ry < 9){ return -1; }
  return qx + 5 * qy;
}

// posから色々計算する
function calc_data(pos){
  data["pos"] = pos; // カードの位置を示す通し番号
  data["left"] = 10 + (pos % 5) * 70; // カードの位置（左端）
  data["top"] = 10 + (Math.floor(pos / 5) * 70); // カードの位置（上端）
  data["kind"] = card_list[pos]; // カードの種類
  data["cd_st"] = card_state[pos]; // カードの状態(0:裏,1:表)
}

// クリックした位置のカードをひっくり返す
$('#board').click(function(e){
  if(state != PLAY){ return; } // PLAYの間だけ反転できる

  var x = e.clientX - $(this).offset().left;
  var y = e.clientY - $(this).offset().top;
  // ここで(x, y)からカードの位置を計算する、カードがない位置であれば-1を返す。
  // カードの位置はたとえば20枚だとして0～19でパラメトライズされている。
  var pos = calc_cardpos(x, y);

  // posによる分岐
  if(pos < 0){ return; } // クリックした位置にカードはありませんでした
  if(card_state[pos] == 1){ return; } // 表のカードはクリックしても無反応

  // dataを計算して、stateをREVERSEに設定
  calc_data(pos);
  state = REVERSE;
})

// ひっくり返すには、setTransformで(1,0,0,1,10,10)から(-1,0,0,1,70,10)まで
// 10分割で1秒かけてやればいいんだけど結構面倒だよ・・？→0.5秒に変更
// (10, 10)のやつはね。たとえば(80, 10)のやつだとあそこが80と150になるし・・
