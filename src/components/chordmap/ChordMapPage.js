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
		// invoked only once immediately before initial render
		this.setState({ allKeys: KeysApi.getAllKeys() });
		this.setState({ chords: KeysApi.getChordsForKeyName("C") });
	},
	componentDidMount: function() {
		// invoked only once immediately after initial render
		// and after the same method on all children
	},

	componentWillReceiveProps: function(nextProps) {
		// invoked when a component is receiving new props; not called for initial render
		// call setState() here in response to prop changes

		var keyname = nextProps.params.keyname;
		if (keyname) {
			console.log("retrieving chords for: " + keyname);
			this.setState({ chords: KeysApi.getChordsForKeyName(keyname) });
		}
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