const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8888;
const bodyParser = require('body-parser');

const morgan = require('morgan');
app.use(morgan('combined'));


const helmet = require('helmet');
app.use(helmet());


// view engine setup
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/views'));
// app.set('views', __dirname + '/views'); 

//set a dir for static files
app.use('/static',express.static(path.join(__dirname, '/static')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.raw());

//Routes
let index = require('./routes/index');
let lannister = require('./routes/lannister');
let api = require('./routes/api');
let coin = require('./routes/coin');
let iot = require('./routes/iot');

app.use('/',index);
app.use('/lannister', lannister); //个人支付多合一
app.use('/api', api); // 各种世面上的支付接口api，支持个人和商家
app.use('/coin', coin); //比特币、加密币等
app.use('/iot', iot);

app.listen(PORT, function () {
    console.log(`Lannister Pay is running on PORT ${PORT}...`)
});
