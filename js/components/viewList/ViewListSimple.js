/** @jsx React.DOM */

define(['react',
	'jsx!components/mixins/ListActions',
	'store'
	],function(React,
		ListActionsMixin,
		store) {

	return React.createClass({
			  mixins : [ListActionsMixin],
			  render: function () {

			  	this.props.isPlaying

			    return (<div className="row" >
			    	<div className="col-xs-10 col-md-10">
							<p className={"playMe title " + this.props.isPlaying} onClick={ this.handleClick } title="play">
							 { this.props.key}   { this.props.title}
							</p>
						</div>
						<div className="col-md-push-1 col-xs-2 col-md-1">
              	<a href="#" onClick={ this.removeItem } ><span className="glyphicon glyphicon-trash"></span> </a>
              	<a href="#" onClick={ this.toggleButton } >url</a>
						</div></div>);
	  		}
	});

});
