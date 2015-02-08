'use strict';
var Reflux  = require('../lib/reflux');
var request = require('../lib/request');

var Actions = require('../actions');

var WordsStore = Reflux.createStore({
  init: function() {
    this.listenTo(Actions.fetchWords, this.fetchWords);
  },

  fetchWords: function(lat, lng) {
    request.apiGet('http://yack-mongodb.kiasaki.com/v1/city/businesses/words')
    .query({lat: lat, lng: lng})
    .end(function(error, res) {
      if (error) return this.trigger('all', error);
      if (body.message) return this.trigger('all', body.message);

      this.trigger('all', null, res.body.words);
    });
  }
});

module.exports = WordsStore;
