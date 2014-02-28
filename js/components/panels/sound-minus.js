/** @jsx React.DOM */

define(['react'], function(React) {
	var SoundMinus = React.createClass({
		clickHandler:function() {
			var v = parseInt(this.props.data.volume) - 5 ;
			$.get('/cgi-bin/set?/sound/volume=' + v);
		},
		render: function() {
			var _ = this.props.data
			return (<div className= {'glyphicon glyphicon-minus'} onClick={this.clickHandler}></div>);
		}
	});
	return SoundMinus
});
