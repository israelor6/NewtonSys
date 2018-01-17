import React from 'react';
import Search from 'material-ui/svg-icons/action/search';
import ViewList from 'material-ui/svg-icons/action/view-list';
import Info from 'material-ui/svg-icons/action/build';
import QueryBuilder from '../queryBuilder/queryBuilder';
import ResultTable from '../resultTable/resultTable';
import MapControlls from '../mapControlls/mapControlls';

import './corner.css';

export default class Corner extends React.Component {

	constructor(props) {
		super(props);
		this.state = {rightOpen: false, leftOpen: false, mapOpen: false};
		Corner.context = this;
	}

	static openRight() {
		Corner.context.setState({rightOpen: !Corner.context.state.rightOpen, leftOpen: false});
	}

	static openLeft() {
		Corner.context.setState({leftOpen: !Corner.context.state.leftOpen, rightOpen: false});
	}

	static getSearchSideClass() {
		if (Corner.context.state.rightOpen) {
			return 'corner-right is-open-right';
		} else if (Corner.context.state.leftOpen) {
			return 'corner-right close-right close-other-open';
		} else {
			return 'corner-right close-right';
		}
	}

	static getTableSideClass() {
		let className = 'side-menu-left';
		if(Corner.context.state.leftOpen) {
			className += ' side-open-left';
		} else {
			className+= ' side-close-left';
		}

		return className;
	}

	static getIconTableClass() {
		let className = 'corner-left';
		if(Corner.context.state.leftOpen) {
			className += ' is-open-left';
		} else {
			className+= ' close-left';
		}

		return className;
	}

	static openMapSide() {
		Corner.context.setState({mapOpen: !Corner.context.state.mapOpen});
	}

	render() {
		const iconSearch = {
			marginTop: 50,
			color: 'white',
			height: '44px',
			width: '55px'
		};

		const iconView = {
			marginTop: 50,
			color: 'white',
			height: '44px',
			width: '55px',
			marginLeft: '-57px'
		};

		const iconInfo = {
			color: 'white',
			height: '24px',
			width: '35px',
			marginTop: '12px',
			marginRight: '8px',
			marginLeft: '7px'
		};

		return (
			<div>
				<div className={Corner.getTableSideClass()}>
					<ResultTable/>
				</div>

				<div onClick={Corner.openLeft} className={Corner.getIconTableClass()}>
					<ViewList style={iconView}/>
				</div>
				<div
					className={this.state.rightOpen ? 'side-menu-right side-open-right' : 'side-menu-right side-close-right'}>
					<QueryBuilder/>
				</div>
				<div onClick={Corner.openRight} className={Corner.getSearchSideClass()}>
					<Search style={iconSearch}/>
				</div>
				<div className={this.state.mapOpen ? 'map-side-menu map-side-menu-open' : 'map-side-menu map-side-menu-close'}>
					<MapControlls />
				</div>
				<div onClick={Corner.openMapSide} className={this.state.mapOpen ? 'map-menu map-icon-open' : 'map-menu map-icon-close'}>
					<Info style={iconInfo}/>
				</div>
			</div>
		);
	}
}
