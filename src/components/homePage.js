"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var HomePage = React.createClass({
	

	render: function() {
		return (
			// JSX can't use class="" because that's a reserved word... the compiled html will be class="" though
			<div>
				<div className="jumbotron"> 
					<h2>Simple Chord Map</h2>
					<p>a simple tool for visualizing chord progressions that work</p>
					<Link to="about" className="btn- btn-primary btn-lg">Learn More</Link>
				</div>
			</div>
		);
	}
});

module.exports = HomePage;
