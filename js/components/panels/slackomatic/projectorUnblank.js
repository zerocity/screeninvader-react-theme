/** @jsx React.DOM */

define(['react'], function(React) {
	var Button = React.createClass({
		clickHandler:function() {
			$.get('http://10.20.30.90/slackomatic/rooms/lounge/powersaving/projector/unblank');
		},
		render: function() {
			return (<span onClick={this.clickHandler} >Projector unblank </span>);
		}
	});
	return Button;

});
