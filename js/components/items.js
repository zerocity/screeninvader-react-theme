/** @jsx React.DOM */

define(['react'], function(React) {

  var YouTubeThumbnail = React.createClass({
    render: function() {
      if (typeof this.props.size === 'undefined') {
        var cssStyle = {
          width: '64px',
          height: '64px'
        };
      }else{
        var cssStyle = {
          width: this.props.size+'px',
          height: this.props.size+'px'
        };
      }

      var youtubeId = this.props.youtubeUrl.split('v=')[1];
      var youtubeThumbnailSrc = "http://img.youtube.com/vi/"+ youtubeId +"/default.jpg";

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

      var cssMedia= "row " + this.props.isPlaying ; // dirty fix

      var thumbnail = (<YouTubeThumbnail youtubeUrl={this.props.source} size="32" />);

      var addButton = (<button type="button " onClick={this.addItem} className="btn btn-primary btn-ttc ">
                  <span className="glyphicon glyphicon-plus"></span>
                </button>);


    if (this.props.type == "search") {
      return  (
        <div className={cssMedia + " items"}>
          <div className="col-xs-10 col-md-11">
              {thumbnail} { this.props.key} - { this.props.title}
          </div>
          <div className="col-xs-2 col-md-1">
              <a href="#" onClick={ this.addItem } ><span className="glyphicon glyphicon-plus"></span> </a>
          </div>
        </div>
        );
    }


    if (this.props.type == "playlist"){
      return  (
        <div className={cssMedia + " items"}>
          <div className="col-xs-10 col-md-11">
            <span className="playMe" onClick={ this.handleClick }>{thumbnail} { this.props.key} - { this.props.title}</span>
          </div>
          <div className="col-xs-2 col-md-1 control">
              <a href="#" onClick={ this.removeItem } ><span className="glyphicon glyphicon-trash"></span> </a>
              <a href="#" onClick={ this.toggleButton } >url</a>
          </div>
          <input type="text"
              id={this.props.key + '_toggleButton' }
              defaultValue={this.props.source}
              className="hide form-control">
          </input>
        </div>
        );
    }


    }
  });

  return MediaItem
});
