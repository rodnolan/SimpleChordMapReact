"use strict";

var React = require('react');
var ChordMap = require('./chordMap');
var ChordMapKeys = require('./chordMapKeys');

var KeysApi = require('../../api/keysApi');


var ChordMapPage = React.createClass({

	getInitialState: function() {
		return {
			allKeys: [],
			chordsForSelectedKey: []
		};
	},

	componentWillMount: function() {	
		this.setState({ allKeys: KeysApi.getAllKeys() });	
		this.setState({ chordsForSelectedKey: KeysApi.getChordsForKeyName("C") });
	},

	render: function() {
		return (
			<section>
				<ChordMapKeys allKeys={this.state.allKeys} />
				<ChordMap chords={this.state.chordsForSelectedKey} />
			</section>
		);
	}
});

module.exports = ChordMapPage;