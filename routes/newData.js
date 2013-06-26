var data = require('../data/')
var fs = require('fs');

module.exports = function(request, response) {
  for(var key in request.body) {
    data[key] = request.body[key];
  }

  save(data);
  response.end("Your data is saved: " + JSON.stringify(data));
}

var save = function(data) {
  fs.writeFileSync('data/index.json', JSON.stringify(data, null, 2));
}