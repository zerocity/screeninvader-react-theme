/** @jsx React.DOM */

define(['react'], function(React) {

var VideoForwardController = React.createClass({
	clickHandler:function() {
      $.get('/cgi-bin/trigger?playerForward');
		},
	render: function() {
		return (<div className="glyphicon glyphicon-forward" onClick={this.clickHandler} >&nbsp;</div>);
	}
});

return VideoForwardController

})
