/** @jsx React.DOM */

define(['react','jsx!components/items'], function(React,MediaItem) {

var SearchResults = React.createClass({
  render: function(){
    var data = this.props.data
    if (typeof data !== 'undefined') {
    var queryItems = data.map(function (item, index){
    return (<MediaItem
          	type={'search'}
            isPlaying='no'
            key={index}
            source={item.source}
            title={item.title} />)
      });
      return (<div className="video padding-top padding-bottom padding-right" >{queryItems}</div>);
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
      <div>
        <div className="input-group">
          <input type="text" className="form-control" id="youtubeQuery"></input>
          <span className="input-group-btn">
          <button className="btn btn-default" onClick={this.clickHandler} type="button" id="youtubeSearch">Go!</button>
          </span>
        </div>
        <div className="results">
          <SearchResults data={data} />
        </div>
      </div>);
  }
});

return YoutubeSearch

});
