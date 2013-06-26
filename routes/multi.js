var data = require('../data/')

module.exports = function(request, response) {
  
  var key1 = request.query.key1;
  var value1 = data[key1] == null ? 'Not found' : data[key1];
  
  var key2 = request.query.key2;
  var value2 = data[key2] == null ? 'Not found' : data[key2];
  console.log(key1 + " and " + key2);
  response.end("value1 is " + value1 + " and value2 is "  + value2); // value1 is apple and value2 is ball
}