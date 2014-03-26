/** @jsx React.DOM */

define(['react',
	'store',
	'jsx!components/mixins/ListActions',
	'jsx!components/YouTubeThumbnail',
	], function(React,store,ListActionsMixin,YoutubeThumbnail) {

return React.createClass({
		  mixins : [ListActionsMixin],
		  render: function () {
			    return (<div className="row" >
			    	<div className="col-xs-1 col-md-1">
			    		<YoutubeThumbnail size="32" youtubeUrl={this.props.source} />
			    	</div>
			    	<div className="col-xs-9 col-md-10">
							<p className={"playMe title " + this.props.isPlaying} onClick={ this.handleClick } title="play">
							 { this.props.key}   { this.props.title}
							</p>
						</div>
						<div className="col-xs-2 col-md-1">
              	<a href="#" onClick={ this.removeItem } ><span className="glyphicon glyphicon-trash"></span> </a>
              	<a href="#" onClick={ this.toggleButton } >url</a>
						</div></div>);
  		}
	});
});
