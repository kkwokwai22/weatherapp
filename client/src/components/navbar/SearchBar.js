import React, { Component } from 'react';
import axios from 'axios';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: 'New York'
    };
  }

  onInputChange(term) {
    this.setState({
      term: term
    });
  }

  searchWeather = () => {
    // axios
    //   .get('/api/weather', {
    //     search: this.state.term
    //   })
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  };

  render() {
    return (
      <div>
        <input value={this.state.term} onChange={event => this.onInputChange(event.target.value)} />;
        <button onClick={() => this.searchWeather()}>Search</button>
      </div>
    );
  }
}

export default SearchBar;
