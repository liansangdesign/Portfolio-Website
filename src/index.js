const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

const pageNames = ['Home', 'Background', 'Portfolio', 'Sign Up', 'Contact Us', 'Error'];
const lastIndexPage = pageNames.length - 1;

function pageName(nameOfPages, index) {
    return nameOfPages[index];
}

function pageUrl(nameOfPages, index) {
    return nameOfPages[index].replace(/\s+/g, '').toLowerCase();
}

app.use(bodyParser.urlencoded({ extended: true}));

router.use(morgan('dev'));

router.route('/').get(function(req, res) {
    res.render(pageUrl(pageNames, 0), {
        pageName: pageName(pageNames, 0)
    });
});

router.route('/background').get(function(req, res){
    res.render(pageUrl(pageNames, 1), {
        pageName: pageName(pageNames, 1)
    });
})

router.route('/portfolio').get(function(req, res){
    res.render(pageUrl(pageNames, 2), {
        pageName: pageName(pageNames, 2)
    });
})

router.route('/signup').get(function(req, res) {
    res.render(pageUrl(pageNames, 3), {
        pageName: pageName(pageNames, 3)
    });
});


router.route('/contactus').get(function(req, res){
    res.render(pageUrl(pageNames, 4), {
        pageName: pageName(pageNames, 4)
    });
})

router.route('/*').get(function(req, res) {
    let page = "Invalid Page";
    res.render(pageUrl(pageNames, lastIndexPage), {
        pageName: page,
        pageParam: req.url
    });
});

module.exports = router;