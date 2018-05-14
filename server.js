// requires
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');

// configs
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
var port = process.env.PORT || 8080;

// mongoose.set('debug', true);
var mongodb = 'mongodb://localhost/app';
// var mongodb = 'mongodb://user:pass@mongodb/app';
mongoose.connect(mongodb, { autoIndex: false });
var db = mongoose.connection;
var referenceModel = require('./models/reference.js')(db);
var objectModel = require('./models/object.js')(db);

// execution
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    objectModel.ensureIndexes();
    referenceModel.ensureIndexes();
    console.log(`${mongodb} connect`);
    // route
    // static
    app.use('', express.static(path.join(__dirname, 'public')));
    // api
    router_api = require('./routes/api.js');
    app.use('/api', router_api);

    // execute
    app.listen(port);
    console.log(`Server running on port: ${port}`);
});

