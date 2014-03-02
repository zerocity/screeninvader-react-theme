/** @jsx React.DOM */

define(['react',
	'jsx!components/panels/animation',
	'jsx!components/panels/browser',
	'jsx!components/panels/display',
	'jsx!components/panels/image',
	'jsx!components/panels/player',
	'jsx!components/panels/queue',
	'jsx!components/panels/radio',
	'jsx!components/viewList/btnViewListSimple',
	'jsx!components/viewList/btnViewListThumbnails',
	'jsx!components/viewList/btnViewListBigThumbnails',
	'jsx!components/viewList/btnViewListSmallThumbnails',],function(React,
        AnimationPanel,
        BrowserPanel,
        DisplayPanel,
        ImagePanel,
        PlayerPanel,
        QueuePanel,
        RadioPanel,
        btnViewListSimple,
        btnViewListThumbnails,
        btnViewListBigThumbnails,
        btnViewListSmallThumbnails) {

/*
<DisplayPanel data = {_.display} />
<RadioPanel data = {_.radio} />
<AnimationPanel data = {_.animation} />
*/

var RemotePanel = React.createClass({
	render: function() {
		var _ = this.props.data;
		return (<div className="box videoController">
			<div className="row">
				<div className="col-xs-12 col-sm-6 col-md-4">
					<div className="pull-left">
			      <QueuePanel data = {_.queue} />
			      <ImagePanel data = {_.image} />
			      <BrowserPanel data = {_.browser} />
						<PlayerPanel data = {_.player} />
						<btnViewListSimple />
						<btnViewListSmallThumbnails />
						<btnViewListBigThumbnails />
						<btnViewListThumbnails/>
	   			</div>
	   			</div>
	   		</div>
			</div>);
	}
});

return RemotePanel

});
