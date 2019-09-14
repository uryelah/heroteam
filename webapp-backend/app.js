var createError   = require('http-errors')    ;
var express       = require('express')        ;
var path          = require('path')           ;
var cookieParser  = require('cookie-parser')  ;
var logger        = require('morgan')         ;
var cors          = require('cors')           ;
var indexRouter   = require('./routes/index') ;
var usersRouter   = require('./routes/users') ;
var teamRouter    = require('./routes/team')  ;
var mentorRouter  = require('./routes/mentor');
var convite_recebidoRouter = require('./routes/convite_recebido');
var convite_enviado = require('./routes/convite_enviado');
var habilidadeRouter = require ('./routes/habilidade');
var hackathonRouter   = require('./routes/hackathon');
var organizadoresRouter = require('./routes/organizadores');
var projetoRouter = require('./routes/projeto');
var BodyParser    = require('body-parser')    ;

var app = express();

app.use(cors());
app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin' ,  ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/team', teamRouter);
app.use('/mentor', mentorRouter);
app.use('/convite_recebido', convite_recebidoRouter);
app.use('/habilidade', habilidadeRouter);
app.use('/hackathon', hackathonRouter);
app.use('/organizadores', organizadoresRouter);
app.use('/projeto', projetoRouter);

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
