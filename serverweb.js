const express = require('express');
const app = express();
app.set('trust proxy', 1);

require('./config/enviroment')(app);
require('./app/router/Router')(app);
require('./app/telegramBot/tele');
require('./schedule/cronjob');

var server = require('http').createServer(app);
let port = 8080;
server.listen(process.env.PORT || port, function(){
    console.log('Server is running!');
});