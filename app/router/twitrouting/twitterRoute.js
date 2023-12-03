const express = require('express');
const router = express.Router();
const twitterController = require('../../controller/twitterController')

//router.get('/getAPIX', twitterController.getAPIX)
router.post('/getListDataRetweet', twitterController.getListDataRetweet)

module.exports = router;