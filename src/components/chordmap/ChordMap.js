"use strict";
var SmartCSS = require('smart-css');
var css = new SmartCSS();
var React = require('react');

var ChordMap = React.createClass({
	propTypes: {
		chords: React.PropTypes.arrayOf(
			React.PropTypes.object(
				{
					scaleDegree: React.PropTypes.number,
					chordName: React.PropTypes.string
				}
			)
		).isRequired
	},

	getDefaultProps: function () {
		return {
			chords: []
		};
	},

	componentWillMount: function () {

		css.setClass('.chordLetter', { 
			position: 'absolute', 
			fontWeight: 'bold', 
			fontFamily: 'monospace'
		}, 
		{className: 'chordLetter'});

		css.setClass('.rootChord', {
			color: 'DarkBlue', 
			fontSize: '124px'
		}, {className: 'rootChord'});
		
		css.setClass('.majorChord', {
			color: 'blue',
			fontSize: '72px'
		}, {className: 'majorChord'});
		
		css.setClass('.minorChord', {
			color: 'brown',
			fontSize: '48px'
		}, {className: 'minorChord'});

		css.setClass('.col1', { left: '50px' }, {className: 'col1'});
		css.setClass('.col2', { left: '175px' }, {className: 'col2'});

		css.setClass('.row1', { top: '30px' }, {className: 'row1'});
		css.setClass('.row2', { top: '90px' }, {className: 'row2'});
		css.setClass('.row3', { top: '165px' }, {className: 'row3'});
		css.setClass('.row4', { top: '225px' }, {className: 'row4'});
		css.setClass('.row5', { top: '265px' }, {className: 'row5'});
		css.setClass('.row6', { top: '350px' }, {className: 'row6'});
		css.setClass('.row7', { top: '400px' }, {className: 'row7'});
		css.setClass('.row8', { top: '500px' }, {className: 'row8'});
		
		SmartCSS.injectStyles();
	},

	render: function() {
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
					{this.props.chords[1].chordName}
					</div>
					

					<div id="chord_five_1"
						className={css.getClasses({
							chordLetter: true,
							col2: true,
							row2: true,
							majorChord: true
						})}>
					{this.props.chords[4].chordName}
					</div>
					

					<div id="chord_three"
						className={css.getClasses({
							chordLetter: true,
							col1: true,
							row3: true,
							minorChord: true
						})}>
					{this.props.chords[2].chordName}
					</div>
					

					<div id="chord_six"
						className={css.getClasses({
							chordLetter: true,
							col2: true,
							row4: true,
							minorChord: true
						})}>
					{this.props.chords[5].chordName}
					</div>


					<div id="chord_four"
						className={css.getClasses({
							chordLetter: true,
							col1: true,
							row5: true,
							majorChord: true
						})}>
					{this.props.chords[3].chordName}
					</div>


					<div id="chord_two_2"
						className={css.getClasses({
							chordLetter: true,
							col2: true,
							row6: true,
							minorChord: true
						})}>
					{this.props.chords[1].chordName}
					</div>


					<div id="chord_five_2"
						className={css.getClasses({
							chordLetter: true,
							col1: true,
							row7: true,
							majorChord: true
						})}>
					{this.props.chords[4].chordName}
					</div>
					

					<div id="chord_root"
						className={css.getClasses({
							chordLetter: true, 
							col1: true, 
							row8: true,
							rootChord: true
						})}>
					{this.props.chords[0].chordName}
					</div>

				</div>
			</div>
		);
	}
});

module.exports = ChordMap;