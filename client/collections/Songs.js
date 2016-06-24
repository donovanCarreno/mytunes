// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    var context = this;
    $.ajax({
      type: 'GET',
      url: this.url,
      success: function(data) {
        console.log('Songs context: ', context);
        context.add(data.results);
      },
      error: function(data) {
        console.log('error');
      }
    });
  },

  url: 'https://api.parse.com/1/classes/songs'
});