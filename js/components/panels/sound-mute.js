/** @jsx React.DOM */

define(['react'], function(React) {
	var SoundMinus = React.createClass({
		clickHandler:function() {
      var m=!this.props.data.mute;
      $.get('/cgi-bin/set?/sound/mute=' + m);
		},
		render: function() {

			if (typeof this.props.data !== 'undefined') {
      var classMute = (this.props.data.mute != 'true') ? 'isPlaying' : '';
			}

			return ( <span className= {'glyphicon glyphicon-volume-off '+ classMute } onClick={this.clickHandler}></span>);
		}
	});
	return SoundMinus
});

