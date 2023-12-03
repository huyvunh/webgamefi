const express = require('express');
const router = express.Router();

const webController = require('../../controller/webController')

router.get(['/', '/index'], webController.renderHomePage);
router.get('/blog', webController.renderBlogPage);
router.get('/contact', webController.renderContactPage);
router.get('/elements', webController.renderElementsPage);
router.get('/fighter', webController.renderFighterPage);
router.get('/single-blog', webController.rendersingleBlogPage);
router.get('/team', webController.renderTeamPage);

module.exports = router;