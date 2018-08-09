import React, { Component } from 'react';

class ThemeColorBox extends Component {
	colorChange = color => {
		this.props.changeTheme(this.props.color);
	};

	render() {
		return (
			<li style={{ backgroundColor: this.props.color }} className="themeColorBox" onClick={this.colorChange} />
		);
	}
}

export default ThemeColorBox;
