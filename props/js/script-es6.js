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

class Avatar extends React.Component{

	render () {
		var classString = 'avatar';
		var url = `http://veekun.com/dex/media/pokemon/main-sprites/x-y/${ this.props.number }.png`;
		console.log(url);
		
		return (
			<img src={ url } className={ classString } />
		);
	}

};

Avatar.propTypes = {
	number: React.PropTypes.number 
};

class PokeRow extends React.Component{

	render() {
		return (
			<div>
				<Avatar number={ this.props.number } />
				<span className={ "avatar-name" } >{ this.props.name }</span>
			</div>
		);
	}
};

PokeRow.propTypes = {
	name: React.PropTypes.string,
	number: React.PropTypes.number
};

var pokemon = pokemons[1];

React.render(<PokeRow name={ pokemon.name } number={ pokemon.number } />, document.getElementById('container'));