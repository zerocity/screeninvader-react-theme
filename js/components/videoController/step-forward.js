/** @jsx React.DOM */

define(['react'], function(React) {

var VideoStepForwardController = React.createClass({
	clickHandler:function() {
      $.get('/cgi-bin/trigger?playerNext');
		},
	render: function() {
		return (<span className="glyphicon glyphicon-step-forward" onClick={this.clickHandler} >&nbsp;</span>);
	}
});

return VideoStepForwardController

})
