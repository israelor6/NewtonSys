import React from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Query from '../query/query';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as builderQueryAction from '../../actions/builderQueryAction';

import PlusIcon from 'material-ui/svg-icons/content/add-circle-outline';

import './queryBuilder.css';

class QueryBuilder extends React.Component {
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

	onClickSort() {
		QueryBuilder.context.props.actions.searchNewQuery(builderQueryAction.searchNewQuery("fff"));
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
					{this.props.layers.map(x =>
						<MenuItem key={x.id} value={x.id} primaryText={x.title}/>)
					}
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
				<RaisedButton className={'filter-button'} label="סנן" primary={true} onClick={this.onClickSort}/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		actions: bindActionCreators(builderQueryAction, state),
		layers: state.buildQuery.layers
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(builderQueryAction, dispatch)
	}
}

QueryBuilder.propTypes = {
	actions: PropTypes.object.isRequired,
	layers: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(QueryBuilder);
