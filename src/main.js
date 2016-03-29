"use strict";

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

Router.run(routes, function(Handler){
	React.render(<Handler/>, document.getElementById('app'));
});


/*
$ = jQuery = require('jquery');
var React = require('react');
var HomePage = require('./components/homePage');
var About = require('./components/about/aboutPage');
var ChordMapPage = require('./components/chordmap/chordMapPage');
var Header = require('./components/common/header');

(function(win){
	"use strict";

	var App = React.createClass({
		render: function () {
			var Child;
			switch (this.props.route) {
				case 'chordMapPage':
					Child = ChordMapPage;
					break;
				case 'about':
					Child = About;
					break;
				default: 
					Child = HomePage;
					break;
			}
			return (
				<div>
					<Header />
					<Child />
				</div>
			);

		}
	});

	function render() {
		var route = win.location.hash.substr(1);
		React.render(<App route={route} />, document.getElementById('app'));	
	}
	win.addEventListener('hashchange', render);
	render();

})(window);

//React.render(<HomePage />, document.getElementById('app'));
*/