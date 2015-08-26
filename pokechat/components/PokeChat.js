/*
* Dependencies
*/

import React from 'react';
import PokeMessage from './PokeMessage';

class PokeChat extends React.Component {
	render() {
		console.log(this.props.messages);
		return (
			<ul className={ "poke-chat" }>
			{
				this.props.messages.map((message) => {
					return <PokeMessage key={ message.id } message={ message } />
				})
			}
			</ul>
		);
	}
}

PokeChat.defaultProps = { messages: [] };

module.exports = PokeChat;