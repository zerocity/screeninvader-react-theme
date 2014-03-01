/** @jsx React.DOM */
define(['react',
				'backbone'],
				function(React,Backbone) {

var RouterMixin = {
  componentWillMount : function() {
    this.callback = (function() {
      this.forceUpdate();
    }).bind(this);
    this.props.router.on("route", this.callback);
  },
  componentWillUnmount : function() {
    this.props.router.off("route", this.callback);
  }
};

return RouterMixin
});
