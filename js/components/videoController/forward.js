/** @jsx React.DOM */

define(['react'], function(React) {

var VideoForwardController = React.createClass({
	clickHandler:function() {
      $.get('/cgi-bin/trigger?playerForward');
		},
	render: function() {
		return (<span className="glyphicon glyphicon-forward" onClick={this.clickHandler} >&nbsp;</span>);
	}
});

return VideoForwardController

})
