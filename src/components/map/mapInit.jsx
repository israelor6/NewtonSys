import React from 'react';
import MapHandler from './mapHandler';
import './mapInit.css';

export default class MapInit extends React.Component {
	constructor(props) {
		super(props);
		MapInit.context = this;
	}

	componentDidMount() {
		MapInit.context.mapHandler = new MapHandler('map');
	}

	static bla() {
		console.log('ff');
	}

	render() {
		return (
			<div id={'map'}>
			</div>
		);
	}
}
