// 変数関連

var i, j, k, tmp; // 回す変数

// 画像関連
var backGround = new Image(); // 背景。
var back = new Image(); // カードの背。(カードは60×60)
var cards = []; // カードの画像を格納する配列。たとえばcards[6]は6のカード。
const NUM_OF_CARDS = 10; // カードの種類数
var blank = new Image(); // カード反転のアニメーションに使う空白画像

var scoreText = new Image();  // SCOREの文字
var yougotText = new Image(); // YOU GOTの文字
var failedText = new Image(); // FAILEDの文字
var texts = []; // テキスト関連はここにキー付きで格納
var erase = new Image(); // テキスト消去用
var numbers = new Image(); // 数表示用

// キーコード
const K_ENTER = 13;
const K_SPACE = 32;

// 状態遷移
const TITLE = 0;
const PLAY = 1;
const REVERSE = 2;
const JUDGE = 3;
const FINISHED = 4;
var state = TITLE;

// カードの裏表を記録する配列(毎ターンの描画に使う)
// たとえばcard_state[2] = 1だったら2の位置にあるカードは表向き。
var card_state = [];
// 各々の位置のカードの種類を記録する配列（0～19がランダムで格納される）
// たとえばcard_list[2] = 6だったら2の位置に6のカードがある、という、描画に使う。
var card_list = [];
// data. カード反転の際に情報を格納する。
var data = [];
// stock. めくったカードの位置を記録する。
var stock = [-1, -1];
// 当たりはずれを表す変数(-1, 0:外れ, 1:当たり)
var is_correct = -1;

// カウント
var count = 0;

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

// 画像のロードなど
function loading(){
  backGround.src = "./images/background.png";
  back.src = "./images/back.png";
  var y = shuffle(20); // 0~19のシャッフル
  for(i = 0; i < 20; i++){
    card_state.push(0); // 全部、裏
    card_list.push(y[i] % 10);  // 0~9が2つずつの20個がランダムに格納される
  }
  // よく考えたらカードの種類は10種類だっけ、半分。
  for(i = 0; i < NUM_OF_CARDS; i++){
    var img = new Image();
    img.src = "./images/card_" + i + ".png";
    cards.push(img);
  }
  blank.src = "./images/blank.png";
  scoreText.src = "./images/SCORE.png";
  yougotText.src = "./images/YOU_GOT_IT.png";
  failedText.src = "./images/FAILED.png";
  texts["score"] = scoreText;
  texts["yougot"] = yougotText;
  texts["failed"] = failedText;
  erase.src = "./images/erase.png";
  numbers.src = "./images/NUMBER.png";
  baseImage.src = "./images/baseImage.JPG";
}
