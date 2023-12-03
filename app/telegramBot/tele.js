const TelegramBot = require('node-telegram-bot-api');
const token = '6862366244:AAG-Md8kgNIotz3Kemw1o-hhhQprmQC8t98';
const bot = new TelegramBot(token, { polling: true });


var answerAddressCallbacks = {};

bot.onText(/\/start/, (msg, match) => {
    const chatId = msg.chat.id, username = msg.from.username;

    bot.sendMessage(chatId, `Xin chào ${username}. Welcome to ABC`, {
        "reply_markup": {
            // inline_keyboard: [
            //     [
            //         {
            //             text: "Join App",
            //             web_app: { url: 'https://google.com' }
            //         },
            //         {
            //             text: "Bước 1",
            //             callback_data: "Bước 1",
            //         },
            //         {
            //             text: "Bước 2",
            //             callback_data: "Bước 2",
            //         }
            //     ]
            // ]
            keyboard: [
                [
                    {
                        text: "Bước 1",

                    },
                    {
                        text: "Bước 2",

                    }
                ]
            ]
        }
    });

});

bot.on('message', (msg) => {
    const callback = answerAddressCallbacks[msg.chat.id];
    if (callback) {
        return callback(msg);
    }

    const username = msg.from.username;
    const chatId = msg.chat.id;
    const textChat = msg.text;

    console.log(msg)

    if (textChat == 'Bước 1') {
        bot.sendMessage(chatId, `Vui lòng tham gia vào nhóm telegram dưới đây : \n https://abc.com`);

    }

    if (textChat == 'Bước 2') {
        bot.sendMessage(chatId, `I love u`);

    }
})

bot.on('callback_query', async function onCallBackQuery(callBackQuery) {

    const username = callBackQuery.from.username;
    const chatId = callBackQuery.message.chat.id;
    const textChat = callBackQuery.data;

    console.log(textChat)

    if (textChat == 'Bước 1') {
        bot.sendMessage(chatId, `Vui lòng tham gia vào nhóm telegram dưới đây : \n https://abc.com`);

    }

    if (textChat == 'Bước 2') {

        //Validate 1    
        bot.sendMessage(chatId, `AVDSFDFDF : \n \t https://abc.com`, {
            "reply_markup": {
                inline_keyboard: [
                    [
                        {
                            text: "Mở App này đi",
                            web_app: { url: 'https://google.com' }
                        },
                    ]
                ]
            }
        }
        );

    }
})

exports.abc = async () => {

    bot.sendMessage('2045687463', `Vui lòng tham gia vào nhóm telegram dưới đây : \n https://abc.com`);



}