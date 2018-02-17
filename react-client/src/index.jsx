import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import WeatherList from './components/WeatherList.jsx';

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
  }

  componentDidMount() {
    this.search()
  }

  search() {
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
  }

  render () {
    console.log('this is state ',this.state)
    return (<div>
      <h1>Weather</h1>
      <WeatherList items={this.state.items}/>
      <Search onSearch={this.search}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));