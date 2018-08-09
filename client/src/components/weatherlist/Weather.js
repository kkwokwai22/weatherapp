import React, { Component } from 'react';
import WeatherList from './WeatherList';
import { Consumer } from '../../context';

class Weather extends Component {
	render() {
		return (
			<Consumer>
				{value => {
					const { cityName, cityData } = value;
					return (
						<React.Fragment>
							<WeatherList cityName={cityName} cityData={cityData} />
						</React.Fragment>
					);
				}}
			</Consumer>
		);
	}
}

export default Weather;
