import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import 'leaflet-mouse-position/src/L.Control.MousePosition.css';
import './mapHandler.css';
import copy from 'copy-to-clipboard';

import MP from 'leaflet-mouse-position/src/L.Control.MousePosition';  // eslint-disable-line
import RMC from 'leaflet-contextmenu'; // eslint-disable-line
import * as mapConfig from '../../configs/mapConfig';


import Draw from 'leaflet-draw'; // eslint-disable-line

export default class MapHandler {
	constructor(id) {
		if (!MapHandler.context) {
			this.mapId = id;
			MapHandler.context = this;
			this.layer = L.tileLayer(mapConfig.mapTiles[0].tile);
			this.init();
		} else {
			return MapHandler.context;
		}
	}

	init() {
		MapHandler.context.map = L.map(MapHandler.context.mapId, {
			layers: MapHandler.context.layer,
			contextmenu: true,
			maxZoom: 18,
			minZoom: 5,
			contextmenuWidth: 140,
			contextmenuItems: [{
				text: 'העתק נ.צ.',
				callback: MapHandler.context.copyPosition
			},
				{
					text: 'מרכז לכאן',
					callback: MapHandler.context.center
				},
				{
					text: 'הגדל זום',
					callback: MapHandler.context.zoomIn
				},
				{
					text: 'הקטן זום',
					callback: MapHandler.context.zoomOut
				}]
		}).setView([51.505, -0.09], 18);

		let editableLayers = new L.FeatureGroup();
		MapHandler.context.map.addLayer(editableLayers);

		let mySvgString = '<svg width="866" height="1000" xmlns="http://www.w3.org/2000/svg"><metadata id="metadata1">image/svg+xml</metadata><circle fill="#009688" cx="400" cy="468" r="395"/></svg>';
		let myIconUrl = encodeURI("data:image/svg+xml," + mySvgString).replace('#', '%23');

		let customIcon = L.Icon.extend({
			options: {
				shadowUrl: null,
				iconAnchor: new L.Point(12, 12),
				iconSize: new L.Point(24, 24),
				iconUrl: myIconUrl
			}
		});

		let options = {
			position: 'topright',
			draw: {
				polyline: {
					shapeOptions: {
						color: '#009688',
						weight: 10
					}
				},
				polygon: {
					allowIntersection: false, // Restricts shapes to simple polygons
					drawError: {
						color: '#009688', // Color the shape will turn when intersects
						message: '<strong>בעיה בציור פוליגון<strong> אינך יכול לצייר פוליגון זה' // Message that will show when intersect
					},
					shapeOptions: {
						color: '#009688'
					}
				},
				marker: {
					icon: new customIcon()
				}
			},
			edit: {
				featureGroup: editableLayers, //REQUIRED!!
				remove: false
			}
		};

		MapHandler.context.drawControl = new L.Control.Draw(options);
		MapHandler.context.map.addControl(MapHandler.context.drawControl);

		MapHandler.context.map.on(L.Draw.Event.CREATED, function (e) {
			let layer = e.layer;
			editableLayers.addLayer(layer);
		});
	}

	async copyPosition(e) {
		copy(e.latlng.toString());
		let swal = await import(/* webpackChunkName: "swal" */ 'sweetalert');

		swal("מיקום הועתק ללוח", {
			button: false,
			timer: 1000,
		});
	}

	center(e) {
		MapHandler.context.map.panTo(e.latlng);
	}
	zoomIn () {
		MapHandler.context.map.zoomIn();
	}
	zoomOut () {
		MapHandler.context.map.zoomOut();
	}

	static changeLayer(layerToAdd) {
		MapHandler.context.map.removeLayer(MapHandler.context.currLayer || MapHandler.context.layer);
		MapHandler.context.currLayer = L.tileLayer(layerToAdd);
		MapHandler.context.map.addLayer(MapHandler.context.currLayer);
	}

	static drawPolygon() {
		MapHandler.context.drawControl._toolbars.draw._modes.polygon.handler.enable();
	}

	static addPoint() {
		MapHandler.context.drawControl._toolbars.draw._modes.marker.handler.enable();
	}

	static drawNewPolyline() {
		MapHandler.context.drawControl._toolbars.draw._modes.polyline.handler.enable();
	}

	static jupTo(e) {
		MapHandler.context.map.panTo(e);
	}

}
