import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import WeatherList from './components/WeatherList';
import NavBar from './components/Nav_bar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityWeather: [],
      cityName: '',
      cityData: []
    };
  }

  componentWillMount() {
    axios
      .get(`/api/weather`)
      .then(response => {
        // take out the last data
        response.data.consolidated_weather.pop();
        // making new array to set State
        let cityName = { cityName: response.data.parent.title };
        let cityData = { cityData: response.data.consolidated_weather };
        this.setState(cityName);
        this.setState(cityData);
      })
      .catch(error => {
        console.log(error);
      });
  }

  searchWeather() {
    axios
      .get('/api/weather', {
        search: this.state.term
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <WeatherList cityName={this.state.cityName} cityData={this.state.cityData} />
      </div>
    );
  }
}

export default App;
