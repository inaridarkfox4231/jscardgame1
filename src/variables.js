// 変数関連

var i, j, k, tmp; // 回す変数

var backGround = new Image(); // 背景。
var back = new Image(); // カードの背。(カードは60×60)
var cards = []; // カードの画像を格納する配列。たとえばcards[6]は6のカード。
const NUM_OF_CARDS = 10; // カードの種類数
var blank = new Image();

// キーコード
const K_ENTER = 13;

// 状態遷移
const TITLE = 0;
const PLAY = 1;
var state = TITLE;

// カードの裏表を記録する配列
// たとえばcard_state[2] = 1だったら2の位置にあるカードは表向き。
var card_state = [];
// 各々の位置のカードの種類を記録する配列（0～19がランダムで格納される）
// たとえばcard_list[2] = 6だったら2の位置に6のカードがある、という、描画に使う。
var card_list = [];

// カード反転のアニメーションを格納する変数
var count = 0;
var reverse_anim;

// contextの取得
function getctx(){
  var canvas = $('canvas')[0];
  var ctx = canvas.getContext("2d");
  return ctx;
}

// 0～19のシャッフルを返す(変数化して汎用性を持たせた)
function shuffle(len){
  var x = [];
  var y = [];
  for(i = 0; i < len; i++){ x.push(i); }
  for(i = 0; i < len; i++){
      var k = Math.floor(Math.random() * (len - i));
      y.push(x[k]);
      x[k] = x[len - 1 - i];
  }
  return y;
}

function loading(){
  backGround.src = "./images/background.png";
  back.src = "./images/back.png";
  var y = shuffle(20);
  for(i = 0; i < 20; i++){
    card_state.push(0); // 全部、裏
    card_list.push(y[i] % 10);  // とりあえず0～9を順番に入れる
  }
  // よく考えたらカードの種類は10種類だっけ、半分。
  for(i = 0; i < NUM_OF_CARDS; i++){
    var img = new Image();
    img.src = "./images/card_" + i + ".png";
    cards.push(img);
  }
  blank.src = "./images/blank.png";
}
