/** @jsx React.DOM */

define(['react',
	'store',
	'jsx!components/mixins/ListActions',
	'jsx!components/YouTubeThumbnail',
	], function(React,store,ListActionsMixin,YoutubeThumbnail) {

var defaultName = React.createClass({
		  mixins : [ListActionsMixin],
		  render: function () {
			    return (
			    		<YoutubeThumbnail size="64" onClick={ this.handleClick } youtubeUrl={this.props.source} />
					);
  		}
});

return defaultName

});
