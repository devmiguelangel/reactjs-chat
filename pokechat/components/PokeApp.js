/*
* Dependencies
*/

import React from 'react';
import PokeTable from './PokeTable';
import PokeChat from './PokeChat';

class PokeApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = { messages: [] };
		this.onGrowl = this.onGrowl.bind(this);
	}

	onGrowl(name) {
		let text = `${name} ${name}!`;
		this.state.messages.push( { text: text } );
		let messages = this.state.messages;
		this.setState({ messages: messages });
	}

	render() {
		let pokemons = [
			{
				name: "Abra",
				number: 63
			},
			{
				name: "Charmander",
				number: 4
			},
			{
				name: "Bulbasaur",
				number: 1
			},
			{
				name: "Gastly",
				number: 92
			}
		];
		
		return (
			<div>
				<PokeTable pokemons={ pokemons } onGrowl={ this.onGrowl } />
				<PokeChat messages={ this.state.messages } />
			</div>
		);
	}
}

module.exports = PokeApp;