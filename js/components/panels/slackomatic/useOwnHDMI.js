/** @jsx React.DOM */

define(['react'], function(React) {
	var Button = React.createClass({
		clickHandler:function() {
			$.get('http://10.20.30.90/slackomatic/rooms/lounge/use/own_hdmi');
		},
		render: function() {
			return (<span onClick={this.clickHandler} >My own HDMI </span>);
		}
	});
	return Button;

});
