'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import path from 'path';
// import morgan from 'morgan'; // HTTP REQUEST LOGGER
// import bodyParser from 'body-parser'; // PARSE HTML BODY
// import mongoose from 'mongoose';
// import session from 'express-session';
// import api from './routes';


var app = (0, _express2.default)();
var port = process.env.PORT || 3000;

// // MongoDB
// // app.use(morgan('dev'));
// app.use(bodyParser.json());

// /* mongodb connection */
// const db = mongoose.connection;
// db.on('error', console.error);
// db.once('open', () => { console.log('Connected to mongodb server'); });
// // mongoose.connect('mongodb://username:password@host:port/database=');
// mongoose.connect('mongodb://localhost/codelab');

// /* use session */
// app.use(session({
//     secret: 'CodeLab1$1$234',
//     resave: false,
//     saveUninitialized: true
// }));


//Main Page
// app.use('/', express.static(path.join(__dirname, 'public')));

// //Router
// app.use('/api', api);

// /* support client-side routing */
// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'public/index.html'));
// });


app.use('/', function (req, res) {
    res.end('ha');
});

/* handle error */
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

///Open Server
app.listen(port, function () {
    console.log('Express is listening on port', port);
});