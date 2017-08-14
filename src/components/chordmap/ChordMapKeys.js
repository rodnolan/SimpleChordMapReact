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

	getInitialState: function() {
		return {
			keys: this.props.allKeys.reverse()
		};
	},

	render: function() {
		var keys = this.state.keys;
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

		/**
		 * The flat and sharp key names are stored in the data with the minus sign for flat 
		 * and the plus sign for sharp. This function removes those symbols for display purposes. 
		 * This is used in conjunction with the getAccidentalOnly() function to represent the 
		 * key name. 
		 * 
		 * This was done mainly to disambiguate the use of the letter 'b' (the name of a key 
		 * AND the symbol for the flat accidental) 
		 *  
		 * @param {array} names an array containing the key names; + means sharp and - means flat
		 * @param {number} index the index to operate on
		 */
		var getLetterOnly = function (names, index) {
			var key = names[index];
			return key.replace('+', '').replace('-', '');
		};

		/**
		 * The flat and sharp key names are stored in the data with the minus sign for flat 
		 * and the plus sign for sharp. This function extracts those symbols and converts 
		 * them to # for sharp and b for flat. This is used in conjunction with the 
		 * getAccidentalOnly() function. 
		 * 
		 * This was done mainly to disambiguate the use of the letter 'b' (the name of a key 
		 * AND the symbol for the flat accidental) 
		 *  
		 * @param {array} names an array containing the chord names with + for sharp and - for flat
		 * @param {number} index the index to operate on
		 */
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

		/**
		 * creates a row containing either one or two buttons
		 * one button is created for the natural keys
		 * two buttons are created for the sharp/flat keys
		 * 
		 * @param {array} key an array of either 1 or 2 elements 
		 * one, the name for the natural keys
		 * two, the names of the equivalent sharp/flat keys
		 */
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
				{keys.map(createKeyRowButtons, this)}
			</div>
		);
	}
});

module.exports = ChordMapKeys;
