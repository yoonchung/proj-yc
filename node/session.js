var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var app = express();

app.set('views', __dirname);
app.engine('html', require('ejs').renderFile);

app.use(session({
    key: 'user_sid',
    secret: 'somerandonstuffs',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var sess;

app.get('/',function(req,res){
  sess = req.session;
  //Session set when user Request our app via URL
  if(sess.username) {
  /*
  * This line check Session existence.
  * If it existed will do some action.
  */
    res.redirect('/session2');
  }
  else {
    res.render('session.html');
  }
});

app.route('/session2').get(function(req,res){
  sess = req.session;
//In this we are assigning username to sess.username variable.
//username comes from HTML page.
  sess.username = req.body.username;
  if(sess.username) {
    res.write('<html><head><title>Sesstion Test</title>');
    res.write('</head><body><b>sessionpage2</b><p>');
    res.write('Hi ' + sess.username + ' nice to meet you!<br>');
    res.end('<a href="/logout">Clear session</a>');
  } else {
    res.write('<html><head><title>Sesstion Test</title>');
    res.write('</head><body><b>sessionpage2</b><p>');
    res.write('Howdy stranger...tell me your name on page1!<br>');
    res.end();
}
  
});

app.route('/session2').post(function(req,res){
  sess.username = req.body.username;
  if(sess.username) {
    res.write('<html><head><title>Sesstion Test</title>');
    res.write('</head><body><b>sessionpage2</b><p>');
    res.write('Hi ' + sess.username + ' nice to meet you!<br>');
    res.end('<a href="/logout">Clear session</a>');
  } else {
    res.write('<html><head><title>Sesstion Test</title>');
    res.write('</head><body><b>sessionpage2</b><p>');
    res.write('Howdy stranger...tell me your name on page1!<br>');
    res.end();
}
});

app.route('/logout').get(function(req,res){
req.session.destroy(function(err) {
  if(err) {
    console.log(err);
  } else {
    res.redirect('/');
  }
});

});
app.listen(1337,function(){
console.log("App Started on PORT 1337");
});