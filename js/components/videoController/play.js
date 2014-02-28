/** @jsx React.DOM */

define(['react'], function(React) {

var VideoPlayController = React.createClass({
	clickHandler:function() {
      $.get('/cgi-bin/trigger?playerPause');
		},
	render: function() {
		return (<div className="glyphicon glyphicon-pause" onClick={this.clickHandler} >&nbsp;</div>);
	}
});

return VideoPlayController

})
