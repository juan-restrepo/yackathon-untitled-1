'use strict';
var Reflux  = require('../lib/reflux');
var request = require('../lib/request');

var Actions = require('../actions');

var WordStore = Reflux.createStore({
  init: function() {
    this.listenTo(Actions.fetchWords, this.fetchWords);
  },

  fetchWords: function(lat, lng) {
    request.apiGet('http://yack-mongodb.kiasaki.com/v1/city/businesses/words')
    .query({lat: lat, lng: lng})
    .end(function(error, res) {
      if (error) return this.trigger('fetch', error);
      if (res.body.message) return this.trigger('fetch', res.body.message);

      this.trigger('fetch', null, res.body.words);
    }.bind(this));
  }
});

module.exports = WordStore;
