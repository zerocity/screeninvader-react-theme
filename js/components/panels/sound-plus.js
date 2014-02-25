/** @jsx React.DOM */

define(['react'], function(React) {
	var SoundPlus = React.createClass({
		clickHandler:function() {
			var v = parseInt(this.props.data.volume) + 5 ;
			$.get('/cgi-bin/set?/sound/volume=' + v);
		},
		render: function() {
			var _ = this.props.data;
			return (<span className= {'glyphicon glyphicon-plus'} onClick={this.clickHandler} > </span>);
		}
	});
	return SoundPlus
});
