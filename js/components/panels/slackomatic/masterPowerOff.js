/** @jsx React.DOM */

define(['react'], function(React) {
	var Button = React.createClass({
		clickHandler:function() {
			$.get('http://10.20.30.90/slackomatic/rooms/lounge/power/off');
		},
		render: function() {
			return (<span className="glyphicon glyphicon-off" onClick={this.clickHandler} >Power Off </span>);
		}
	});
	return Button;

});
