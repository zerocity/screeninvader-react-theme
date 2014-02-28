/** @jsx React.DOM */

define(['react',
	'jsx!components/videoController/play',
	'jsx!components/videoController/stop',
	'jsx!components/videoController/backward',
	'jsx!components/videoController/forward',
	'jsx!components/videoController/fast-forward',
	'jsx!components/videoController/fast-backward',
	'jsx!components/videoController/step-forward',
	'jsx!components/videoController/step-backward',
	'jsx!components/panels/soundPanel'], function(React,
		VideoPlayController,
		VideoStopController,
		VideoBackwardController,
		VideoForwardController,
		VideoFastForwardController,
		VideoFastBackwardController,
		VideoStepForwardController,
		VideoStepBackwardController,
		SoundPanel
		) {

var VideoController = React.createClass({
	toggleSoundMenu: function(event){
		console.log(event.target);
		$('#soundController').toggleClass('hide');
	},

	render: function() {
		var _ = this.props.data; // all data
		return (<div className="box videoController">
			<div className="row">

				<div className="col-xs-12 col-sm-6 col-md-4">
					<div className="pull-left">
						<VideoStepBackwardController/>
						<VideoFastBackwardController/>
						<VideoBackwardController/>
						<VideoStopController/>
						<VideoPlayController/>
						<VideoForwardController/>
						<VideoFastForwardController/>
						<VideoStepForwardController/>
					</div>
					<div className="pull-right glyphicon glyphicon-volume-up" onClick={this.toggleSoundMenu }></div>
				</div>

				<div id="soundController" className="hide col-xs-12 col-sm-6 col-md-2">
					<SoundPanel data = {_.sound}/>
				</div>
			</div>
			</div>);
	}
});

return VideoController

});
