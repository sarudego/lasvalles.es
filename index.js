var express = require('express'),
compression = require('compression'),
bodyParser = require('body-parser');


var app = express();

//config views
app.set('view engine', 'html');


app.set('port', (process.env.PORT || 5000));


//app.get('/', function(req, res){
//  res.send('hello world');
//});
app.use(function(req,res){
  res.sendFile(__dirname+'/src/views/index.html');
});
//static files
app.use(compression());


app.listen(app.get('port'), function(){
 console.log('start',"Node in "+app.settings.env+" mode at http://localhost:" +app.get('port'));
});
