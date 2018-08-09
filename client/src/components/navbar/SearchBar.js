import React, { Component } from 'react';
import { Consumer } from '../../context';
import axios from 'axios';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }

  onInputChange = event => {
    this.setState({
      term: event.target.value
    });
  };

  onFormSubmit = (dispatch, event) => {
    event.preventDefault();
    const city = {
      city: this.state.term
    };
    axios
      .post('/api/weather', city)
      .then(response =>
        dispatch({
          type: 'SEARCH_WEATHER',
          payload: {
            cityName: response.data.parent.title,
            cityData: response.data.consolidated_weather
          }
        })
      )
      .catch(error => {
        console.log(error);
      });

    this.setState({
      term: ''
    });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <form onSubmit={this.onFormSubmit.bind(this, dispatch)}>
              <input value={this.state.term} onChange={this.onInputChange} placeholder="Select City" />
              <button type="submit">Search</button>
            </form>
          );
        }}
      </Consumer>
    );
  }
}

export default SearchBar;
