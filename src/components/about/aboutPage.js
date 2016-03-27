"use strict";

var React = require('react');

var About = React.createClass({

	render: function() {
		return (
			<div>
				<h1>About</h1>
				<p>This app was built using:</p>
				<ul>
					<li>React</li>
					<li>React Router</li>
					<li>Flux</li>
					<li>Node</li>
					<li>Gulp</li>
					<li>Browserify</li>
					<li>Bootstrap</li>
				</ul>
				<p>Inspired by the work of <a href="http://mugglinworks.com/chordmaps">Steve Mugglin</a></p>
			</div>
		);
	}
});

module.exports = About;
