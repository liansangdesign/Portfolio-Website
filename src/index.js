const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

var page = "";

app.use(bodyParser.urlencoded({ extended: true}));

router.use(morgan('dev'));

router.route('/').get(function(req, res) {
    page = "Homepage";
    res.render('index', {
        pageName: page
    });
});

router.route('/signup').get(function(req, res) {
    page = "Signup";
    res.render('signup', {
        pageName: page
    });
});

router.route('/*').get(function(req, res) {
    page = "Invalid Page";
    res.render('error', {
        pageName: page,
        pageParam: req.url
    });
});

module.exports = router;