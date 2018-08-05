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
		} else {
			this.setState({
				showNavBar: false
			});
		}
	}

	render() {
		const { showNavBar } = this.state;
		return (
			<React.Fragment>
				<div class="navburger" onClick={this.openNav}>
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
