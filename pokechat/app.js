/*
* Dependencies
*/

import React from "react";
import PokeTable from "./components/PokeTable";

var pokemons = [
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

React.render(<PokeTable pokemons={ pokemons } />, document.getElementById('container'));