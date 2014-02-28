/** @jsx React.DOM */

define(['react'], function(React) {

	var SoundValue = React.createClass({
		render: function() {
			var _ = this.props.data
			if (typeof _ !== 'undefined') {
				return (<span> { ' ' + _.volume + ' %'} </span>);
			}
			return (<p > loading </p>);
		}
	});
	return SoundValue
});
