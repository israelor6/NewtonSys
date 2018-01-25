import React, {Component} from 'react';
import {
	Table,
	TableBody,
	TableFooter,
	TableHeader,
	TableHeaderColumn,
	TableRow,
	TableRowColumn,
} from 'material-ui/Table';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import {connect} from "react-redux";

const styles = {
	propContainer: {
		width: 200,
		overflow: 'hidden',
		margin: '20px auto 0',
	},
	propToggleHeader: {
		margin: '20px auto 10px',
	},
};

const tableData = [
	{
		name: 'John Smith',
		status: 'Employed',
	},
	{
		name: 'Randal White',
		status: 'Unemployed',
	},
	{
		name: 'Stephanie Sanders',
		status: 'Employed',
	},
	{
		name: 'Steve Brown',
		status: 'Employed',
	},
	{
		name: 'Joyce Whitten',
		status: 'Employed',
	},
	{
		name: 'Samuel Roberts',
		status: 'Employed',
	},
	{
		name: 'Adam Moore',
		status: 'Employed',
	},
];

/**
 * A more complex example, allowing the table height to be set, and key boolean properties to be toggled.
 */
class ResultTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fixedHeader: true,
			fixedFooter: true,
			stripedRows: false,
			showRowHover: true,
			selectable: true,
			multiSelectable: false,
			enableSelectAll: true,
			deselectOnClickaway: true,
			showCheckboxes: true,
			height: '290px'
		};
		ResultTable.context = this;
	}

	render() {
		return (
			<div>
				<Table
					height={this.state.height}
					fixedHeader={this.state.fixedHeader}
					fixedFooter={this.state.fixedFooter}
					selectable={this.state.selectable}
					multiSelectable={this.state.multiSelectable}
				>
					<TableHeader
						displaySelectAll={this.state.showCheckboxes}
						adjustForCheckbox={this.state.showCheckboxes}
						enableSelectAll={this.state.enableSelectAll}
					>
						<TableRow>
							<TableHeaderColumn colSpan="3" tooltip="Super Header" style={{textAlign: 'center'}}>
								Super Header
							</TableHeaderColumn>
						</TableRow>
						<TableRow>
							<TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
							<TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
							<TableHeaderColumn tooltip="The Status">Status</TableHeaderColumn>
						</TableRow>
					</TableHeader>
					<TableBody
						displayRowCheckbox={this.state.showCheckboxes}
						deselectOnClickaway={this.state.deselectOnClickaway}
						showRowHover={this.state.showRowHover}
						stripedRows={this.state.stripedRows}
					>
						{tableData.map( (row, index) => (
							<TableRow key={index}>
								<TableRowColumn>{index}</TableRowColumn>
								<TableRowColumn>{row.name}</TableRowColumn>
								<TableRowColumn>{row.status}</TableRowColumn>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		layers: state.buildQuery.layers
	}
}


ResultTable.propTypes = {
	layers: PropTypes.array.isRequired
};

export default connect(mapStateToProps, {})(ResultTable);
