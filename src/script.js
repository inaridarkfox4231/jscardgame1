// スクリプトの記述

"use strict";

$.ajax({url: "./src/variables.js", dataType: "script", async: false});
$.ajax({url: "./src/draw.js", dataType: "script", async: false});
$.ajax({url: "./src/update.js", dataType: "script", async: false});
$.ajax({url: "./src/events.js", dataType: "script", async: false});

// 読み込まれない原因・・asyncのところがsyncになってた。はぅぅ。
