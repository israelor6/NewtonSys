import React from 'react';
import Flight from 'material-ui/svg-icons/action/flight-takeoff';
import Direction from 'material-ui/svg-icons/maps/directions';
import Layers from 'material-ui/svg-icons/maps/layers';
import Point from 'material-ui/svg-icons/maps/pin-drop';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import * as mapConfig from '../../configs/mapConfig';


import './mapControlles.css';
import MapHandler from "../map/mapHandler";

export default class MapControls extends React.Component {
	constructor(props) {
		super(props);
		this.state = {open: false, selectedTile: ''};
		MapControls.context = this;
	}

	handleClick (event){
		// This prevents ghost click.
		event.preventDefault();

		MapControls.context.setState({
			open: true,
			anchorEl: event.currentTarget,
		});
	}

	handleRequestClose () {
		MapControls.context.setState({
			open: false,
		});
	}

	drawNewPolygon() {
		MapHandler.drawPolygon();
	}

	addPoint() {
		MapHandler.addPoint();
	}

	chooseTile(event, value) {
	MapHandler.changeLayer(value);
	}

	drawNewPolyline() {
		MapHandler.drawNewPolyline();
	}

	async jumpTo() {
		let swal = await import(/* webpackChunkName: "swal" */ 'sweetalert');
		swal({
			content: {
				element: "input",
				attributes: {
					placeholder: "Lat/Lng",
					type: "text",
					dir: 'ltr'
				},
			},
			title: 'הכנס נ.צ. לקפיצה',
			buttons: {
				cancel: {
					text: "בטל",
					value: null,
					visible: true,
					className: "",
					closeModal: true,
				},
				confirm: {
					text: "אישור",
					value: true,
					visible: true,
					className: "",
					closeModal: true
				}
			}
		}).then(function (x) {
			if(x) {
				let lngLat = {
					lng: x.split("/").map(item => item.trim())[1],
					lat: x.split("/").map(item => item.trim())[0]
				};
				MapHandler.jupTo(lngLat);
			}
		})
	}

	render() {
		const iconStyle = {
			color: 'white',
			marginTop: '5px'
		};

		return (
			<div>
				<div className={'icon'} onClick={this.jumpTo}>
					<Flight className={'icon-Size'} style={iconStyle}/>
				</div>
				<div className={'icon'}>
					<Direction className={'icon-Size'} style={iconStyle} />
				</div>
				<div className={'icon'} onClick={this.handleClick}>
					<Layers className={'icon-Size'} style={iconStyle} />
				</div>
				<div className={'icon'} onClick={this.addPoint}>
					<Point className={'icon-Size'} style={iconStyle} />
				</div>
				<div className={'icon'} onClick={this.drawNewPolygon}>
					<svg style={{width:'24px', height:'24px'}} viewBox={"0 0 24 24"}>
						<path fill={"white"} d={"M17,15.7V13H19V17L10,21L3,14L7,5H11V7H8.3L5.4,13.6L10.4,18.6L17,15.7M22,5V7H19V10H17V7H14V5H17V2H19V5H22Z"} />
					</svg>
				</div>
				<div className={'icon'} onClick={this.drawNewPolyline}>
					<svg style={{width:'24px', height:'24px'}} viewBox={"0 0 24 24"}>
						<path fill={"white"} d={"M16,2V8H17.08L14.95,13H14.26L12,9.97V5H6V11H6.91L4.88,16H2V22H8V16H7.04L9.07,11H10.27L12,13.32V19H18V13H17.12L19.25,8H22V2M18,4H20V6H18M8,7H10V9H8M14,15H16V17H14M4,18H6V20H4"} />
					</svg>
				</div>
				<Popover
					open={this.state.open}
					anchorEl={this.state.anchorEl}
					anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
					targetOrigin={{horizontal: 'right', vertical: 'top'}}
					onRequestClose={this.handleRequestClose}
				>
					<Menu value={this.state.selectedTile} onChange={this.chooseTile}>
						{mapConfig.mapTiles.map((x) => {
							return <MenuItem value={x.tile} primaryText={x.name} key={x.id}/>
						})}
					</Menu>
				</Popover>
			</div>
		)
	}

}
