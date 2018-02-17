import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import WeatherList from './components/WeatherList.jsx';
import axios from 'axios'
// import '.styles.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: {
        currently: {
          temperature: ''
        },
        minutely : {
          summary: ''
        },
        hourly: {
          summary: ''
        },
        daily: {
          summary: ''
        }
      }
    }
    this.search = this.search.bind(this)
    this.searchByZip = this.searchByZip.bind(this)
  }

  componentDidMount() {
    this.search()
  }

  search(term) {
    $.ajax({
      url: '/api/forecast', 
      type: 'GET',
      headers: {"Content-Type": "application/json"},
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });

    // $.ajax({
    //   url: '/api', 
    //   type: 'GET',
    //   headers: {"Content-Type": "application/json"},
    //   success: (data) => {
    //     this.setState({
    //       items: data
    //     })
    //   },
    //   error: (err) => {
    //     console.log('err', err);
    //   }
    // });
  }

  searchByZip(zip){
    axios.get('/weather',{params: {
        zipCode: `${zip}`
      }
    }).then((response)=>{
        console.log(response.data)
        this.setState({
          items: response.data
        })
    })
  }


  render () {
    const weatherStyle = {
      textAlign:'center',
      fontSize: '60px'
    }
    console.log('this is state ',this.state)

    return (<div style = {{width: '100%', height: '100%'}}>
      <WeatherList items={this.state.items} onSearch={this.searchByZip}/>
    </div>)
  }


}

ReactDOM.render(<App />, document.getElementById('app'));