const Telegraf = require('telegraf');
const Markup = require('telegraf/markup');
require('dotenv').config();
let text = require('./const');
const bot = new Telegraf('6270357584:AAEgY1D5Rt3sdOZQ2mtsrIhVuLzhXPd1pdg');

bot.command("inline", (ctx) => {
  ctx.reply("Hi there!", {
      reply_markup: {
          inline_keyboard: [
              /* Inline buttons. 2 side-by-side */
              [ { text: "Button 1", callback_data: "btn-1" }, { text: "Button 2", callback_data: "btn-2" } ],

              /* One button */
              [ { text: "Next", callback_data: "next" } ],
              
              /* Also, we can have URL buttons. */
              [ { text: "Open in browser", url: "telegraf.js.org" } ]
          ]
      }
  });
});



bot.launch().then(() => {
  console.log('Бот Запущен');
});
