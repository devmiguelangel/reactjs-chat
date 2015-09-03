/*
* Dependencies
*/

import Reflux from 'reflux';
import $ from 'jquery';
import ImageActions from '../actions/ImageActions';

let ImageStore = Reflux.createStore({
  url: 'https://api.flickr.com/services/feeds/photos_public.gne?format=json',
  listenables: [ ImageActions ],
  imageList: [],

  init: function () {
    this.fetchList();
  },

  fetchList: function () {
    let tags = [ 'animals', 'nature', 'food', 'travel', 'cars', 'sport', ];
    let randomTag = Math.floor(Math.random() * tags.length);

    $.ajax({
      url: this.url + `&tags=${randomTag}`,
      dataType: 'jsonp',
      jsonpCallback: 'jsonFlickrFeed',
      cache: false,
      context: this,
      success: function (data) {
        console.log(data);
        this.imageList = data.items;
        this.trigger(this.imageList);
      }
    });
  }
});

module.exports = ImageStore;