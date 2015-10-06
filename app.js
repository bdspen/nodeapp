var express = require('express');
var stormpath = require('express-stormpath');

var app = express();

//set a custom port for the node server
// app.set('port', process.env.PORT || 8001);

app.set('views', './views');
app.set('view engine', 'jade');

var stormpathMiddleware = stormpath.init(app, {
  apiKeyFile: '/home/ben/Downloads/apiKey-3GDW7FWUJTD0772799S3PP18M.properties',
  application: 'https://api.stormpath.com/v1/applications/3K5U0Cvnxy5LHZ4i8aZ30a',
  secretKey: 'h3hh4hh2hjj11kkkfdf99weep::;;d++',
  expandCustomData: true,
  enableForgotPassword: true
});

app.use(stormpathMiddleware);

app.get('/', function(req, res) {
  res.render('home', {
    title: 'Welcome'
  });
});

app.listen(3000);
