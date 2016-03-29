"use strict";
var SmartCSS = require('smart-css');
var css = new SmartCSS();
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;


var ChordMapKeys = React.createClass({
	propTypes: {
		allKeys: React.PropTypes.array.isRequired
	},

	getDefaultProps: function () {
		return {
			allKeys: []
		};
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

		var getLetterOnly = function (names, index) {
			var key = names[index];
			return key.replace('+', '').replace('-', '');
		};
		var getAccidentalOnly = function (names, index) {
			var key = names[index];
			if (key.indexOf('+') > -1) {
				return '#';
			} else if (key.indexOf('-') > -1) {
				return 'b';
			} else {
				return '';
			}
		};

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
				
				keyButtons = <section>
					<button style={button} key={key.names[0]}>
						<Link style={button} to="chordmapForKey" params={{keyname: key.names[0]}}>
							{getLetterOnly(key.names, 0)}<sup>{getAccidentalOnly(key.names, 0)}</sup>
						</Link>
					</button>
					<br />
				</section>;

			} else if (key.names.length === 2) {

				keyButtons = <section>
					<button style={button} key={key.id}>
						<Link style={button} to="chordmapForKey" params={{keyname: key.names[0]}}>
							{getLetterOnly(key.names, 0)}<sup>{getAccidentalOnly(key.names, 0)}</sup>
						</Link>
					</button>
					&nbsp;
					<button style={button} key={key.id} key={key.names[1]}>
						<Link to="chordmapForKey" params={{keyname: key.names[1]}}>
							{getLetterOnly(key.names, 1)}<sup>{getAccidentalOnly(key.names, 1)}</sup>
						</Link>
					</button>
					<br />
				</section>;
			}

			return keyButtons;
		};

		return (
			<div style={keysWrapper}>
				{this.props.allKeys.map(createKeyRowButtons, this)}
			</div>
		);
	}
});

module.exports = ChordMapKeys;
