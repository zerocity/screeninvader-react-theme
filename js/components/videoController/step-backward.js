/** @jsx React.DOM */

define(['react'], function(React) {

	var VideoStepBackwardController = React.createClass({
		clickHandler:function() {
      $.get('/cgi-bin/trigger?playerPrevious');
		},
		render: function() {
			return (<span className="glyphicon glyphicon-step-backward" onClick={this.clickHandler} >&nbsp;</span>);
		}
	});
	return VideoStepBackwardController
})
