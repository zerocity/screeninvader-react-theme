/** @jsx React.DOM */

define(['react',
	'store',
	'jsx!components/viewList/ViewListSimple',
	'jsx!components/YouTubeThumbnail'], function(React,
		store,
		ViewListSimple,
		YouTubeThumbnail) {

  var MediaItem = React.createClass({
    render: function() {

      var pref = store.get('preference');

      if (pref.viewType == '0') {
				var thumbnail = (<ViewListSimple key={this.props.key} title={this.props.title} />)
      }else if (pref.viewType == '1') {
	      var thumbnail = (<YouTubeThumbnail youtubeUrl={this.props.source} size="32" />);
      }else if (pref.viewType == '2') {
	      var thumbnail = (<YouTubeThumbnail youtubeUrl={this.props.source} size="64" />);
      }else if (pref.viewType == '3') {
	      var thumbnail = (<YouTubeThumbnail youtubeUrl={this.props.source} size="96" />);
      }

      return thumbnail

    }
  });
  return MediaItem
});
