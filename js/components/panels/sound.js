/** @jsx React.DOM */

define(['react'], function(React) {

var SoundPanel = React.createClass({
	render: function() {
		var _ = this.props.data
		if (typeof _ !== 'undefined') {
			// mute bug ?
			if (_.mute !== 'true') {
				var classActived = 'glyphicon glyphicon-volume-off'
			}
			return (<li className={classActived +' remotePanel '}> Vol :
				<span className= {'glyphicon glyphicon-minus'}> </span>
				<span> { ' ' + _.volume + '% '} </span>
				<span className= {'glyphicon glyphicon-plus'}></span>
				</li>);
		}
		return (<li> <span className= {classActived}> loading </span> </li>);
	}
});

return SoundPanel

});
