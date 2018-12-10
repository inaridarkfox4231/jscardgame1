// 変数関連

var i, j, k; // 回す変数

var backGround = new Image(); // 背景。
var back = new Image(); // カードの背。(カードは60×60)
var cards = []; // カードの画像を格納する配列。たとえばcards[6]は6のカード。

// キーコード
const K_ENTER = 13;

// 状態遷移
const TITLE = 0;
const PLAY = 1;
var state = TITLE;

// カードの裏表を記録する配列
// たとえばcard_state[2] = 1だったら2の位置にあるカードは表向き。
var card_state = [];
// カードの位置を記録する配列（0～19がランダムで格納される）
// たとえばcard_pos[2] = 6だったら2の位置に6のカードがある、という、描画に使う。
var card_pos = [];

// contextの取得
function getctx(){
  var canvas = $('canvas')[0];
  var ctx = canvas.getContext("2d");
  return ctx;
}

function loading(){
  backGround.src = "./images/background.png";
  back.src = "./images/back.png";
  for(i = 0; i < 4; i++){
    card_state.push(0);
    card_pos.push(i);
    var img = new Image();
    img.src = "./images/card_" + i + ".png";
    cards.push(img);
  }
}
