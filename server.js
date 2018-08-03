const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Add headers
app.use(function(req, res, next) {
	// Website you wish to allow to connect
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000');
	// Request methods you wish to allow
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	// Request headers you wish to allow
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	res.setHeader('Access-Control-Allow-Credentials', true);
	// Pass to next layer of middleware
	next();
});

app.get('/api/weather', (req, res) => {
	axios
		.get('https://www.metaweather.com/api/location/search/?query=New York')
		.then(response => {
			let cityID = response.data[0].woeid;
			return axios.get(`https://www.metaweather.com/api/location/${cityID}`);
		})
		.then(response => {
			let data = response.data;
			res.json(response.data);
		});
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
