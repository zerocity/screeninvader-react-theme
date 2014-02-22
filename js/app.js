/** @jsx React.DOM */
define(['react',
				'backbone',
				'jsx!components/remotepanel',
				'jsx!components/youtubeSearch',
				'jsx!components/urlSearch',
				'jsx!components/items'],
				function(React,Backbone,RemotePanel,searchComponent,urlSearch,MediaItem) {


/*
<DisplayPanel data = {_.display} />
<RadioPanel data = {_.radio} />
<AnimationPanel data = {_.animation} />
*/

/* ############# Others  #############

*/

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
          var classPlaying = (index == isPlaying) ? 'isPlaying' : '';
          return (<MediaItem
          	type={'playlist'}
            isPlaying={classPlaying}
            key={index}
            source={item.source}
            title={item.title} />);
      });
      return (<div className="video padding-top padding-bottom padding-right" >{mediaItems}</div>);
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
	      <Playlist data={_.playlist} />
	      <RemotePanel data={_}/>
      </div>
    );
  }
});

/* ########### ROUTER ###########

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

var Router = Backbone.Router.extend({

  routes : {
  	""		: "invader",
    "search" : "youtubesearch",
    "urlSearch":"urlSearch",
    "playlist" : "invader"
  },

  invader : function() {
    this.current = "invader";
  },

  youtubesearch : function() {
    this.current = "youtubesearch";
  },

  urlSearch : function() {
    this.current = "urlSearch";
  }
});
var router = new Router();

Backbone.history.start();



/* ############# Docking components  #############

*/

var InterfaceComponent = React.createClass({
        mixins : [RouterMixin],
        render : function() {
          var router = this.props.router;
          return (<div>
              <YoutubeSearch router={router} />
              <UrlSearch router={router} />
              <Screeninvader
              url="/cgi-bin/get?/."
              pollInterval={5000} router={router}/>
            </div>);}
});

React.renderComponent(
  <InterfaceComponent router={router} />,
  document.getElementById('playlist')
);
});
