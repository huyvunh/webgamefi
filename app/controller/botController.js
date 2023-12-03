const TelegramBot = require('node-telegram-bot-api');
// const bot = new TelegramBot(process.env.TELEGRAM_API_KEY, { polling: true });
// const Keyboard = require('telegram-keyboard')
const token = '6862366244:AAG-Md8kgNIotz3Kemw1o-hhhQprmQC8t98';
const bot = new TelegramBot(token, { polling: true });

exports.sendMessage = (req, res, next) => {

    try {

        bot.onText(/\/start/, (msg, match) => {
            bot.sendMessage(msg.chat.id, "Hãy chọn từng nhiệm vụ để thực hiện", {
                "reply_markup": {
                    "inline_keyboard": [
                        [
                            {
                                text: "Follow",
                                url: 'https://twitter.com/688_68_',
                                callback_data: "click",
                            },
                            {
                                text: "Like",
                                url:'https://x.com/688_68_/status/1723546183120077236?s=20',
                                callback_data: "click",
                            },
                            {
                                text: "Retweet",
                                url:'https://x.com/688_68_/status/1723546183120077236?s=20',
                                callback_data: "click",
                            },
                            {
                                text: "Comment",
                                url:'https://x.com/688_68_/status/1723546183120077236?s=20',
                                callback_data: "click",
                            },
                        ],
                    ],
                },
            });
        });
        
        
        bot.on("start", (start) => {
            const msg = start.message;
            bot.answerstart(start.id)
                .then(() => bot.sendMessage(msg.chat.id, "Hãy thực hiện ngay nào!"));
        }); 

    } catch (error) {
        console.log(error)
    }




    return res.status(200).json({
        isSuccess: true,
        status: 200
    });
}