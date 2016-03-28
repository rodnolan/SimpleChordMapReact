"use strict";
var SmartCSS = require('smart-css');
var css = new SmartCSS();
var React = require('react');
var KeysApi = require('../../api/keysApi');


var ChordMapKeys = React.createClass({

	getInitialState: function() {
		return {
			allKeys: []
		};
	},

	componentWillMount: function() {
		this.setState({ allKeys: KeysApi.getAllKeys() });
	},

	render: function() {

		var keysWrapper = {
			float: 'left',
			textAlign: 'center',
			padding: '20px'
		};
		var button = {
			fontSize: '18pt',
			marginTop: '5px',
			marginBottom: '5px',
			paddingRight: '10px',
			paddingLeft: '10px',
			fontWeight: 'bold',
			color: 'navy'
		};

		SmartCSS.injectStyles();

		var createKeyRow = function(theKey) {
			return (
				<tr key={theKey.id}>
					<td>{theKey.id}</td>
					<td>{theKey.keyNames[0]}</td>
				</tr>
			);
		};

		var createKeyRowButtons = function(key) {
			var keyButtons;
			if (key.names.length === 1) {
				
				keyButtons = <section key={key.id}>
					<a href={"/#chordMapPage/" + key.names[0]}>
						<button style={button}>
							{key.names[0]}
						</button>
					</a><br />
				</section>;

			} else if (key.names.length === 2) {

				keyButtons = <section key={key.id}>
					<a href={"/#chordMapPage/" + key.names[0]}>
						<button style={button}>
							{key.names[0]}
						</button>
					</a>
					<a href={"/#chordMapPage/" + key.names[1]}>
						<button style={button}>
							{key.names[1]}
						</button>
					</a><br />
				</section>;
			}

			return keyButtons;
		};

		return (
			<div style={keysWrapper}>
				{this.state.allKeys.map(createKeyRowButtons, this)}
			</div>
		);
	}
});

module.exports = ChordMapKeys;
