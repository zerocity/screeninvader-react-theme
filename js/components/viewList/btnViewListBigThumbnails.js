/** @jsx React.DOM */

define(['react',
	'store',
	], function(React,store) {

var defaultName = React.createClass({
			viewListBigThumbnails: function() {
		    store.set('preference', {
		     viewType: '2'
		   })
			},
		  render: function () {
		    return this.transferPropsTo(
		    	<div onClick={ this.viewListBigThumbnails } className="glyphicon glyphicon-th-list"></div>);
  		}
});

return defaultName

});
