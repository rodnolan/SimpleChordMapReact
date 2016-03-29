"use strict";

var React = require('react');
var ChordMap = require('./chordMap');
var ChordMapKeys = require('./chordMapKeys');

var KeysApi = require('../../api/keysApi');


var ChordMapPage = React.createClass({

	getInitialState: function() {
		return {
			allKeys: [],
			chords: []
		};
	},

	componentWillMount: function() {	
		this.setState({ allKeys: KeysApi.getAllKeys() });	
		this.setState({ chords: KeysApi.getChordsForKeyName("C") });
	},

	render: function() {
		return (
			<section>
				<ChordMapKeys allKeys={this.state.allKeys} />
				<ChordMap chords={this.state.chords} />
			</section>
		);
	}
});

module.exports = ChordMapPage;