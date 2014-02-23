/** @jsx React.DOM */

define(['react',
	'jsx!components/videoController/play',
	'jsx!components/videoController/stop',
	'jsx!components/videoController/backward',
	'jsx!components/videoController/forward',
	'jsx!components/videoController/fast-forward',
	'jsx!components/videoController/fast-backward',
	'jsx!components/videoController/step-forward',
	'jsx!components/videoController/step-backward'], function(React,
		VideoPlayController,
		VideoStopController,
		VideoBackwardController,
		VideoForwardController,
		VideoFastForwardController,
		VideoFastBackwardController,
		VideoStepForwardController,
		VideoStepBackwardController
		) {

var VideoController = React.createClass({
	render: function() {
		return (<div className="controller-box">
			<VideoStepBackwardController/>
			<VideoFastBackwardController/>
			<VideoBackwardController/>
			<VideoStopController/>
			<VideoPlayController/>
			<VideoForwardController/>
			<VideoFastForwardController/>
			<VideoStepForwardController/>
			</div>);
	}
});

return VideoController

})
