// 建立express伺服器
const express = require("express");
const app = express();

// 引用linebot SDK
var linebot = require("linebot");

// 用於辨識Line Channel的資訊
var bot = linebot({
  channelId: process.env.channelId,
  channelSecret: process.env.channelSecret,
  channelAccessToken: process.env.channelAccessToken,
});

const linebotParser = bot.parser();

// 當有人傳送訊息給Bot時
bot.on("message", function (event) {
  // event.message.text是使用者傳給bot的訊息
  const regrex = /你|誰|介紹|you|yourself|hello|你好|hi/gi;
  if (regrex.test(event.message.text)) {
    event.reply("我是Danny");
  } else {
    event.reply("吵死了！");
  }
});

app.post("/", linebotParser);
app.listen(process.env.PORT || 3000, () => {
  console.log("Express server start");
});
