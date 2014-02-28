/** @jsx React.DOM */

define(['react',
	'jsx!components/panels/sound-minus',
	'jsx!components/panels/sound-value',
	'jsx!components/panels/sound-plus',
	'jsx!components/panels/sound-mute'], function(React,
		SoundMinus,
		SoundValue,
		SoundPlus,
		SoundMute) {

		var SoundPanel = React.createClass({
			render: function() {
			var _ = this.props.data; // all data
			return (<div className="center-block">
					<SoundMinus data = {_} />
					<SoundValue data = {_} />
					<SoundPlus data = {_} />
					<SoundMute data = {_} />
				</div>
				);
			}
		});

		return SoundPanel

});
