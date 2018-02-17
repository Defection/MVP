import React from 'react';
// import Search from './Search.jsx'
var image
// var temperature = 

const WeatherList = (props) => {

	// if(props.items.currently.temperature >32 && props.items.currently.temperature <70){
	// 	image = 'http://static.euronews.com/weather/icons/SVGs/wsymbol_0002_sunny_intervals.svg'
	// }
	if(props.items.currently.temperature >32 && props.items.currently.temperature <70){
		image = 'http://static.euronews.com/weather/icons/SVGs/wsymbol_0002_sunny_intervals.svg'
	}
	if(props.items.currently.temperature<=32){
		image = 'https://conceptdraw.com/a1748c3/p17/preview/640/pict--snowflake-weather-vector-stencils-library'
	}
	if(props.items.currently.temperature >70){
		image = 'http://www.journalpioneer.com/media/photologue/photos/cache/tg-23012017-weather-sunny_large.jpg'
	}

	return (
	  <div>
	       <ul>
	           <li class = 'Stats'>Current Temperature: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{props.items.currently.temperature}</li>
	           <li class = 'Stats'>Current Condition:  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {props.items.minutely.summary}</li>
	           <li class = 'Stats'>Hourly Forecast:  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {props.items.hourly.summary}</li>
	           <li class = 'Stats'>Weekly Forcecast:   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  {props.items.daily.summary}</li>
	           <img src = {image} />
	          
	      </ul>
	  </div>
 	)
}

export default WeatherList;

      // temperature: currently.temperature,
      // condition: minutely.summary,
      // hourly: hourly.summary,
      // daily: daily.summary,
       // <img src={this.}'http://static.euronews.com/weather/icons/SVGs/wsymbol_0002_sunny_intervals.svg'/>