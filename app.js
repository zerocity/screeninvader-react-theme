/** @jsx React.DOM */
var DisplayPanel = React.createClass({
	render: function() {
		return (<li>Display On</li>);
	}
});

var PlayerPanel = React.createClass({
	render: function() {
		var _ = this.props.data
		var classActived = 'glyphicon glyphicon-play ';
		var text = ' Off'//default text
		if (typeof _ !== 'undefined') {
			if(_.active != 'false' ){
				classActived += 'remotePanel'
				text = ' ' + _.category // text if activated
			}
		}
		return (<li><span className={classActived}> {text}</span></li>);
	}
});


var BrowserPanel = React.createClass({
	render: function() {
		var _ = this.props.data
		var classActived = ' glyphicon glyphicon-cloud ';
		var text = ' '//default text
		if (typeof _ !== 'undefined') {
			if(_.active != 'false' ){
				classActived += 'remotePanel label-green'
				text = ' ' + _.category // text if activated
			}
		}
		return (<li><span className={classActived}> {text}</span></li>);
	}
});

var ImagePanel = React.createClass({
	render: function() {
		var _ = this.props.data
		var classActived = ' glyphicon glyphicon-picture ';
		var text = ' '//default text
		if (typeof _ !== 'undefined') {
			if(_.active != 'false' ){
				classActived += 'remotePanel label-green'
				text = 'On' // text if activated
			}
		}
		return (<li><span className={classActived}>{text}</span></li>);
	}
});

var RadioPanel = React.createClass({
	render: function() {
		return (<li>Player On</li>);
	}
});

var QueuePanel = React.createClass({
	render: function() {
		var _ = this.props
		var classActived = ' glyphicon glyphicon-refresh ';
		var text = ' '//default text
		if (typeof _ !== 'undefined') {
			if(_.active != 'false' ){
				classActived += 'remotePanel'
				text = ' ' // text if activated
			}
		}
		return (<li><span className={classActived}> {text}</span></li>);
	}
});

var SoundPanel = React.createClass({
	render: function() {
		var _ = this.props.data
		if (typeof _ !== 'undefined') {

			// mute bug ?
			if (_.mute !== 'true') {
				var classActived = 'glyphicon glyphicon-volume-off'
			}
			return (<li className={classActived +' remotePanel '}> Vol :
				<span className= {'glyphicon glyphicon-minus'}> </span>
				<span> { ' ' + _.volume + '% '} </span>
				<span className= {'glyphicon glyphicon-plus'}></span>
				</li>);
		}
		return (<li> <span className= {classActived}> loading </span> </li>);
	}
});

var AnimationPanel = React.createClass({
	// gif
	render: function() {
		return (<li>No GIF </li>);
	}
});

/*
append to activate panel

<DisplayPanel data = {_.display} />
<RadioPanel data = {_.radio} />

*/


var RemotePanel = React.createClass({
	render: function() {
		var _ = this.props.data;
		return (<nav className="remote-botton-fixed">
			<ul className="list-inline">
	      <QueuePanel data = {_.queue} />
				<PlayerPanel data = {_.player} />
	      <BrowserPanel data = {_.browser} />
	      <ImagePanel data = {_.image} />
	      <AnimationPanel data = {_.animation} />
	      <SoundPanel data = {_.sound} />
	   	</ul>
			</nav>);
	}
});



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

var Playlist = React.createClass({
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
      return (<div className="video padding-top padding-bottom padding-right" >{mediaItems}</div>);
    }else{
      return (<p>loading</p>);
    }
  }
});

var Screeninvader = React.createClass({
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
  	var _ = this.state.data
    return (
      <div>
	      <Playlist data={_.playlist} />
	      <RemotePanel data={this.state.data}/>
      </div>
    );
  }
});

React.renderComponent(
	<Screeninvader url="http://localhost:5555/cgi-bin/get?/."
	pollInterval={500} />, document.getElementById('playlist'));
