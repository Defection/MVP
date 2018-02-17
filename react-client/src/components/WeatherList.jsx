// import React from 'react';
// // import Search from './Search.jsx'
// // import './styles.css'

// var image
// // var temperature = 

// const WeatherList = (props) => {

// 	// if(props.items.currently.temperature >32 && props.items.currently.temperature <70){
// 	// 	image = 'http://static.euronews.com/weather/icons/SVGs/wsymbol_0002_sunny_intervals.svg'
// 	// }
// 	if(props.items.currently.temperature >32 && props.items.currently.temperature <70){
// 		image = 'http://www.tokkoro.com/picsup/3076274-blue-sky_bright_clouds_countryside_cumulus-clouds_field_grass_green-grass_lawn_nature_outdoors_pasture_sky_summer_sunny_sunny-day_weather_wind.jpg'
// 	}
// 	if(props.items.currently.temperature<=32){
// 		image = 'http://hddesktopwallpapers.in/wp-content/uploads/2015/07/snow-wallpaper-leaf.jpg'
// 	}
// 	if(props.items.currently.temperature >70){
// 		image = 'https://i.ytimg.com/vi/5fhnPARz7tg/maxresdefault.jpg'
// 	}


// 	const circle = {
// 		borderRadius: '50%',
// 		heigh: '80px',
// 		paddingTop: '50%',
// 		width: '500px',
// 		alignContent: 'center',
// 		marginLeft: '21%',
// 		// backgroundColor: 'blue'

// 	}

// 		const statStyle = {
// 		fontSize: '18px',
// 		textAlign: 'center',
// 		borderRadius: 50,
// 		// marginBottom: '300px'
// 	}

// 	const statStyle2 = {
// 		fontSize: '18px',
// 		textAlign: 'center',
// 		borderRadius: 50,
// 		// width: 50,
// 		paddingLeft: '30%',
// 		paddingRight: '30%',
// 		marginBottom: '50px'
// 	}

// 	const weatherStyle = {
//       textAlign:'center',
//       fontSize: '60px'
//     }

// 	return (

// 	  <div style={{ backgroundImage: `url(${image})` , width: '100%', height: '100%', top: 0, left: 0, position: 'absolute'}} >
// 	           <h1 style={weatherStyle}>Weather</h1>
// 	           <li style= {statStyle}>{props.items.currently.temperature}&#176;F</li>
// 	           <li style= {statStyle}>{props.items.minutely.summary}</li>
// 	           <li style= {statStyle}>{props.items.hourly.summary}</li>
// 	           <li style= {statStyle2}>{props.items.daily.summary}</li>
	      
// 	  </div>

//  	)
// }

// export default WeatherList;

import React from 'react';
// import Search from './Search.jsx'
// import './styles.css'

var image
// var temperature = 

class WeatherList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: ''
    }
    this.onChange = this.onChange.bind(this)
   }


  onChange (e) {
    this.setState({
      item: e.target.value
    });
  }



 render() {
 	const statStyle = {
		fontSize: '18px',
		textAlign: 'center',
		borderRadius: 50,
		fontFamily: 'sans-serif',
		fontWeight: 'bold'
		// marginBottom: '300px'
	}

	const statStyle2 = {
		fontSize: '18px',
		textAlign: 'center',
		borderRadius: 50,
		// width: 50,
		paddingLeft: '30%',
		paddingRight: '30%',
		marginBottom: '50px',
		fontFamily: 'sans-serif',
		fontWeight: 'bold'
	}

	const weatherStyle = {
      textAlign:'center',
      fontSize: '60px',
      fontFamily: 'sans-serif',
      // backgroundColor: 'green',
      // borderRadius: '50%'
    }

   	if(this.props.items.currently.temperature >32 && this.props.items.currently.temperature <70){
		image = 'http://static-31.sinclairstoryline.com/resources/media/a66dc365-a7bb-4fc7-8496-c930bbf87579-20170709_helicopterride_seattle_sunnymartini_0101.jpg'
	}
	if(this.props.items.currently.temperature<=32){
		image = 'http://hddesktopwallpapers.in/wp-content/uploads/2015/07/snow-wallpaper-leaf.jpg'
	}
	if(this.props.items.currently.temperature >70){
		image = 'https://i.ytimg.com/vi/5fhnPARz7tg/maxresdefault.jpg'
	}

    return (

	  <div style={{ backgroundImage: `url(${image})` , width: '100%', height: '100%', top: 0, left: 0, position: 'absolute'}} >
       <h1 style={weatherStyle}>Weather</h1>
       <li style= {statStyle}>{this.props.items.currently.temperature}&#176;F</li>
       <li style= {statStyle}>{this.props.items.minutely.summary}</li>
       <li style= {statStyle}>{this.props.items.hourly.summary}</li>
       <li style= {statStyle2}>{this.props.items.daily.summary}</li>
       <input style = {{position: 'relative', left:'47%', width: '100px', height: '20px', borderRadius: '15px', marginBottom: '10px'}} value={this.state.item} onChange={this.onChange} /> <br></br>
       <button style = {{position: 'relative', left:'47.2%', width: '100px', height: '20px', borderRadius: '15px',}} onClick={()=>this.props.onSearch(this.state.item)}> Search </button>  
	  </div>

    ) 
  }
}

export default WeatherList;
// Temperature:&nbsp;&nbsp;