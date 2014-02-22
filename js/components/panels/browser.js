/** @jsx React.DOM */

define(['react'], function(React) {

	var BrowserPanel = React.createClass({
		render: function() {
			var _ = this.props.data
			var classActived = ' glyphicon glyphicon-cloud ';
			var text = ' '//default text
			if (typeof _ !== 'undefined') {
				if(_.active != 'false' ){
					classActived += 'remotePanel label-green'
					text = ' ' + _.category // text if activated
				}
			}
			return (<li><span className={classActived}> {text}</span></li>);
		}
	});

	return BrowserPanel

});
