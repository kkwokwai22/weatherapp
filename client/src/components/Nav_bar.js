import React, { Component } from 'react';
import './Nav_bar.css';
import SideNav from './Side_nav';

class NavBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showNavBar: false
		};
		this.openNav = this.openNav.bind(this);
	}

	openNav() {
		const { showNavBar } = this.state;
		if (showNavBar === false) {
			this.setState({
				showNavBar: true
			});
			document.querySelector('#navburger').style.opacity = '0';
		} else {
			this.setState({
				showNavBar: false
			});
			document.querySelector('#navburger').style.opacity = '1';
		}
	}

	render() {
		const { showNavBar } = this.state;
		return (
			<React.Fragment>
				<div id="navburger" class="navburger" onClick={this.openNav}>
					<div class="bar1" />
					<div class="bar2" />
					<div class="bar3" />
				</div>
				{showNavBar ? <SideNav closingNavBar={this.openNav} /> : null}
			</React.Fragment>
		);
	}
}

export default NavBar;
