/** @jsx React.DOM */

define(['react',
	'store',
	], function(React,store) {

var defaultName = React.createClass({
			viewListSimple: function() {
		    store.set('preference', {
		     viewType: '0'
		   })
			},
			viewListSmallThumbnails: function() {
		    store.set('preference', {
		     viewType: '1'
		   })
			},
			viewListBigThumbnails: function() {
		    store.set('preference', {
		     viewType: '2'
		   })
			},
			viewThumbnails: function() {
		    store.set('preference', {
		     viewType: '3'
		   })
			},
		  render: function () {
		    return (
		    	<div className="box" >
		      	<div className="row head-line">
			      	<div onClick={ this.viewListSimple } className="col-xs-2 glyphicon glyphicon-align-justify"></div>
			      	<div onClick={ this.viewListSmallThumbnails } className="col-xs-2 glyphicon glyphicon-list"></div>
			      	<div onClick={ this.viewListBigThumbnails } className="col-xs-2 glyphicon glyphicon-th-list"></div>
			      	<div onClick={ this.viewThumbnails } className="col-xs-2 glyphicon glyphicon-th"></div>
		      	</div>
		    	</div>
			      	);
  		}
});

return defaultName

});
