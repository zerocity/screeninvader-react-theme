/** @jsx React.DOM */

define(['react'], function(React) {
	var Button = React.createClass({
		clickHandler:function() {
			$.get('http://10.20.30.90/slackomatic/rooms/lounge/use/ps2');
		},
		render: function() {
			var _ = this.props.data;
			return (<span onClick={this.clickHandler} >PS2</span>);
		}
	});
	return Button;

});
