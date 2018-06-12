const express = require('express');
const app = express();
const Routes = require('./MainRoutes');
var bodyParser = require('body-parser');
var Cors = require('cors');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(Cors());
app.use('/',Routes);

app.listen(8083, 'localhost', function (err) {
    if(err){
        console.log(err);
        process.exit(-1);
    }
    console.log('Server listening on port 8083');
})