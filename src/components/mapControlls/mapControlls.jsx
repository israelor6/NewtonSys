import React from 'react';
import Flight from 'material-ui/svg-icons/action/flight-takeoff';
import './mapControlles.css';

export default class Corner extends React.Component {
	constructor(props) {
		super(props);
		this.state = {rightOpen: false, leftOpen: false, mapOpen: false};
		Corner.context = this;
	}

	static getIconColor() {

	}

	render() {
		const hoverColor = '#4a5972';
const iconStyle = {
	color: 'white'
};

		return (
			<div>
				<div className={'icon'}>
					<Flight className={'icon-Size'} style={iconStyle} hoverColor={hoverColor}/>
				</div><div className={'icon'}>
					<Flight className={'icon-Size'} style={iconStyle} hoverColor={hoverColor}/>
				</div><div className={'icon'}>
					<Flight className={'icon-Size'} style={iconStyle} hoverColor={hoverColor}/>
				</div><div className={'icon'}>
					<Flight className={'icon-Size'} style={iconStyle} hoverColor={hoverColor}/>
				</div>
			</div>
		)
	}

}
