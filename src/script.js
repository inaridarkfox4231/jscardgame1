// スクリプトの記述

"use strict";

$.ajax({url: "./src/variables.js", dataType: "script", async: false});
$.ajax({url: "./src/draw.js", dataType: "script", async: false});
$.ajax({url: "./src/update.js", dataType: "script", async: false});
$.ajax({url: "./src/keyevents.js", dataType: "script", async: false});
