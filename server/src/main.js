<<<<<<< HEAD
var express = require('express')
var app = express()



var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '114.116.23.135',
  user     : 'kael',
  password : '123456'
});
var retStr=''
connection.connect();
connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;
  retStr=rows[0].solution
  console.log('The solution is: ', rows[0].solution);
});
connection.end();




var allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  res.header('Access-Control-Allow-Credentials', 'true')
  next()
}
app.use(allowCrossDomain)
app.get('/login', function (req, res) {
  var mysql      = require('mysql');
  var connection = mysql.createConnection({
    host     : '114.116.23.135:3306',
    user     : 'kael',
    password : '123456'
  });
  var retStr=''
  connection.connect();
  connection.query('SELECT * from passport.login', function(err, rows, fields) {
    if (err) throw err;
    retStr=rows[0]
    console.log('The solution is: ', rows[0]);
  });

  connection.end();
  res.send(retStr)
})
app.all('/secret', function (req, res) {
  console.log('Accessing the secret section ...')
  res.send('secret')
})
app.listen(8888, function () {
  console.log('Example app listening on port 8888!')
})
=======
var express = require('express')
var app = express()



var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '114.116.23.135',
  user     : 'kael',
  password : '123456'
});
var retStr=''
connection.connect();
connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;
  retStr=rows[0].solution
  console.log('The solution is: ', rows[0].solution);
});
connection.end();




var allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  res.header('Access-Control-Allow-Credentials', 'true')
  next()
}
app.use(allowCrossDomain)
app.get('/login', function (req, res) {
  var mysql      = require('mysql');
  var connection = mysql.createConnection({
    host     : '114.116.23.135:3306',
    user     : 'kael',
    password : '123456'
  });
  var retStr=''
  connection.connect();
  connection.query('SELECT * from passport.login', function(err, rows, fields) {
    if (err) throw err;
    retStr=rows[0]
    console.log('The solution is: ', rows[0]);
  });

  connection.end();
  res.send(retStr)
})
app.all('/secret', function (req, res) {
  console.log('Accessing the secret section ...')
  res.send('secret')
})
app.listen(8888, function () {
  console.log('Example app listening on port 8888!')
})
>>>>>>> 25b3fdb202512b148d8c95b8eeabfa058ccf8609
