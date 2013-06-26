var express = require('express');
var app = express();
var defaultRoute = require('./routes/default')
var newDataRoute = require('./routes/newData')
var multiRoute = require('./routes/multi')

app.listen(3000);
app.use(express.bodyParser())

app.get("/", defaultRoute);
app.post("/newData", newDataRoute);
app.get("/multi", multiRoute);