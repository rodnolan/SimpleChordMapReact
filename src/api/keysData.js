module.exports = {
	chromaticScale: 
	[
		{
			id: '0', 
			names: ['C']
		},	
		{
			id: '1', 
			names: ['C+', 'D-']
		},	
		{
			id: '2', 
			names: ['D']
		},	
		{
			id: '3', 
			names: ['D+', 'E-']
		},	
		{
			id: '4', 
			names: ['E']
		},	
		{
			id: '5', 
			names: ['F']
		},	
		{
			id: '6', 
			names: ['F+', 'G-']
		},	
		{
			id: '7', 
			names: ['G']
		},	
		{
			id: '8', 
			names: ['G+', 'A-']
		},	
		{
			id: '9', 
			names: ['A']
		},	
		{
			id: '10', 
			names: ['A+', 'B-']
		},	
		{
			id: '11', 
			names: ['B']
		}
	],
	chordsByKey: [

		{
			keyName: "C",
			chords: [
				{scaleDegree: 1, chord: {letter: "C", accidental: "", isMinor: false}, chordName: "C"},
				{scaleDegree: 2, chord: {letter: "D", accidental: "", isMinor: true}, chordName: "Dm"},
				{scaleDegree: 3, chord: {letter: "E", accidental: "", isMinor: true}, chordName: "Em"},
				{scaleDegree: 4, chord: {letter: "F", accidental: "", isMinor: false}, chordName: "F"},
				{scaleDegree: 5, chord: {letter: "G", accidental: "", isMinor: false}, chordName: "G"},
				{scaleDegree: 6, chord: {letter: "A", accidental: "", isMinor: true}, chordName: "Am"},
				{scaleDegree: 7, chord: {letter: "B", accidental: "", isMinor: false}, chordName: "Bdim"}
			]
		},
		{
			keyName: "C+",
			chords: [
				{scaleDegree: 1, chord: {letter: "C", accidental: "#", isMinor: false}, chordName: "C#"},
				{scaleDegree: 2, chord: {letter: "D", accidental: "#", isMinor: true}, chordName: "D#m"},
				{scaleDegree: 3, chord: {letter: "E", accidental: "#", isMinor: true}, chordName: "E#m"},
				{scaleDegree: 4, chord: {letter: "F", accidental: "#", isMinor: false}, chordName: "F#"},
				{scaleDegree: 5, chord: {letter: "G", accidental: "#", isMinor: false}, chordName: "G#"},
				{scaleDegree: 6, chord: {letter: "A", accidental: "#", isMinor: true}, chordName: "A#m"},
				{scaleDegree: 7, chord: {letter: "B", accidental: "#", isMinor: false}, chordName: "B#dim"}
			]
		},
		{
			keyName: "D-",
			chords: [
				{scaleDegree: 1, chord: {letter: "D", accidental: "b", isMinor: false}, chordName: "Db"},
				{scaleDegree: 2, chord: {letter: "E", accidental: "b", isMinor: true}, chordName: "Ebm"},
				{scaleDegree: 3, chord: {letter: "F", accidental: "", isMinor: true}, chordName: "Fm"},
				{scaleDegree: 4, chord: {letter: "G", accidental: "b", isMinor: false}, chordName: "Gb"},
				{scaleDegree: 5, chord: {letter: "A", accidental: "b", isMinor: false}, chordName: "Ab"},
				{scaleDegree: 6, chord: {letter: "B", accidental: "b", isMinor: true}, chordName: "Bbm"},
				{scaleDegree: 7, chord: {letter: "C", accidental: "", isMinor: false}, chordName: "Cdim"}
			]
		},
		{
			keyName: "D",
			chords: [
				{scaleDegree: 1, chord: {letter: "D", accidental: "", isMinor: false}, chordName: "D"},
				{scaleDegree: 2, chord: {letter: "E", accidental: "", isMinor: true}, chordName: "Em"},
				{scaleDegree: 3, chord: {letter: "F", accidental: "#", isMinor: true}, chordName: "F#m"},
				{scaleDegree: 4, chord: {letter: "G", accidental: "", isMinor: false}, chordName: "G"},
				{scaleDegree: 5, chord: {letter: "A", accidental: "", isMinor: false}, chordName: "A"},
				{scaleDegree: 6, chord: {letter: "B", accidental: "", isMinor: true}, chordName: "Bm"},
				{scaleDegree: 7, chord: {letter: "C", accidental: "#", isMinor: false}, chordName: "C#dim"}
			]
		},
		{
			keyName: "D+",
			chords: [
				{scaleDegree: 1, chord: {letter: "D", accidental: "#", isMinor: false}, chordName: "D#"},
				{scaleDegree: 2, chord: {letter: "E", accidental: "#", isMinor: true}, chordName: "E#m"},
				{scaleDegree: 3, chord: {letter: "F", accidental: "##", isMinor: true}, chordName: "F##m"},
				{scaleDegree: 4, chord: {letter: "G", accidental: "#", isMinor: false}, chordName: "G#"},
				{scaleDegree: 5, chord: {letter: "A", accidental: "#", isMinor: false}, chordName: "A#"},
				{scaleDegree: 6, chord: {letter: "B", accidental: "#", isMinor: true}, chordName: "B#m"},
				{scaleDegree: 7, chord: {letter: "C", accidental: "#", isMinor: false}, chordName: "C#dim"}
			]
		},
		{
			keyName: "E-",
			chords: [
				{scaleDegree: 1, chord: {letter: "E", accidental: "b", isMinor: false}, chordName: "Eb"},
				{scaleDegree: 2, chord: {letter: "F", accidental: "", isMinor: true}, chordName: "Fm"},
				{scaleDegree: 3, chord: {letter: "G", accidental: "", isMinor: true}, chordName: "Gm"},
				{scaleDegree: 4, chord: {letter: "A", accidental: "b", isMinor: false}, chordName: "Ab"},
				{scaleDegree: 5, chord: {letter: "B", accidental: "b", isMinor: false}, chordName: "Bb"},
				{scaleDegree: 6, chord: {letter: "C", accidental: "", isMinor: true}, chordName: "Cm"},
				{scaleDegree: 7, chord: {letter: "D", accidental: "", isMinor: false}, chordName: "Ddim"}
			]
		},
		{
			keyName: "E",
			chords: [
				{scaleDegree: 1, chord: {letter: "E", accidental: "", isMinor: false}, chordName: "E"},
				{scaleDegree: 2, chord: {letter: "F", accidental: "#", isMinor: true}, chordName: "F#m"},
				{scaleDegree: 3, chord: {letter: "G", accidental: "#", isMinor: true}, chordName: "G#m"},
				{scaleDegree: 4, chord: {letter: "A", accidental: "", isMinor: false}, chordName: "A"},
				{scaleDegree: 5, chord: {letter: "B", accidental: "", isMinor: false}, chordName: "B"},
				{scaleDegree: 6, chord: {letter: "C", accidental: "#", isMinor: true}, chordName: "C#m"},
				{scaleDegree: 7, chord: {letter: "D", accidental: "#", isMinor: false}, chordName: "D#dim"}
			]
		},
		{
			keyName: "F",
			chords: [
				{scaleDegree: 1, chord: {letter: "F", accidental: "", isMinor: false}, chordName: "F"},
				{scaleDegree: 2, chord: {letter: "G", accidental: "", isMinor: true}, chordName: "Gm"},
				{scaleDegree: 3, chord: {letter: "A", accidental: "", isMinor: true}, chordName: "Am"},
				{scaleDegree: 4, chord: {letter: "B", accidental: "b", isMinor: false}, chordName: "Bb"},
				{scaleDegree: 5, chord: {letter: "C", accidental: "", isMinor: false}, chordName: "C"},
				{scaleDegree: 6, chord: {letter: "D", accidental: "", isMinor: true}, chordName: "Dm"},
				{scaleDegree: 7, chord: {letter: "E", accidental: "", isMinor: false}, chordName: "Edim"}
			]
		},
		{
			keyName: "F+",
			chords: [
				{scaleDegree: 1, chord: {letter: "F", accidental: "#", isMinor: false}, chordName: "F#"},
				{scaleDegree: 2, chord: {letter: "G", accidental: "#", isMinor: true}, chordName: "G#m"},
				{scaleDegree: 3, chord: {letter: "A", accidental: "#", isMinor: true}, chordName: "A#m"},
				{scaleDegree: 4, chord: {letter: "B", accidental: "", isMinor: false}, chordName: "B"},
				{scaleDegree: 5, chord: {letter: "C", accidental: "#", isMinor: false}, chordName: "C#"},
				{scaleDegree: 6, chord: {letter: "D", accidental: "#", isMinor: true}, chordName: "D#m"},
				{scaleDegree: 7, chord: {letter: "E", accidental: "#", isMinor: false}, chordName: "E#dim"}
			]
		},
		{
			keyName: "G-",
			chords: [
				{scaleDegree: 1, chord: {letter: "G", accidental: "b", isMinor: false}, chordName: "Gb"},
				{scaleDegree: 2, chord: {letter: "A", accidental: "b", isMinor: true}, chordName: "Abm"},
				{scaleDegree: 3, chord: {letter: "B", accidental: "b", isMinor: true}, chordName: "Bbm"},
				{scaleDegree: 4, chord: {letter: "C", accidental: "b", isMinor: false}, chordName: "Cb"},
				{scaleDegree: 5, chord: {letter: "D", accidental: "b", isMinor: false}, chordName: "Db"},
				{scaleDegree: 6, chord: {letter: "E", accidental: "b", isMinor: true}, chordName: "Ebm"},
				{scaleDegree: 7, chord: {letter: "F", accidental: "", isMinor: false}, chordName: "Fdim"}
			]
		},
		{
			keyName: "G",
			chords: [
				{scaleDegree: 1, chord: {letter: "G", accidental: "", isMinor: false}, chordName: "G"},
				{scaleDegree: 2, chord: {letter: "A", accidental: "", isMinor: true}, chordName: "Am"},
				{scaleDegree: 3, chord: {letter: "B", accidental: "", isMinor: true}, chordName: "Bm"},
				{scaleDegree: 4, chord: {letter: "C", accidental: "", isMinor: false}, chordName: "C"},
				{scaleDegree: 5, chord: {letter: "D", accidental: "", isMinor: false}, chordName: "D"},
				{scaleDegree: 6, chord: {letter: "E", accidental: "", isMinor: true}, chordName: "Em"},
				{scaleDegree: 7, chord: {letter: "F", accidental: "#", isMinor: false}, chordName: "F#dim"}
			]
		},
		{
			keyName: "G+",
			chords: [
				{scaleDegree: 1, chord: {letter: "G", accidental: "#", isMinor: false}, chordName: "G#"},
				{scaleDegree: 2, chord: {letter: "A", accidental: "#", isMinor: true}, chordName: "A#m"},
				{scaleDegree: 3, chord: {letter: "B", accidental: "#", isMinor: true}, chordName: "B#m"},
				{scaleDegree: 4, chord: {letter: "C", accidental: "#", isMinor: false}, chordName: "C#"},
				{scaleDegree: 5, chord: {letter: "D", accidental: "#", isMinor: false}, chordName: "D#"},
				{scaleDegree: 6, chord: {letter: "E", accidental: "#", isMinor: true}, chordName: "E#m"},
				{scaleDegree: 7, chord: {letter: "F", accidental: "##", isMinor: false}, chordName: "F##dim"}
			]
		},
		{
			keyName: "A-",
			chords: [
				{scaleDegree: 1, chord: {letter: "A", accidental: "b", isMinor: false}, chordName: "Ab"},
				{scaleDegree: 2, chord: {letter: "B", accidental: "b", isMinor: true}, chordName: "Bbm"},
				{scaleDegree: 3, chord: {letter: "C", accidental: "", isMinor: true}, chordName: "Cm"},
				{scaleDegree: 4, chord: {letter: "D", accidental: "b", isMinor: false}, chordName: "Db"},
				{scaleDegree: 5, chord: {letter: "E", accidental: "b", isMinor: false}, chordName: "Eb"},
				{scaleDegree: 6, chord: {letter: "F", accidental: "", isMinor: true}, chordName: "Fm"},
				{scaleDegree: 7, chord: {letter: "G", accidental: "", isMinor: false}, chordName: "Gdim"}
			]
		},
		{
			keyName: "A",
			chords: [
				{scaleDegree: 1, chord: {letter: "A", accidental: "", isMinor: false}, chordName: "A"},
				{scaleDegree: 2, chord: {letter: "B", accidental: "", isMinor: true}, chordName: "Bm"},
				{scaleDegree: 3, chord: {letter: "C", accidental: "#", isMinor: true}, chordName: "C#m"},
				{scaleDegree: 4, chord: {letter: "D", accidental: "", isMinor: false}, chordName: "D"},
				{scaleDegree: 5, chord: {letter: "E", accidental: "", isMinor: false}, chordName: "E"},
				{scaleDegree: 6, chord: {letter: "F", accidental: "#", isMinor: true}, chordName: "F#m"},
				{scaleDegree: 7, chord: {letter: "G", accidental: "#", isMinor: false}, chordName: "G#dim"}
			]
		},
		{
			keyName: "A+",
			chords: [
				{scaleDegree: 1, chord: {letter: "A", accidental: "#", isMinor: false}, chordName: "A#"},
				{scaleDegree: 2, chord: {letter: "B", accidental: "#", isMinor: true}, chordName: "B#m"},
				{scaleDegree: 3, chord: {letter: "C", accidental: "##", isMinor: true}, chordName: "C##m"},
				{scaleDegree: 4, chord: {letter: "D", accidental: "#", isMinor: false}, chordName: "D#"},
				{scaleDegree: 5, chord: {letter: "E", accidental: "#", isMinor: false}, chordName: "E#"},
				{scaleDegree: 6, chord: {letter: "F", accidental: "##", isMinor: true}, chordName: "F##m"},
				{scaleDegree: 7, chord: {letter: "G", accidental: "##", isMinor: false}, chordName: "G##dim"}
			]
		},
		{
			keyName: "B-",
			chords: [
				{scaleDegree: 1, chord: {letter: "B", accidental: "b", isMinor: false}, chordName: "Bb"},
				{scaleDegree: 2, chord: {letter: "C", accidental: "", isMinor: true}, chordName: "Cm"},
				{scaleDegree: 3, chord: {letter: "D", accidental: "", isMinor: true}, chordName: "Dm"},
				{scaleDegree: 4, chord: {letter: "E", accidental: "b", isMinor: false}, chordName: "Eb"},
				{scaleDegree: 5, chord: {letter: "F", accidental: "", isMinor: false}, chordName: "F"},
				{scaleDegree: 6, chord: {letter: "G", accidental: "", isMinor: true}, chordName: "Gm"},
				{scaleDegree: 7, chord: {letter: "A", accidental: "", isMinor: false}, chordName: "Adim"}
			]
		},
		{
			keyName: "B",
			chords: [
				{scaleDegree: 1, chord: {letter: "B", accidental: "", isMinor: false}, chordName: "B"},
				{scaleDegree: 2, chord: {letter: "C", accidental: "#", isMinor: true}, chordName: "C#m"},
				{scaleDegree: 3, chord: {letter: "D", accidental: "#", isMinor: true}, chordName: "D#m"},
				{scaleDegree: 4, chord: {letter: "E", accidental: "", isMinor: false}, chordName: "E"},
				{scaleDegree: 5, chord: {letter: "F", accidental: "#", isMinor: false}, chordName: "F#"},
				{scaleDegree: 6, chord: {letter: "G", accidental: "#", isMinor: true}, chordName: "G#m"},
				{scaleDegree: 7, chord: {letter: "A", accidental: "#", isMinor: false}, chordName: "A#dim"}
			]
		}
	]
};
