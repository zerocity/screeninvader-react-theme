define(["backbone"], function(Backbone) {
	return Backbone.Router.extend({
  routes : {
  	""		: "invader",
    "search" : "youtubesearch",
    "bar" : "bar"
  },

  invader : function() {
    this.current = "invader";
  },

  youtubesearch : function() {
    this.current = "youtubesearch";
  },

  bar : function() {
    this.current = "bar";
	}
  });
});
