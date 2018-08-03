import React, { Component } from 'react';
import './Nav_bar.css';
import SideNav from './Side_nav';

class NavBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sideNavSize: '300px'
		};
		this.openNav = this.openNav.bind(this);
		this.changeNav = this.changeNav.bind(this);
	}

	changeNav() {}

	openNav(sizeNum) {
		let size = { sideNavSize: sizeNum };
		this.setState(size, () => this.changeNav());
		document.getElementById('mySidenav').style.width = this.state.sideNavSize;
	}

	render() {
		return (
			<div class="navburger" onClick={this.openNav}>
				<div class="bar1" />
				<div class="bar2" />
				<div class="bar3" />
				<SideNav openNav={this.openNav} />
			</div>
		);
	}
}

export default NavBar;
