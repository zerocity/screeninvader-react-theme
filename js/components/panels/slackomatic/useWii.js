/** @jsx React.DOM */

define(['react'], function(React) {
	var Button = React.createClass({
		clickHandler:function() {
			$.get('http://10.20.30.90/slackomatic/rooms/lounge/use/wii');
		},
		render: function() {
			var _ = this.props.data;
			return (<span onClick={this.clickHandler} >Wii</span>);
		}
	});
	return Button;

});
