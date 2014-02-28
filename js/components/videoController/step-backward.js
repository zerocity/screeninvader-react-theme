/** @jsx React.DOM */

define(['react'], function(React) {

	var VideoStepBackwardController = React.createClass({
		clickHandler:function() {
      $.get('/cgi-bin/trigger?playerPrevious');
		},
		render: function() {
			return (<div className="glyphicon glyphicon-step-backward" onClick={this.clickHandler} >&nbsp;</div>);
		}
	});
	return VideoStepBackwardController
})
