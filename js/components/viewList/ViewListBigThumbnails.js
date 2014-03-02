/** @jsx React.DOM */

define(['react',
	'store',
	'jsx!components/mixins/ListActions',
	'jsx!components/YouTubeThumbnail',
	], function(React,store,ListActionsMixin,YoutubeThumbnail) {

var defaultName = React.createClass({
		  mixins : [ListActionsMixin],
		  render: function () {

     if (this.props.type == "playlist") {
			    return (<div className="row" >
			    	<div className="col-xs-3">
			    		<YoutubeThumbnail size="64" youtubeUrl={this.props.source} />
			    	</div>
			    	<div className="col-xs-7">
							<p className={"playMe title " + this.props.isPlaying} onClick={ this.handleClick } title="play">
							 { this.props.key}   { this.props.title}
							</p>
						</div>
						<div className="col-xs-2">
              	<a href="#" onClick={ this.removeItem } ><span className="glyphicon glyphicon-trash"></span> </a>
              	<a href="#" onClick={ this.toggleButton } >url</a>
						</div>
					</div>);
  		}

    if (this.props.type == "search") {
			    return (<div className="row" >
			    	<div className="col-xs-3 col-md-1">
			    		<YoutubeThumbnail size="64" youtubeUrl={this.props.source} />
			    	</div>
			    	<div className="col-xs-7 col-md-10">
							<p className={"playMe title " + this.props.isPlaying} onClick={ this.handleClick } title="play">
							 { this.props.key}   { this.props.title}
							</p>
						</div>
	          <div className="col-xs-2 col-md-1">
	              <a href="#" onClick={ this.addItem } ><span className="glyphicon glyphicon-plus"></span> </a>
	          </div>
					</div>);
    }

	}

});

return defaultName

});
