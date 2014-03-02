/** @jsx React.DOM */

define(['react',
	'store',
	], function(React,store) {

var defaultName = React.createClass({
			viewThumbnails: function() {
		    store.set('preference', {
		     viewType: '3'
		   })
			},
		  render: function () {
		    return this.transferPropsTo(
			      	<div onClick={ this.viewThumbnails } className="glyphicon glyphicon-th"></div>
			      	);
  		}
});

return defaultName

});
