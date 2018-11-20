// スクリプトの記述
$(function(){
  // この中身が実行される。おまじない。
  "use strict"; // これもおまじない。
  // 他のファイルからajaxで読み込む（ことができる）（らしい）。
  $.ajax({url: "./src/variable.js", dataType: "script", sync: false});
  $.ajax({url: "./src/draw.js", dataType: "script", sync: false});
  $.ajax({url: "./src/update.js", dataType: "script", sync: false});

  // ここにゲームループの記述
  function gameLoop(){
    update();
    draw();
  }

  setInterval(gameLoop, 20);
});
