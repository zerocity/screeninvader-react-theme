/** @jsx React.DOM */
define(['react',
				'backbone',
				'jsx!components/videoController',
				'jsx!components/remotepanel',
				'jsx!components/youtubeSearch',
				'jsx!components/urlSearch',
				'jsx!components/items',
				'jsx!components/viewSwitcher',
				'store',
				'router'],
				function(React,
									Backbone,
									videoController,
									RemotePanel,
									searchComponent,
									urlSearch,
									MediaItem,
									viewSwitcher,
									store,
									router){

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
      return (
		      <div className="box" >
		      	<div className="playlist"> {mediaItems} </div>
	      	</div>
      	);
    }else{
      return (<p>loading</p>);
    }
  }
});

var Screeninvader = React.createClass({
  mixins : [RouterMixin],
  getInitialState: function() {
  	if (!store.enabled) {
            alert('Local storage is not supported by your browser. Please disabled "Private Mode", or upgrade to a modern browser');
            return
        }
    // Set init local storage
    if (typeof store.get('preference') === 'undefined') {
    	console.log('init personal Preferences');
	    store.set('preference', {
	     viewType: '0',
	     name: 'anno'
	   	});
    }


   // Set state for react
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

    return (
      <div className={className}>
      	<videoController data={_}/>
      	<viewSwitcher />
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
		return (
			<li className="menu">
					<a href="#/urlSearch" className="navbar-link">
						<div className="glyphicon glyphicon-link"> </div>
					</a>
			</li>)}
});

var MenuSearch  = React.createClass({
	render : function() {
		return (
			<li className="menu">
					<a href="#/search">
						<div className="glyphicon glyphicon-search"></div>
					</a>
			</li>)}
});

var MenuPlaylist  = React.createClass({
	render : function() {
		return (
			<li className="menu">
					<a href="#/playlist">
						<div className="glyphicon glyphicon-th-list"> </div> Playlist
					</a>
			</li>)}
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
              <Screeninvader url="/cgi-bin/get?/." pollInterval={500} router={router}/>
            </div>);}
});

React.renderComponent(
  <InterfaceComponent router={router} />, document.getElementById('playlist'));
});
