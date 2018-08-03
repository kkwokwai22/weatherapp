import React from 'react';
import WeatherListItem from './weatherListItem';

const WeatherList = props => {
	const weatherData = props.cityData;
	const weatherCity = weatherData.map(city => {
		return <WeatherListItem key={city.id} city={city} />;
	});
	return (
		<div className="weather-container">
			<ul className="city-ul">{weatherCity}</ul>
			<h2 className="city-name">{props.cityName}</h2>
		</div>
	);
};

export default WeatherList;
