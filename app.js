/** @jsx React.DOM */
var YouTubeThumbnail = React.createClass({
  render: function() {
    var cssStyle = {
      width: '64px',
      height: '64px'
    }
    //get youtubeId from this urlPattern http://www.youtube.com/watch?v=EfDfdyBldz0
    var youtubeId = this.props.youtubeUrl.split('v=')[1]
    var youtubeThumbnailSrc = "http://img.youtube.com/vi/"+ youtubeId +"/sddefault.jpg"

    return (<img className="media-object" src={youtubeThumbnailSrc} style={cssStyle}></img>);
  }
})

var MediaItem = React.createClass({
  handleClick: function(event) {
    $.get('http://localhost:5555/cgi-bin/playlist_jump?'+this.props.key);
  },
  render: function() {

    var cssMedia= "media media-ttc " + this.props.isPlaying ; // dirty fix

    return  (
      <div className={cssMedia}>
            <a className="pull-left" href="#">
              <YouTubeThumbnail youtubeUrl={this.props.source}/>
            </a>
            <div className="media-body">
              <h4 className="media-heading">{this.props.title}</h4>
              <button type="button " onClick={this.handleClick} className="btn btn-ttc btn-primary margin-right">
                <span className="glyphicon glyphicon-play"></span> play
              </button>
              <button type="button " className="btn btn-ttc btn-primary del">
                  <span className="glyphicon glyphicon-trash"></span>
              </button>
            </div>
      </div>
      );
  }
});

var MediaList = React.createClass({
  render: function() {
    var _ = this.props.data;
    if (typeof _ !== 'undefined') {
      var isPlaying = _.index;
      var mediaItems = _.items.map(function (item, index){
          var classPlaying = (index == isPlaying) ? 'isPlaying' : '';
          return (<MediaItem
            isPlaying={classPlaying}
            key={index}
            source={item.source}
            title={item.title} />);
      });
      return (<div>{mediaItems}</div>);
    }else{
      return (<p>loading</p>);
    }
  }
});

var Playlist = React.createClass({
  loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url,
      success: function(data) {
        this.setState({data: data});
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {data: []};
  },
  componentWillMount: function() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      <div className="video padding-top padding-bottom padding-right">
          <MediaList data={this.state.data.playlist} />
      </div>
    );
  }
});

React.renderComponent(
  <Playlist   url="http://localhost:5555/cgi-bin/get?/." pollInterval={500} />, document.getElementById('playlist')
);
