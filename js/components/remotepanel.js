/** @jsx React.DOM */
define(['react'], function(React) {

var DisplayPanel = React.createClass({
	render: function() {
		return (<li>Display On</li>);
	}
});

var PlayerPanel = React.createClass({
	getInitialState : function() {
    return {title: []};
	},
	getYoutubeData : function() {
		//http://gdata.youtube.com/feeds/api/videos/Yx6-ZBOJYDg?v=2&alt=jsonc
		var _ = this.props.data
		if (typeof _ !== 'undefined') {
			var _ = _.url.split('v=')[1];
			var YotubeApi = 'http://gdata.youtube.com/feeds/api/videos/'+_+'?v=2&alt=jsonc'
				$.ajax({
	      url: YotubeApi,
	      success: function(json) {
	      	console.log(json.data.title);
					this.setState({title: json.data.title});
	      }.bind(this)
			});
		}
	}	,
  componentWillMount: function() {
    setTimeout(this.getYoutubeData,2000);
  },
	render: function() {
		var _ = this.props.data
		//var test = this.getYoutubeData();
		var classActived = 'glyphicon glyphicon-play ';
		var text = ' Off'//default text
		if (typeof _ !== 'undefined') {
			if(_.active != 'false' ){
				classActived += 'remotePanel'
				text = ' ' + _.category // text if activated
			}
		}
		return (<li><span className={classActived}> {text}</span></li>);
	}
});

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

var RadioPanel = React.createClass({
	render: function() {
		return (<li>Player On</li>);
	}
});

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
		return (<li><span className={classActived}> {text}</span></li>);
	}
});

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

var AnimationPanel = React.createClass({
	// gif
	render: function() {
		return (<li>No GIF </li>);
	}
});

var RemotePanel = React.createClass({
	render: function() {
		var _ = this.props.data;
		return (<nav className="remote-botton-fixed">
			<ul className="list-inline">
	      <QueuePanel data = {_.queue} />
				<PlayerPanel data = {_.player} />
	      <SoundPanel data = {_.sound} />
	      <ImagePanel data = {_.image} />
	      <BrowserPanel data = {_.browser} />
	   	</ul>
			</nav>);
	}
});

return RemotePanel

});
