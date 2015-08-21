/*
* Dependencies
*/

import React from "react";
import PokeAvatar from "./PokeAvatar";

class PokeRow extends React.Component{

	render() {
		return (
			<li>
				<PokeAvatar number={ this.props.number } />
				<span className={ "avatar-name" } >{ this.props.name }</span>
			</li>
		);
	}
};

PokeRow.propTypes = {
	name: React.PropTypes.string,
	number: React.PropTypes.number
};

export default PokeRow;