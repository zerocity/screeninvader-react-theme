/** @jsx React.DOM */

define(['react'], function(React) {

	var VideoBackwardController = React.createClass({
	clickHandler:function() {
      $.get('/cgi-bin/trigger?playerRewind');
		},
		render: function() {
			return (<div className="glyphicon glyphicon-backward" onClick={this.clickHandler} >&nbsp;</div>);
		}
	});
	return VideoBackwardController
})
