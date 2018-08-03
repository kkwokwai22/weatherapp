import React from 'react';

const WeatherListItem = props => {
	let city = props.city;

	function getDateName(date) {
		const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
		let d = new Date(date);
		let dayName = days[d.getDay()];
		return dayName;
	}
	function imageForWeather(abbr) {
		if (abbr === 'sn') {
			return <i class="wi wi-day-snow" />;
		} else if (abbr === 'sl') {
			return <i class="wi wi-night-alt-sleet" />;
		} else if (abbr === 'h') {
			return <i class="wi wi-night-hail" />;
		} else if (abbr === 't') {
			return <i class="wi wi-thunderstorm" />;
		} else if (abbr === 'hr') {
			return <i class="wi wi-rain" />;
		} else if (abbr === 'lr') {
			return <i class="wi wi-rain" />;
		} else if (abbr === 's') {
			return <i class="wi wi-showers" />;
		} else if (abbr === 'hc') {
			return <i class="wi wi-cloudy" />;
		} else if (abbr === 'lc') {
			return <i class="wi wi-cloud" />;
		} else if (abbr === 'c') {
			return <i class="wi wi-day-sunny" />;
		} else {
			return <i class="wi wi-day-sunny" />;
		}
	}
	return (
		<li className="city-li">
			{imageForWeather(city.weather_state_abbr)}
			<div>{city.humidity}</div>
			<div>{getDateName(city.applicable_date)}</div>
			<div>{city.weather_state_name}</div>
		</li>
	);
};

export default WeatherListItem;
