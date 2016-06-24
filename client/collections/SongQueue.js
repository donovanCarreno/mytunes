// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    // plays if it is the first song added, 
    // but if it is not the first added, there is already a song playing
    this.on('add', this.enqueue, this);
    this.on('ended', this.playNext, this);
    this.on('dequeue', this.dequeue, this);
  },

  enqueue: function(song) {
    if (this.length === 1) {
      this.playFirst();
    }
  },

  dequeue: function(song) {
    this.remove(song);
  },

  playFirst: function() {
    if (this.at(0)) {
      this.at(0).play();
    }
  },

  playNext: function() {
    this.remove(this.at(0));
    this.playFirst();
  }

});