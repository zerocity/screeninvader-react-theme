/** @jsx React.DOM */

define(['react',
	'jsx!components/panels/animation',
	'jsx!components/panels/browser',
	'jsx!components/panels/display',
	'jsx!components/panels/image',
	'jsx!components/panels/player',
	'jsx!components/panels/queue',
	'jsx!components/panels/radio',
	'jsx!components/panels/sound',],function(React,
        AnimationPanel,
        BrowserPanel,
        DisplayPanel,
        ImagePanel,
        PlayerPanel,
        QueuePanel,
        RadioPanel,
        SoundPanel) {

/*
<DisplayPanel data = {_.display} />
<RadioPanel data = {_.radio} />
<AnimationPanel data = {_.animation} />
*/

var RemotePanel = React.createClass({
	render: function() {
		var _ = this.props.data;
		return (<div className="box">
			<ul className="list-inline">
	      <QueuePanel data = {_.queue} />
				<PlayerPanel data = {_.player} />
	      <SoundPanel data = {_.sound} />
	      <ImagePanel data = {_.image} />
	      <BrowserPanel data = {_.browser} />
	   	</ul>
			</div>);
	}
});

return RemotePanel

});
