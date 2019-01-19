import React, { Component } from 'react';
import { connect } from 'react-redux';
import BarChart from './BarChart';
import { handleContainerWidthChange } from '../actions';

class ShowStatus extends Component {

	componentDidMount() {
	    window.onresize = () => {
	   		this.props.handleContainerWidthChange(this.refs.root.offsetWidth);
	    };
	  }

	render() {
		return (
			<div ref='root'>
	            <div style={{width: '50%'}}> 
	                <BarChart
	                  width={this.props.width}
	                  height={300}
	                  margin={this.props.margin}
	                  data={this.props.data}
	                  onBarClick={this.handleBarClick}/>
	            </div>
        	</div>	
		);
	}
}

const mapStateToProps = (state) => ({
	man: state.barStatus.man,
	women: state.barStatus.women,
	data: [state.barStatus.man, state.barStatus.women],
	width: state.barStatus.containerWidth,
	margin: state.barStatus.containerMargin
});

export default connect(mapStateToProps, {
	handleContainerWidthChange
})(ShowStatus);