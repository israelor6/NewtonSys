import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Query from '../query/query';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';

import PlusIcon from 'material-ui/svg-icons/content/add-circle-outline';

import './queryBuilder.css';

export default class QueryBuilder extends React.Component {
	constructor(props) {
		super(props);
		this.state = {layer: null, filters: []};
		QueryBuilder.context = this;
	}

	chooseLayer(event, index, value) {
		QueryBuilder.context.setState({layer: value})
	}


	addFilter() {
		QueryBuilder.context.state.filters.push({a: 'ff'});
		QueryBuilder.context.setState({
			filters: QueryBuilder.context.state.filters
		})
	}

	render() {
		const plusStyle = {
			height: '40px',
			width: '40px',
			color: 'red'
		};

		return (
			<div>
				<h1 className={'header'}>בניית שאילתת חיפוש</h1>
				<hr/>
				<SelectField
					className={'select-box'}
					floatingLabelText="בחר שכבה"
					value={this.state.layer}
					onChange={QueryBuilder.chooseLayer}
				>
					<MenuItem value={null} primaryText="בחר שכבה"/>
					<MenuItem value={1} primaryText="בלה בלה בלה"/>
					<MenuItem value={2} primaryText="עוד בלה בלה"/>
					<MenuItem value={3} primaryText="מחר"/>
					<MenuItem value={4} primaryText="לך"/>
					<MenuItem value={5} primaryText="בא"/>
				</SelectField>
				<IconButton tooltip="הוסף תנאי חיפוש"
										onClick={this.addFilter}
										touch={true}
										tooltipPosition="bottom-right">
					<PlusIcon style={plusStyle}/>
				</IconButton>
				{this.state.filters.length > 0 &&
				<div className={'query-container'}>
					{this.state.filters.map((x, i) =>
						<Query key={i}/>
					)}
				</div>}
				<br/>
				<RaisedButton className={'filter-button'} label="סנן" primary={true} />
			</div>
		);
	}
}
