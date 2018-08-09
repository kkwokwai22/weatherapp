import React, { Component } from 'react';
import './Theme.css';
import uuid from 'uuid';
import ThemeColorBox from './ThemeColorBox';

class Theme extends Component {
	constructor() {
		super();
		this.state = {
			themeColors: ['red', 'orange', 'green', 'black', 'blue', 'purple', 'pink', 'yellow', 'blueviolet']
		};
	}

	changeTheme = color => {
		document.body.style.backgroundColor = color;
	};

	render() {
		const themeBox = this.state.themeColors.map(color => {
			return <ThemeColorBox key={uuid()} color={color} changeTheme={this.changeTheme} />;
		});
		return <ul className="themebox-container">{themeBox}</ul>;
	}
}

export default Theme;
