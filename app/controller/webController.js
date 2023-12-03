exports.renderHomePage = (req, res, next) => {
    return res.render("index");
};

exports.renderBlogPage = (req, res, next) => {
    return res.render("blog");
};
exports.renderContactPage = (req, res, next) => {
    return res.render("contact");
};

exports.renderElementsPage = (req, res, next) => {
    return res.render("elements");
};

exports.renderFighterPage = (req, res, next) => {
    return res.render("fighter");
};

exports.rendersingleBlogPage = (req, res, next) => {
    return res.render("single-blog");
};

exports.renderTeamPage = (req, res, next) => {
    return res.render("team");
};

