/** @jsx React.DOM */

define(['react',
	'jsx!components/viewList/ViewListSimple',
	'jsx!components/viewList/ViewListSmallThumbnails',
	'jsx!components/viewList/ViewListBigThumbnails',
	'jsx!components/viewList/ViewListThumbnails',
	'store'], function(React,
		ViewListSimple,
		ViewListSmallThumbnails,
		ViewListBigThumbnails,
		ViewListThumbnails,store) {

	var Playlist = React.createClass({
	  render: function() {
	    var _ = this.props.data;
	    if (typeof _ !== 'undefined') {
	      var isPlaying = _.index;
	      var mediaItems = _.items.map(function (item, index){
	          var classPlaying = (index == isPlaying) ? 'isPlaying' : '';
	          // set isPlaying class to the current playing item
						switch (parseInt(store.get('preference').viewType)){
							case 0:
								//console.log(viewType);
								return (<ViewListSimple type={'playlist'} isPlaying={classPlaying}
									key={index} source={item.source} title={item.title} />)
							case 1:
								return (<ViewListSmallThumbnails type={'playlist'} isPlaying={classPlaying}
									key={index} source={item.source} title={item.title} />)
							case 2:
								return (<ViewListBigThumbnails type={'playlist'} isPlaying={classPlaying}
									key={index} source={item.source} title={item.title} />)
							case 3:
								return (<ViewListThumbnails type={'playlist'} isPlaying={classPlaying}
									key={index} source={item.source} title={item.title} />)
						}
	      });
	      return (
			      <div className="box" >
			      	{mediaItems}
		      	</div>
	      	);
	    }else{
	      return (<p>loading</p>);
	    }
	  }
	});

	return Playlist

});
