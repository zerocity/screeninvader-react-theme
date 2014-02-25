/** @jsx React.DOM */
define(['react',
				'backbone',
				'jsx!components/videoController',
				'jsx!components/remotepanel',
				'jsx!components/youtubeSearch',
				'jsx!components/urlSearch',
				'jsx!components/items',
				'router'],
				function(React,Backbone,videoController,RemotePanel,searchComponent,urlSearch,MediaItem,router) {

/*
<DisplayPanel data = {_.display} />
<RadioPanel data = {_.radio} />
<AnimationPanel data = {_.animation} />
*/

/* ############# Others  #############

*/

var RouterMixin = {
  componentWillMount : function() {
    this.callback = (function() {
      this.forceUpdate();
    }).bind(this);
    this.props.router.on("route", this.callback);
  },
  componentWillUnmount : function() {
    this.props.router.off("route", this.callback);
  }
};

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

/* ############# Screeninvader  #############

*/

var Playlist = React.createClass({
  render: function() {
    var _ = this.props.data;
    if (typeof _ !== 'undefined') {
      var isPlaying = _.index;
      var mediaItems = _.items.map(function (item, index){
          var classPlaying = (index == isPlaying) ? 'isPlaying' : ''; // set isPlaying class to the current playing item
          return (<MediaItem
          	type={'playlist'}
            isPlaying={classPlaying}
            key={index}
            source={item.source}
            title={item.title} />);
      });
      return (<div className="playlist box" >{mediaItems}</div>);
    }else{
      return (<p>loading</p>);
    }
  }
});

var Screeninvader = React.createClass({
  mixins : [RouterMixin],
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
  getInitialState: function() {
    return {data: []};
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

    return (
      <div className={className}>
      	<videoController data={_}/>
	      <Playlist data={_.playlist} />
	      <RemotePanel data={_}/>
      </div>
    );
  }
});

/* ########### ROUTER ###########
TODO septate the router function in its own files
problem with require js. 'this' is not available in separate files etc ...
*/





/* ############# Docking components  #############

*/

var MenuUrl  = React.createClass({
	render : function() {
		return (<li className="menu">
			<span className="label label-green">
				<a href="#/urlSearch"> Url</a>
			</span></li>) }
});

var MenuSearch  = React.createClass({
	render : function() {
		return (<li className="menu">
			<span className="label label-green">
			<a href="#/search"> Search</a>
			</span></li>) }
});

var MenuPlaylist  = React.createClass({
	render : function() {
		return (<li className="menu">
			<span className="label label-green">
			<a href="#/playlist"> Playlist</a>
			</span></li>) }
});

var Menu  = React.createClass({
	render : function() {
		return (<div className="box">
			<ul className="menu">
				<MenuSearch/>
				<MenuUrl/>
				<MenuPlaylist/>
			</ul></div>)
	}
})

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
