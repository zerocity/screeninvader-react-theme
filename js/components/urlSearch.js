/** @jsx React.DOM */

define(['react',
	'jsx!components/items'
	], function(React,MediaItem) {

var UrlSearch = React.createClass({
  clickHandler : function() {
    var query =  $('#urlSearch').val();
    console.log(this.props.router);
		window.location.href ="#playlist"

  },
  render: function () {
    return (
        <div className="input-group">
          <input type="text" className="form-control" id="urlSearch"></input>
          <span className="input-group-btn">
          <button className="btn btn-default" onClick={this.clickHandler} type="button" id="btnUrlSearch">Go!</button>
          </span>
      </div>);
  }
});

return UrlSearch

});
