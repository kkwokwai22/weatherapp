import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Theme from './Theme';
import './Side.nav.css';

class SideNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      closeNavBar: true
    };
    this.closeNav = this.closeNav.bind(this);
  }

  closeNav() {
    this.props.closingNavBar();
  }

  render() {
    return (
      <div id="mySidenav" className="sidenav">
        <div className="container-city-theme">
          <div className="select-city">
            <h2>Select a City</h2>
            <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>
              &times;
            </a>
          </div>
          <SearchBar />
          <h2>Theme</h2>
          <Theme />
        </div>
      </div>
    );
  }
}

export default SideNav;
