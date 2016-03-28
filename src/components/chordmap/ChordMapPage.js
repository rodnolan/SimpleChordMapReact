"use strict";

var React = require('react');
var ChordMap = require('./chordMap');
var ChordMapKeys = require('./chordMapKeys');

var ChordMapPage = React.createClass({

	render: function() {
		return (
			<section>
				<ChordMapKeys />
				<ChordMap />
			</section>
		);
	}
});

module.exports = ChordMapPage;