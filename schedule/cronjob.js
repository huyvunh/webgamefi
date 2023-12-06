const { CronJob } = require('cron');

const scheduleController = require('../app/controller/scheduleController')
const tele = require('../app/telegramBot/tele')
const firestoreController = require('../app/controller/firestoreController');
const job = new CronJob(
  '*/5 * * * * *', // cronTime
  function () {

    //tele.abc();

    // firestoreController.dataUser();

  }, // onTick
  null, // onComplete
  true, // start
  'Asia/Ho_Chi_Minh' // timeZone
);
