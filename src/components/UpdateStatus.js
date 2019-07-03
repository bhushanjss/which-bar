import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';

import { updateCountMen, updateCountWomen } from '../actions';



class UpdateStatus extends Component {

	updateCountMen(event) {
		this.props.updateCountMen(event.target.value);
	}

	updateCountWomen(event) {
		this.props.updateCountWomen(event.target.value);
	}

	render() {
		return (
			<form className="update-count" noValidate autoComplete='off'>
				<TextField 
					label='Women Count'
					margin='normal'
					type='number'
					value={this.props.women.value}
					onChange={this.updateCountWomen.bind(this)}
				/>
				<TextField 
					label='Men Count'
					margin='normal'
					type='number'
					value={this.props.men.value}
					onChange={this.updateCountMen.bind(this)}
				/>
			</form>
		)
	}
}

const mapStateToProps = (state) => ({
	men: state.barStatus.man,
	women: state.barStatus.women
});

export default connect(mapStateToProps, {
	updateCountMen,
	updateCountWomen
})(UpdateStatus);
