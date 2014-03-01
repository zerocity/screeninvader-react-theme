/** @jsx React.DOM */

define(['react',
	'jsx!components/items'], function(React,MediaItem) {

	var Playlist = React.createClass({
	  render: function() {
	    var _ = this.props.data;
	    if (typeof _ !== 'undefined') {
	      var isPlaying = _.index;
	      var mediaItems = _.items.map(function (item, index){
	          var classPlaying = (index == isPlaying) ? 'isPlaying' : ''; // set isPlaying class to the current playing item
	          return (<MediaItem
	          	type={'playlist'}
	            isPlaying={classPlaying}
	            key={index}
	            source={item.source}
	            title={item.title} />);
	      });
	      return (
			      <div className="box" >
			      	<div className="playlist"> {mediaItems} </div>
		      	</div>
	      	);
	    }else{
	      return (<p>loading</p>);
	    }
	  }
	});

	return Playlist

});
