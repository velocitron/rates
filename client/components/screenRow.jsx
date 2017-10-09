import React from 'react';

const ScreenRow = function(props){
	return(
		<div className = 'screen-row'>
			<input type='text' readonly = 'readonly' value = {props.value}></input>
		</div>
		)
}

ScreenRow.propTypes = {
	value:React.PropTypes.string.isRequired
}

export default ScreenRow;