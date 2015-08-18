var HomeComponent = React.createClass({
	propTypes: {
		name: React.PropTypes.string,
		level: React.PropTypes.number
	},
	render: function() {
		return (
			<h1>Hello { this.props.name }! { this.props.level }</h1>
		);
	}

});

React.render(<HomeComponent name={"Miki"} level={ 2 } />, document.getElementById('container'));