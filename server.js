require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT;

var index = require('./src/index.js');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/public/views/'));

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')));
app.use('/dist', express.static(path.join(__dirname, 'public/dist')));
app.use('/', index);

app.listen(PORT, function(err) {
    app.use(morgan('dev'));
    if (err) {
    console.log(err);
    } else {
    console.log('Listening to PORT: ' + PORT);
    }
});