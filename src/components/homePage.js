"use strict";

var React = require('react');
var ChordMap = require('./chordmap/chordMap');
var HomePage = React.createClass({

	render: function() {
		return (
			// JSX can't use class="" because that's a reserved word... the compiled html will be class="" though
			<div>
				<div className="jumbotron"> 
					<h2>Simple Chord Map</h2>
					<p>visualize chord progressions that work</p>
				</div>
				<ChordMap selectedKey="C" />
			</div>
		);
	}
});

module.exports = HomePage;
