"use strict";
var SmartCSS = require('smart-css');
var css = new SmartCSS();
var React = require('react');

var ChordMap = React.createClass({
	propTypes: {
		chords: React.PropTypes.array.isRequired
	},

	componentWillMount: function () {
		var allStyles = css.getStyleClasses();
		if (allStyles.length < 1) {
			css.setClass('.chordLetter', { 
				position: 'absolute', 
				fontWeight: 'bold', 
				fontFamily: 'monospace'
			}, 
			{className: 'chordLetter'});

			css.setClass('.rootChord', {
				color: 'DarkBlue', 
				fontSize: '100px'
			}, {className: 'rootChord'});
			
			css.setClass('.majorChord', {
				color: 'blue',
				fontSize: '64px'
			}, {className: 'majorChord'});
			
			css.setClass('.minorChord', {
				color: 'brown',
				fontSize: '36px'
			}, {className: 'minorChord'});

			css.setClass('.col0', { left: '30px' }, {className: 'col0'});
			css.setClass('.col1', { left: '45px' }, {className: 'col1'});
			css.setClass('.col2', { left: '170px' }, {className: 'col2'});

			css.setClass('.row1', { top: '30px' }, {className: 'row1'});
			css.setClass('.row2', { top: '90px' }, {className: 'row2'});
			css.setClass('.row3', { top: '160px' }, {className: 'row3'});
			css.setClass('.row4', { top: '225px' }, {className: 'row4'});
			css.setClass('.row5', { top: '265px' }, {className: 'row5'});
			css.setClass('.row6', { top: '350px' }, {className: 'row6'});
			css.setClass('.row7', { top: '390px' }, {className: 'row7'});
			css.setClass('.row8', { top: '520px' }, {className: 'row8'});
			
			SmartCSS.injectStyles();
		}
	},

	getAccidental: function (chord) {
		var accidentalMarkup = null;
		if (chord.accidental !== '') {
			accidentalMarkup = <sup>{chord.accidental}</sup>;
		}
		return accidentalMarkup;
	},

	getMinor: function (chord) {
		var minorMarkup = null;
		if (chord.isMinor) {
			minorMarkup = 'm';
		}
		return minorMarkup;
	},

	render: function() {
		var chords = this.props.chords;
		var mapWrapper = {
			position: 'relative',
			float: 'left',
			backgroundImage: 'url("./images/SimpleChordMapBackground.png")',
			height: 668,
			width: 281
		};
		return (
			<div>
				<div style={mapWrapper}>


					<div id="chord_two_1"
						className={css.getClasses({
							chordLetter: true,
							col1: true,
							row1: true,
							minorChord: true
						})}>
					{chords[1].chord.letter}
					{this.getAccidental(chords[1].chord)}
					{this.getMinor(chords[1].chord)}
					</div>
					

					<div id="chord_five_1"
						className={css.getClasses({
							chordLetter: true,
							col2: true,
							row2: true,
							majorChord: true
						})}>
					{chords[4].chord.letter}
					{this.getAccidental(chords[4].chord)}
					{this.getMinor(chords[4].chord)}
					</div>
					

					<div id="chord_three"
						className={css.getClasses({
							chordLetter: true,
							col1: true,
							row3: true,
							minorChord: true
						})}>
					{chords[2].chord.letter}
					{this.getAccidental(chords[2].chord)}
					{this.getMinor(chords[2].chord)}
					</div>
					

					<div id="chord_six"
						className={css.getClasses({
							chordLetter: true,
							col2: true,
							row4: true,
							minorChord: true
						})}>
					{chords[5].chord.letter}
					{this.getAccidental(chords[5].chord)}
					{this.getMinor(chords[5].chord)}
					</div>


					<div id="chord_four"
						className={css.getClasses({
							chordLetter: true,
							col1: true,
							row5: true,
							majorChord: true
						})}>
					{chords[3].chord.letter}
					{this.getAccidental(chords[3].chord)}
					{this.getMinor(chords[3].chord)}
					</div>


					<div id="chord_two_2"
						className={css.getClasses({
							chordLetter: true,
							col2: true,
							row6: true,
							minorChord: true
						})}>
					{chords[1].chord.letter}
					{this.getAccidental(chords[1].chord)}
					{this.getMinor(chords[1].chord)}
					</div>


					<div id="chord_five_2"
						className={css.getClasses({
							chordLetter: true,
							col1: true,
							row7: true,
							majorChord: true
						})}>
					{chords[4].chord.letter}
					{this.getAccidental(chords[4].chord)}
					{this.getMinor(chords[4].chord)}
					</div>
					

					<div id="chord_root"
						className={css.getClasses({
							chordLetter: true, 
							col0: true, 
							row8: true,
							rootChord: true
						})}>
					{chords[0].chord.letter}
					{this.getAccidental(chords[0].chord)}
					{this.getMinor(chords[0].chord)}
					</div>


				</div>
			</div>
		);
	}
});

module.exports = ChordMap;