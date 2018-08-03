import React, { Component } from 'react';
import './Nav_bar.css';
import SearchBar from './SearchBar';
import axios from 'axios';

class SideNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideNavSize: '0px'
    };
  }

  closeNav() {
    console.log(this.state.sideNavSize);
    console.log(this.props.openNav);
    this.props.openNav(this.state.sizeNavSize);
  }

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
