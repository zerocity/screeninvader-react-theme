/** @jsx React.DOM */
define(['react',
				'backbone'],
				function(React,Backbone) {

var Router = Backbone.Router.extend({

  routes : {
  	""		: "invader",
    "search" : "youtubesearch",
    "urlSearch":"urlSearch",
    "playlist" : "invader"
  },

  invader : function() {
    this.current = "invader";
  },

  youtubesearch : function() {
    this.current = "youtubesearch";
  },

  urlSearch : function() {
    this.current = "urlSearch";
  }
});

var router = new Router();

Backbone.history.start();

return router

});
