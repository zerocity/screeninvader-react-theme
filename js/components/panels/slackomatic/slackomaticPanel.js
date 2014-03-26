/** @jsx React.DOM */

define(['react',
	'jsx!components/panels/slackomatic/masterPowerOn',
	'jsx!components/panels/slackomatic/masterPowerOff',
	'jsx!components/panels/slackomatic/projectorBlank',
	'jsx!components/panels/slackomatic/projectorUnblank',
	'jsx!components/panels/slackomatic/useScreenInvader',
	'jsx!components/panels/slackomatic/usePS2',
	'jsx!components/panels/slackomatic/usePS3',
	'jsx!components/panels/slackomatic/useWii',
	'jsx!components/panels/slackomatic/useOwnHDMI'], function(React,
		MasterPowerOn,
		MasterPowerOff,
		ProjectorBlank,
		ProjectorUnblank,
		UseScreenInvader,
		UsePS2,
		UsePS3,
		UseWii,
		UseOwnHDMI) {

		var SlackomaticPanel = React.createClass({
			render: function() {
			var _ = this.props.data; // all data
			return (<div className="box">
					<MasterPowerOn />
					<MasterPowerOff />
					<ProjectorBlank />
					<ProjectorUnblank />
					<UseScreenInvader />
					<UsePS2 />
					<UsePS3 />
					<UseWii />
					<UseOwnHDMI />
				</div>
				);
			}
		});

		return SlackomaticPanel

});
