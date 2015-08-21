/*
* Dependencies
*/

import React from "react";
import PokeRow from "./PokeRow";

class PokeTable extends React.Component{

	render() {
		return (
			<ul className={ "poke-table" }>
			{
				this.props.pokemons.map((pokemon) => {
					return (<PokeRow key={ pokemon.number } name={ pokemon.name } number={ pokemon.number } />);
				})
			}
			</ul>
		);
	}
};

PokeTable.propTypes = {
	pokemons: React.PropTypes.array
};

export default PokeTable;