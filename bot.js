const Telegraf = require('telegraf');
const Markup = require('telegraf/markup');
require('dotenv').config();
let text = require('./const');
const bot = new Telegraf('6270357584:AAHL9PZd-Cw_sSk6RotC8IFtaPcV-n5WNJg');

bot.command('start', (ctx) => {
  ctx.reply('Здравствуйте! Я — бот EVION. Чем я могу быть полезен?', {
    reply_markup: Markup.keyboard([
      ['Показать локации', 'О компании'],
      ['Режим работы', 'Контакты'],
      ['Открой сайт'],
    ]),
  });
});

bot.hears('Показать локации', (context) => {
  function sendLocation1() {
    context.replyWithLocation(42.856217583032894, 74.66961079120061);

    context.reply(`Станция "Анкара 16/1"`);
  }
  sendLocation1(context);
 
  function sendLocation2() {
    context.replyWithLocation(42.87432241708925, 74.59200306315996);

    context.reply(`Станция "БЦ 79"`);
  }
  setTimeout(() => {
    sendLocation2(context);
  }, 1000);

  function sendLocation3() {
    context.replyWithLocation(42.86196026232284, 74.69052606812284);

    context.reply(`Станция "Ауэзова, 24"`);
  }
  setTimeout(() => {
    sendLocation3(context);
  }, 1500);

  function sendLocation4() {
    context.replyWithLocation(42.87586995239418, 74.59192820304105);
    context.reply(`Станция "Чуй проспект 150А"`);
  }
  setTimeout(() => {
    sendLocation4(context);
  }, 2500);
});

/*
bot.command('location', (wwww) => {
  // Отправляем запрос на получение местоположения
  
  // Также можно отправлять местоположение в виде объекта
  // ctx.replyWithLocation({ latitude: 37.6175, longitude: 55.7522 });
});
*/

bot.hears('О компании', (context) => {
  context.reply(`
  КОМПАНИЯ "ЭВИОН"

  Осуществляет свою деятельность, согласно КОНЦЕПЦИИ зеленой экономики в Кыргызской Республике "Кыргызстан - страна зеленой экономики" , утвержденной постановлением Жогорку Кенеша Кыргызской Республики от 28 июня 2018 года № 2532-VI. Мы поддерживаем международные инициативы и принципы ESG в области устойчивого развития.
  https://evion.kg/about
  `);
});
bot.hears('Режим работы', (context) => {
  context.reply(`Режим работы:
  с 11-00 до 23-00
  с 11:00 до 01:00 пт-сб
  
  Побробнее тут: https://evion.kg
  `);
});

bot.hears('Контакты', (context) => {
  context.reply(`
  Контакты:

  +996 (500) 333-351
  evionkg@gmail.com
  https://evion.kg/about
  `);
});

bot.hears('Открой сайт', (context) => {
  context.reply(
    `
    Наш сайт: https://evion.kg
  `
    /* {
      reply_markup: Markup.inlineKeyboard([[Markup.callbackButton('Да', 'da')]]),
    }*/
  );
});
/*
bot.on('text', (www) => {
  console.log(www);
  let id = 501776073;
  let id2 = 1498188820;
  www.telegram.sendMessage(id2, `Новая заявка на бронь:  ${www.update.message.text}`);

  www.telegram.sendMessage(id, `Новая заявка на бронь:  ${www.update.message.text}`);

  www.telegram.sendMessage(
    www.message.chat.id,
    `Спасибо! Я уже передал ваши данные хостес.
     В ближайшее время с вами свяжутся для подтверждения резерва.
     Прекрасного дня!`
  );
  console.log(www.message.chat.id);
  console.log(www.update.message.text);
});
*/

/*

bot.action('da', (ctx) => {
  ctx.reply(`Уточните, пожалуйста:

  — Дату
  — Время
  — Количество персон
  — Ваше имя
  — Контактный номер телефона`);
});
*/
bot.launch().then(() => {
  console.log('Бот Запущен');
});
