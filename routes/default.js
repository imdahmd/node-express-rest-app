var data = require('../data/')

module.exports = function(request, response) {
  var key = request.query.key;
  var value = data[key] == null ? 'Not found' : data[key];

  response.end(value);
}