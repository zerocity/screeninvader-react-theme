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
		  render: function () {
		    return this.transferPropsTo(
			      	<div onClick={ this.viewListSimple } className="glyphicon glyphicon-align-justify"></div>
			      	);
  		}
});

return defaultName

});
