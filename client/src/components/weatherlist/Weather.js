import React, { Component } from 'react';
import axios from 'axios';
import WeatherList from './WeatherList';

class Weather extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cityName: '',
			cityData: []
		};
	}

	componentDidMount() {
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

	render() {
		return (
			<React.Fragment>
				<WeatherList cityName={this.state.cityName} cityData={this.state.cityData} />
			</React.Fragment>
		);
	}
}

export default Weather;
