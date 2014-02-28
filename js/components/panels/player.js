/** @jsx React.DOM */

define(['react'], function(React) {

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
    //todo data from current played item
    //setTimeout(this.getYoutubeData,2000);
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
		return (<div className={classActived}></div>)
	}
});

return PlayerPanel

});
