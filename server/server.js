'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const gutil = require('gulp-util');
const morgan = require('morgan');


const app = express();

app.use(morgan('dev'));

app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(require('./router'));

app.set('port', process.env.PORT || 3001);

app.listen(app.get('port'), () => {
  gutil.log(gutil.colors.gray('-------------------------------------------'));
  gutil.log('API Server:', gutil.colors.magenta(`http://localhost:${app.get('port')}`));
  gutil.log(gutil.colors.gray('-------------------------------------------'));
});
