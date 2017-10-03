var express         = require("express"),
    config = require('./config/config'),
    app             = express(),
    bodyParser      = require("body-parser"),
    methodOverride  = require("method-override"),
    mongoose        = require('mongoose'),
    sqlinjection    = require('sql-injection');
    middleware      = require('./services/middleware');


//prevent sql injection
//app.use(sqlinjection);  

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());


// Connection to DB
/*
var connection = 'mongodb://' + config.BBDD_CREDENTIALS.user + ':' +  config.BBDD_CREDENTIALS.pwd + '@localhost:27017/apt';
console.log('Connected to Database', connection);
mongoose.connect(connection, function(err, res) {
  if(err) throw err;
  
});*/

mongoose.connect('mongodb://localhost/apt', function(err, res) {
  if(err) throw err;
  console.log('Connected to Database');
});


// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// Import Models and controllers
var models     = require('./models/models.js')(app, mongoose),
PartnersCtrl = require('./controllers/partners'),
UsersCtrl = require('./controllers/users');

// Example Route
var router = express.Router();
router.get('/', function(req, res) {
  res.send("Hello world!");
});
app.use(router);

// API routes
var api = express.Router();
api.route('/partners')
   .get(middleware.ensureAuthenticated, PartnersCtrl.searchPartners);
api.route('/login')
  .post(UsersCtrl.findUser);

/*
api.route('/signup')
  .post(WarlockCtrl.api);
api.route('/login')
  .post(WarlockCtrl.findWarlock);
api.route('/partner/:id')
  .put(PartnersCtrl.updatePartner)
  .delete(PartnersCtrl.deletePartner);*/



app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');  

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.use('/api', api);

// Start server
app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});
