/*
* Dependencies
*/

import React from 'react';

class PokeMessage extends React.Component {
	render() {
		return (
			<li className={ "poke-message" }>{ this.props.message.text }</li>
		);
	}
}

module.exports = PokeMessage;