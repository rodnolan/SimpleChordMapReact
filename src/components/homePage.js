"use strict";

var React = require('react');

var HomePage = React.createClass({

	render: function() {
		return (
			// JSX can't use class="" because that's a reserved word... the compiled html will be class="" though
			<div className="jumbotron"> 
				<h1>Simple Chord Map</h1>
				<p>visualize chord progressions that work</p>
			</div>
		);
	}
});

module.exports = HomePage;
