/** @jsx React.DOM */

define(['react'], function(React) {
	var Button = React.createClass({
		clickHandler:function() {
			$.get('http://10.20.30.90/slackomatic/rooms/lounge/use/screeninvader');
		},
		render: function() {
			return (<span onClick={this.clickHandler} >ScreenInvader </span>);
		}
	});
	return Button;

});
