/** @jsx React.DOM */

define(['react'], function(React) {

var VideoStopController = React.createClass({
	clickHandler:function() {
      $.get('/cgi-bin/trigger?playerClose');
	},
	render: function() {
		return (<span className="glyphicon glyphicon-stop" onClick={this.clickHandler} >&nbsp;</span>);
	}
});

return VideoStopController

})
