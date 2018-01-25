import React from "react";

export default class ChangeTiles extends React.Component {
	constructor(props) {
		super(props);
		this.state = {open: false};
		ChangeTiles.context = this;
	}

	render() {
		return(
			<div>bla</div>
		)
	}
}
