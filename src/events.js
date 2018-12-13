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

// posから色々計算する
function calc_data(pos){
  var data = []; // 辞書に格納
  data["cd_st"] = card_state[pos]; // カードの状態(0:裏,1:表)
  data["left"] = 10 + (pos % 5) * 70; // カードの位置（左端）
  data["top"] = 10 + (Math.floor(pos / 5) * 70); // カードの位置（上端）
  data["kind"] = card_list[pos]; // カードの種類
  return data;
}

// クリックした位置のカードをひっくり返す（はず）
$('#board').click(function(e){

  // ここに「state == REVERSE ならreturn」って書けばいい→「count > 0」に変更。
  if(count > 0){ return; } // カード反転中

  var x = e.clientX - $(this).offset().left;
  var y = e.clientY - $(this).offset().top;
  // ここで(x, y)からカードの位置を計算する、カードがない位置であれば-1を返す。
  // カードの位置はたとえば20枚だとして0～19でパラメトライズされている。
  var pos = calc_cardpos(x, y);

  // posによる分岐
  if(pos < 0){ return; } // クリックした位置にカードはありませんでした
  var data = calc_data(pos); // カードの情報を取得
  if(data["cd_st"] == 1){ return; } // 表になってるカードはクリックで反転しない

  // 50ミリ秒単位でreverseアニメを始める
  // コールバック関数の引数は、このように繰り返しミリ秒を指定してからその後ろに書く

  reverse_anim = setInterval(reverse, 50, pos, data);
})

// ひっくり返すには、setTransformで(1,0,0,1,10,10)から(-1,0,0,1,70,10)まで
// 10分割で1秒かけてやればいいんだけど結構面倒だよ・・？→0.5秒に変更
// (10, 10)のやつはね。たとえば(80, 10)のやつだとあそこが80と150になるし・・
