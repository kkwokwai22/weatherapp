import React, { Component } from 'react';
import './Nav_bar.css';
import SearchBar from './SearchBar';
import axios from 'axios';

class SideNav extends Component {
  closeNav() {}

  render() {
    return (
      <div id="mySidenav" class="sidenav">
        <div class="select-city">
          <h2>Select a City</h2>
          <a href="javascript:void(0)" class="closebtn" onClick={this.closeNav.bind(this)}>
            &times;
          </a>
        </div>
        <SearchBar />
        <h2>Theme</h2>
      </div>
    );
  }
}

export default SideNav;
