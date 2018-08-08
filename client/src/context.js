import React, { Component } from 'react';
import axios from 'axios';
const Context = React.createContext();
const reducer = (state, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export class Provider extends Component {
	state = {
		cityName: '',
		cityData: [],
		dispatch: action => {
			this.setState(state => reducer(state, action));
		}
	};

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
		return <Context.Provider value={this.state}>{this.props.children}</Context.Provider>;
	}
}

export const WeatherInfo = Context.WeatherInfo;
