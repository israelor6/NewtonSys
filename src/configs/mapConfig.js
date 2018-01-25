
export const mapTiles = [{
	name: 'שכבה ראשונה',
	tile: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
	id: 1
},
	{name: 'OSM Mapnik',
		tile: 'http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
		id: 1
	},
	{name: 'OSM Landscape',
		tile: 'http://{s}.tile3.opencyclemap.org/landscape/{z}/{x}/{y}.png',
		id: 1
	},
	{
		name: 'שכבה שנייה',
		tile: 'https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png',
		id: 2
	},
	{
		name: 'Dark Gray Base',
		tile: 'http://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}',
		id: 2
	}];
