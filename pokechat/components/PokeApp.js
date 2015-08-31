/*
* Dependencies
*/

import React from 'react';
import PokeTable from './PokeTable';
import PokeChat from './PokeChat';
import uid from 'uid';
import $ from 'jquery';
import io from 'socket.io-client';

class PokeApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [], pokemons: [] };
    this.onGrowl = this.onGrowl.bind(this);
    this.user = uid(10);
  }

  componentWillMount() {
    $.get('/pokemons', (res) => {
      this.setState({ pokemons: res });
    });

    this.socket = io('http://localhost:3000');
    this.socket.on('message', (msg) => {
      console.log(msg);
      if (msg.user !== this.user) {
        this.newMessage(msg);
      }
    });
  }

  onGrowl(name) {
    let text = `${name} ${name}!`;
    let message = { id: uid(), text: text , user: this.user };
    this.newMessage(message);
    this.socket.emit('message', message);
  }

  newMessage(message) {
    this.state.messages.push(message);
    let msg = this.state.messages;
    this.setState({ messages: msg });
  }

  render() {
    /*let pokemons = [
      { name: "Abra", number: 63 },
      { name: "Charmander", number: 4 },
      { name: "Bulbasaur", number: 1 },
      { name: "Gastly", number: 92 }
    ];*/
    
    if (this.state.pokemons.length) {
      return (
        <div className={ "poke-app" }>
          <PokeTable pokemons={ this.state.pokemons } onGrowl={ this.onGrowl } />
          <PokeChat messages={ this.state.messages } />
        </div>
      );
    } else {
      return (<p>Cargando...</p>);
    }
  }
}

module.exports = PokeApp;