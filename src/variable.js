// 変数関連
var canvas = $('canvas')[0]; // 複数ある場合の0番目、これでgetContext等が使える。
var ctx = canvas.getContext("2d"); // ctxを使って描画とか色々行う仕組み

var backGround = new Image(); // 背景。
backGround.src = "./images/background.png"; // 背景画像の読み込み。

var back = new Image(); // 画像を生成する準備。
back.src = "./images/card_back.png";  // カードの背の画像読み込み。
