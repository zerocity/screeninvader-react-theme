define(['react','store'], function(React,store) {

  return React.createClass({
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

});
