/** @jsx React.DOM */

define(['react'], function(React) {

var VideoStepForwardController = React.createClass({
	clickHandler:function() {
      $.get('/cgi-bin/trigger?playerNext');
		},
	render: function() {
		return (<div className="glyphicon glyphicon-step-forward" onClick={this.clickHandler} >&nbsp;</div>);
	}
});

return VideoStepForwardController

})
