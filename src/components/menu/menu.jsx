import React, { Component } from 'react';
import Mail from 'material-ui/svg-icons/communication/mail-outline';
import Phone from 'material-ui/svg-icons/communication/contact-phone';
import Info from 'material-ui/svg-icons/action/info-outline';
import './menu.css';

class Menu extends Component {
	render() {
		return (
			<div>
				<nav className={"menu-button"}>
					<input type="checkbox" href="#" className={"menu-open"} name="menu-open" id="menu-open" />
					<label className={"menu-open-button"} htmlFor="menu-open">
						<span className={"lines line-1"}></span>
						<span className={'lines line-2'}></span>
						<span className={"lines line-3"}></span>
					</label>

					<a href="#" className={"menu-item blue"}>none</a>
					<a href="#" className={"menu-item green"}>none</a>
					<a href="#" className={"menu-item red"}> none </a>
					<a href="#" className={"menu-item purple"}><Mail/></a>
					<a href="#" className={"menu-item purple"}> <Phone/> </a>
					<a href="#" className={"menu-item purple"}> <Info/> </a>
				</nav>
			</div>
		);
	}
}

export default Menu;
