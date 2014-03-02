/** @jsx React.DOM */
define(['react'],
				function(React) {

var ListActionsMixin = {
  handleClick: function() {
    $.get('/cgi-bin/playlist_jump?'+this.props.key);
  },
  addItem:function(){
    $.get('/cgi-bin/show?'+this.props.source)
  },
  removeItem:function(){
    $.ajax({
      url:'/cgi-bin/playlist_remove?'+this.props.key,
      success: function(res) {
        console.log(res);
      }
    });
  },
  toggleButton:function(){
    $('#'+this.props.key+'_toggleButton').toggleClass('hide').focus();
  }
};

return ListActionsMixin
});
