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

var QueryResults = React.createClass({
  render: function(){
    var data = this.props.data
    if (typeof data !== 'undefined') {

      var mediaItems = data.map(function (item, index){
				switch (parseInt(store.get('preference').viewType)){
					case 0:
						return (<ViewListSimple type={'search'}
							key={index} source={item.source} title={item.title} />)
					case 1:
						return (<ViewListSmallThumbnails type={'search'}
							key={index} source={item.source} title={item.title} />)
					case 2:
						return (<ViewListBigThumbnails type={'search'}
							key={index} source={item.source} title={item.title} />)
					case 3:
						return (<ViewListThumbnails type={'search'}
							key={index} source={item.source} title={item.title} />)
				}
      });

    	if (mediaItems.length == 0) {
    		var items = (<div><p>no search results </p></div>);
    	}else{
    		var items =(<div className="box" > {mediaItems} </div>);
    	}

      return (<div> {items} </div>);

    }else{
      return (<p>loading</p>);
    }
  }
});

var YoutubeSearch = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  youtubeAPI : function(query) {
    var max_videos = 12;
    $.ajax({
     url:"http://gdata.youtube.com/feeds/api/videos",
        dataType: "json",
        data: {q: query,'max-results':max_videos,alt:'json'},
        success : function(result) {
            var data = _.map(result.feed.entry, function (num,key){
                var a = num.id.$t.split("/"),
                    id = a[6],
                    title = num.title.$t,
                    thumbnail = num.media$group.media$thumbnail[1].url,
                    description = num.media$group.media$description.$t;
                return {
                  source:"http://www.youtube.com/watch?v="+id,
                  youtubeId:id,
                  title:title,
                  thumbnail:thumbnail,
                  description:description}
              });
            this.setState({data: data});
        }.bind(this)
    });
  },
  clickHandler : function() {
    var query =  $('#youtubeQuery').val();
    this.youtubeAPI(query)
  },
  render: function () {
    var data = this.state.data
    return (
        <div className="box">
         <div className="input-group">
          <input type="text" className="form-control" id="youtubeQuery"></input>
          <span className="input-group-btn">
          <button className="btn btn-default" onClick={this.clickHandler} type="button" id="youtubeSearch">Go!</button>
          </span>
        </div>

        <QueryResults data={data} />

      </div>);
  }
});

return YoutubeSearch

});
