/** @jsx React.DOM */

define(['react'], function(React) {

var VideoPlayController = React.createClass({
	clickHandler:function() {
      $.get('/cgi-bin/trigger?playerPause');
		},
	render: function() {
		return (<span className="glyphicon glyphicon-pause" onClick={this.clickHandler} >&nbsp;</span>);
	}
});

return VideoPlayController

})
