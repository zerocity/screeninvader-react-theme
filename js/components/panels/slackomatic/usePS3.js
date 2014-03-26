/** @jsx React.DOM */

define(['react'], function(React) {
	var Button = React.createClass({
		clickHandler:function() {
			$.get('http://10.20.30.90/slackomatic/rooms/lounge/use/ps3');
		},
		render: function() {
			return (<span onClick={this.clickHandler} >PS3 </span>);
		}
	});
	return Button;

});
