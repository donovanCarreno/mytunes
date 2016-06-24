// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  parse: function(response) {
    return response.results;
  },

  initialize: function() {
    this.fetch();
  },

  url: 'https://api.parse.com/1/classes/songs'
});