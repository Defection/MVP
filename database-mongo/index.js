// var mongoose = require('mongoose');
// mongoose.connect("mongodb://eric:shum@ds235768.mlab.com:35768/fullstack");

// var db = mongoose.connection;

// db.on('error', function() {
//   console.log('mongoose connection error');
// });

// db.once('open', function() {
//   console.log('mongoose connected successfully');
// });

// var itemSchema = mongoose.Schema({
//   currently: currently.temperature
//   description: String
// });

// var Item = mongoose.model('Item', itemSchema);

// var selectAll = function(callback) {
//   Item.find({}, function(err, items) {
//     if(err) {
//       callback(err, null);
//     } else {
//       callback(null, items);
//     }
//   });
// };

// module.exports.selectAll = selectAll;


const mongoose = require('mongoose');
mongoose.connect("mongodb://eric:shum@ds235768.mlab.com:35768/fullstack");

let weatherSchema = new mongoose.Schema({
  temperate: Number,
  condition: String,
  hourly: String,
  daily: String
});

let Weather = mongoose.model('Weather', weatherSchema);
let save = (data) => {
    let obj = new Weather({
      temperature: currently.temperature,
      condition: minutely.summary,
      hourly: hourly.summary,
      daily: daily.summary,
    })
    obj.save(function(err){
      if(err) return console.log(err);
      console.log('saved')
    })
  }


module.exports = Weather
module.exports.save = save;
