var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
var items = require('../database-mongo');
var axios = require('axios')

var app = express();
// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

app.post('/forecast', function (req, res) {
  //   items.getReposByUsername(req.body.username, function(data){
  //   .save(JSON.parse(data));
  // }
});

// app.get('/forecast', function (req, res) {
//   items.selectAll(function(err, data) {
//     if(err) {
//       res.sendStatus(500);
//     } else {
//       res.json(data);
//     }
//   })
// })


app.get('/api/forecast', function(req, res) {
  console.log('in server app.get')
  var rootUrl = 'https://api.darksky.net/forecast'
  var APIKey = '1dc4337362add083bf9483261045a0c0'
  var lat = '40.750487'
  var long = '-73.976401'
  // var lat   = req.query.latitude;
  // var long  = req.query.longitude;
  var requestUrl = rootUrl + '/' + APIKey + '/' + lat + ',' + long;

  axios.get(requestUrl)
       .then(function(data) {
         res.status(200).json(data.data);
         console.log('im in axios get')
         console.log(data.data)
         // console.log('im in axios get')
       })
       .catch(function(error) {
         console.log(error);
       })
})


app.listen(3000, function() {
  console.log('listening on port 3000!');
});

