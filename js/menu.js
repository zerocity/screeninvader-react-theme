/** @jsx React.DOM */
define(['react',],
				function(React) {

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
			return (
				<div className="box">
					<ul className="menu">
						<MenuSearch/>
						<MenuUrl/>
						<MenuPlaylist/>
					</ul>
				</div>
				)
		}
	})

return Menu
});
