/*
* Dependencies
*/

import React from "react";

class PokeAvatar extends React.Component{

  render () {
    var classString = 'avatar';
    var url = `http://veekun.com/dex/media/pokemon/main-sprites/x-y/${ this.props.number }.png`;
    // console.log(url);
    
    return (
      <div className={ "avatar-container" }>
        <img src={ url } className={ classString } />
      </div>
    );
  }

};

PokeAvatar.propTypes = {
  number: React.PropTypes.number 
};

export default PokeAvatar;