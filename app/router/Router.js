module.exports = function (app) {
    const webRoute = require('./webRouting/webRoute');
    app.use(webRoute);

    const twitterRoute = require('./twitrouting/twitterRoute')
    app.use(twitterRoute);

    // const botRoute = require('./botRouting/botRoute')
    // app.use(botRoute)

    app.use(function (req, res) {
        res.status(404).json({ error: "Not Found" });
    });
};