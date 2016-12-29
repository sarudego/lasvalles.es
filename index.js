var express = require('express'),
  compression = require('compression'),
  bodyParser = require('body-parser'),
  cors = require('cors');


var app = express();

//config views
app.set('view engine', 'html');
app.set('views','./dist/views');

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.json('application/json'));
app.use(cors());

app.use(compression());
app.use(express.static('./dist'));
//app.use('/static', express.static(__dirname + '/src'));

//app.get('/', function(req, res){
  //res.sendFile('index.html');
//});
app.use(function(req,res){
  res.sendFile(__dirname+'/dist/views/index.html');
});


app.listen(app.get('port'), function(){
  console.log('start',"Node in "+app.settings.env+" mode at http://localhost:" +app.get('port'));
});
