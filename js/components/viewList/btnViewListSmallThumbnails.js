/** @jsx React.DOM */

define(['react',
	'store',
	], function(React,store) {

var defaultName = React.createClass({
			viewListSmallThumbnails: function() {
		    store.set('preference', {
		     viewType: '1'
		   })
			},
		  render: function () {
		    return this.transferPropsTo(
			      	<div onClick={ this.viewListSmallThumbnails } className="glyphicon glyphicon-list"></div>
			      	);
  		}
});

return defaultName

});
