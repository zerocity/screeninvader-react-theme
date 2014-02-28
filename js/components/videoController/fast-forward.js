/** @jsx React.DOM */

define(['react'], function(React) {

var VideoFastForwardController = React.createClass({
	clickHandler:function() {
      $.get('/cgi-bin/trigger?playerForwardMore');
		},
	render: function() {
		return (<div className="glyphicon glyphicon-fast-forward" onClick={this.clickHandler} >&nbsp;</div>);
	}
});

return VideoFastForwardController

})
