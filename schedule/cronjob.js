const { CronJob } = require('cron');

const scheduleController = require('../app/controller/scheduleController')
const tele = require('../app/telegramBot/tele')
const job = new CronJob(
    '*/5 * * * * *', // cronTime
    function () {
        
        
       // scheduleController.abc();

      // tele.abc()


    }, // onTick
    null, // onComplete
    true, // start
    'Asia/Ho_Chi_Minh' // timeZone
);