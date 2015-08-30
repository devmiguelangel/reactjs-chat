/*
* Dependencies
*/

import React from "react";
import PokeAvatar from "./PokeAvatar";

class PokeRow extends React.Component{
  onClick(e) {
    // console.log(this.props.name);
    this.props.growl.call(null, this.props.name);
  }

  render() {
    return (
      <li className={ "poke-row" } onClick={ this.onClick.bind(this) }>
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

export default PokeRow;