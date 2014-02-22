/** @jsx React.DOM */

define(['react'], function(React) {

var ImagePanel = React.createClass({
	render: function() {
		var _ = this.props.data
		var classActived = ' glyphicon glyphicon-picture ';
		var text = ' '//default text
		if (typeof _ !== 'undefined') {
			if(_.active != 'false' ){
				classActived += 'remotePanel label-green'
				text = 'On' // text if activated
			}
		}
		return (<li><span className={classActived}>{text}</span></li>);
	}
});

return ImagePanel

});
