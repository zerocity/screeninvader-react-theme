/** @jsx React.DOM */
define(['react',
				'backbone',
				'jsx!components/videoController',
				'jsx!components/remotepanel',
				'jsx!components/youtubeSearch',
				'jsx!components/urlSearch',
				'jsx!components/items',
				'jsx!components/playlist',
				'jsx!components/panels/slackomatic/slackomaticPanel',
				'store',
				'jsx!routerMixin',
				'jsx!menu',
				'router'],
				function(React,
									Backbone,
									videoController,
									RemotePanel,
									searchComponent,
									urlSearch,
									MediaItem,
									Playlist,
									slackomaticPanel,
									store,
									RouterMixin,
									Menu,
									router){

/* ############# Screeninvader  ############# */

var YoutubeSearch = React.createClass({
  mixins : [RouterMixin],
  render : function() {

    var className = "hide";

    if (this.props.router.current == "youtubesearch") {
      className = "show";
    }

    return (
      <div className={className}>
      	<searchComponent />
      </div>
    );
  }
});

var UrlSearch = React.createClass({
  mixins : [RouterMixin],
  render : function() {

    var className = "hide";

    if (this.props.router.current == "urlSearch") {
      className = "show";
    }

    return (
      <div className={className}>
      	<urlSearch router={router}/>
      </div>
    );
  }
});

var Screeninvader = React.createClass({
  mixins : [RouterMixin],
  getInitialState: function() {
  	if (!store.enabled) {
            alert('Local storage is not supported by your browser. Please disabled "Private Mode", or upgrade to a modern browser');
            return
        }
    return {data: []};
  },
  handle : function() {
    this.props.router.navigate("invader", {
      trigger : true
    });
  },
  loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url,
      success: function(data) {
        this.setState({data: data});
      }.bind(this)
    });
  },
  componentWillMount: function() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  render: function() {
  	var _ = this.state.data
    var className = "hide";

    if (this.props.router.current == "invader") {
      className = "show";
    }

	      //<slackomaticPanel />
    return (
      <div className={className}>
      	<videoController data={_}/>
	      <RemotePanel data={_}/>
	      <Playlist data={_.playlist} />
      </div>
    );
  }
});

/* ############# Docking components  ############# */

var InterfaceComponent = React.createClass({
        mixins : [RouterMixin],
        render : function() {
          var router = this.props.router;
          return (<div>
          		<Menu/>
              <YoutubeSearch router={router} />
              <UrlSearch router={router} />
              <Screeninvader url="/cgi-bin/get?/." pollInterval={800} router={router}/>
            </div>);}
});

React.renderComponent(
  <InterfaceComponent router={router} />, document.getElementById('playlist'));
});
