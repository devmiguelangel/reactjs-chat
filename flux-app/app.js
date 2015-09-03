/*
* Dependencies
*/

import React from 'react';
import ImageActions from './actions/ImageActions';
import ImageGrid from './components/ImageGrid';

setInterval(() => {
  ImageActions.fetchList();
}, 5000);

React.render(
  <ImageGrid />,
  document.getElementById('container')
);