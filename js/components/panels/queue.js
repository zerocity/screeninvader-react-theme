/** @jsx React.DOM */

define(['react'], function(React) {

var QueuePanel = React.createClass({
	render: function() {
		var _ = this.props
		var classActived = ' glyphicon glyphicon-refresh ';
		var text = ' '//default text
		if (typeof _ !== 'undefined') {
			if(_.active != 'false' ){
				classActived += 'remotePanel'
				text = ' ' // text if activated
			}
		}
		return (<div className={classActived}> {text}</div>);
	}
});

return QueuePanel

})
