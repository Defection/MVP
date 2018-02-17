var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
var items = require('../database-mongo');
var axios = require('axios')
var request = require('request')
var requestPromise = require('request-promise')

var app = express();
// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json())

app.post('/forecast', function (req, res) {
  //   items.getReposByUsername(req.body.username, function(data){
  //   .save(JSON.parse(data));
  // }

});

app.get('/weather', function(req, res) {
  // console.log(req.query.zipCode)
  var rootUrl = 'https://www.zipcodeapi.com/rest'
  var APIKey = 'hCCIY2L86qfeCPYpne6Q108mhw3Z48aAVW8w3Y6vrQCnOgU1C8oMReYkCDVuQbbw'
  console.log('searching zip : ', req.query.zipCode)
  var zipcode = req.query.zipCode
  // var lat   = req.query.latitude;
  // var long  = req.query.longitude;
  var requestUrl = rootUrl + '/' + APIKey + '/info.json/' + zipcode + '/degrees';

  axios.get(requestUrl).then((response) => {
    // console.log(response)
    let lat = response.data.lat
    let lng = response.data.lng

    //after get lat and lng, make weather request
    var rootUrl = 'https://api.darksky.net/forecast'
    var APIKey = '1dc4337362add083bf9483261045a0c0'
    var requestUrl2 = rootUrl + '/' + APIKey + '/' + lat + ',' + lng;

    axios.get(requestUrl2).then((response2) => {
      console.log('this is the weather ', response2.data.latitude)
      console.log('longitude', response2.data.longitude)
                res.status(200).json(response2.data);

      })
       //  .then(function(data){
       //    res.status(200).json(data.data);
       // })

      // res.end()

      // axios.get('https://api.darksky.net/forecast/1dc4337362add083bf9483261045a0c0/'+ response2.data.latitude + ',' + response2.data.longitude).then((response)=>{
      //   console.log('pressed and getting new request lat', response2.data.latitude)
      //   res.end()
      // })

 
    

  })
  // requestPromise(requestUrl).then((data)=>{
  //   console.log("dataaaaa", data)
  // })
  // res.end()
})

app.get('/api/forecast', function(req, res) {
  console.log('in server app.get')
  var rootUrl = 'https://api.darksky.net/forecast'
  var APIKey = '1dc4337362add083bf9483261045a0c0'
  // var lat = /*'40.750487' */'61.2180556'
  // var long = /*'-73.976401'*/ '-149.90027780000003'

  // var lat = '40.750487' 
  // var long = '-73.976401'
  // console.log('latty', req.lat)
  var lat = req.lat /*|| '28.538336'*/
  var long =  req.lng /*|| '-81.379234'*/
  // var lat   = req.query.latitude;
  // var long  = req.query.longitude;
  var requestUrl = rootUrl + '/' + APIKey + '/' + lat + ',' + long;

  axios.get(requestUrl)
       .then(function(data) {
         res.status(200).json(data.data);
       })
       .catch(function(error) {
         console.log(error);
       })
})

app.get('/api', function(req, res) {
  console.log('SUPER latitude finder')
  var rootUrl = 'https://www.zipcodeapi.com/rest'
  var APIKey = 'hCCIY2L86qfeCPYpne6Q108mhw3Z48aAVW8w3Y6vrQCnOgU1C8oMReYkCDVuQbbw'
  console.log(req.zipCode)
  var zipcode = req.zipCode || '11354'
  // var lat   = req.query.latitude;
  // var long  = req.query.longitude;
  var requestUrl = rootUrl + '/' + APIKey + '/info.json/' + zipcode + '/degrees';

  requestPromise(requestUrl).then((data)=>{
    // console.log("dataaaaa", data)
  })
    // res.end()
})


app.listen(3000, function() {
  console.log('listening on port 3000!');
});

