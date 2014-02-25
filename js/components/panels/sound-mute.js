/** @jsx React.DOM */

define(['react'], function(React) {
	var SoundMinus = React.createClass({
		clickHandler:function() {
      var m=this.props.data.mute;

      if (m == "false") {
	      $.get('/cgi-bin/set?/sound/mute=true');
      }else{
  	    $.get('/cgi-bin/set?/sound/mute=false');
      }
		},
		render: function() {
			var classMute = ""
			if (typeof this.props.data !== 'undefined') {
      	//console.log(this.props.data.mute);
      	var classMute = (this.props.data.mute == 'true') ? 'isPlaying' : '';
			}

			return ( <span className= {'glyphicon glyphicon-volume-off '+ classMute } onClick={this.clickHandler}></span>);
		}
	});
	return SoundMinus
});

