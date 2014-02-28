/** @jsx React.DOM */

define(['react'], function(React) {

var VideoStopController = React.createClass({
	clickHandler:function() {
      $.get('/cgi-bin/trigger?playerClose');
	},
	render: function() {
		return (<div className="glyphicon glyphicon-stop" onClick={this.clickHandler} >&nbsp;</div>);
	}
});

return VideoStopController

})
