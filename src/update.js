// 各種の更新処理

// 初期化
function init(){
  //drawInit();
  $('#heading').hide();
  $('#field').show();
  state = PLAY;
  setInterval(mainLoop, 50); // ここでゲームをスタートさせる
}

// Enterキー（タイトルで押す）
function enterkeyprocess(){
  if(state == TITLE){ init(); }
}

// 更新処理（主に
function update(){
  if(state == REVERSE){
    // リバースカウントのリセット、その後の処理
    if(count == 10){
      count = 0;
      card_state[data["pos"]] = 1 - data["cd_st"]; // カードの表裏の状態を更新
      if(stock[0] < 0 && data["cd_st"] == 0){ // 1枚目クリック
        stock[0] = data["pos"];
        state = PLAY; // 戻す。
      }else if(stock[0] >= 0 && data["cd_st"] == 0){ // 2枚目クリック
        stock[1] = data["pos"];
        state = JUDGE; // 外れの場合、JUDGE内でREVERSEにする。当たりならPLAYにする。
        is_correct = (card_list[stock[0]] == card_list[stock[1]] ? 1 : 0);
      }else if(stock[0] >= 0 && data["cd_st"] == 1){
        // 外れで、1枚目が戻った時の処理
        stock[0] = -1;
        calc_data(stock[1]); // stock[1]のところにあるカードのREVERSE処理開始
      }else{
        // 外れで、2枚目が戻った時の処理
        stock[1] = -1;
        state = PLAY; // 戻す。
      }
    }
  }else if(state == JUDGE){
    // ジャッジカウントのリセット、その後の処理
    if(count == 10){
      count = 0;
      if(is_correct == 1){
        console.log("スコア増えます");
        // stockのリセット(外れの時とちがってここでリセットしないとする機会がない)
        stock[0] = -1, stock[1] = -1;
        state = PLAY;
      }else if(is_correct == 0){
        console.log("4回目以降スコア減ります"); // 初めの3回までは減らない（お手付き）
        calc_data(stock[0]); // 1枚目から反転開始
        state = REVERSE;
      }
      is_correct = -1;
    }
  }
}
