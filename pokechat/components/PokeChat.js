/*
* Dependencies
*/

// import React from 'react';
import React from 'react/addons';
import PokeMessage from './PokeMessage';

const { CSSTransitionGroup } = React.addons;

class PokeChat extends React.Component {
	render() {
		console.log(this.props.messages);
		return (
			<ul className={ "poke-chat" }>
			<CSSTransitionGroup transitionName="message-animation">
				{
					this.props.messages.map((message) => {
						return <PokeMessage key={ message.id } message={ message } />
					})
				}
			</CSSTransitionGroup>
			</ul>
		);
	}
}

PokeChat.defaultProps = { messages: [] };

module.exports = PokeChat;