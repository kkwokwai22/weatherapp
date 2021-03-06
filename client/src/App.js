import React, { Component } from 'react';
import './App.css';
import { Provider } from './context';
import Weather from './components/weatherlist/Weather';
import NavBar from './components/layout/Nav_bar';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <NavBar />
          <Weather />
        </div>
      </Provider>
    );
  }
}

export default App;
