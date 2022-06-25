const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const explorarRouter = require('./routes/explorar')
const calendarioRouter = require('./routes/calendario')
const animePageRouter = require('./routes/anime-page');
const animeListRouter = require('./routes/anime-list');
const loginRouter = require('./routes/login').router
const logoutRouter = require('./routes/logout')
const registerRouter = require('./routes/register')


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/explorar', explorarRouter);
app.use('/calendario', calendarioRouter);
app.use('/anime', animePageRouter);
app.use('/anime-list', animeListRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter)
app.use('/register', registerRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
