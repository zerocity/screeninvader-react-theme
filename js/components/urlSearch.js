/** @jsx React.DOM */

define(['react',
	'jsx!components/items',
	], function(React,MediaItem) {

var UrlSearch = React.createClass({
  clickHandler : function() {
    var query =  $('#urlSearch').val();
    $.get('/cgi-bin/show?'+query);
		//window.location.href ="#playlist"
  },
  render: function () {
    return (
        <div className="input-group">
          <input type="text" className="form-control" id="urlSearch"></input>
          <span className="input-group-btn">
          <button className="btn btn-default" onClick={this.clickHandler} type="button">Go!</button>
          </span>
      </div>);
  }
});

return UrlSearch

});
