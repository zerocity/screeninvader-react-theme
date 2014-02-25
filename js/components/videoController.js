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
	'jsx!components/panels/sound-minus',
	'jsx!components/panels/sound-value',
	'jsx!components/panels/sound-plus',
	'jsx!components/panels/sound-mute'], function(React,
		VideoPlayController,
		VideoStopController,
		VideoBackwardController,
		VideoForwardController,
		VideoFastForwardController,
		VideoFastBackwardController,
		VideoStepForwardController,
		VideoStepBackwardController,
		SoundMinus,
		SoundValue,
		SoundPlus,
		SoundMute
		) {

var VideoController = React.createClass({
	render: function() {
		var _ = this.props.data; // all data
		return (<div className="box">
			<VideoStepBackwardController/>
			<VideoFastBackwardController/>
			<VideoBackwardController/>
			<VideoStopController/>
			<VideoPlayController/>
			<VideoForwardController/>
			<VideoFastForwardController/>
			<VideoStepForwardController/>
      <SoundMinus data = {_.sound} />
      <SoundValue data = {_.sound} />
      <SoundPlus data = {_.sound} />
      &nbsp;&nbsp;&nbsp;
      <SoundMute data = {_.sound} />
			</div>);
	}
});

return VideoController

})
