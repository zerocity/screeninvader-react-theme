/** @jsx React.DOM */

define(['react'], function(React) {

  var YouTubeThumbnail = React.createClass({
    render: function() {
      var cssStyle = {
        width: '64px',
        height: '64px'
      }
      //get youtubeId from this urlPattern http://www.youtube.com/watch?v=EfDfdyBldz0
      var youtubeId = this.props.youtubeUrl.split('v=')[1]
      var youtubeThumbnailSrc = "http://img.youtube.com/vi/"+ youtubeId +"/default.jpg"

      return (<img className="media-item" src={youtubeThumbnailSrc} style={cssStyle}></img>);
    }
  })

  var MediaItem = React.createClass({
    handleClick: function() {
      $.get('/cgi-bin/playlist_jump?'+this.props.key);
    },
    addItem:function(){
      $.get('/cgi-bin/show?'+this.props.source)
    },
    removeItem:function(){
      $.ajax({
        url:'/cgi-bin/playlist_remove?'+this.props.key,
        success: function(res) {
          console.log(res);
        }
      });
    },
    toggleButton:function(){
      $('#'+this.props.key+'_toggleButton').toggleClass('hide').focus();
    },
    render: function() {

      var cssMedia= "media media-ttc row " + this.props.isPlaying ; // dirty fix

      if (this.props.type == "search") {
        return  (
          <div className={cssMedia}>
                <a className="pull-left" href="#">
                  <YouTubeThumbnail youtubeUrl={this.props.source}/>
                </a>
                <div className="media-body">
                  <h4 className="media-heading">{this.props.title}</h4>
                  <button type="button " onClick={this.addItem} className="btn btn-primary btn-ttc ">
                    <span className="glyphicon glyphicon-plus"></span> add
                  </button>
                </div>
          </div>
          );
      }

    if (this.props.type == "playlist"){
    		return (<div>
    			<li className={cssMedia + " items"}>
	    			<div className="col-xs-10" onClick={ this.handleClick }>
	    				{ this.props.key} - { this.props.title}
	    			</div>
	    			<div className="col-xs-2 control">
		    			<a href="#" onClick={ this.removeItem } ><span className="glyphicon glyphicon-trash"></span> </a>
		    			<a href="#" onClick={ this.toggleButton } >url</a>
	    			</div>
    			</li>
        <input type="text" id={this.props.key + '_toggleButton' } defaultValue={this.props.source} className="hide form-control"></input>
    	</div>)
    }

    }
  });
  return MediaItem
});
