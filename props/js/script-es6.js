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

class PokeAvatar extends React.Component{

	render () {
		var classString = 'avatar';
		var url = `http://veekun.com/dex/media/pokemon/main-sprites/x-y/${ this.props.number }.png`;
		console.log(url);
		
		return (
			<img src={ url } className={ classString } />
		);
	}

};

PokeAvatar.propTypes = {
	number: React.PropTypes.number 
};

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

// var pokemon = pokemons[1];

// React.render(<PokeRow name={ pokemon.name } number={ pokemon.number } />, document.getElementById('container'));
React.render(<PokeTable pokemons={ pokemons } />, document.getElementById('container'));