var bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

module.exports = function (app) {

    app.use(express.static(path.join(__dirname,'../client/public/'),{
        redirect: false
    }));
    app.set('view engine','ejs')
    app.set('views', path.join(__dirname,'../client/views'))

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());



};