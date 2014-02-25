/** @jsx React.DOM */

define(['react'], function(React) {

	var VideoFastBackwardController = React.createClass({
	clickHandler:function() {
      $.get('/cgi-bin/trigger?playerRewindMore');
		},
		render: function() {
			return (<span className="glyphicon glyphicon-fast-backward" onClick={this.clickHandler} >&nbsp;</span>);
		}
	});
	return VideoFastBackwardController
})
