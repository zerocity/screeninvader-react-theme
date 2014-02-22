/** @jsx React.DOM */

define(['react'], function(React) {

	var YouTubeThumbnail = React.createClass({
		//TODO 404 redirect to next thumbnail
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
	  handleClick: function() {
	    $.get('/cgi-bin/playlist_jump?'+this.props.key);
	  },
	  addItem:function(){
	  	console.log(this.props.source);
	  	$.get('/cgi-bin/show?'+this.props.source)
	  },
	  toggleButton:function(){
	  	$('#'+this.props.key+'_toggleButton').toggleClass('hide').focus();
	  },
	  render: function() {

	    var cssMedia= "media media-ttc " + this.props.isPlaying ; // dirty fix

	    if (this.props.type == "search") {
		    return  (
		      <div className={cssMedia}>
		            <a className="pull-left" href="#">
		              <YouTubeThumbnail youtubeUrl={this.props.source}/>
		            </a>
		            <div className="media-body">
		              <h4 className="media-heading">{this.props.title}</h4>
		              <button type="button " onClick={this.addItem} className="btn btn-ttc btn-primary margin-right">
		                <span className="glyphicon glyphicon-plus"></span> add
		              </button>
		            </div>
		      </div>
		      );
	    }

	    if (this.props.type == "playlist") {
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
		              <button type="button " onClick={this.toggleButton} className="btn btn-ttc btn-primary margin-right">
		                  <span className="glyphicon ">url </span>
		              </button>
		              <button type="button " className="btn btn-ttc btn-primary del">
		                  <span className="glyphicon glyphicon-trash"></span>
		              </button><br>
		              <input type="text" id={this.props.key + '_toggleButton' } defaultValue={this.props.source} className="hide form-control"> </input></br>
		            </div>
		      </div>
		      );
	    }

	  }
	});

	return MediaItem

});
