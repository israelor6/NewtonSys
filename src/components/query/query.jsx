import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';

import './query.css';

export default class Query extends React.Component {
	constructor(props) {
		super(props);
		this.state = {layer: null};
		Query.context = this;
	}

	chooseField(event, index, value) {
		Query.context.setState({field: value})
	}

	chooseCond(event, index, value) {
		Query.context.setState({cond: value})
	}

	render() {
		return (
			<div className={'container'}>
				<SelectField
					className={'field'}
					floatingLabelText="בחר שדה"
					value={this.state.field}
					onChange={this.chooseField}
				>
					<MenuItem value={null} primaryText="שדה בלי"/>
					<MenuItem value={1} primaryText="שדה בלו"/>
					<MenuItem value={2} primaryText="בלה"/>
					<MenuItem value={3} primaryText="מחר"/>
					<MenuItem value={4} primaryText="לך"/>
					<MenuItem value={5} primaryText="בא"/>
				</SelectField>

				<SelectField
					floatingLabelText="תנאי"
					className={'cond'}
					value={this.state.cond}
					onChange={this.chooseCond}
				>
					<MenuItem value={null} primaryText="שווה"/>
					<MenuItem value={1} primaryText="גדול שווה"/>
					<MenuItem value={2} primaryText="קטן שווה"/>
					<MenuItem value={3} primaryText="קטו"/>
					<MenuItem value={4} primaryText="גדול"/>
					<MenuItem value={5} primaryText="מכיל"/>
				</SelectField>
				<TextField
					hintText="הכנס ערך"
					floatingLabelText="הכנס ערך"
					className={'filter'}
				/>
			</div>
		)
	}
}

