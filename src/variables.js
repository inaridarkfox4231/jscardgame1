// 変数関連

var i, j, k; // 回す変数

var backGround = new Image(); // 背景。
var back = new Image(); // カードの背。
var card_1 = new Image(); // 1のカード。

// キーコード
const K_ENTER = 13;

// 状態遷移
const TITLE = 0;
const PLAY = 1;
var state = TITLE;

// contextの取得
function getctx(){
  var canvas = $('canvas')[0];
  var ctx = canvas.getContext("2d");
  return ctx;
}

function loading(){
  backGround.src = "./images/background.png";
  back.src = "./images/back.png";
  card_1.src = "./images/card_1.png";
}
